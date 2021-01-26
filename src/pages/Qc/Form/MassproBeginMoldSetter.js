import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker} from 'native-base';
import AsyncStorage from "@react-native-community/async-storage";
import LogoSIP from '../../../assets/logo-sip370x50.png';
import Axios from 'axios';
import moment from 'moment';
import app_version from	'../../app_version/index';

const MassproBeginMoldSetter = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])
	const {customer_name, sys_plant_id, machine_id, machine_number, machine_name, today, eng_product_id} = route.params
	const [clamping_bolt, setClamping] 																	= useState("")
	const [cooling_system, setCooling] 																		= useState("")
	const [limit_switch, setSlider] 																			= useState("")
	const [eject_stroke, setStroke] 																			= useState("")
	const [touching_nozzle, setTouching] 																	= useState("")
	const [hydraulic_core, setHydraulic] 																	= useState("")
	const [remark, setRemark] 																						= useState("")
	const [created_by, setCreatedBy]																			= useState("")
	const [updated_by, setUpdatedBy]																			= useState("")
	const [data1, setData1]																								= useState("")
	const [qc_masspro_main_mold_id, setMaintMoldId]												= useState(0)
	const [qc_masspro_material_preparation_id, setMaterialPreparationId]	= useState(0)
	const [hours, setHours]		  																					= useState(0)
	const [shift, setShift]		  																					= useState(0)
	let created_at 																												= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 																												= moment().format("YYYY-MM-DD HH:mm:ss")
	const [massproMS, setMassproMS]																				= useState("")
	const [massproMSClampingBolt, setMassproMSClampingBolt]								= useState("")
	const [massproMsCoolingSystem, setMassproMSCoolingSystem]							= useState("")
	const [massproMsLimitSwitch, setLimitSwitch] 													= useState("")
	const [massproMsEjectStroke, setEjectStroke] 													= useState("")
	const [massproMsTouchingNozzle, setTouchingNozzle] 										= useState("")
	const [massproMSHydraulicCore, setHydraulicCore]	 										= useState("")
	const [massproMSRemark, setMsRemark]							 										= useState("")
	const prod_machine_id 								= machine_id
	const [planningId, setPlanningId]		 		 				= useState("")
	const [internal_part_id, setIPI] 							  = useState("")
	const status = "new"
	const [tooling_num, setTooling]	= useState("")
	const planning_id = parseInt(planningId)

	const [loading, setLoading] = useState(false)

	const submit = async() => {
		setLoading(false)
		const data = {
			eng_product_id,
			qc_masspro_main_mold_id,
			qc_masspro_material_preparation_id,
			tooling_num,
			sys_plant_id,
			prod_machine_id,
			planning_id,
			clamping_bolt,
			cooling_system,
			internal_part_id,
			planningId,
			limit_switch,
			eject_stroke,
			touching_nozzle,
			hydraulic_core,
			remark,
			status,
			created_by,
			created_at,
			updated_by,
			updated_at
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'masspro_ms',
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
			navigation.navigate('ShowPlanning')
			alert("Success Send Data!")
		})
		.catch(function (error){
			alert("Failed Send Data! ", error)
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
			kind: 'masspro_ms',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			app_version: app_version,
			eng_product_id: eng_product_id
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setLoading(true)
			setMaintMoldId(response.data.data.qc_masspro_main_mold_id)
			setMaterialPreparationId(response.data.data.qc_masspro_material_preparation_id)
			setData1(response.data.data.product_detail)
			setIPI(response.data.data.product_detail.internal_part_id)
			setTooling(response.data.data.tooling_num)
			setPlanningId(response.data.data.planning_id)
			setMassproMS(response.data.data.masspro_ms)
			setMassproMSClampingBolt(response.data.data.masspro_ms.clamping_bolt)
			setMassproMSCoolingSystem(response.data.data.masspro_ms.cooling_system)
			setLimitSwitch(response.data.data.masspro_ms.cooling_system)
			setEjectStroke(response.data.data.masspro_ms.eject_stroke)
			setTouchingNozzle(response.data.data.masspro_ms.touching_nozzle)
			setHydraulicCore(response.data.data.masspro_ms.hydraulic_core_pack)
			setMsRemark(response.data.data.masspro_ms.remark)
			console.log("List Data Mold Setter: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Mold Setter: ', error)
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

	const updateClampingBolt = () => {
		const clampping_bolt = massproMSClampingBolt
		const data = []
		const msData = massproMS
		if(msData != null){
			if(clampping_bolt != "OK" && clampping_bolt != "NG"){
				data.push(
					<View key="1231" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={clamping_bolt}
						onValueChange={(value) => setClamping(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="1231" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor:'#b8b8b8'}}>
						<Text>{clampping_bolt}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="1231" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={clamping_bolt}
					onValueChange={(value) => setClamping(value)}
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

	const updateCoolingSystem = () => {
		const updateMS = massproMsCoolingSystem
		const data = []
		const msData = massproMS
		if(msData != null){
			if(updateMS != "OK" && updateMS != "NG"){
				data.push(
					<View key="asd231s" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={cooling_system}
						onValueChange={(value) => setCooling(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asd231s" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor:'#b8b8b8'}}>
						<Text>{updateMS}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asd231s" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={cooling_system}
					onValueChange={(value) => setCooling(value)}
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

	const updateLimitSwitch = () => {
		const updateMS = massproMsLimitSwitch
		const data = []
		const msData = massproMS
		if(msData != null){
			if(updateMS != "OK" && updateMS != "NG"){
				data.push(
					<View key="asd231s" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={limit_switch}
						onValueChange={(value) => setSlider(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asd231s" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateMS}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asd231s" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={limit_switch}
					onValueChange={(value) => setSlider(value)}
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

	const updateEjectStroke = () => {
		const updateMS = massproMsEjectStroke
		const data = []
		const msData = massproMS
		if(msData != null){
			if(updateMS != "OK" && "NG"){
				data.push(
					<View key="asdw231" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={eject_stroke}
						onValueChange={(value) => setStroke(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asdw231" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateMS}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asdw231" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={eject_stroke}
					onValueChange={(value) => setStroke(value)}
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

	const updateTouchingNozzle = () => {
		const updateMS = massproMsTouchingNozzle
		const data = []
		const msData = massproMS
		if(msData != null){
			if(updateMS != "OK" && updateMS != "NG"){
				data.push(
					<View key="23ase1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={touching_nozzle}
						onValueChange={(value) => setTouching(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="23ase1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateMS}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="soiko2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={touching_nozzle}
					onValueChange={(value) => setTouching(value)}
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

	const updateHydraulicCore = () => {
		const updateMS = massproMSHydraulicCore
		const data = []
		const msData = massproMS
		if(msData != null){
			if(updateMS != "OK" && updateMS != "NG" && updateMS != "no_check"){
				data.push(
					<View key="skp21" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={hydraulic_core}
						onValueChange={(value) => setHydraulic(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
							<Picker.Item label="No Check" value="no_check" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="skp21" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateMS}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="skp21" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={hydraulic_core}
					onValueChange={(value) => setHydraulic(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
						<Picker.Item label="No Check" value="no_check" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateRemark = () => {
		const updateMS = massproMSRemark
		const data = []
		const msData = massproMS
		if(msData != null){
			if(updateMS != null){
				data.push(
					<View key="skp21" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor:'#b8b8b8'}}>
						<Text>{updateMS}</Text>
					</View>				
				)
			}else{
				data.push(
					<View key="skp21" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			data.push(
				<View key="skp21" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
				</View>
			)
		}
		return data
	}

	const updateButton = () => {
		const updateMS = massproMS
		const data = []
		if(updateMS != null){
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
		if(qc_masspro_material_preparation_id != null){
			dataContent.push(
				<ScrollView key="23" style={{flex: 1}}>
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Clamping Bolt</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							{updateClampingBolt()}
						</View>
					</View>

					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Cooling System</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							{updateCoolingSystem()}
						</View>
					</View>
					
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Limit Switch Ejector / Slider</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							{updateLimitSwitch()}
						</View>
					</View>
					
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Eject Stroke</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							{updateEjectStroke()}
						</View>
					</View>
					
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Touching Nozzle With SprueBush</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							{updateTouchingNozzle()}
						</View>
					</View>
					
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Hydraulic Core Pack</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							{updateHydraulicCore()}
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
					
				</ScrollView>
			)
		}else{
			dataContent.push(
				<ScrollView key="3" style={{flex: 1}}>
					<View style={{marginVertical: 160, marginHorizontal: 40, padding: 40, backgroundColor: '#fff76a', borderWidth: 1, borderRadius: 25, flexDirection: 'row', alignItems: 'center'}}>
						<Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Hubungi Masspro Begin Material Preparation Untuk Segera Isi Form</Text>
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
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Masspro Begin Mold Setter</Text>
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
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "40%", backgroundColor: '#F5F5DC'}}>
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

export default MassproBeginMoldSetter;