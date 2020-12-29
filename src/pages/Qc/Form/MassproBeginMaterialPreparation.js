import {Image, View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Container, Text, Button, Picker} from 'native-base';
import AsyncStorage from "@react-native-community/async-storage";
import LogoSIP from '../../../assets/logo-sip370x50.png';
import Axios from 'axios';
import moment from 'moment';

const MassproBeginMaterialPreparation = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {product_name, sys_plant_id, machine_id, customer_name, machine_name, today, yesterday} = route.params
	const [material_standard, setConditionMaterial] = useState("")
	const [cleaning_hopper, setHopper] 							= useState("")
	const [hopper_temp, setConditionHopper] 				= useState("")
	const [temp_hopper_val, setTempHopper] 					= useState("")
	const [dataProduct1, setDataProduct1] 					= useState("")
	const [created_by, setCreatedBy]								= useState("")
	const [updated_by, setUpdatedBy]								= useState("")
	const [massproMP, setMassporMP]																						= useState("")
	const [massproMPCleaningHopper, setMassporMPCleanningHopper]							= useState("")
	const [massproMPMaterialStandard, setMassporMPMaterialStandard]						= useState("")
	const [massproMPTemperatureHopper, setMassporMPTemperaturHopper]					= useState("")
	const [massproMPTemperatureHopperNote, setMassporMPTemperaturHopperNote]	= useState("")
	const [massproMPRemark, setMassporMPRemark]																= useState("")
	const [massproMPInternalPartId, setMassporMPIPI]													= useState("")
	const [eng_product_id, setEngProdId] 						= useState("")
	const [cavityAmount, setCavityAmount]						= useState("")
	const prod_machine_id 													= machine_id
	let dying_material 														  = moment().format("YYYY-MM-DD hh:mm:ss A")
	let created_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	const [remark, setRemark] 											= useState("")
	const [qc_masspro_main_mold_id, setMaintMoldId]	= useState(null)
	const [hours, setHours]		  										= useState(0)
	const [shift, setShift]		  										= useState(0)
	const [planningId, setPlanningId]		 		 				= useState("")
	const [internal_part_id, setIPI]								= useState("")
	const date = []
	const status = "new"
	const [tooling_num, setTooling]	= useState("")
	const [dataMaterial, setMaterialData] = useState("")
	const [temp_hopper, setTemperaturHopper] = useState("")
	const planning_id = parseInt(planningId)

	const [loading, setLoading] = useState(false)

	const submit = async() => {
		setLoading(false)
		const data = {
			eng_product_id,
			prod_machine_id,
			sys_plant_id,
			tooling_num,
			temp_hopper_val,
			cleaning_hopper,
			planning_id,
			internal_part_id,
			material_standard,
			qc_masspro_main_mold_id,
			hopper_temp,
			remark,
			status,
			created_by,
			created_at,
			updated_by,
			updated_at,
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'masspro_mp'
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
			kind: 'masspro_mp',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setLoading(true)
			setDataProduct1(response.data.data.product_detail)
			setIPI(response.data.data.product_detail.internal_part_id)
			setEngProdId(response.data.data.product_detail.id)
			setCavityAmount(response.data.data.product_detail.cavity)
			setMaintMoldId(response.data.data.qc_masspro_main_mold_id)
			setTooling(response.data.data.tooling_num)
			setMaterialData(response.data.data.material_detail)
			setTemperaturHopper(response.data.data.temp_hopper_val)
			setPlanningId(response.data.data.planning_id)
			setMassporMP(response.data.data.masspro_mp)
			setMassporMPCleanningHopper(response.data.data.masspro_mp.cleaning_hopper)
			setMassporMPMaterialStandard(response.data.data.masspro_mp.material_standard)
			setMassporMPTemperaturHopperNote(response.data.data.masspro_mp.temperature_hopper_note)
			setMassporMPTemperaturHopper(response.data.data.masspro_mp.temperature_hopper)
			setMassporMPRemark(response.data.data.masspro_mp.remark)
			setMassporMPIPI(response.data.data.masspro_mp.internal_part_id)
			console.log("List Data Material Preparation: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Material Preparation: ', error)
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

	const updateCleaningHopper = () => {
		const updateCleaning = massproMPCleaningHopper
		const data = []
		const mpData = massproMP
		if(mpData != null){
			if(updateCleaning != "OK" && updateCleaning != "NG"){
				data.push(
					<View key="123sdaw" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center'}}>
						<Picker 
						mode="dropdown"
						selectedValue={cleaning_hopper}
						onValueChange={(value) => setHopper(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="123sdaw" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateCleaning}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="123sdaw" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center'}}>
					<Picker 
					mode="dropdown"
					selectedValue={cleaning_hopper}
					onValueChange={(value) => setHopper(value)}
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

	const updateMaterialStandard = () => {
		const updateMS = massproMPMaterialStandard
		const data = []
		const mpData = massproMP
		if(mpData != null){
			if(updateMS != "OK" && updateMS != "NG"){
				data.push(
					<View key="asdwe1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center'}}>
						<Picker 
						mode="dropdown"
						selectedValue={material_standard}
						onValueChange={(value) => setConditionMaterial(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asdwe1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateMS}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asdwe1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center'}}>
					<Picker 
					mode="dropdown"
					selectedValue={material_standard}
					onValueChange={(value) => setConditionMaterial(value)}
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

	const updateTemperaturHopper = () => {
		const updateMS = massproMPTemperatureHopperNote
		const data = []
		const mpData = massproMP
		if(mpData != null){
			if(updateMS != null){
				data.push(
					<View key="asd23" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', backgroundColor: '#b8b8b8', paddingLeft: 5}}>
						<Text>{updateMS}</Text>
					</View>
				)
			}else{
				data.push(
					<View key="asd23" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center'}}>
						<TextInput onChangeText={(value) => setTempHopper(value)} keyboardType='numeric' style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			data.push(
				<View key="asd23" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center'}}>
					<TextInput onChangeText={(value) => setTempHopper(value)} keyboardType='numeric' style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
				</View>
			)
		}
		return data
	}

	const updateTemperaturHopperSelect = () => {
		const updateMS = massproMPTemperatureHopper
		const data = []
		const mpData = massproMP
		if(mpData != null){
			if(updateMS != "OK" && updateMS != "NG"){
				data.push(
					<View key="asdweq1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center'}}>
						<Picker 
						mode="dropdown"
						selectedValue={hopper_temp}
						onValueChange={(value) => setConditionHopper(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asdweq1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateMS}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asdweq1" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center'}}>
					<Picker 
					mode="dropdown"
					selectedValue={hopper_temp}
					onValueChange={(value) => setConditionHopper(value)}
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
		const updateMS = massproMPRemark
		const data = []
		const mpData = massproMP
		if(mpData != null){
			if(updateMS != null){
				data.push(
					<View key="asd23" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', backgroundColor: '#b8b8b8', paddingLeft: 5}}>
						<Text>{updateMS}</Text>
					</View>
				)
			}else{
				data.push(
					<View key="asd23" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			data.push(
				<View key="asd23" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
				</View>
			)
		}
		return data
	}

	const updateButton = () => {
		const updateMS = massproMP
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
		if(qc_masspro_main_mold_id != null){
			dataContent.push(
				<ScrollView key="3" style={{flex: 1}}>
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "40%"}}>
							<Text style={{fontSize: 14}}>Cleaning Hopper</Text>
						</View>
						<View style={{padding: 10, width: "6%"}}>
							<Text>:</Text>
						</View>
						<View style={{padding: 4, width: "54%"}}>
							{updateCleaningHopper()}
						</View>
					</View>
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "40%"}}>
							<Text style={{fontSize: 14}}>Material By Standard</Text>
						</View>
						<View style={{padding: 10, width: "6%"}}>
							<Text>:</Text>
						</View>
						<View style={{padding: 4, width: "29%"}}>
							<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
								<Text style={{fontSize: 9.5}}>{dataMaterial.name}</Text>
							</View>
						</View>
						<View style={{padding: 4, width: "25%"}}>
							{updateMaterialStandard()}
						</View>
					</View>
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "40%"}}>
							<Text style={{fontSize: 14}}>Temperatur Hopper</Text>
						</View>
						<View style={{padding: 10, width: "6%"}}>
							<Text>:</Text>
						</View>
						<View style={{padding: 4, width: "29%"}}>
							{updateTemperaturHopper()}
						</View>
						<View style={{padding: 4, width: "25%"}}>
							{updateTemperaturHopperSelect()}
						</View>
					</View>
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "40%"}}>
							<Text style={{fontSize: 14}}>Drying Material</Text>
						</View>
						<View style={{padding: 10, width: "6%"}}>
							<Text>:</Text>
						</View>
						<View style={{paddingTop: 14}}>
							<Text style={{fontSize: 12, fontWeight: 'bold'}}>Start From:</Text>
						</View>
						<View style={{paddingTop: 14, paddingLeft: 4}}>
							<Text style={{fontSize: 12}}>{dying_material}</Text>
						</View>
					</View>
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "40%"}}>
							<Text>Remark</Text>
						</View>
						<View style={{padding: 10, width: "6%"}}>
							<Text>:</Text>
						</View>
						<View style={{padding: 4, width: "54%"}}>
							{updateRemark()}
						</View>
					</View>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						{updateButton()}
					</View>
				</ScrollView>
			)
		}else{
			dataContent.push(
				<ScrollView key="3" style={{flex: 1}}>
					<View style={{marginVertical: 160, marginHorizontal: 40, padding: 40, backgroundColor: 'red', borderWidth: 1, borderRadius: 25, flexDirection: 'row', alignItems: 'center'}}>
						<Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Hubungi Masspro Begin Maintenance Mold Untuk Segera Isi Form</Text>
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
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Masspro Begin Material Preparation</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>{customer_name}</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1}}>
									<Text style={{fontWeight: 'bold', fontSize: 17}}>{machine_name}</Text>
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
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{dataProduct1 != null ? dataProduct1.internal_part_id : "-"}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{dataProduct1 != null ? dataProduct1.customer_part_number : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#F5F5DC'}}>
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

export default MassproBeginMaterialPreparation;