import {Image, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, RefreshControl, ActivityIndicator} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import { Container, Text, Button } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import styles from '../../../components/styles/Styling';
import Axios from 'axios';
import moment from 'moment';
import app_version from '../../app_version';
import checklist from '../../../assets/check.png';

const ListPartNumber = ({route, navigation}) => {
	const {sys_plant_id, id, code, status, supplier_name, date, nik, name, nama_plant, qc_incoming} = route.params
  // console.log(qc_incoming)
	const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
	const [data, setData]		          = useState(null)
	const [data_ng, setNG]		          = useState(null)
  useEffect(() => {
    formOke()
  }, [])

	const formOke = async() => {
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
    const params = {
      'tbl': 'incoming',
      'kind': 'get_spg_supplier_item',
      'sys_plant_id': sys_plant_id,
      'app_version': app_version,
      'wh_spg_supplier_id': id,
    }
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setData(response.data.data.spg_detail)
			setNG(response.data.data.ng_category)
			console.log('List Data SPG')
			setLoading(true)
		})
		.catch(error => {
      console.log('List Rework Prod Leader: ', error)
			setLoading(true)
		})		
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(false);
    formOke();
  }, []);

  const content = () => {
    const arrData = []
    if(data.length > 0){
      data.map((val, key) => {
        arrData.push(
          <View key={key} style={{paddingTop: 10}}>
            <Button style={{height: 55, alignItems: 'flex-start', padding: 5, width: "100%", borderRadius: 15, backgroundColor: '#1a508b', flexDirection: 'column'}} onPress={() => {
              navigation.navigate('FormIQC', {
                sys_plant_id: sys_plant_id,
                wh_spg_supplier_id: id,
                code_spg: code,
                status_spg: status,
                internal_part_id: val.internal_part_id,
                packaging_quantity: val.packaging_quantity,
                packaging_type: val.packaging_type,
                part_color: val.part_color,
                part_name: val.part_name,
                spg_date: val.spg_date,
                spg_number: val.spg_number,
                spg_quantity: val.spg_quantity,
                supplier_id: val.supplier_id,
                supplier_name: val.supplier_name,
                check_appearance_n: val.check_appearance_n,
                ng_categories: data_ng,
                nik: nik,
                name: name,
                qc_incoming: qc_incoming
              })
            }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', borderRightWidth: 0.3, borderRightColor: 'white'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>{val.part_name}</Text>
                  </View>
                  <View style={{flexDirection: 'row', width: 300}}>
                    <Text style={{fontWeight: 'bold', width: '68%'}}>{val.internal_part_id}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '32%'}}>
                      <Text style={{fontWeight: 'bold'}}>{val.spg_quantity} Qty</Text>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 5, paddingLeft: 5}}>
                {val.iqc_status != false ? 
                  <Image source={checklist} style={{width: 35, height: 35, marginRight: 10}} />
                : null}
                </View>
              </View>
            </Button>
          </View>
        )

      })
    }
    return arrData
  }

	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
          <View style={{height: 140, backgroundColor: '#dfe0df', flexDirection: 'column', justifyContent: 'center'}}>
            <View style={styles.contentHeader}>
              <Image source={LogoSIP}/>
            </View>
            <View style={{backgroundColor: '#dfe0df'}}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>PART NUMBER SUPPLIER ({nama_plant})</Text>
              </View>
              <View style={{flexDirection: 'row', borderWidth: 0.3}}>
                <View style={{flexDirection: 'column', width: '24%', paddingLeft: 5}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>SPG Supplier</Text> 
                </View>
                <View style={{flexDirection: 'column', width: '2%'}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>:</Text> 
                </View>
                <View style={{flexDirection: 'column', width: '31%', borderLeftWidth: 0.3, paddingLeft: 5}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>{code}</Text> 
                </View>
                <View style={{flexDirection: 'column', width: '21%', borderLeftWidth: 0.3, paddingLeft: 5}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>{date}</Text> 
                </View>
                <View style={{flexDirection: 'column', width: '8%', borderLeftWidth: 0.3, paddingLeft: 5}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>{status}</Text> 
                </View>
              </View>
              <View style={{flexDirection: 'row', borderWidth: 0.3}}>
                <View style={{flexDirection: 'column', width: '24%', paddingLeft: 5}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>Supplier Name</Text> 
                </View>
                <View style={{flexDirection: 'column', width: '2%'}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>:</Text> 
                </View>
                <View style={{flexDirection: 'column', borderLeftWidth: 0.3, paddingLeft: 5}}>
                  <Text style={{fontSize: 11, fontWeight: 'bold'}}>{supplier_name}</Text> 
                </View>
              </View>
              {/* <Text style={styles.fontListProducts}>{date}</Text> */}
            </View>
          </View>
          
          {loading ? null : <View style={{backgroundColor: '#dfe0df', alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
  
          <View style={styles.contentFullWithPadding}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {loading ? content() : null}
            </ScrollView>
          </View>
        
        
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default ListPartNumber;