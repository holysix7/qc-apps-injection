import {Image, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import { Container, Text, Button } from 'native-base';
import styles from '../../../../components/styles/Styling';
import AsyncStorage from "@react-native-community/async-storage";

const ContinueMP = ({route, navigation}) => {
	const {qc_daily_inspection_id, customer_part_number, sys_plant_id, product_name, customer_name, machine_id, machine_name, machine_number, today, yesterday, daily_inspection_number, doc_number} = route.params
  const [featureUser, setFeature] = useState(null);
  const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		session()
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
	
	const loopFeature = () => {
		var data = []
		var i
		for(i = 0; i < 4; i++){
			if(featureUser != null){
				if(sys_plant_id == i+1){
					if(featureUser[i] != null){
						if(featureUser[i].qc_masspro_prod_leader != null || featureUser[i].qc_masspro_foreman != null){
							if(featureUser[i].qc_masspro_prod_leader.view_permissions == true){
							// if(featureUser[i].qc_masspro_prod_leader.view_permissions == true && user == 32008107 || featureUser[i].qc_masspro_foreman.view_permissions == true || user == 21410012){
								data.push(
									<Button key="AscvSacx" style={styles.dailyInspectionButton} onPress={() => navigation.navigate('UpdateProductionLeader', {
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
										daily_inspection_number: daily_inspection_number,
										product_name: product_name,
										machine_id: machine_id,
										customer_name: customer_name,
										customer_part_number: customer_part_number,
										machine_name: machine_name,
										today: today,
										machine_number: machine_number,
										yesterday: yesterday,
										doc_number: doc_number
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
		</Container>
	)
}

export default ContinueMP;