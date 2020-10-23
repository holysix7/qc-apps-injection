import {Image, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import { Container, Text, Button } from 'native-base';
import moment from 'moment';

const ShowProducts = ({route, navigation}) => {
	const {machine_id, machine_name, sys_plant_id} = route.params
	const [data, setData] = useState([])
	useEffect(() => {
		products()
	}, [])

	const products = async () => {
    const token = await AsyncStorage.getItem("key")
		const headers = {
      'Authorization': token
    }
    const params = {
      tbl: 'daily_inspection',
      kind: 'by_machine',
      sys_plant_id: sys_plant_id,
      machine_id: machine_id
		}
    axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
    .then(response => {
			setData(response.data.data)
    })
    .catch(error => console.warn(error))
  }

	const allProductsToday = []
	const allProductsYesterday = []
	var today = moment()
							.format('YYYY-MM-DD')
	var yesterday = moment()
									.subtract(1, 'days')
									.format('YYYY-MM-DD')
	data.forEach(element => {
		if(today == element.date)
		{
			allProductsToday.push(
				<Button key={element.qc_daily_inspections_id} style={{color: '#F5F5DC', marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('ListForm',
				{
					id: element.qc_daily_inspections_id,
					sys_plant_id: element.sys_plant_id,
					product_name: element.product_name,
					customer_name: element.customer_name,
					internal_part_id: element.internal_part_id,
					customer_part_number: element.customer_part_number,
					model: element.model,
					machine_name: element.machine_name,
					today: today
				})} >
					<Text style={{fontSize: 20, fontWeight: 'bold'}}> {element.customer_part_number} </Text>   
					<Text style={{fontSize: 9, textAlign: 'center'}}> {element.product_name} </Text>   
				</Button>
			);
		}
		if(yesterday == element.date)
		{
			allProductsYesterday.push(
				<Button key={element.qc_daily_inspections_id} style={{color: '#F5F5DC', marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('ListForm',
				{
					id: element.qc_daily_inspections_id,
					sys_plant_id: element.sys_plant_id,
					product_name: element.product_name,
					customer_name: element.customer_name,
					internal_part_id: element.internal_part_id,
					customer_part_number: element.customer_part_number,
					model: element.model,
					machine_name: element.machine_name,
					yesterday: yesterday
				})} >
					<Text style={{fontSize: 20, fontWeight: 'bold'}}> {element.customer_part_number} </Text>   
					<Text style={{fontSize: 9, textAlign: 'center'}}> {element.product_name} </Text>   
				</Button>
			);
		}
	});

	return(
		<Container>
			<View style={{height: 100, backgroundColor: '#F5F5DC', borderWidth: 0.3, flexDirection: 'column'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Image source={LogoSIP}/>
				</View>
				<View style={{marginLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{fontSize: 25, fontWeight: 'bold'}}>{machine_name}</Text>
				</View>
			</View>
			
			<View style={{flex: 1, flexDirection: 'column'}}>
				<View style={{flex: 1, backgroundColor: '#F5F5DC', paddingTop: 20, paddingHorizontal: 20}}>
					<ScrollView style={{backgroundColor: '#F5F5DC', padding: 10}}>
						<View>
							<View style={{alignItems: 'center'}}>
								<Text style={{fontSize: 22, fontWeight: 'bold'}}>{today}</Text>
								{allProductsToday}
							</View>
							<View style={{marginTop: 20, alignItems: 'center'}}>
								<Text style={{fontSize: 22, fontWeight: 'bold'}}>{yesterday}</Text>
								{allProductsYesterday}
							</View>
						</View>
					</ScrollView>
				</View>
			</View>
		</Container>
	)
}

export default ShowProducts;