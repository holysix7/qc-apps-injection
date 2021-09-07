import {Image, View, ScrollView, ActivityIndicator, RefreshControl, Alert} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import { Container, Text, Button } from 'native-base';
import moment from 'moment';
import styles from '../../components/styles/Styling';
import app_version from '../app_version/index';
import checklist from '../../assets/check.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowProducts = ({route, navigation}) => {
	const {machine_id, machine_name, sys_plant_id, machine_number} = route.params
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
	
	useEffect(() => {
		products();
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
			machine_id: machine_id,
			app_version: app_version
		}
		axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setLoading(true)
      setRefreshing(false)
			setData(response.data.data2)
			console.log("Products List Data: ", response.data.status, response.data.message)
		})
		.catch(error => console.log(error))
	}

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    products();
  }, []);

	const alertStopMP = (value) => {
		Alert.alert(
			"Info",
			"Customer Part Number: " + value + " Stop MP",
			[
				{ text: "OK", onPress: () => console.log("OK"), style: "cancel" },
			],
			{ cancelable: false }
		);
	}

	const contentHeader = () => {
		return (
			<View style={styles.contentHeader}>
				<Text style={styles.fontProduct}>({machine_number}) - {machine_name}</Text>
				<Text style={styles.fontListProducts}>List Products</Text>
			</View>
		)
	}

	const listLotOut = () => {
		return (
			<View style={{height: 70, backgroundColor: '#dfe0df' }}>
				<View style={{paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center'}}>
					<Button style={styles.productsButtonRunning} onPress={() => navigation.navigate('ShowNGProducts', {
						machine_id: machine_id, 
						machine_name: machine_name,
						machine_number: machine_number, 
						sys_plant_id: sys_plant_id
					})}>
						<Text>Laporan Rework Product Lot Out </Text>
					</Button>
				</View>
			</View>
		)
	}

	const dataAndText = () => {
		const dataFixed = []
		var parts = Object.values(data)
		var count = 1
		var date_selected = null
		var show_title_date = false
		if(parts.length > 0){
			parts.map((element, key) => {
				const childs = Object.values(element)
				if(childs.length > 0){
					const newArr = childs.sort((a, b) => (a.qc_daily_inspections_id < b.qc_daily_inspections_id) ? 1 : -1)
					newArr.map(row => {
						if(date_selected != row.date){
							date_selected = row.date != null ? row.date : null
							show_title_date = true
						}else{
							show_title_date = false
						}
						if(row.masspro_status == 'Running'){
							dataFixed.push(
								<View key={count} style={styles.contenDateProduct}>
									{loading ? show_title_date ? <Text style={styles.fontProduct}>{date_selected}</Text> : null : null}
									<Button style={styles.productsButtonRunning} onPress={() => navigation.navigate('ListForm', {
										qc_daily_inspection_id: row.qc_daily_inspections_id,
										qc_daily_inspection_item_id: row.qc_daily_inspection_item_id,
										qc_daily_inspection_method_id: row.qc_daily_inspection_method_id,
										sys_plant_id: row.sys_plant_id,
										daily_inspection_number: row.daily_inspection_number,
										product_name: row.product_name,
										customer_name: row.customer_name,
										internal_part_id: row.internal_part_id,
										customer_part_number: row.customer_part_number,
										model: row.model,
										machine_id: machine_id,
										machine_name: row.machine_name,
										machine_status: row.machine_status,
										operator_nik: row.operator_nik,
										operator_nik_2: row.operator_nik_2,
										leader_nik: row.leader_nik,
										qc_process_nik: row.qc_process_nik,
										cavity: row.cavity,
										foreman_nik: row.foreman_nik,
										doc_number: row.code,
										machine_number: machine_number,
										date: row.date
									})}>
										<View style={{flexDirection: 'row', width: 300, justifyContent: 'center'}}>
											<View style={{flexDirection: 'column', width: 300, justifyContent: 'center', alignItems: 'flex-start'}}>
												<Text style={styles.fontButtonHeader}> {row.customer_part_number} </Text>   
												<Text style={styles.fontButtonFooter}> {row.product_name} </Text>   
											</View>
											<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
												{row.ppic_planning_product_id != null ? <View style={{width: 60, paddingLeft: 10}}><Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/></View> : <View style={{width: 60, paddingLeft: 10}}></View>}		
											</View>
										</View>
									</Button>
								</View>
							)
						}else{
							dataFixed.push(
								<View key={count} style={styles.contenDateProduct}>
									{loading ? show_title_date ? <Text style={styles.fontProduct}>{date_selected}</Text> : null : null}
									<Button style={styles.productsButtonStop} onPress={() => alertStopMP(row.customer_part_number)} >
										<View style={{flexDirection: 'row', width: 300, justifyContent: 'center'}}>
											<View style={{flexDirection: 'column', width: 300, justifyContent: 'center', alignItems: 'flex-start'}}>
												<Text style={styles.fontButtonHeader}> {row.customer_part_number} </Text>   
												<Text style={styles.fontButtonFooter}> {row.product_name} </Text>   
											</View>
											<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
												{row.ppic_planning_product_id != null ? <View style={{width: 60, paddingLeft: 10}}><Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/></View> : <View style={{width: 60, paddingLeft: 10}}></View>}		
											</View>
										</View>
									</Button>
								</View>
							)
						}
						count += 1;
					})
				}
			})
		}
		return (
			<View style={{flex: 1, justifyContent: 'center'}}>
				{dataFixed}
			</View>
		)
	}

	return(
		<Container>
			<View style={styles.headerWithBorder}>
				<View style={styles.contentHeader}>
					<Image source={LogoSIP}/>
				</View>
				{loading ? contentHeader() : null}
			</View>
			{loading ? null : <View style={{backgroundColor: '#dfe0df', alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
			<View style={styles.contentFullWithPadding}>
				<ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
				{loading ? dataAndText() : null}
				</ScrollView>
			</View>
			{/* <Button onPress={() => testArray()}><Text>oawkoawk</Text></Button> */}
			{loading ? 
			listLotOut()
		 : null }
			{loading ? <View style={{height: 70,backgroundColor: '#dfe0df' }}>
				<View style={{paddingHorizontal: 50, justifyContent: 'center', alignItems: 'center'}}>
					<Button style={styles.productsButtonRunning} onPress={() => navigation.navigate('ShowPlanning', {
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