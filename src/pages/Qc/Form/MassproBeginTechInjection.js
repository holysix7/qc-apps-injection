import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker} from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';

const MassproBeginTechInjection = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {customer_name, sys_plant_id, machine_id, machine_number, machine_name, today} = route.params
	const [data1, setData1] 																							= useState("")
	const [cleaning_mold, setCleaning] 																		= useState("")
	const [standard_parameter, setParam] 																	= useState("")
	const [robot_setting, setRobot] 																			= useState("")
	const [check_cooling, setChannel] 																		= useState("")
	const [four_m_check, setSheet] 																				= useState("")
	const [mold_temp_act, setActMold] 																		= useState("")
	const [remark, setRemark] 																						= useState("")
	const [created_by, setCreatedBy]																			= useState("")
	let created_at 																												= moment().format("YYYY-MM-DD HH:mm:ss")
	const [updated_by, setUpdatedBy]																			= useState("")
	let updated_at 																												= moment().format("YYYY-MM-DD HH:mm:ss")
	const [qc_masspro_main_mold_id, setMaintMoldId]												= useState(0)
	const [qc_masspro_material_preparation_id, setMaterialPreparationId]	= useState(0)
	const [qc_masspro_mold_setter_id, setMoldSetterId]										= useState(0)
	const [hours, setHours]																								= useState(0)
	const [shift, setShift]																								= useState(0)

	const [planningId, setPlanningId]		= useState("")
	const [internal_part_id, setIPI]		= useState("")
	const [eng_product_id, setEngProd]	= useState(0)
	const [massproTI, setMassproTI]			= useState(null)
	const [massproTICleanningMold, setCleaningMold]	  = useState("")
	const [massproTIInputStandard, setInputStandard] 	= useState("")
	const [massproTIRoboSetting, setRoboSetting] 			= useState("")
	const [massproTICoolingChannel, setCooling] 			= useState("")
	const [massproTI4mCheckSheet, set4mCheck]   			= useState("")
	const [massproTIActMoldTemp, setActMoldTemp]   		= useState("")
	const [massproTIRemark, setTIRemark]   						= useState("")
	const prod_machine_id = machine_id
	const status = "new"
	const [tooling_num, setTooling]	= useState("")
	const planning_id = parseInt(planningId)

	const [loading, setLoading] = useState(false)
	const app_version = "0.8.5"

	const submit = async() => {
		setLoading(false)
		const data = {
			eng_product_id,
			prod_machine_id,
			sys_plant_id,
			tooling_num,
			mold_temp_act,
			internal_part_id,
			qc_masspro_main_mold_id,
			qc_masspro_material_preparation_id,
			qc_masspro_mold_setter_id,
			cleaning_mold,
			planning_id,
			standard_parameter,
			robot_setting,
			check_cooling,
			four_m_check,
			remark,
			status,
			created_by,
			created_at,
			updated_by,
			updated_at,
			app_version
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'masspro_ti'
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
			navigation.navigate('ListForm')
			alert("Success Send Data!")
		})
		.catch(function (error){
			alert("Failed Send Data!")
			console.log(error)
		})
	}
	const formOke = async() => {
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const id = await AsyncStorage.getItem('id')
		const name = await AsyncStorage.getItem('name')
		setCreatedBy(id)
		setUpdatedBy(id)

		let jam = moment().format("HH:mm:ss")
		if(parseInt(jam) >= 8 && parseInt(jam) <= 15)
		{
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
			kind: 'masspro_ti',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id
		}

		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setLoading(true)
			setMaintMoldId(response.data.data.qc_masspro_main_mold_id)
			setMaterialPreparationId(response.data.data.qc_masspro_material_preparation_id)
			setMoldSetterId(response.data.data.qc_masspro_mold_setter_id)
			setData1(response.data.data.product_detail)
			setTooling(response.data.data.tooling_num)
			setEngProd(response.data.data.eng_product_id)
			setPlanningId(response.data.data.planning_id)
			setIPI(response.data.data.product_detail.internal_part_id)
			setMassproTI(response.data.data.masspro_ti)
			setCleaningMold(response.data.data.masspro_ti.cleaning_mold)
			setInputStandard(response.data.data.masspro_ti.standard_parameter)
			setRoboSetting(response.data.data.masspro_ti.robot_setting)
			setCooling(response.data.data.masspro_ti.check_cooling)
			set4mCheck(response.data.data.masspro_ti.four_m_check_sheet)
			setActMoldTemp(response.data.data.masspro_ti.mold_temp)
			setTIRemark(response.data.data.masspro_ti.remark)
			console.log("List Data Tech. Injection: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Tech. Injection: ', error)
		})
	}

	const shiftFix = (value) => {
		setHours(value)
	}

	const hString = hours.toString()

	const date = () => {
		var date = []
		if(today != null)
		{
			date.push(
				<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{today}</Text>
			)
		}
		return date
	}

	const updateCleaningMold = () => {
		const updateTI = massproTICleanningMold
		const data = []
		const tiData = massproTI
		if(tiData != null){
			if(updateTI != "OK" && updateTI != "NG"){
				data.push(
					<View key="skwiu21odj" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={cleaning_mold}
						onValueChange={(value) => setCleaning(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="skwiu21odj" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateTI}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="skwiu21odj" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={cleaning_mold}
					onValueChange={(value) => setCleaning(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateStandaradParameter = () => {
		const updateTI = massproTIInputStandard
		const data = []
		const tiData = massproTI
		if(tiData != null){
			if(updateTI != "OK" && updateTI != "NG"){
				data.push(
					<View key="oasiSIj12" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={standard_parameter}
						onValueChange={(value) => setParam(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="oasiSIj12" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateTI}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="oasiSIj12" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={standard_parameter}
					onValueChange={(value) => setParam(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateRoboSetting = () => {
		const updateTI = massproTIRoboSetting
		const data = []
		const tiData = massproTI
		if(tiData != null){
			if(updateTI != "OK" && updateTI != "NG"){
				data.push(
					<View key="kaOPAIU2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={robot_setting}
						onValueChange={(value) => setRobot(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="kaOPAIU2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateTI}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="kaOPAIU2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={robot_setting}
					onValueChange={(value) => setRobot(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateCoolingChannel = () => {
		const updateTI = massproTICoolingChannel
		const data = []
		const tiData = massproTI
		if(tiData != null){
			if(updateTI != "OK" && updateTI != "NG"){
				data.push(
					<View key="SOKwkjasu@13sa" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={check_cooling}
						onValueChange={(value) => setChannel(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="SOKwkjasu@13sa" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateTI}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="SOKwkjasu@13sa" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={check_cooling}
					onValueChange={(value) => setChannel(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const update4CheckSheet = () => {
		const updateTI = massproTI4mCheckSheet
		const data = []
		const tiData = massproTI
		if(tiData != null){
			if(updateTI != "OK" && updateTI != "NG"){
				data.push(
					<View key="sadw123as" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={four_m_check}
						onValueChange={(value) => setSheet(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="sadw123as" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateTI}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="sadw123as" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={four_m_check}
					onValueChange={(value) => setSheet(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateActMoldTemp = () => {
		const updateTI = massproTIActMoldTemp
		const data = []
		const tiData = massproTI
		if(tiData != null){
			if(updateTI != "OK" && updateTI != "NG"){
				data.push(
					<View key="sdk@isajdl1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={mold_temp_act}
						onValueChange={(value) => setActMold(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="sdk@isajdl1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateTI}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="sdk@isajdl1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={mold_temp_act}
					onValueChange={(value) => setActMold(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateRemark = () => {
		const updateTI = massproTIRemark
		const data = []
		const tiData = massproTI
		if(tiData != null){
			if(updateTI == null){
				data.push(
					<View key="sdk@isajdl1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput onChangeText={(value) => setRemark(value)}  style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
					</View>
				)
			}else{
				data.push(
					<View key="sdk@isajdl1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateTI}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="sdk@isajdl1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput onChangeText={(value) => setRemark(value)}  style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
				</View>
			)
		}
		return data
	}

	const updateButton = () => {
		const updateMS = massproTI
		const data = []
		if(updateMS != null || qc_masspro_mold_setter_id == null){
			data.push(
				<View key="asd12q" style={{paddingTop: 10}}>
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center', backgroundColor: '#05c46b'}} onPress={() => alert("Data Material Preparation Already Saved!")}><Text>SAVED</Text></Button>
				</View>
			)
		}else{
			data.push(
				<View key="asd12q" style={{paddingTop: 10}}>
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
				</View>
			)
		}
		return data
	}

	const content = () => {
		var dataContent = []
		if(qc_masspro_mold_setter_id != null){
			dataContent.push(
				<ScrollView key="31" style={{flex: 1}}>
					<TouchableOpacity>
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Cleaning Mold Core / Cavity</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateCleaningMold()}
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Input Standar Parameter</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateStandaradParameter()}
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Robot setting</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateRoboSetting()}
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Check cooling Channel</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateCoolingChannel()}
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>4M Check Sheet</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{update4CheckSheet()}
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Mold Temp ActMold Temp Act</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateActMoldTemp()}
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Remark</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateRemark()}
							</View>
						</View>
						
						<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
							{updateButton()}
						</View>
					</TouchableOpacity>
				</ScrollView>
			)
		}else{
			dataContent.push(
				<ScrollView key="3" style={{flex: 1}}>
					<View style={{marginVertical: 160, marginHorizontal: 40, padding: 40, backgroundColor: '#fff76a', borderWidth: 1, borderRadius: 25, flexDirection: 'row', alignItems: 'center'}}>
						<Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Hubungi Masspro Begin Mold Setter Untuk Segera Isi Form</Text>
					</View>
				</ScrollView>
			)
		}
		return dataContent
	}

	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<View style={{flex: 1, height: 100, backgroundColor: '#F5F5DC', borderWidth: 0.3, flexDirection: 'column'}}>
						
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5DC'}}>
							<Image source={LogoSIP}/>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 100, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#F5F5DC'}}>
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date()}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Masspro Begin Tech. Injection</Text>
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
									<Text style={{fontWeight: 'bold', fontSize: 11}}>{data1 != null ? data1.name : "-"}</Text>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{data1 != null ? data1.internal_part_id : "-"}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{data1 != null ? data1.customer_part_number : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{data1 != null ? data1.model : "-"}</Text>
							</View>
						</View>

						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default MassproBeginTechInjection;