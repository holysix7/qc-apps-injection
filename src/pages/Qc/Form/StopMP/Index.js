import {Image, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import { Container, Text, Button } from 'native-base';
import styles from '../../../../components/styles/Styling';
import AsyncStorage from "@react-native-community/async-storage";

const StopMP = ({route, navigation}) => {
	const {qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, machine_id, machine_name, machine_number, today, yesterday, daily_inspection_number, doc_number} = route.params
  const [featureUser, setFeature] = useState(null);
  const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		session()
		setTimeout(() => {
			setLoading(true)
		}, 2000);
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
	
	const loopFeature = () => {
		var data = []
		var i
		for(i = 0; i < 4; i++){
			if(featureUser != null){
				if(sys_plant_id == i+1){
					if(featureUser[i] != null){
						if(featureUser[i].qc_last_shoot_qc_leader != null || featureUser[i].qc_last_shoot_foreman != null){
							if(featureUser[i].qc_last_shoot_qc_leader.view_permissions == true || featureUser[i].qc_last_shoot_foreman.view_permissions == truefeatureUser[i].qc_last_shoot_foreman.view_permissions == true){
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
										<Text> Last Shjoot Leader QC </Text>   
									</Button>
								)
							}else{
								data.push(
									<Button key="askdmkwqw" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Last Shoot Leader QC")} >
										<Text> Last Shjoot Leader QC </Text>   
									</Button>
								)
							}
						}
						if(featureUser[i].qc_last_shoot_foreman != null){
							if(featureUser[i].qc_last_shoot_foreman.view_permissions == true){
								data.push(
									<Button key="askdmasqwewkwqw" style={styles.dailyInspectionButton} onPress={() => navigation.navigate('LastShootForeman', {
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
									})} >
										<Text> Last Shoot Foreman </Text>   
									</Button>
								)
							}else{
								data.push(
									<Button key="askdmasqwewkwqw" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Last Shoot Leader Foreman")} >
										<Text> Last Shoot Foreman </Text>   
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
			<ScrollView style={{backgroundColor: '#F5F5DC'}}>
				<View style={{backgroundColor: '#F5F5DC', padding: 30}}>
					{loading ? loopFeature() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
				</View>
			</ScrollView>
		</Container>
	)
}

export default StopMP;