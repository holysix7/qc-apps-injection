import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker} from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import app_version from '../../../app_version/index';

const MassproBeginProdLeader = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {customer_name, sys_plant_id, machine_id, machine_number, machine_name, today, eng_product_id} = route.params
	const [wi_product, setWiProduct] 																		 = useState("")
	const [packing_standard, setPackingStandard] 												 = useState("")
	const [production_working_tool, setWorkTools] 											 = useState("")
	const [production_report, setProdReport] 														 = useState("")
	const [lable, setLable] 																						 = useState("")
	const [ng_form, setNgForm] 																					 = useState("")
	const [jig, setJig] 																								 = useState("")
	const [remark, setRemark] 																					 = useState("")
	const [data1, setData1]  																					   = useState("")
	const [qc_masspro_main_mold_id, setMaintMoldId] 										 = useState(0)
	const [qc_masspro_material_preparation_id, setMaterialPreparationId] = useState(0)
	const [qc_masspro_mold_setter_id, setMoldSetterId] 									 = useState(0)
	const [qc_masspro_tech_injection_id, setTechInjectionId] 						 = useState(0)
	const [hours, setHours]		  																				 = useState(0)
	const [shift, setShift]		  																				 = useState(0)
	const prod_machine_id = machine_id
	const status 					= "new"
	const [tooling_num, setTooling]	= useState("")
	const [created_by, setCreatedBy]																		 = useState("")
	let created_at 																											 = moment().format("YYYY-MM-DD HH:mm:ss")
	const [updated_by, setUpdatedBy]																		 = useState("")
	let updated_at 																											 = moment().format("YYYY-MM-DD HH:mm:ss")

	const [planningId, setPlanningId]		= useState("")
	const [internal_part_id, setIPI]		= useState("")
	const [massproPL, setMassproPL]			= useState(null)
	const [massproPLWiProduct, setUpdateWiProduct]	  	= useState(null)
	const [massproPLPackingStandard, setUpdatePacking] 	= useState(null)
	const [massproPLWorkTools, setUpdateWorkTools]	 		= useState(null)
	const [massproPLProdReport, setUpdateProdReport]		= useState(null)
	const [massproPLLable, setUpdateLable]   						= useState(null)
	const [massproPLNGForm, setUpdateNgForm]		   			= useState(null)
	const [massproPLJig, setUpdateJig]   								= useState(null)
	const [massproPLRemark, setUpdateRemark]   						= useState(null)
	const planning_id = parseInt(planningId)

	const [loading, setLoading] = useState(false)

	const submit = async() => {
		setLoading(false)
		const data = {
			eng_product_id,
			internal_part_id,
			planning_id,
			prod_machine_id,
			sys_plant_id,
			tooling_num,
			qc_masspro_main_mold_id,
			qc_masspro_material_preparation_id,
			qc_masspro_mold_setter_id,
			qc_masspro_tech_injection_id,
			wi_product,
			packing_standard,
			production_working_tool,
			production_report,
			lable,
			ng_form,
			jig,
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
			kind: 'masspro_pl',
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
			setLoading(true)
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
			kind: 'masspro_pl',
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
			setMoldSetterId(response.data.data.qc_masspro_mold_setter_id)
			setTechInjectionId(response.data.data.qc_masspro_tech_injection_id)
			setData1(response.data.data.product_detail)
			setTooling(response.data.data.tooling_num)
			setPlanningId(response.data.data.planning_id)
			setIPI(response.data.data.product_detail.internal_part_id)
			setMassproPL(response.data.data.masspro_pl)
			setUpdateWiProduct(response.data.data.masspro_pl.wi_product)
			setUpdatePacking(response.data.data.masspro_pl.packing_standard)
			setUpdateWorkTools(response.data.data.masspro_pl.work_tool)
			setUpdateProdReport(response.data.data.masspro_pl.work_report)
			setUpdateLable(response.data.data.masspro_pl.lable)
			setUpdateNgForm(response.data.data.masspro_pl.ng_form)
			setUpdateJig(response.data.data.masspro_pl.jig)
			setUpdateRemark(response.data.data.masspro_pl.remark)
			console.log("List Data Prod. Leader: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Prod. Leader: ', error)
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

	const updateWiProduct = () => {
		const updatePL = massproPLWiProduct
		const data = []
		const plData = massproPL
		if(plData != null){
			if(updatePL != "OK" && updatePL != "NG"){
				data.push(
					<View key="asokWoqk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={wi_product}
						onValueChange={(value) => setWiProduct(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asokWoqk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updatePL}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asokWoqk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={wi_product}
					onValueChange={(value) => setWiProduct(value)}
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

	const updatePackingStandard = () => {
		const updatePL = massproPLPackingStandard
		const data = []
		const plData = massproPL
		if(plData != null){
			if(updatePL != "NG" && updatePL != "OK"){
				data.push(
					<View key="asdjwi2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={packing_standard}
						onValueChange={(value) => setPackingStandard(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asdjwi2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updatePL}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asdjwi2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={packing_standard}
					onValueChange={(value) => setPackingStandard(value)}
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

	const updateProductionWorkTools = () => {
		const updatePL = massproPLWorkTools
		const data = []
		const plData = massproPL
		if(plData != null){
			if(updatePL != "OK" && updatePL != "NG"){
				data.push(
					<View key="asoiu2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={production_working_tool}
						onValueChange={(value) => setWorkTools(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asoiu2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updatePL}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asoiu2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={production_working_tool}
					onValueChange={(value) => setWorkTools(value)}
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

	const updateProductionReport = () => {
		const updatePL = massproPLProdReport
		const data = []
		const plData = massproPL
		if(plData != null){
			if(updatePL != "OK" && updatePL != "NG"){
				data.push(
					<View key="aosdkwi2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={production_report}
						onValueChange={(value) => setProdReport(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="aosdkwi2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updatePL}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="aosdkwi2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={production_report}
					onValueChange={(value) => setProdReport(value)}
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

	const updateLable = () => {
		const updatePL = massproPLLable
		const data = []
		const plData = massproPL
		if(plData != null){
			if(updatePL != "OK" && updatePL != "NG"){
				data.push(
					<View key="asoij2k" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={lable}
						onValueChange={(value) => setLable(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asoij2k" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updatePL}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asoij2k" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={lable}
					onValueChange={(value) => setLable(value)}
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

	const updateNGForm = () => {
		const updatePL = massproPLNGForm
		const data = []
		const plData = massproPL
		if(plData != null){
			if(updatePL != "OK" && updatePL != "NG"){
				data.push(
					<View key="askuh2jk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={ng_form}
						onValueChange={(value) => setNgForm(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="askuh2jk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updatePL}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="askuh2jk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={ng_form}
					onValueChange={(value) => setNgForm(value)}
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

	const updateJIG = () => {
		const updatePL = massproPLJig
		const data = []
		const plData = massproPL
		if(plData != null){
			if(updatePL != "OK" && updatePL != "NG" && updatePL != "no_check"){
				data.push(
					<View key="aoij2o" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={jig}
						onValueChange={(value) => setJig(value)}
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
					<View key="aoij2o" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updatePL}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="aoij2o" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={jig}
					onValueChange={(value) => setJig(value)}
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
		const updatePL = massproPLRemark
		const data = []
		const plData = massproPL
		if(plData != null){
			if(updatePL != null){
				data.push(
					<View key="aoij2o" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updatePL}</Text>
					</View>
				)
			}else{
				data.push(
					<View key="aoij2o" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			data.push(
				<View key="aoij2o" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
				</View>
			)
		}
		return data
	}

	const updateButton = () => {
		const updatePL = massproPL
		const data = []
		if(updatePL != null || qc_masspro_tech_injection_id == null){
			if(massproPLWiProduct != null){
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
		// if(qc_masspro_tech_injection_id != null){
			dataContent.push(
				<ScrollView key="2" style={{flex: 1}}>
					<TouchableOpacity>							
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>WI Product</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateWiProduct()}
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Packing Standard</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updatePackingStandard()}
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Production Work Tools</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateProductionWorkTools()}
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Production Report</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateProductionReport()}
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Lable</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateLable()}
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>NG Form</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateNGForm()}
							</View>
						</View>

						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>JIG / Alat Ukur</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								{updateJIG()}
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
							<View>
								{updateButton()}
							</View>
						</View>
					</TouchableOpacity>
				</ScrollView>
			)
		// }else{
		// 	dataContent.push(
		// 		<ScrollView key="2" style={{flex: 1}}>
		// 			<View style={{marginVertical: 160, marginHorizontal: 40, padding: 40, backgroundColor: '#fff76a', borderWidth: 1, borderRadius: 25, flexDirection: 'row', alignItems: 'center'}}>
		// 				<Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Hubungi Masspro Begin Tech. Injection Untuk Segera Isi Form</Text>
		// 			</View>
		// 		</ScrollView>
		// 	)
		// }
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
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Masspro Begin Prod. Leader</Text>
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

export default MassproBeginProdLeader;