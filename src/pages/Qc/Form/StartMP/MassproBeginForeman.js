import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator,Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import checkImage from '../../../../assets/check.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import app_version from '../../../app_version/index';
import base_url_submit from '../../../../API/BaseUrlSubmit';

const MassproBeginForeman = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {sys_plant_id, machine_id, customer_name, machine_number, machine_name, today, eng_product_id} = route.params
	const [tooling_num, setTooling] = useState("")
	const [judgement, setKeputusan] = useState("")
	const [remark, setRemark] 			= useState(null)
	const [hours, setHours]		  		= useState(0)
	const [shift, setShift]		  		= useState(0)
	const [data1, setData1]					= useState("")
	const [cavity, setCavityData]		= useState(null)

	const [qc_masspro_main_mold_id, setMaintMoldId] 											= useState(null)
	const [qc_masspro_material_preparation_id, setMaterialPreparationId] 	= useState(null)
	const [qc_masspro_mold_setter_id, setSetter] 													= useState(null)
	const [qc_masspro_tech_injection_id, setTechId] 											= useState(null)
	const [qc_masspro_prod_leader_id, setProdLeaderId] 										= useState(null)
	const [qc_masspro_qc_leader_id, setQcLeaderId] 												= useState(null)

	const [qc_masspro_main_mold_status, setMaintMoldStatus] 		= useState(null)
	const [qc_masspro_material_preparation_status, setMaterial] = useState(null)
	const [qc_masspro_mold_setter_status, setMoldSetterStatus]  = useState(null)
	const [qc_masspro_tech_injection_status, setTechInjection]  = useState(null)
	const [qc_masspro_prod_leader_status, setProdLeaderStatus]  = useState(null)
	const [qc_masspro_qc_leader_status, setQcLeaderStatus] 		  = useState(null)
	
	const [created_by, setCreatedBy]	= useState("")
	let created_at 										= moment().format("YYYY-MM-DD HH:mm:ss")
	const [updated_by, setUpdatedBy]	= useState("")
	let updated_at 										= moment().format("YYYY-MM-DD HH:mm:ss")
	const prod_machine_id 						= machine_id
	
	const [planningId, setPlanningId] 									= useState("")
	const [internal_part_id, setIPI] 										= useState("")
	const [massproFR, setMassproFR] 		  							= useState("")
	const [updateMaint, setUpdateMaint] 								= useState("")
	const [updateMaterial, setUpdateMaterial] 					= useState("")
	const [updateMoldSetter, setUpdateMoldSetter] 			= useState("")
	const [updateTechInjection, setUpdateTechInjection] = useState("")
	const [updateProdLeader, setUpdateProdLeader] 			= useState("")
	const [updateQCLeader, setUpdateQCLeader] 					= useState("")
	const [updateJudgement, seUpdateKeputusan] 					= useState("")
	const [updateRemark, seUpdateRemark] 								= useState(null)
	
	const [machine_status, setMachineStatus] 						= useState("")
	
	const planning_id = parseInt(planningId)
	const status 			= "approve"
	
	const [loading, setLoading] = useState(false)
	const submit = async() => {
		setLoading(false)
		if(data1 != null){
			if(data1.cavity != null){
				if(qc_masspro_main_mold_status != null && qc_masspro_material_preparation_status != null && qc_masspro_mold_setter_status != null && qc_masspro_tech_injection_status != null && qc_masspro_prod_leader_status != null && qc_masspro_qc_leader_status){
					const data = {
						sys_plant_id,
						prod_machine_id,
						eng_product_id,
						tooling_num,
						planning_id,
						cavity,
						internal_part_id,
						qc_masspro_main_mold_id,
						qc_masspro_material_preparation_id,
						qc_masspro_mold_setter_id,
						qc_masspro_tech_injection_id,
						qc_masspro_prod_leader_id,
						qc_masspro_qc_leader_id,
						qc_masspro_main_mold_status,
						qc_masspro_material_preparation_status,
						qc_masspro_mold_setter_status,
						qc_masspro_tech_injection_status,
						qc_masspro_prod_leader_status,
						qc_masspro_qc_leader_status,
						remark,
						status,
						judgement,
						created_by,
						created_at,
						updated_by,
						updated_at,
						app_version
					}
					const token = await AsyncStorage.getItem("key")
					const params = {
						tbl: 'daily_inspection',
						kind: 'masspro_fr',
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
					Axios(config)
					.then(function (response){
						setLoading(true)
						console.log("Res: ", response.status, " Ok")
						navigation.navigate('Qc')
						alert("Success Send Data!")
					})
					.catch(function (error){
						setLoading(true)
						console.log(error)
						alert("Failed Send Data!")
					})
				}else{
					alert("Harap Perhatikan Form Input")
				}
			}else{
				alert("Gagal Simpan Data, Tidak Ada Nilai Cavity. Harap Hubungi Engineering")
			}
		}else{
			alert("Gagal Simpan Data, Hubungi IT Department.")
		}
	}

// abcd
	const formOke = async() => {
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const name = await AsyncStorage.getItem('name')
		const id = await AsyncStorage.getItem('id')
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
			kind: 'masspro_fr',
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
			setSetter(response.data.data.qc_masspro_mold_setter_id)
			setTechId(response.data.data.qc_masspro_tech_injection_id)
			setProdLeaderId(response.data.data.qc_masspro_prod_leader_id)
			setQcLeaderId(response.data.data.qc_masspro_qc_leader_id)
			setMachineStatus(response.data.data.machine_status)
			setData1(response.data.data.product_detail)
			setCavityData(response.data.data.product_detail.cavity)
			setTooling(response.data.data.tooling_num)
			setPlanningId(response.data.data.planning_id)
			setIPI(response.data.data.product_detail.internal_part_id)
			setMassproFR(response.data.data.masspro_fr)
			setUpdateMaint(response.data.data.qc_masspro_main_mold_status)
			setUpdateMaterial(response.data.data.qc_masspro_material_preparation_status)
			setUpdateMoldSetter(response.data.data.qc_masspro_mold_setter_status)
			setUpdateTechInjection(response.data.data.qc_masspro_tech_injection_status)
			setUpdateProdLeader(response.data.data.qc_masspro_prod_leader_status)
			setUpdateQCLeader(response.data.data.qc_masspro_qc_leader_status)
			seUpdateKeputusan(response.data.data.masspro_fr.judgement)
			seUpdateRemark(response.data.data.masspro_fr.remark)
			console.log("List Data Foreman: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Foreman: ', error)
		})
	}

	const shiftFix = (value) => {
		setHours(value)
	}

	const hString = hours.toString()

	const date = () => {
		var date = []
		if(today != null){
			date.push(
				<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{today}</Text>
			)
		}
		return date
	}

	const updateCheckSheetMassProMaintMold = () => {
		const updateFR = updateMaint
		var data = []
		const frData = massproFR
		if(frData != null){
			if(updateFR != "approved" && updateFR != "not_approved"){
				data.push(
					<View key="asiui2oj" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={qc_masspro_main_mold_status}
						onValueChange={(value) => setMaintMoldStatus(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="Approved" value="approved" />
							<Picker.Item label="Not Approved" value="not_approved" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asiui2oj" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateFR}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asiui2oj" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={qc_masspro_main_mold_status}
					onValueChange={(value) => setMaintMoldStatus(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="Approved" value="approved" />
						<Picker.Item label="Not Approved" value="not_approved" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateCheckSheetMassProMaterialPreparation = () => {
		const updateFR = updateMaterial
		var data = []
		const frData = massproFR
		if(frData != null){
			if(updateFR != "approved" && updateFR != "not_approved"){
				data.push(
					<View key="askdhj2ijk" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={qc_masspro_material_preparation_status}
						onValueChange={(value) => setMaterial(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="Approved" value="approved" />
							<Picker.Item label="Not Approved" value="not_approved" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="askdhj2ijk" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateFR}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="askdhj2ijk" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={qc_masspro_material_preparation_status}
					onValueChange={(value) => setMaterial(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="Approved" value="approved" />
						<Picker.Item label="Not Approved" value="not_approved" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateCheckSheetMoldSetter = () => {
		const updateFR = updateMoldSetter
		var data = []
		const frData = massproFR
		if(frData != null){
			if(updateFR != 'approved' && 'not_approved'){
				data.push(
					<View key="osij2okms" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={qc_masspro_mold_setter_status}
						onValueChange={(value) => setMoldSetterStatus(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="Approved" value="approved" />
							<Picker.Item label="Not Approved" value="not_approved" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="osij2okms" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateFR}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="osij2okms" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={qc_masspro_mold_setter_status}
					onValueChange={(value) => setMoldSetterStatus(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="Approved" value="approved" />
						<Picker.Item label="Not Approved" value="not_approved" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateCheckSheetMassProTechInjection = () => {
		const updateFR = updateTechInjection
		var data = []
		const frData = massproFR
		if(frData != null){
			if(updateFR != 'approved' && updateFR != 'not_approved'){
				data.push(
					<View key="asoij2km" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={qc_masspro_tech_injection_status}
						onValueChange={(value) => setTechInjection(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="Approved" value="approved" />
							<Picker.Item label="Not Approved" value="not_approved" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asoij2km" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateFR}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asoij2km" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={qc_masspro_tech_injection_status}
					onValueChange={(value) => setTechInjection(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="Approved" value="approved" />
						<Picker.Item label="Not Approved" value="not_approved" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateCheckSheetMassProLeaderProd = () => {
		const updateFR = updateProdLeader
		var data = []
		const frData = massproFR
		if(frData != null){
			if(updateFR != 'approved' && updateFR != 'not_approved'){
				data.push(
					<View key="asoidj2km" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={qc_masspro_prod_leader_status}
						onValueChange={(value) => setProdLeaderStatus(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="Approved" value="approved" />
							<Picker.Item label="Not Approved" value="not_approved" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asoidj2km" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateFR}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asoidj2km" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={qc_masspro_prod_leader_status}
					onValueChange={(value) => setProdLeaderStatus(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="Approved" value="approved" />
						<Picker.Item label="Not Approved" value="not_approved" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateCheckSheetMassProLeaderQC = () => {
		const updateFR = updateQCLeader
		var data = [] 
		const frData = massproFR
		if(frData != null){
			if(updateFR != 'approved' && updateFR != 'not_approved'){
				data.push(
					<View key="asdj2k" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={qc_masspro_qc_leader_status}
						onValueChange={(value) => setQcLeaderStatus(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="Approved" value="approved" />
							<Picker.Item label="Not Approved" value="not_approved" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asdj2k" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateFR}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asdj2k" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={qc_masspro_qc_leader_status}
					onValueChange={(value) => setQcLeaderStatus(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="Approved" value="approved" />
						<Picker.Item label="Not Approved" value="not_approved" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateJudgementFunc = () => {
		const updateFR = updateJudgement
		var data = []
		const frData = massproFR
		if(frData != null){
			if(updateFR != 'stop' && updateFR != 'running'){
				data.push(
					<View key="asjkdn2hj" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={judgement}
						onValueChange={(value) => setKeputusan(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="Stop" value="stop" />
							<Picker.Item label="Running" value="running" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asjkdn2hj" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateFR}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asjkdn2hj" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={judgement}
					onValueChange={(value) => setKeputusan(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="Stop" value="stop" />
						<Picker.Item label="Running" value="running" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateRemarkFunc = () => {
		const updateFR = updateRemark
		var data = []
		const frData = massproFR
		if(frData != null || qc_masspro_qc_leader_id == null){
			if(updateFR != null){
				data.push(
					<View key="asjkdn2hj" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateFR}</Text>
					</View>
				)
			}else{
				data.push(
					<View key="asjkdn2hj" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			data.push(
				<View key="asjkdn2hj" style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
				</View>
			)
		}
		return data
	}

	const updateButton = () => {
		const updateFR = massproFR
		const data = []
		if(updateFR != null){
			if(updateMaint != null){
				data.push(
					<View key="asd12q" style={{paddingTop: 10}}>
						<Button style={{width: 172, borderRadius: 10, justifyContent: 'center', backgroundColor: '#05c46b'}} onPress={() => alert("Data QC Leader Already Saved!")}><Text>SAVED</Text></Button>
					</View>
				)
			}else{
				data.push(
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
							)}
						><Text>SAVE</Text></Button>
					</View>
				)
			}
		}else{
			data.push(
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
							)}
						><Text>SAVE</Text></Button>
				</View>
			)
		}
		return data
	}

	const content = () => {
		var dataContent = []
		dataContent.push(
			<ScrollView key="23" style={{flex: 1}}>
				<View style={{paddingBottom: 40}}>
					<TouchableOpacity>
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Machines Status</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{machine_status}</Text>
								</View>
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Tooling</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								<View style={{height: 30, justifyContent: 'center'}}>
									<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
										<Text>{tooling_num}</Text>
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
								<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{data1 != null ? data1.cavity != null ? data1.cavity : "0" : "0" }</Text>
								</View>
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Check Sheet Sebelum Mesin Mass Pro Maint. Mold</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%", flexDirection: 'row'}}>
								<View style={{width: "70%"}}>
									{updateCheckSheetMassProMaintMold()}
								</View>
									{qc_masspro_main_mold_id != null ? <View style={{paddingLeft: 5, paddingTop: 5}}><Image source={checkImage} style={{width: 30, height: 30}} /></View> : null}
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Check Sheet Sebelum Mesin Mass Pro Material Preparation</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%", flexDirection: 'row'}}>
								<View style={{width: "70%"}}>
									{updateCheckSheetMassProMaterialPreparation()}
								</View>
								{qc_masspro_material_preparation_id != null ? <View style={{paddingLeft: 5, paddingTop: 5}}><Image source={checkImage} style={{width: 30, height: 30}} /></View> : null}
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Check sheet Sebelum mesin Mass Pro Mold Setter</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%", flexDirection: 'row'}}>
								<View style={{width: "70%"}}>
									{updateCheckSheetMoldSetter()}
								</View>
									{qc_masspro_mold_setter_id != null ? <View style={{paddingLeft: 5, paddingTop: 5}}><Image source={checkImage} style={{width: 30, height: 30}} /></View> : null}
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Check Sheet Sebelum Mesin Mass Pro Tech Injection</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%", flexDirection: 'row'}}>
								<View style={{width: "70%"}}>
									{updateCheckSheetMassProTechInjection()}
								</View>
									{qc_masspro_tech_injection_id != null ? <View style={{paddingLeft: 5, paddingTop: 5}}><Image source={checkImage} style={{width: 30, height: 30}} /></View> : null}
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Check Sheet Sebelum Mesin Mass Pro Leader Production</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%", flexDirection: 'row'}}>
								<View style={{width: "70%"}}>
									{updateCheckSheetMassProLeaderProd()}
								</View>
									{qc_masspro_prod_leader_id != null ? <View style={{paddingLeft: 5, paddingTop: 5}}><Image source={checkImage} style={{width: 30, height: 30}} /></View> : null}
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Check Sheet Sebelum Mesin Mass Pro Leader QC</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%", flexDirection: 'row'}}>
								<View style={{width: "70%"}}>
									{updateCheckSheetMassProLeaderQC()}
								</View>
									{qc_masspro_qc_leader_id != null ? <View style={{paddingLeft: 5, paddingTop: 5}}><Image source={checkImage} style={{width: 30, height: 30}} /></View> : null}
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Keputusan</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateJudgementFunc()}
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
								{updateRemarkFunc()}
							</View>
						</View>

						<View style={{justifyContent: 'center', alignItems: 'center'}}>
							<View style={{paddingTop: 10}}>
								{qc_masspro_qc_leader_id != null ? updateButton() : null }
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
		return dataContent
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
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date()}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Masspro Begin Foreman</Text>
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
									<Text style={{fontWeight: 'bold', fontSize: 11}}>{data1 != null ? data1.name : "-"}</Text>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data1 != null ? data1.internal_part_id : "-"}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data1 != null ? data1.customer_part_number : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df'}}>
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

export default MassproBeginForeman;