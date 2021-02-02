import {Image, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import { Container, Text, Button } from 'native-base';
import styles from '../../components/styles/Styling';
import AsyncStorage from "@react-native-community/async-storage";

const ListForm = ({route, navigation}) => {
	const {qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, customer_part_number, machine_id, machine_name, machine_status, operator_nik, operator_nik_2, leader_nik, foreman_nik, qc_process_nik, machine_number, today, yesterday, daily_inspection_number, doc_number} = route.params
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
						if(featureUser[i].qc_daily_inspection != null){
							if(featureUser[i].qc_daily_inspection.view_permissions == true){
								data.push(
									<View key="aopskdmk21asiun2">
										<Button style={styles.dailyInspectionButton} onPress={() => navigation.navigate('PerJam', {
											qc_daily_inspection_id: qc_daily_inspection_id,
											qc_daily_inspection_item_id: qc_daily_inspection_item_id,
											qc_daily_inspection_method_id: qc_daily_inspection_method_id,
											sys_plant_id: sys_plant_id,
											daily_inspection_number: daily_inspection_number,
											machine_id: machine_id,
											customer_name: customer_name,
											machine_name: machine_name,
											machine_status: machine_status,
											today: today,
											machine_number: machine_number,
											operator_nik: operator_nik, 
											operator_nik_2: operator_nik_2, 
											leader_nik: leader_nik, 
											foreman_nik: foreman_nik,
											qc_process_nik: qc_process_nik,
											yesterday: yesterday,
											doc_number: doc_number
										})} >
											<Text> Per Jam </Text>   
										</Button>
										<Button style={styles.dailyInspectionButton} onPress={() => navigation.navigate('Per4Jam', {
											qc_daily_inspection_id: qc_daily_inspection_id,
											qc_daily_inspection_method_id: qc_daily_inspection_method_id,
											sys_plant_id: sys_plant_id,
											daily_inspection_number: daily_inspection_number,
											product_name: product_name,
											machine_id: machine_id,
											customer_name: customer_name,
											machine_name: machine_name,
											today: today,
											machine_number: machine_number,
											operator_nik: operator_nik, 
											operator_nik_2: operator_nik_2, 
											yesterday: yesterday,
											doc_number: doc_number
										})} >
											<Text> Per 4 Jam </Text>   
										</Button>
										<Button style={styles.dailyInspectionButton} onPress={() => navigation.navigate('PerShift', {
											qc_daily_inspection_id: qc_daily_inspection_id,
											sys_plant_id: sys_plant_id,
											daily_inspection_number: daily_inspection_number,
											product_name: product_name,
											machine_id: machine_id,
											customer_name: customer_name,
											machine_name: machine_name,
											machine_status: machine_status,
											today: today,
											machine_number: machine_number,
											operator_nik: operator_nik, 
											operator_nik_2: operator_nik_2, 
											leader_nik: leader_nik, 
											foreman_nik: foreman_nik,
											qc_process_nik: qc_process_nik,
											yesterday: yesterday,
											doc_number: doc_number
										})} >
											<Text> Per Shift </Text>   
										</Button>
									</View>
								)
							}else{
								data.push(
									<View key="aopskdmk21asiun2">
										<Button style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Per Jam")} >
											<Text> Per Jam </Text>   
										</Button>
										<Button style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Per 4 Jam")} >
											<Text> Per 4 Jam </Text>   
										</Button>
										<Button style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Per Shift")} >
											<Text> Per Shift </Text>   
										</Button>
									</View>
								)

							}
						}
						if(featureUser[i].qc_masspro_qc_leader != null){
							if(featureUser[i].qc_masspro_qc_leader.view_permissions == true){
								data.push(
									<Button key="asn2jo1ij2njs" style={styles.dailyInspectionButton} onPress={() => navigation.navigate('RevisiFirstPieceLeaderQc', {
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
										<Text> Revisi First Piece Leader QC </Text>   
									</Button>	
								)
							}else{
								data.push(
									<Button key="asn2jo1ij2njs" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Revisi First Piece Leader QC")} >
										<Text> Revisi First Piece Leader QC </Text>   
									</Button>	
								)
							}
						}
						if(featureUser[i].qc_masspro_foreman != null){
							if(featureUser[i].qc_masspro_foreman.view_permissions == true){
								data.push(
									<Button key="asXascn2jo1ij2njs" style={styles.dailyInspectionButton} onPress={() => navigation.navigate('RevisiFirstPieceForeman', {
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
										<Text> Revisi First Piece Foreman </Text>
									</Button>
								)
							}else{
								data.push(
									<Button key="asXascn2jo1ij2njs" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Revisi First Piece Foreman")} >
										<Text> Revisi First Piece Foreman </Text>
									</Button>
								)
							}
						}
						if(featureUser[i].qc_last_shoot_qc_leader != null || featureUser[i].qc_last_shoot_foreman != null){
							if(featureUser[i].qc_last_shoot_qc_leader.view_permissions == true || featureUser[i].qc_last_shoot_foreman.view_permissions == truefeatureUser[i].qc_last_shoot_foreman.view_permissions == true){
								data.push(
									<Button key="askdmkwqw" style={styles.dailyInspectionStopButton} onPress={() => navigation.navigate('StopMP', {
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
										<Text style={styles.fontDailyInspectionStopButton}> STOP MP </Text>   
									</Button>
								)
							}else{
								data.push(
									<Button key="askdmkwqw" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Last Shoot Leader QC")} >
										<Text style={styles.fontDailyInspectionStopButton}> STOP MP </Text>   
									</Button>
								)
							}
						}
						if(featureUser[i].qc_masspro_qc_leader != null || featureUser[i].qc_masspro_foreman != null){
							if(featureUser[i].qc_masspro_qc_leader.view_permissions == true && user == 32008107 || user == 21410012 || featureUser[i].qc_masspro_foreman.view_permissions == true && user == 32008107 || user == 21410012){
								data.push(
									<Button key="AscvSacx" style={styles.dailyInspectionContinueButton} onPress={() => navigation.navigate('ContinueMP', {
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
										<Text style={styles.fontDailyInspectionContinueButton}> CONTINUE MP </Text>
									</Button>	
								)
							}else{
								data.push(
									<Button key="AscvSacx" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Update QC Leader")} >
										<Text style={styles.fontDailyInspectionContinueButton}> CONTINUE MP </Text>   
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
					<Text style={styles.fontButtonHeaderChild}>DAILY INSPECTION</Text>
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

export default ListForm;