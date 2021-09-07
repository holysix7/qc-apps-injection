import {Image, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, ActivityIndicator, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import app_version from	'../../../app_version/index';
import base_url_submit from	'../../../../API/BaseUrlSubmit';

const MassproBeginMaintMold = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {sys_plant_id, machine_id, customer_name, machine_name, today, machine_number, eng_product_id, access_foreman} = route.params
	// console.log(access_foreman)
	const [mold_condition, setCondition] 	= useState(null)
	const [loading, setLoading] 					= useState(false)
	const [neeple_cooling, setCooling] 		= useState(null)
	const [standard_part, setStandard] 		= useState(null)
	const [remark, setRemark] 						= useState(null)
	const [dataProduct1, setDataProduct1] = useState("")
	const [created_by, setCreatedBy]		  = useState("")
	const [updated_by, setUpdatedBy]		  = useState("")
	const [status_mp, setStatusMP]		  	= useState("Normal")
	const [tooling, setTooling]		  			= useState(null)
	const [hours, setHours]		  					= useState(0)
	const [shift, setShift]		  					= useState(0)
	const date 														= []
	const [planningId, setPlanningId]		  = useState("")
	const [internal_part_id, setDataIPI] 	= useState("")
	const [cavityAmount, setCavMount] 		= useState(null)
	const prod_machine_id 								= machine_id
	const status 													= "new"
	let created_at 												= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 												= moment().format("YYYY-MM-DD HH:mm:ss")
	const [massProMM, setmassProMM]		  	= useState(null)
	const planning_id = parseInt(planningId)

	const submit = async() => {
		setLoading(false)
		const id = await AsyncStorage.getItem('id')
		const approved_by = id
		if(massProMM != null){
			if(massProMM.id != null){
				const masspro_mm_id = massProMM.id
				var data = {
					masspro_mm_id,
					status_mp,
					access_foreman,
					approved_by
				}
			}else{
				if(parseInt(tooling) > 0 && mold_condition != null && neeple_cooling != null && standard_part != null){
					var data = {
						status_mp,
						eng_product_id,
						prod_machine_id,
						sys_plant_id,
						internal_part_id,
						mold_condition,
						neeple_cooling,
						standard_part,
						tooling,
						planning_id,
						remark,
						status,
						created_by,
						created_at,
						updated_by,
						updated_at
					}
				}
			}
		}
		console.log('data: ', data)
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'masspro_mm',
			update_hour: sys_plant_id,
			app_version: app_version
		}
		var config = {
			method: 'put',
			url: base_url_submit,
			params: params,
			headers: { 
				'Authorization': token, 
				'Content-Type': 'application/json', 
				'Cookie': '_denapi_session=ubcfq3AHCuVeTlxtg%2F1nyEa3Ktylg8nY1lIEPD7pgS3YAWwlKOxwA0S9pw7JhvZ2mNkrYl0j62wAWJWJZd7AbfolGuHCwXgEMeJH6EoLiQ%3D%3D--M%2BjBb0uJeHmOf%2B3o--%2F2Fjw57x0Fyr90Ec9FVibQ%3D%3D'
			},
			data : data
		};
		if(parseInt(tooling) > 0 && mold_condition != null && neeple_cooling != null && standard_part != null){
			Axios(config)
			.then(function (response){
				console.log("Res: ", response.status, " Ok")
				setLoading(true)
				Alert.alert(
					"Success Send Data",
					"Berhasil Menyimpan Data",
					[
						{ 
							text: "OK", 
							onPress: () => console.log('200 OK') 
						}
					],
					{ cancelable: false }
				)
				navigation.navigate('ShowPlanning')
			})
			.catch(function (error){
				setLoading(true)
				Alert.alert(
					"Failed Send Data",
					"Gagal Kirim Data, Hubungi IT Department",
					[
						{ 
							text: "OK", 
							onPress: () => console.log('400 BAD') 
						}
					],
					{ cancelable: false }
				)
				console.log(error)
			})
		}else{
			console.log("Gabisa Save Bro")
			setLoading(true)
			Alert.alert(
				"Failed Send Data",
				"Gagal Kirim Data, Harap Perhatikan Form Input!",
				[
					{ 
						text: "OK", 
						onPress: () => console.log('400 BAD') 
					}
				],
				{ cancelable: false }
			)
		}
	}

	const formOke = async() => {
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const id = await AsyncStorage.getItem('id')
		setCreatedBy(id)
		setUpdatedBy(id)
		let jam = moment().format("HH:mm:ss")
		if(parseInt(jam) >= 8 && parseInt(jam) <= 15){
			const nilaiJam = parseInt(jam)
			setShift(2)
			setHours(nilaiJam)
		}else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
			const nilaiJam = parseInt(jam)
			setShift(3)
			setHours(nilaiJam)
		}else{
			const nilaiJam = parseInt(jam)
			setShift(4)
			setHours(nilaiJam)
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'masspro_mm',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			eng_product_id: eng_product_id,
			app_version: app_version
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setLoading(true)
			setDataProduct1(response.data.data.product_1_detail)
			setDataIPI(response.data.data.product_1_detail.internal_part_id)
			setCavMount(response.data.data.product_1_detail.cavity)
			setTooling(response.data.data.planning.tooling_1)
			setPlanningId(response.data.data.planning.id)
			setmassProMM(response.data.data.masspro_mm)
			console.log("List Data Maint. Mold: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Maint. Mold: ', error)
		})
	}
	const shiftFix = (value) => {
		setHours(value)
	}
	const hString = hours.toString()
	if(today != null){
		date.push(
			<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{today}</Text>
		)
	}
	var yesterday = null
	if(yesterday != null)	{
		date.push(
			<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{yesterday}</Text>
		)
	}

	const statusMoldCondition = () => {
		if(massProMM != null){
			if(massProMM.mold_condition != "OK" && massProMM.mold_condition != "NG"){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={mold_condition}
						onValueChange={(value) => setCondition(value)}
						itemStyle={{marginLeft: 0}}
						itemTextStyle={{fontSize: 9}}
						key="asdweq"
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massProMM.mold_condition}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={mold_condition}
					onValueChange={(value) => setCondition(value)}
					itemStyle={{marginLeft: 0}}
					itemTextStyle={{fontSize: 9}}
					key="asdweq"
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
			)
		}
	}

	const neepleCoolingMold = () => {
		if(massProMM != null){
			if(massProMM.neeple_cooling != "OK" && massProMM.neeple_cooling != "NG")
			{
				return (
				<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={neeple_cooling}
					onValueChange={(value) => setCooling(value)}
					itemStyle={{marginLeft: 0}}
					itemTextStyle={{fontSize: 9}}
					key="asdweq"
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
				)
			}else{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massProMM.neeple_cooling}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={neeple_cooling}
					onValueChange={(value) => setCooling(value)}
					itemStyle={{marginLeft: 0}}
					itemTextStyle={{fontSize: 9}}
					key="asdweq"
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
			)
		}
	}

	const standardPart = () => {
		if(massProMM != null){
			if(massProMM.standard_part != "OK" && massProMM.standard_part != "NG")
			{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={standard_part}
						onValueChange={(value) => setStandard(value)}
						itemStyle={{marginLeft: 0}}
						itemTextStyle={{fontSize: 9}}
						key="asdweq"
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massProMM.standard_part}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={standard_part}
					onValueChange={(value) => setStandard(value)}
					itemStyle={{marginLeft: 0}}
					itemTextStyle={{fontSize: 9}}
					key="asdweq"
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
			)
		}
	}

	const remarkData = () => {
		if(massProMM != null){
			if(massProMM.remark != null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massProMM.remark}</Text>
					</View>
				)
			}else{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40, width: 177}} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40, width: 177}} placeholder="Type Here..." />
				</View>
			)
		}
	}

	const updateButton = () => {
		if(access_foreman == true){
			if(massProMM != null){
				if(massProMM.approved_by != null){
					return(
						<View style={{paddingTop: 10}}>
							<Button style={{width: 172, borderRadius: 10, justifyContent: 'center', backgroundColor: '#05c46b'}} onPress={() => alert("Data Material Preparation Already Approved!")}><Text>APPROVED</Text></Button>
						</View>
					)
				}else{
					return(
						<View style={{paddingTop: 10}}>
							<Button style={{width: 172, borderRadius: 10, justifyContent: 'center'}} onPress={() => 
								Alert.alert(
									"Info",
									"Are You Sure?",
									[
										{ text: "Cancel", onPress: () => console.log('Cancel') },
										{ text: "Yes", onPress: () => submit() }
									],
									{ cancelable: true }
								)}
							><Text>APPROVE</Text></Button>
						</View>
					)
				}
			}
		}else{
			if(massProMM != null){
				if(massProMM.id != null){
					return(
						<View style={{paddingTop: 10}}>
							<Button style={{width: 172, borderRadius: 10, justifyContent: 'center', backgroundColor: '#05c46b'}} onPress={() => alert("Data Material Preparation Already Saved!")}><Text>SAVED</Text></Button>
						</View>
					)
				}else{
					return(
						<View key="asd12q" style={{paddingTop: 10}}>
							<Button style={{width: 172, borderRadius: 10, justifyContent: 'center'}} onPress={() => 
								Alert.alert(
									"Info",
									"Are You Sure?",
									[
										{ text: "Cancel", onPress: () => console.log('Cancel') },
										{ text: "Yes", onPress: () => submit() }
									],
									{ cancelable: true }
								)
							}><Text>SAVE</Text></Button>
						</View>
					)
				}
			}
		}
	}

	const updateStatusForeman = () => {
		if(massProMM != null){
			if(massProMM.approved_by == null){
				return (
					<View key="asdw2"  style={{borderWidth: 0.5, borderRadius: 10, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={status_mp}
						onValueChange={(value) => setStatusMP(value)}
						>
							<Picker.Item label="Normal" value="Normal" />
							<Picker.Item label="Waiting" value="Waiting" />
							<Picker.Item label="Next Planning" value="Next Planning" />
						</Picker>
					</View>
				)
			}else{
				return(
					<View key="aoij2o" style={{width: 177, borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massProMM.status_mp}</Text>
					</View>
				)
			}
		}
	}

	const formKhususForeman = () => {
		if(access_foreman == true){
			return (
				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Status</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{updateStatusForeman()}
					</View>
				</View>
			)
		}
	}

// abcd
	const toolingUpdate = () => {
		if(massProMM != null){
			if(massProMM.tooling_num != null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, width: 177, backgroundColor: '#b8b8b8'}}>
						<Text>{massProMM.tooling_num}</Text>
					</View>
				)
			}else{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, width: 177}}>
						<Picker 
						mode="dropdown"
						selectedValue={tooling}
						onValueChange={(value) => setTooling(value)}
						itemStyle={{marginLeft: 0}}
						itemTextStyle={{fontSize: 9}}
						key="asdweq"
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="1" value="1" />
							<Picker.Item label="2" value="2" />
							<Picker.Item label="3" value="3" />
							<Picker.Item label="4" value="4" />
							<Picker.Item label="5" value="5" />
						</Picker>
					</View>
				)	
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, width: 177}}>
					<Picker 
						mode="dropdown"
						selectedValue={tooling}
						onValueChange={(value) => setTooling(value)}
						itemStyle={{marginLeft: 0}}
						itemTextStyle={{fontSize: 9}}
						key="asdweq"
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="1" value="1" />
							<Picker.Item label="2" value="2" />
							<Picker.Item label="3" value="3" />
							<Picker.Item label="4" value="4" />
							<Picker.Item label="5" value="5" />
						</Picker>
				</View>
			)	
		}
	}

	const content = () => {
		var dataContent = []
		dataContent.push(
			<ScrollView key="2" style={{flex: 1}}>
				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Tooling</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{toolingUpdate()}
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Cavity Amount</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8', width: 177}}>
							<Text>{cavityAmount != null ? cavityAmount : "-"}</Text>
						</View>
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Status and Mold Condition</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{statusMoldCondition()}
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Neeple Cooling Mold</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{neepleCoolingMold()}
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Standard Part</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{standardPart()}
					</View>
				</View>
				{formKhususForeman()}
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Remark</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{remarkData()}
					</View>
				</View>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					{updateButton()}
				</View>
			</ScrollView>
		)
		return dataContent
	}

	const pickerItemFunc = () => {
		var record = []
		var data = []
		var jam_ke = 0
		for(var i = 0; i <= 23; i++){
			var j = 8
			jam_ke++
			if(jam_ke == 9){
				jam_ke = 0
				jam_ke++
			}
			if(i < j){
				j *= 2
				var label = 'Shift 3 - ' + jam_ke
			}else if(i < j){
				var label = 'Shift 1 - ' + jam_ke
			}else{
				var label = 'Shift 2 - ' + jam_ke
			}
			data.push({
				label: label,
				value: i
			})
			record.push(
				<Picker.Item key={i} label={label} value={i} />
			)
		}
		return record
	}

	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<View style={{flex: 1, height: 100, backgroundColor: '#dfe0df', borderWidth: 0.3, flexDirection: 'column'}}>
						
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#dfe0df'}}>
							<Image source={LogoSIP}/>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 100, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#dfe0df'}}>
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Masspro Begin Maintenance Mold</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>{customer_name}</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1}}>
									<Text style={{fontWeight: 'bold', fontSize: 17, textAlign: 'center'}}>({machine_number}) - {machine_name}</Text>
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
									<Text style={{fontWeight: 'bold', fontSize: 11}}>{dataProduct1 != null ? dataProduct1.name : "-"}</Text>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 13}}>{dataProduct1 != null ? dataProduct1.internal_part_id : "-"}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{dataProduct1 != null ? dataProduct1.customer_part_number : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{dataProduct1 != null ? dataProduct1.model : "-"}</Text>
							</View>
						</View>
						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default MassproBeginMaintMold;