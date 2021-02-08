import {Image, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import { Container, Text, Button } from 'native-base';
import styles from '../../../../components/styles/Styling';
import AsyncStorage from "@react-native-community/async-storage";
import app_version from '../../../app_version';
import Axios from 'axios';
import checklist from '../../../../assets/check.png';

const StopMP = ({route, navigation}) => {
	const {qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, machine_id, machine_name, machine_number, today, yesterday, daily_inspection_number, doc_number} = route.params
  const [featureUser, setFeature] = useState(null);
  const [user, setUser] = useState(null);
  const [lastShootQC, setLastShootQC] = useState(null);
  const [idQc, setIdLastShootQC] = useState(null);
  const [idFr, setIdLastShootFR] = useState(null);
  const [lastShootFR, setLastShootFR] = useState(null);
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		session()
		getIdLastShootQC()
		setTimeout(() => {
			setLoading(true)
		}, 1000);
	}, [])

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

	const getIdLastShootQC = async() => {
		const token = await AsyncStorage.getItem("key")
		var headers = {
			'Authorization': token
		}
		var params = {
			tbl: 'daily_inspection',
			kind: 'last_shoot',
			app_version: app_version,
			qc_daily_inspection_id: qc_daily_inspection_id,
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response =>{
			setLastShootQC(response.data.data.last_shoot_qc)
			setIdLastShootQC(response.data.data.last_shoot_qc.id)
			setLastShootFR(response.data.data.last_shoot_fr)
			setIdLastShootFR(response.data.data.last_shoot_fr.id)
		})
		.catch(error => {
			console.log(error)
		})
	}

	const alertQCLastShoot = () => {
		if(idQc != null){
			navigation.navigate('LastShootForeman', {
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
				doc_number: doc_number
			})
		}else{
			alert("Harap Isi Last Shoot Leader QC")
		}
	}
	
	const loopFeature = () => {
		var data = []
		var i
		for(i = 0; i < 4; i++){
			if(featureUser != null){
				if(sys_plant_id == i+1){
					if(featureUser[i] != null){
						if(featureUser[i].qc_last_shoot_qc_leader != null){
							if(featureUser[i].qc_last_shoot_qc_leader.view_permissions == true){
								data.push(
									<Button key="askdmkwqw" style={styles.dailyInspectionButton} onPress={() => navigation.navigate('LastShootLeaderQc', {
										qc_daily_inspection_id: qc_daily_inspection_id,
										qc_daily_inspection_item_id: qc_daily_inspection_item_id,
										qc_daily_inspection_method_i: qc_daily_inspection_method_id,
										sys_plant_id: sys_plant_id,
										daily_inspection_number: daily_inspection_number,
										product_name: product_name,
										machine_id: machine_id,
										customer_name: customer_name,
										machine_name: machine_name,
										today: today,
										machine_number: machine_number,
										yesterday: yesterday,
										doc_number: doc_number
									})} >
										<Text> Last Shoot Leader QC </Text>
                    {idQc != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
									</Button>
								)
							}else{
								data.push(
									<Button key="askdmkwqw" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Last Shoot Leader QC")} >
										<Text> Last Shoot Leader QC </Text>   
                    {idQc != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
									</Button>
								)
							}
						}
						if(featureUser[i].qc_last_shoot_foreman != null){
							if(featureUser[i].qc_last_shoot_foreman.view_permissions == true){
								data.push(
									<Button key="askdmasqwewkwqw" style={styles.dailyInspectionButton} onPress={() => alertQCLastShoot()} >
										<Text> Last Shoot Foreman </Text>   
                    {idFr != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
									</Button>
								)
							}else{
								data.push(
									<Button key="askdmasqwewkwqw" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Last Shoot Leader Foreman")} >
										<Text> Last Shoot Foreman </Text>   
                    {idFr != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
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
					<Text style={styles.fontButtonHeaderChild}>STOP MASSPRO</Text>
					{doc_number != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{doc_number}</Text> : <View style={styles.viewNoDailyInspection}><Text style={styles.fontNoDailyInspection}> - TIDAK ADA DAILY INSPECTION NUMBER - </Text></View>}
					<Text style={styles.fontButtonFooter}>{product_name}</Text>
				</View>
			</View>
			<ScrollView style={{backgroundColor: '#dfe0df'}}>
				<View style={{backgroundColor: '#dfe0df', padding: 30}}>
					{loading ? loopFeature() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
				</View>
			</ScrollView>
		</Container>
	)
}

export default StopMP;