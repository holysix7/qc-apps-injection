import {Image, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import { Container, Text, Button } from 'native-base';
import styles from '../../components/styles/Styling';
import AsyncStorage from "@react-native-community/async-storage";

const ListForm = ({route, navigation}) => {
	const {internal_part_id, model, qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, customer_part_number, machine_id, machine_name, machine_status, operator_nik, operator_nik_2, leader_nik, foreman_nik, qc_process_nik, machine_number, date, daily_inspection_number, doc_number} = route.params
  const [featureUser, setFeature] = useState([]);
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		session()
		setTimeout(() => {
			setLoading(true)
		}, 1000);
	}, [])

	const session = async () => {
    try {
      const feature    = await AsyncStorage.getItem('feature')
			setFeature(JSON.parse(feature))
    } catch (error) {
      console.log('Multi Get Error: ', error.message)
    }
	}
	// console.log(date)
	const loopFeature = () => {
		var data = []
		if(featureUser.length > 0){
			featureUser.map((element, key) => {
				if(sys_plant_id == element.sys_plant_id){
					if(element.qc_daily_inspection != null){
						if(element.qc_daily_inspection.view_permissions == true){
							data.push(
								<View key={'QCDailyInspection',key+3}>
									<Button style={styles.dailyInspectionButton} onPress={() => navigation.navigate('PerJam', {
										internal_part_id: internal_part_id,
										qc_daily_inspection_id: qc_daily_inspection_id,
										qc_daily_inspection_item_id: qc_daily_inspection_item_id,
										qc_daily_inspection_method_id: qc_daily_inspection_method_id,
										sys_plant_id: sys_plant_id,
										daily_inspection_number: daily_inspection_number,
										machine_id: machine_id,
										customer_name: customer_name,
										machine_name: machine_name,
										machine_status: machine_status,
										model: model,
										date: date,
										machine_number: machine_number,
										operator_nik: operator_nik, 
										operator_nik_2: operator_nik_2, 
										leader_nik: leader_nik, 
										foreman_nik: foreman_nik,
										qc_process_nik: qc_process_nik,
										doc_number: doc_number
									})} >
										<Text> Per Jam </Text>   
									</Button>
									<Button style={styles.dailyInspectionButton} onPress={() => navigation.navigate('Per4Jam', {
										internal_part_id: internal_part_id,
										qc_daily_inspection_id: qc_daily_inspection_id,
										qc_daily_inspection_method_id: qc_daily_inspection_method_id,
										sys_plant_id: sys_plant_id,
										daily_inspection_number: daily_inspection_number,
										product_name: product_name,
										machine_id: machine_id,
										customer_name: customer_name,
										machine_name: machine_name,
										model: model,
										date: date,
										machine_number: machine_number,
										operator_nik: operator_nik, 
										operator_nik_2: operator_nik_2, 
										doc_number: doc_number
									})} >
										<Text> Per 4 Jam </Text>   
									</Button>
									<Button style={styles.dailyInspectionButton} onPress={() => navigation.navigate('PerShift', {
										internal_part_id: internal_part_id,
										qc_daily_inspection_id: qc_daily_inspection_id,
										sys_plant_id: sys_plant_id,
										daily_inspection_number: daily_inspection_number,
										product_name: product_name,
										machine_id: machine_id,
										customer_name: customer_name,
										machine_name: machine_name,
										machine_status: machine_status,
										model: model,
										date: date,
										machine_number: machine_number,
										operator_nik: operator_nik, 
										operator_nik_2: operator_nik_2, 
										leader_nik: leader_nik, 
										foreman_nik: foreman_nik,
										qc_process_nik: qc_process_nik,
										doc_number: doc_number
									})} >
										<Text> Per Shift </Text>   
									</Button>
								</View>
							)
						}else{
							data.push(
								<View key={"01Key"}>
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
					if(element.qc_masspro_qc_leader != null){
						if(element.qc_masspro_qc_leader.view_permissions == true){
							data.push(
								<Button key={'Rev1pcs', key+4} style={styles.dailyInspectionButton} onPress={() => navigation.navigate('RevisiFirstPieceLeaderQc', {
									internal_part_id: internal_part_id,
									qc_daily_inspection_id: qc_daily_inspection_id,
									sys_plant_id: sys_plant_id,
									daily_inspection_number: daily_inspection_number,
									product_name: product_name,
									machine_id: machine_id,
									customer_name: customer_name,
									machine_name: machine_name,
									model: model,
									date: date,
									machine_number: machine_number,
									doc_number: doc_number
								})} >
									<Text> Revisi First Piece Leader QC </Text>   
								</Button>	
							)
						}else{
							data.push(
								<Button key={"02Key"} style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Revisi First Piece Leader QC")} >
									<Text> Revisi First Piece Leader QC </Text>   
								</Button>	
							)
						}
					}
					//asdasd
					if(element.qc_masspro_foreman != null){
						if(element.qc_masspro_foreman.view_permissions == true){
							data.push(
								<Button key={'MFore', key+5} style={styles.dailyInspectionButton} onPress={() => navigation.navigate('RevisiFirstPieceForeman', {
									internal_part_id: internal_part_id,
									qc_daily_inspection_id: qc_daily_inspection_id,
									sys_plant_id: sys_plant_id,
									daily_inspection_number: daily_inspection_number,
									product_name: product_name,
									machine_id: machine_id,
									customer_name: customer_name,
									customer_part_number: customer_part_number,
									machine_name: machine_name,
									model: model,
									date: date,
									machine_number: machine_number,
									doc_number: doc_number
								})} >
									<Text> Revisi First Piece Foreman </Text>
								</Button>
							)
						}else{
							data.push(
								<Button key={"03Key"} style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Revisi First Piece Foreman")} >
									<Text> Revisi First Piece Foreman </Text>
								</Button>
							)
						}
					}
				}
			})
		}

		return data
	}	
// abcd
	const loopMP = () => {
		var data = []
		var i
		if(featureUser.length > 0){
			featureUser.map((el, key) => {
				if(sys_plant_id == el.sys_plant_id){
					if(el.qc_last_shoot_qc_leader != null || el.qc_last_shoot_foreman != null){
						if(el.qc_last_shoot_qc_leader.view_permissions == true || el.qc_last_shoot_foreman.view_permissions == true){
							data.push(
								<Button key={'stopMP',key+1} style={styles.dailyInspectionStopButton} onPress={() => navigation.navigate('StopMP', {
									internal_part_id: internal_part_id,
									qc_daily_inspection_id: qc_daily_inspection_id,
									qc_daily_inspection_item_id: qc_daily_inspection_item_id,
									qc_daily_inspection_method_i: qc_daily_inspection_method_id,
									sys_plant_id: sys_plant_id,
									daily_inspection_number: daily_inspection_number,
									product_name: product_name,
									machine_id: machine_id,
									customer_name: customer_name,
									machine_name: machine_name,
									model: model,
									date: date,
									machine_number: machine_number,
									doc_number: doc_number,
									customer_part_number: customer_part_number
								})} >
									<Text style={styles.fontDailyInspectionStopButton}> STOP MP </Text>   
								</Button>
							)
						}else{
							data.push(
								<Button key={'StopMP01', key} style={styles.dailyInspectionStopButtonNotAccess} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Last Shoot Leader QC")} >
									<Text style={styles.fontDailyInspectionStopButton}> STOP MP </Text>   
								</Button>
							)
						}
					}
					if(el.qc_masspro_qc_leader != null || el.qc_masspro_foreman != null || el.qc_masspro_prod_leader != null){
						if(el.qc_masspro_qc_leader.view_permissions == true || el.qc_masspro_foreman.view_permissions == true || el.qc_masspro_prod_leader.view_permissions == true){
							data.push(
								<Button key={'conitnueMP', key+2} style={styles.dailyInspectionContinueButton} onPress={() => navigation.navigate('ContinueMP', {
									internal_part_id: internal_part_id,
									qc_daily_inspection_id: qc_daily_inspection_id,
									sys_plant_id: sys_plant_id,
									daily_inspection_number: daily_inspection_number,
									product_name: product_name,
									machine_id: machine_id,
									customer_name: customer_name,
									machine_name: machine_name,
									model: model,
									date: date,
									machine_number: machine_number,
									doc_number: doc_number,
									customer_part_number: customer_part_number
								})} >
									<Text style={styles.fontDailyInspectionContinueButton}> CONTINUE MP </Text>
								</Button>	
							)
						}else{
							data.push(
								<Button key={'ContinueMP02'} style={styles.dailyInspectionContinueNotAccessButton} onPress={() => alert("Maaf Untuk Saat Ini Fitur Continue MP Sedang Ditahap Pengembangan")} >
									<Text style={styles.fontDailyInspectionContinueButton}> CONTINUE MP </Text>   
								</Button>	
							)
						}
					}
				}
			})
		}
		return data
	}	

	const contentHeader = () => {
		return (
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<Text style={styles.fontButtonHeader}>({machine_number}) - {machine_name}</Text>
				<Text style={styles.fontButtonHeaderChild}>DAILY INSPECTION</Text>
				{doc_number != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{doc_number}</Text> : <View style={styles.viewNoDailyInspection}><Text style={styles.fontNoDailyInspection}> - TIDAK ADA DAILY INSPECTION NUMBER - </Text></View>}
				<Text style={styles.fontButtonFooter}>{product_name}</Text>
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
			<ScrollView style={{backgroundColor: '#dfe0df'}}>
				<View style={{padding: 30}}>
					{loading ? loopFeature() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
				</View>
				<View style={{padding: 30, flexDirection: 'row' }}>
					{loading ? loopMP() : null}
				</View>
			</ScrollView>
		</Container>
	)
}

export default ListForm;