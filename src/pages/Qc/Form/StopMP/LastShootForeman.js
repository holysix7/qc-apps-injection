import {Image, View, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import moment from 'moment';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import app_version from '../../../app_version/index';

const LastShootForeman = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])
	const {qc_daily_inspection_id, sys_plant_id, machine_id, product_name, customer_name, machine_number, daily_inspection_number, machine_name, today, yesterday} = route.params
	const [hours, setHours]		  										= useState(0)
	const [shift, setShift]		  										= useState(0)
	const [stop_category, setStopCategory]					= useState("")
	const [created_by, setCreatedBy]		  					= useState("")
	const [updated_by, setUpdatedBy]		  					= useState("")
	const [tooling_num, setTooling] 								= useState("")
	const [lastShootFR, setlast_shoot_fr] 					= useState("")
	let created_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	const [eng_product_id, setEngProdId]		  			= useState(0)
	const [data, setData]	=	useState(null)
	const prod_machine_id = machine_id
	const date = []
	const [loading, setLoading] = useState(false)
	var timeNow 	= moment()
	var hoursNow	= parseInt(moment(timeNow).format('H'))
	const submit = async() => {
		setLoading(false)
		const data = {
			eng_product_id,
			prod_machine_id,
			tooling_num,
			sys_plant_id,
			qc_daily_inspection_id,
			stop_category,
			created_by,
			created_at,
			updated_by,
			updated_at,
			app_version
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'last_shoot_fr',
			app_version: app_version
		}
		var config = {
			method: 'put',
			url: 'https://api.tri-saudara.com/api/v2/qcs/update?',
			params: params,
			headers: { 
				'Authorization': token, 
				'Content-Type': 'application/json', 
				'Cookie': '_denapi_session=ubcfq3AHCuVeTlxtg%2F1nyEa3Ktylg8nY1lIEPD7pgS3YAWwlKOxwA0S9pw7JhvZ2mNkrYl0j62wAWJWJZd7AbfolGuHCwXgEMeJH6EoLiQ%3D%3D--M%2BjBb0uJeHmOf%2B3o--%2F2Fjw57x0Fyr90Ec9FVibQ%3D%3D'
			},
		data : data
		};
		Axios(config)
		.then(function (response){
			setLoading(true)
			console.log("Res: ", response.status, " Ok")
			navigation.navigate('Qc')
			alert("Success Send Data!")
		})
		.catch(function (error){
			setLoading(true)
			alert("Isi Remark Dengan Action Yang Diambil!")
			console.log(error)
		})
	}

	const formOke = async() => {
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const id = await AsyncStorage.getItem('id')
		setCreatedBy(id)
		setUpdatedBy(id)		
		if(hoursNow >= 8 && hoursNow <= 15){
			setShift(2)
			setHours(hoursNow)
			var shift_id	= 2
		}else if(hoursNow >= 16 && hoursNow <= 23){
			setShift(3)
			setHours(hoursNow)
			var shift_id	= 3
		}else{
			setShift(4)
			setHours(hoursNow)
			var shift_id	= 4
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'last_shoot_fr',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			hrd_work_shift_id: shift_id,
			hours: hoursNow,
			qc_daily_inspection_id: qc_daily_inspection_id,
			app_version: app_version
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setLoading(true)
			setData(response.data.data.daily_inspection)
			setEngProdId(response.data.data.eng_product_id)
			setTooling(response.data.data.daily_inspection.tooling_num)
			setlast_shoot_fr(response.data.data.last_shoot_fr)
			console.log("List Data Last Shoot Foreman: ", response.data.status, "OK")
		})
		.catch(error => {
			setLoading(true)
			console.log('List Data Last Shoot Foreman: ', error)
		})

	}

	const shiftFix = (value) => {
		setHours(value)
	}

	const hString = hours.toString()
	
	if(today != null)
	{
		date.push(
			<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{today}</Text>
		)
	}
	if(yesterday != null)
	{
		date.push(
			<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{yesterday}</Text>
		)
	}

	const updateStopCategory = () => {
		var data = []
		if(lastShootFR != null){
			if(lastShootFR.stop_category != null){
				data.push(
					<View key="asjdnoi2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', backgroundColor: '#b8b8b8'}}>
						<Text style={{paddingLeft: 5}}>{lastShootFR.stop_category == null ? "-" : lastShootFR.stop_category}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asjdnoi2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center'}}>
					<Picker 
					mode="dropdown"
					selectedValue={stop_category}
					onValueChange={(value) => setStopCategory(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="Sched PPIC" value="Sched PPIC" />
						<Picker.Item label="There's No Packing" value="There's No Packing" />
						<Picker.Item label="There's No Material" value="There's No Material" />
						<Picker.Item label="There's No Operator" value="There's No Operator" />
						<Picker.Item label="Mold's Problem" value="Mold's Problem" />
						<Picker.Item label="Machine's Problem" value="Machine's Problem" />
						<Picker.Item label="Quality's Problem" value="Quality's Problem" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateButton = () => {
		var data = []
		if(lastShootFR != null){
			data.push(
				<View key="aPOkmw">
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center', backgroundColor: '#05c46b'}} onPress={() => alert("Data Already Saved!")}><Text>SAVED</Text></Button>
				</View>
			)
		}else{
			data.push(
				<View key="asomaw312">
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
				</View>
			)
		}
		return data
	}

	const content = () => {
		var dataContent = []
		if(data != null){
			if(data.cavity != null){
				dataContent.push(
					<ScrollView key="askjdn2" style={{flex: 1}}>
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Tooling</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								<View style={{height: 40, justifyContent: 'center'}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
										<Text>{tooling_num != null ? tooling_num : "-"}</Text>
									</View>
								</View>
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Cavity Amount</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{data.cavity != null ? data.cavity : "-"}</Text>
								</View>
							</View>
						</View>
		
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Stop Category</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateStopCategory()}
							</View>
						</View>
		
						<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
							{updateButton()}
						</View>
					</ScrollView>
				)
			}else{
				dataContent.push(
					<ScrollView key="29" style={{flex: 1}}>
						<View style={{marginVertical: 160, marginHorizontal: 40, padding: 40, backgroundColor: '#fff76a', borderWidth: 1, borderRadius: 25, flexDirection: 'row', alignItems: 'center'}}>
							<Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Hubungi Leader QC Untuk Segera Isi Form Last Shoot Leader QC</Text>
						</View>
					</ScrollView>
				)
			}
		}else{
			dataContent.push(
				<ScrollView key="29" style={{flex: 1}}>
					<View style={{marginVertical: 160, marginHorizontal: 40, padding: 40, backgroundColor: '#fff76a', borderWidth: 1, borderRadius: 25, flexDirection: 'row', alignItems: 'center'}}>
						<Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Hubungi Leader QC Untuk Segera Isi Form Last Shoot Leader QC</Text>
					</View>
				</ScrollView>
			)
		}
		return dataContent
	}

	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex: 1}} >
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<View style={{flex: 1, height: 120, backgroundColor: '#dfe0df', borderWidth: 0.3, flexDirection: 'column'}}>
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#dfe0df'}}>
							<Image source={LogoSIP}/>
							<Text style={{fontSize: 10, fontWeight: 'bold', paddingBottom: 5}}>{daily_inspection_number}</Text>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 100, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#dfe0df'}}>
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Last Shoot Foreman</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>{customer_name}</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1}}>
									<Text style={{fontWeight: 'bold', fontSize: 17}}>({machine_number}) - {machine_name}</Text>
									<View style={{borderWidth: 0.5, width: 150, height: 25, justifyContent: 'center'}}>
										<Picker 
										mode="dropdown"
										selectedValue={hString}
										onValueChange={(value) => shiftFix(value)}
										itemStyle={{marginLeft: 0}}
										itemTextStyle={{fontSize: 9}}
										>
											<Picker.Item label="Shift 1 - 1" value="8" />
											<Picker.Item label="Shift 1 - 2" value="9" />
											<Picker.Item label="Shift 1 - 3" value="10" />
											<Picker.Item label="Shift 1 - 4" value="11" />
											<Picker.Item label="Shift 1 - 5" value="12" />
											<Picker.Item label="Shift 1 - 6" value="13" />
											<Picker.Item label="Shift 1 - 7" value="14" />
											<Picker.Item label="Shift 1 - 8" value="15" />
											<Picker.Item label="Shift 2 - 1" value="16" />
											<Picker.Item label="Shift 2 - 2" value="17" />
											<Picker.Item label="Shift 2 - 3" value="18" />
											<Picker.Item label="Shift 2 - 4" value="19" />
											<Picker.Item label="Shift 2 - 5" value="20" />
											<Picker.Item label="Shift 2 - 6" value="21" />
											<Picker.Item label="Shift 2 - 7" value="22" />
											<Picker.Item label="Shift 2 - 8" value="23" />
											<Picker.Item label="Shift 3 - 1" value="0" />
											<Picker.Item label="Shift 3 - 2" value="1" />
											<Picker.Item label="Shift 3 - 3" value="2" />
											<Picker.Item label="Shift 3 - 4" value="3" />
											<Picker.Item label="Shift 3 - 5" value="4" />
											<Picker.Item label="Shift 3 - 6" value="5" />
											<Picker.Item label="Shift 3 - 7" value="6" />
											<Picker.Item label="Shift 3 - 8" value="7" />
										</Picker>
									</View>
									<Text style={{fontWeight: 'bold', fontSize: 11}}>{product_name}</Text>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data != null ? data.internal_part_id : "-"}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data != null ? data.customer_part_number : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data != null ? data.model : "-"}</Text>
							</View>
						</View>
						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default LastShootForeman;