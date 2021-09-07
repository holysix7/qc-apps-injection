import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker} from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import app_version from '../../../app_version/index';
import base_url_submit from '../../../../API/BaseUrlSubmit';

const MassproBeginProdLeader = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {customer_name, sys_plant_id, machine_id, machine_number, machine_name, today, eng_product_id, access_foreman} = route.params
	const [wi_product, setWiProduct] 																		 = useState(null)
	const [packing_standard, setPackingStandard] 												 = useState(null)
	const [production_working_tool, setWorkTools] 											 = useState(null)
	const [production_report, setProdReport] 														 = useState(null)
	const [lable, setLable] 																						 = useState(null)
	const [jig, setJig] 																								 = useState(null)
	const [status_mp, setStatusMP] 																			 = useState("Normal")
	const [remark, setRemark] 																					 = useState(null)
	const [data1, setData1]  																					   = useState(null)
	const [qc_masspro_main_mold_id, setMaintMoldId] 										 = useState(0)
	const [qc_masspro_material_preparation_id, setMaterialPreparationId] = useState(0)
	const [qc_masspro_mold_setter_id, setMoldSetterId] 									 = useState(0)
	const [qc_masspro_tech_injection_id, setTechInjectionId] 						 = useState(0)
	const [hours, setHours]		  																				 = useState(0)
	const [shift, setShift]		  																				 = useState(0)
	const prod_machine_id = machine_id
	const status 					= "new"
	const [tooling_num, setTooling]	= useState(null)
	const [created_by, setCreatedBy]																		 = useState(null)
	let created_at 																											 = moment().format("YYYY-MM-DD HH:mm:ss")
	const [updated_by, setUpdatedBy]																		 = useState(null)
	let updated_at 																											 = moment().format("YYYY-MM-DD HH:mm:ss")

	const [planningId, setPlanningId]		= useState(null)
	const [massproPL, setmassproPL]			= useState(null)
	const planning_id = parseInt(planningId)
	var internal_part_id = data1 != null ? data1.internal_part_id : null

	//get
	const [output_production, setOutput] = useState(null)

	const [loading, setLoading] = useState(false)

	const submit = async() => {
		setLoading(false)
		const id = await AsyncStorage.getItem('id')
		const approved_by = id
		if(massproPL != null){
			if(massproPL.id != null){
				const masspro_pl_id = massproPL.id
				var data = {
					masspro_pl_id,
					status_mp,
					access_foreman,
					approved_by
				}
			}else{
				var data = {
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
					jig,
					remark,
					status,
					created_by,
					created_at,
					updated_by,
					updated_at,
					access_foreman
				}
			}
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'masspro_pl',
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
		if(wi_product != null && packing_standard != null && production_working_tool != null && production_report != null && lable != null && jig != null){
			Axios(config)
			.then(function (response){
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
			setLoading(true)
			Alert.alert(
				"Failed Send Data",
				"Gagal Kirim Data, Periksa Kembali Form Input",
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
		const name = await AsyncStorage.getItem('name')
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
			setmassproPL(response.data.data.masspro_pl)
			setOutput(response.data.data.output_production)
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
		if(massproPL != null){
			if(massproPL.wi_product == null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massproPL.wi_product}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
	}

	const updatePackingStandard = () => {
		if(massproPL != null){
			if(massproPL.packing_standard == null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massproPL.packing_standard}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
	}

	const updateProductionWorkTools = () => {
		if(massproPL != null){
			if(massproPL.work_tool == null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massproPL.work_tool}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
	}

	const updateProductionReport = () => {
		if(massproPL != null){
			if(massproPL.work_report == null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massproPL.work_report}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
	}

	const updateLable = () => {
		if(massproPL != null){
			if(massproPL.lable == null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massproPL.lable}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
	}

	const updateJIG = () => {
		if(massproPL != null){
			if(massproPL.jig == null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massproPL.jig}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
	}

	const updateStatusForeman = () => {
		if(massproPL != null){
			if(massproPL.approved_by == null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massproPL.status_mp}</Text>
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

	const updateRemark = () => {
		if(massproPL != null){
			if(massproPL.remark != null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{massproPL.remark}</Text>
					</View>
				)
			}else{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
				</View>
			)
		}
	}

	const updateButton = () => {
		if(access_foreman == true){
			if(massproPL != null){
				if(massproPL.approved_by != null){
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
								)}>
							<Text>APPROVE</Text></Button>
						</View>
					)
				}
			}
		}else{
			if(massproPL != null){
				if(massproPL.id != null){
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
								)}>
							<Text>SAVE</Text></Button>
						</View>
					)
				}
			}
		}
	}
// abcd

	const content = () => {
		return (
			<ScrollView style={{flex: 1}}>
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
					
					<View style={{paddingTop: 20, flexDirection: 'column'}}>
						<View style={{flexDirection: 'row'}}>
							<View style={{padding: 5, width: "33.3%", borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
								<Text style={{fontSize: 13, fontWeight: 'bold'}}>Nama Karyawan</Text>
							</View>
							<View style={{padding: 5, width: "33.3%", borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
								<Text style={{fontSize: 13, fontWeight: 'bold'}}>NIK Karyawan</Text>
							</View>
							<View style={{padding: 5, width: "33.3%", borderRightWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
								<Text style={{fontSize: 13, fontWeight: 'bold'}}>Posisi</Text>
							</View>
						</View>
						<View style={{flexDirection: 'row'}}>
							<View style={{backgroundColor: '#b8b8b8', padding: 5, width: "33.3%", borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
								<Text style={{fontSize: 13}}>{output_production != null ? output_production.name_operator_1 != null ? output_production.name_operator_1 : '-' : '-'}</Text>
							</View>
							<View style={{backgroundColor: '#b8b8b8', padding: 5, width: "33.3%", borderRightWidth: 1, borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
								<Text style={{fontSize: 13}}>{output_production != null ? output_production.nik_operator_1 != null ? output_production.nik_operator_1 : '-' : '-'}</Text>
							</View>
							<View style={{backgroundColor: '#b8b8b8', padding: 5, width: "33.3%", borderRightWidth: 1, borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
								<Text style={{fontSize: 13}}>Operator Mesin {machine_number} </Text>
							</View>
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
					
					{formKhususForeman()}

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

export default MassproBeginProdLeader;