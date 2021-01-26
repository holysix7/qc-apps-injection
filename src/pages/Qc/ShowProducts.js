import {Image, View, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import plusImage from '../../assets/plus.png';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import { Container, Text, Button } from 'native-base';
import moment from 'moment';
import styles from '../../components/styles/Styling';
import app_version from '../app_version/index';

const ShowProducts = ({route, navigation}) => {
	const {machine_id, machine_name, sys_plant_id, machine_number} = route.params
	const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
	useEffect(() => {
		let isMounted = true;
		const products = async () => {
			const token = await AsyncStorage.getItem("key")
			const headers = {
				'Authorization': token
			}
			const params = {
				tbl: 'daily_inspection',
				kind: 'by_machine',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				app_version: app_version
			}
			try {
				axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
				.then(response => {
					setLoading(true)
					if(isMounted) setData(response.data.data)
					console.log("Products List Data: ", response.data.status, response.data.message)
				})
				.catch(error => console.log(error))
			} catch (error) {
				console.log(error)
			}
		}
		products()
		return () => {
			isMounted = false
		}
	}, [])

	const allProductsToday = []
	const allProductsYesterday = []
	const noData = []
	const noDataText = []
	const key = [1, 2]
	var today = moment()
							.format('YYYY-MM-DD')
	var yesterday = moment()
									.subtract(1, 'days')
									.format('YYYY-MM-DD')
	if(data.length > 0){
		data.map((element, key) => {
			if(today == element.date)
			{
				allProductsToday.push(
					<Button key={key} style={styles.productsButton} onPress={() => navigation.navigate('ListForm',
					{
						qc_daily_inspection_id: element.qc_daily_inspections_id,
						qc_daily_inspection_item_id: element.qc_daily_inspection_item_id,
						qc_daily_inspection_method_id: element.qc_daily_inspection_method_id,
						sys_plant_id: element.sys_plant_id,
						daily_inspection_number: element.daily_inspection_number,
						product_name: element.product_name,
						customer_name: element.customer_name,
						internal_part_id: element.internal_part_id,
						customer_part_number: element.customer_part_number,
						model: element.model,
						machine_id: machine_id,
						machine_name: element.machine_name,
						machine_status: element.machine_status,
						operator_nik: element.operator_nik,
						operator_nik_2: element.operator_nik_2,
						leader_nik: element.leader_nik,
						qc_process_nik: element.qc_process_nik,
						cavity: element.cavity,
						foreman_nik: element.foreman_nik,
						machine_number: machine_number,
						today: today
					})} >
						<Text style={styles.fontButtonHeader}> {element.customer_part_number} </Text>   
						<Text style={styles.fontButtonFooter}> {element.product_name} </Text>   
					</Button>
				);
			}
			if(yesterday == element.date)
			{
				allProductsYesterday.push(
					<Button key={key} style={styles.productsButton} onPress={() => navigation.navigate('ListForm',
					{
						qc_daily_inspection_id: element.qc_daily_inspections_id,
						qc_daily_inspection_item_id: element.qc_daily_inspection_item_id,
						qc_daily_inspection_method_id: element.qc_daily_inspection_method_id,
						sys_plant_id: element.sys_plant_id,
						daily_inspection_number: element.daily_inspection_number,
						product_name: element.product_name,
						customer_name: element.customer_name,
						internal_part_id: element.internal_part_id,
						customer_part_number: element.customer_part_number,
						model: element.model,
						machine_id: machine_id,
						machine_name: element.machine_name,
						machine_status: element.machine_status,
						operator_nik: element.operator_nik,
						operator_nik_2: element.operator_nik_2,
						leader_nik: element.leader_nik,
						qc_process_nik: element.qc_process_nik,
						foreman_nik: element.foreman_nik,
						machine_number: machine_number,
						cavity: element.cavity,
						yesterday: yesterday
					})} >
						<Text style={styles.fontButtonHeader}> {element.customer_part_number} </Text>   
						<Text style={styles.fontButtonFooter}> {element.product_name} </Text>   
					</Button>
				);
			}
		});
	}else{
		noDataText.push(
			<View key={key.toString()} style={styles.notifNoProducts}>
				<Text style={styles.fontNotifNoProducts}>There Is No Products In Machine <Text style={styles.fontNotifNoProductsChild}>{machine_name}</Text>. Hit The Button Below or Swipe Down The Page To Get Back!</Text>
			</View>
		)
		noData.push(
			<Button key={key.toString()} style={styles.productsButton} onPress={() => navigation.navigate('Qc')}>
				<Text style={styles.fontButtonFooter}> Back </Text>   
			</Button>
		)
	}

	return(
		<Container>
			<View style={styles.headerWithBorder}>
				<View style={styles.contentHeader}>
					<Image source={LogoSIP}/>
				</View>
				<View style={styles.contentHeader}>
					<Text style={styles.fontProduct}>({machine_number}) - {machine_name}</Text>
				</View>
			</View>
			
			<View style={styles.contentFullWithPadding}>
				<ScrollView>
					<View style={styles.contentHeader}>
						<Text style={styles.fontProduct}>{today}</Text>
						{loading ? allProductsToday : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
					<View style={styles.contentHeader}>
						<Text style={styles.fontProduct}>{yesterday}</Text>
						{loading ? allProductsYesterday : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
					<View style={{paddingTop: 100}}>
						{loading ? noData : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
						{loading ? noDataText : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</ScrollView>
			</View>
			{loading ? <View style={{height: 70,backgroundColor: '#F5F5DC' }}>
				<View style={{paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center'}}>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('ShowPlanning', {
						machine_id: machine_id, 
						machine_name: machine_name,
						machine_number: machine_number, 
						sys_plant_id: sys_plant_id
					})}>
						<Text>Masspro </Text>
					</Button>
				</View>
			</View>
		 : null }
		</Container>
	)
}

export default ShowProducts;