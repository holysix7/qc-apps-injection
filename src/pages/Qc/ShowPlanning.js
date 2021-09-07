import {Image, View, ScrollView, ActivityIndicator, RefreshControl} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import checklist from '../../assets/check.png';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import { Container, Text, Button } from 'native-base';
import moment from 'moment';
import styles from '../../components/styles/Styling';
import app_version from '../app_version/index';

const ShowPlanning = ({route, navigation}) => {
  const {machine_id, sys_plant_id, machine_number, machine_name} = route.params
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([])
	useEffect(() => {
		products()
	}, [])
  var today = moment()
							.format('YYYY-MM-DD')
	var yesterday = moment()
									.subtract(1, 'days')
									.format('YYYY-MM-DD')
  const products = async () => {
    const token = await AsyncStorage.getItem("key")
    const headers = {
      'Authorization': token
    }
    const params = {
      tbl: 'daily_inspection',
      kind: 'get_planning',
      sys_plant_id: sys_plant_id,
      machine_id: machine_id,
      app_version: app_version
    }
    // console.log(params)
    axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
    .then(response => {
      setData(response.data.data)
      setRefreshing(false)
      setLoading(true)
      console.log("Products List Data: ", response.data.status, response.data.message)
    })
    .catch(error => console.log(error))
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    products();
  }, []);

// abcd
  const loopFeature = () => {
		var oke = []
		var i
    if(data != null){
      var planned = data.product_list
      if(planned.length > 0){
        planned.map((element, key) => {
          const idPart   = element.product_part_id
          const PIALogic = idPart.includes('PI')
          const PBALogic = idPart.includes('PB')
          // console.log(PBALogic)
          const PSALogic = idPart.includes('PS')
          if(PIALogic == true && PSALogic == false || PBALogic == true ){
            oke.push(
              <Button key={key} style={styles.listProductPlanning} onPress={() => navigation.navigate('ListMasspro', {
                machine_id: machine_id,
                sys_plant_id: sys_plant_id,
                machine_name: machine_name,
                machine_number: machine_number,
                today: today,
                yesterday: yesterday,
                product_id: element.product_id,
                product_name: element.product_name,
                product_part_id: element.product_part_id,
                product_customer_pn: element.product_customer_pn,
                product_model: element.product_model
              })}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text style={{fontWeight: 'bold'}}>{element.product_name}</Text> 
                    <View style={{flexDirection: 'row'}}>
                      <View style={{width: "50%", flexDirection: 'column'}}>
                        <Text style={{fontWeight: 'bold'}}>{element.product_customer_pn}</Text> 
                      </View>
                      <View style={{width: "50%", flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{element.product_model}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Button>
            )
          }else{
            oke.push(
              <Button key={key} style={styles.listProductPlanning} onPress={() => alert("Product 2nd Process Tidak Bisa Proses Masspro, Hubungi PPIC")}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column'}}>
                    <Text style={{fontWeight: 'bold'}}>{element.product_name}</Text> 
                    <View style={{flexDirection: 'row'}}>
                      <View style={{width: "50%", flexDirection: 'column'}}>
                        <Text style={{fontWeight: 'bold'}}>{element.product_customer_pn}</Text> 
                      </View>
                      <View style={{width: "50%", flexDirection: 'column', alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{element.product_model}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Button>
            )
          }
        })
      }else{
        oke.push(
          <View key="123qwe" style={styles.notifNoPlanning}>
            <Text style={styles.fontNotifNoProducts}>Tidak Ada Planning Di Mesin <Text style={styles.fontNotifNoProductsChild}>{machine_number}</Text> </Text>
          </View>
        )
      }
    }else{
      alert("API 404, Hubungi IT Dept.")
      oke.push(
        <View key="123qwe" style={styles.notifNoPlanning}>
          <Text style={styles.fontNotifNoProducts}>Tidak Ada Planning Di Mesin <Text style={styles.fontNotifNoProductsChild}>{machine_number}</Text> </Text>
        </View>
      )
    }

		return oke
  }

  const headerContent = () => {
    return (
      <View style={styles.contentHeader}>
        <Text style={styles.fontPlanning}>({machine_number}) - {machine_name}</Text>
        <Text style={styles.fontPlanning}>List Products By Planning  </Text>
      </View>
    )
  }

	return(
		<Container>
			<View style={styles.headerWithBorder}>
				<View style={styles.contentHeader}>
					<Image source={LogoSIP}/>
				</View>
        {loading ? headerContent() : null}
			</View>
			
			<View style={styles.contentFullWithPadding}>
				<ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} >
					<View style={styles.contentHeader}>
						{loading ? loopFeature() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</ScrollView>
			</View>
		</Container>
	)
}

export default ShowPlanning;