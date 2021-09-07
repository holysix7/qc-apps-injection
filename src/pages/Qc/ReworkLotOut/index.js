import {Image, View, ScrollView, ActivityIndicator, RefreshControl} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import checklist from '../../../assets/check.png';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import { Container, Text, Button } from 'native-base';
import moment from 'moment';
import styles from '../../../components/styles/Styling';
import app_version from '../../app_version/index';

const ShowNGProducts = ({route, navigation}) => {
  const {machine_id, sys_plant_id, machine_number, machine_name} = route.params
  const [featureUser, setFeature] = useState(null)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(null)
	useEffect(() => {
    session()
		products()
	}, [])

  const products = async () => {
    const token = await AsyncStorage.getItem("key")
    const headers = {
      'Authorization': token
    }
    const params = {
      tbl: 'inprocess_lot_out',
      kind: 'product_ng',
      sys_plant_id: sys_plant_id,
      machine_id: machine_id,
      app_version: app_version
    }
    axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
    .then(response => {
      // console.log(response.data.data)
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

  const session = async () => {
    try {
      const UserSession = await AsyncStorage.multiGet(['user', 'name', 'department_name', 'sys_plant_id', 'duty_plant_option_select', 'feature'])
      const feature    = await AsyncStorage.getItem('feature')
			setFeature(JSON.parse(feature))
    } catch (error) {
      console.log('Multi Get Error: ', error.message)
    }
	}

  const loopFeature = () => {
    var dataNGProduct    = []
    var products = Object.values(data);
    var count = 1;
    var date_selected = null;
    var show_title_date = false;
    if(products.length > 0){
      products.map((element, key) => {
        const uye = Object.values(element)
        uye.map(record => {
          if (date_selected != record.date) {
            date_selected = record.date
            show_title_date = true
          } else {
            show_title_date = false
          }
          dataNGProduct.push(
            <View key={count} style={styles.contentHeader}>
              <View style={styles.contenDateProduct}>
                {loading ? show_title_date ? <Text style={styles.fontProduct}>{date_selected}</Text> : null : null}
                <Button style={styles.listProductPlanning} onPress={() => navigation.navigate('Rework', {
                  machine_id: machine_id,
                  machine_name: machine_name,
                  machine_number: machine_number,
                  sys_plant_id: sys_plant_id,
                  eng_product_id: record.eng_product_id,
                  product_name: record.product_name,
                  color: record.color,
                  model: record.model,
                  internal_part_id: record.internal_part_id,
                  customer_part_number: record.customer_part_number,
                  customer_name: record.customer_name,
                  date: record.date
                })}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column'}}>
                      <Text style={{fontWeight: 'bold'}}>{record.product_name}</Text> 
                      <View style={{flexDirection: 'row'}}>
                        <View style={{width: "50%", flexDirection: 'column'}}>
                          <Text style={{fontWeight: 'bold'}}>{record.internal_part_id}</Text> 
                        </View>
                        <View style={{width: "50%", flexDirection: 'column', alignItems: 'flex-end'}}>
                          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{record.customer_part_number}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </Button>
              </View>
            </View>
          )
          count += 1;
        })
      })
    }else{
      dataNGProduct.push(
        <View key="Vc1" style={{marginVertical: 160, marginHorizontal: 40, padding: 40, backgroundColor: '#fff76a', borderWidth: 1, borderRadius: 10, flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Tidak Ada Produk NG</Text>
        </View>
      )
    }

    return dataNGProduct
  }
// abcd

  const headerContent = () => {
    return (
      <View style={styles.contentHeader}>
        <Text style={styles.fontPlanning}>({machine_number}) - {machine_name}</Text>
        <Text style={styles.fontPlanning}>List NG Products </Text>
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
          {loading ? loopFeature() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
				</ScrollView>
			</View>
		</Container>
	)
}

export default ShowNGProducts;