import {Image, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import { Container, Text, Button } from 'native-base';
import styles from '../../../../components/styles/Styling';
import AsyncStorage from "@react-native-community/async-storage";
import moment from 'moment';
import app_version from '../../../app_version/index';
import Axios from 'axios';

const ContinueMP = ({route, navigation}) => {
	const {qc_daily_inspection_id, sys_plant_id, product_name, customer_name, machine_id, machine_name, machine_number, today, yesterday, daily_inspection_number, doc_number, customer_part_number, model, internal_part_id} = route.params
  const [featureUser, setFeature] = useState(null);
  const [user, setUser] = useState(null);
  const [next_date, setNextDate] = useState(null);
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		session()
		formOke()
	}, [])
	var hariNow = moment()
	var fixTomorrow = moment(hariNow, "Y-M-D").add(1, 'days')
	var tomorrow = moment(fixTomorrow).format("Y - MMM - D")

	const session = async () => {
    try {
      const UserSession = await AsyncStorage.multiGet(['user', 'name', 'department_name', 'sys_plant_id', 'duty_plant_option_select', 'feature'])
      const feature    = await AsyncStorage.getItem('feature')
      const user    = await AsyncStorage.getItem('user')
			setFeature(JSON.parse(feature))
			setUser(user)
    } catch (error) {
      console.log('Multi Get Error: ', error.message)
    }
	}

	const formOke = async() => {
		setLoading(false)
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'continue_mp_next_day',
			qc_daily_inspection_id: qc_daily_inspection_id,
			app_version: app_version
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setNextDate(response.data.data.next_date)
			setLoading(true)
			console.log("List Data Maint. Mold: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Maint. Mold: ', error)
		})
	}
	
	const loopFeature = () => {
		var data = []
		var i
		console.log(next_date)
		for(i = 0; i < 4; i++){
			if(featureUser != null){
				if(sys_plant_id == i+1){
					if(featureUser[i] != null){
						if(featureUser[i].qc_masspro_prod_leader != null || featureUser[i].qc_masspro_foreman != null){
							if(featureUser[i].qc_masspro_prod_leader.view_permissions == true){
							// if(featureUser[i].qc_masspro_prod_leader.view_permissions == true && user == 32008107 || featureUser[i].qc_masspro_foreman.view_permissions == true || user == 21410012){
								data.push(
									<Button key="AscvSacx" style={styles.dailyInspectionButton} onPress={() => navigation.navigate('UpdateProductionLeader', {
										internal_part_id: internal_part_id,
										qc_daily_inspection_id: qc_daily_inspection_id,
										sys_plant_id: sys_plant_id,
										daily_inspection_number: daily_inspection_number,
										product_name: product_name,
										machine_id: machine_id,
										customer_name: customer_name,
										machine_name: machine_name,
										today: today,
										machine_number: machine_number,
										yesterday: yesterday,
										doc_number: doc_number,
										customer_part_number: customer_part_number,
										model: model
									})} >
										<Text> Update Production Leader </Text>   
									</Button>	
								)
							}else{
								data.push(
									<Button key="AscvSacx" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Update QC Leader")} >
										<Text> Update Production Leader </Text>   
									</Button>	
								)
							}
            }
						if(featureUser[i].qc_masspro_foreman != null){
							if(featureUser[i].qc_masspro_foreman.view_permissions == true){
								data.push(
									<Button key="XcxzAsd" style={styles.dailyInspectionButton} onPress={() => navigation.navigate('UpdateForemanLeader', {
										sys_plant_id: sys_plant_id,
										internal_part_id: internal_part_id,
										qc_daily_inspection_id: qc_daily_inspection_id,
										daily_inspection_number: daily_inspection_number,
										product_name: product_name,
										machine_id: machine_id,
										customer_name: customer_name,
										machine_name: machine_name,
										today: today,
										machine_number: machine_number,
										yesterday: yesterday,
										doc_number: doc_number,
										customer_part_number: customer_part_number,
										model: model
									})} >
										<Text> Update Foreman Leader </Text>
									</Button>
								)
							}else{
								data.push(
									<Button key="XcxzAsd" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Foreman Leader")} >
										<Text> Update Foreman </Text>
									</Button>
								)
							}
						}
					}
				}
			}
		}
		return data
	}	

	return(
		<Container>
			<View style={styles.headerWithBorder}>
				<View style={styles.contentHeader}>
					<Image source={LogoSIP}/>
				</View>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Text style={styles.fontButtonHeader}>({machine_number}) - {machine_name}</Text>
					<Text style={styles.fontButtonHeaderChild}>CONTINUE MASSPRO</Text>
					{doc_number != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{doc_number}</Text> : <View style={styles.viewNoDailyInspection}><Text style={styles.fontNoDailyInspection}> - TIDAK ADA DAILY INSPECTION NUMBER - </Text></View>}
					<Text style={styles.fontButtonFooter}>{product_name}</Text>
				</View>
			</View>
			<ScrollView style={{backgroundColor: '#dfe0df'}}>
				<View style={{backgroundColor: '#dfe0df', padding: 30}}>
					{loading ? loopFeature() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
				</View>
			</ScrollView>
			<View style={{backgroundColor: '#dfe0df', justifyContent: 'center', alignItems: 'center', padding: 50}}>
				{loading ? <Button style={styles.dailyInspectionButton} onPress={() => navigation.navigate('NextDay', {
					internal_part_id: internal_part_id,
					qc_daily_inspection_id: qc_daily_inspection_id,
					sys_plant_id: sys_plant_id,
					daily_inspection_number: daily_inspection_number,
					product_name: product_name,
					machine_id: machine_id,
					customer_name: customer_name,
					machine_name: machine_name,
					today: today,
					machine_number: machine_number,
					yesterday: yesterday,
					doc_number: doc_number,
					tomorrow: tomorrow,
					customer_part_number: customer_part_number,
					model: model,
					internal_part_id: internal_part_id,
					next_date: next_date
				})} >
					<Text> Continue MP | {next_date}</Text>   
				</Button>	: null}
			</View>
		</Container>
	)
}

export default ContinueMP;