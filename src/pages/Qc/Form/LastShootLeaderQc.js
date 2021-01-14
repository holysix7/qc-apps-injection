import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import moment from 'moment';
import Axios from 'axios';

const LastShootLeaderQc = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, machine_id, machine_number, machine_name, daily_inspection_number, today, yesterday} = route.params

	const [judgement_first_piece1, setJudgement1] 			= useState(null)
	const [judgement_first_piece2, setJudgement2] 			= useState(null)
	const [judgement_first_piece3, setJudgement3] 			= useState(null)
	const [judgement_first_piece4, setJudgement4] 			= useState(null)
	const [judgement_first_piece5, setJudgement5] 			= useState(null)
	const [judgement_first_piece6, setJudgement6] 			= useState(null)
	const [judgement_first_piece7, setJudgement7] 			= useState(null)
	const [judgement_first_piece8, setJudgement8] 			= useState(null)
	const [judgement_first_piece9, setJudgement9] 			= useState(null)
	const [judgement_first_piece10, setJudgement10] 		= useState(null)
	const [judgement_first_piece11, setJudgement11] 		= useState(null)
	const [judgement_first_piece12, setJudgement12] 		= useState(null)
	const [judgement_first_piece13, setJudgement13] 		= useState(null)
	const [judgement_first_piece14, setJudgement14] 		= useState(null)
	const [judgement_first_piece15, setJudgement15] 		= useState(null)
	const [judgement_first_piece16, setJudgement16] 		= useState(null)
	const [judgement_first_piece17, setJudgement17] 		= useState(null)
	const [judgement_first_piece18, setJudgement18] 		= useState(null)
	
	const [qc_ng_category_id1, setCategoryNg1] 					= useState("")
	const [qc_ng_category_id2, setCategoryNg2] 					= useState("")
	const [qc_ng_category_id3, setCategoryNg3] 					= useState("")
	const [qc_ng_category_id4, setCategoryNg4] 					= useState("")
	const [qc_ng_category_id5, setCategoryNg5] 					= useState("")
	const [qc_ng_category_id6, setCategoryNg6] 					= useState("")
	const [qc_ng_category_id7, setCategoryNg7] 					= useState("")
	const [qc_ng_category_id8, setCategoryNg8] 					= useState("")
	const [qc_ng_category_id9, setCategoryNg9] 					= useState("")
	const [qc_ng_category_id10, setCategoryNg10] 				= useState("")
	const [qc_ng_category_id11, setCategoryNg11] 				= useState("")
	const [qc_ng_category_id12, setCategoryNg12] 				= useState("")
	const [qc_ng_category_id13, setCategoryNg13] 				= useState("")
	const [qc_ng_category_id14, setCategoryNg14] 				= useState("")
	const [qc_ng_category_id15, setCategoryNg15] 				= useState("")
	const [qc_ng_category_id16, setCategoryNg16] 				= useState("")
	const [qc_ng_category_id17, setCategoryNg17] 				= useState("")
	const [qc_ng_category_id18, setCategoryNg18] 				= useState("")
	
	const [fitting_test1, setFittingTest1] 							= useState("")
	const [fitting_test2, setFittingTest2] 							= useState("")
	const [fitting_test3, setFittingTest3] 							= useState("")
	const [fitting_test4, setFittingTest4] 							= useState("")
	const [fitting_test5, setFittingTest5] 							= useState("")
	const [fitting_test6, setFittingTest6] 							= useState("")
	const [fitting_test7, setFittingTest7] 							= useState("")
	const [fitting_test8, setFittingTest8] 							= useState("")
	const [fitting_test9, setFittingTest9] 							= useState("")
	const [fitting_test10, setFittingTest10] 						= useState("")
	const [fitting_test11, setFittingTest11] 						= useState("")
	const [fitting_test12, setFittingTest12] 						= useState("")
	const [fitting_test13, setFittingTest13] 						= useState("")
	const [fitting_test14, setFittingTest14] 						= useState("")
	const [fitting_test15, setFittingTest15] 						= useState("")
	const [fitting_test16, setFittingTest16] 						= useState("")
	const [fitting_test17, setFittingTest17] 						= useState("")
	const [fitting_test18, setFittingTest18] 						= useState("")
	
	const [product_weight1, setProductWeight1] 					= useState("")
	const [product_weight2, setProductWeight2] 					= useState("")
	const [product_weight3, setProductWeight3] 					= useState("")
	const [product_weight4, setProductWeight4] 					= useState("")
	const [product_weight5, setProductWeight5] 					= useState("")
	const [product_weight6, setProductWeight6] 					= useState("")
	const [product_weight7, setProductWeight7] 					= useState("")
	const [product_weight8, setProductWeight8] 					= useState("")
	const [product_weight9, setProductWeight9] 					= useState("")
	const [product_weight10, setProductWeight10] 				= useState("")
	const [product_weight11, setProductWeight11] 				= useState("")
	const [product_weight12, setProductWeight12] 				= useState("")
	const [product_weight13, setProductWeight13] 				= useState("")
	const [product_weight14, setProductWeight14] 				= useState("")
	const [product_weight15, setProductWeight15] 				= useState("")
	const [product_weight16, setProductWeight16] 				= useState("")
	const [product_weight17, setProductWeight17] 				= useState("")
	const [product_weight18, setProductWeight18] 				= useState("")
	
	const [note1, setKeterangan1] 											= useState("")
	const [note2, setKeterangan2] 											= useState("")
	const [note3, setKeterangan3] 											= useState("")
	const [note4, setKeterangan4] 											= useState("")
	const [note5, setKeterangan5] 											= useState("")
	const [note6, setKeterangan6] 											= useState("")
	const [note7, setKeterangan7] 											= useState("")
	const [note8, setKeterangan8] 											= useState("")
	const [note9, setKeterangan9] 											= useState("")
	const [note10, setKeterangan10] 										= useState("")
	const [note11, setKeterangan11] 										= useState("")
	const [note12, setKeterangan12] 										= useState("")
	const [note13, setKeterangan13] 										= useState("")
	const [note14, setKeterangan14] 										= useState("")
	const [note15, setKeterangan15] 										= useState("")
	const [note16, setKeterangan16] 										= useState("")
	const [note17, setKeterangan17] 										= useState("")
	const [note18, setKeterangan18] 										= useState("")

	const [tooling_num, setTooling] 										= useState("")
	const [hours, setHours]		  												= useState(0)
	const [shift, setShift]		  												= useState(0)
	const [data, setData] 															= useState([])
	const [dataCavity, setDataCavity] 									= useState([])
	const [eng_product_id, setEngProd]									= useState(0)
	const [copy_sample, setCopySample]	  							= useState("")
	const [mtr_need, setMtrNeed]				  							= useState("")
	const [remark, setRemark]				  									= useState("")
	const [created_by, setCreatedBy]										= useState("")

	const [massproQCL, setMassproQcl]										= useState("")
	const [last_shoot_qc_items, setlast_shoot_qc_items]	= useState("")
	const [massproql_items, setMassproQlItems]					= useState([])
	
	const [ngCategories, setNGCategories]  							= useState([])
	let created_at 																			= moment().format("YYYY-MM-DD HH:mm:ss")
	const [updated_by, setUpdatedBy]										= useState("")
	let updated_at 																			= moment().format("YYYY-MM-DD HH:mm:ss")
	const prod_machine_id = machine_id
	const date = []

	const [loading, setLoading]	= useState(false)

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
			const params = {
				tbl: 'daily_inspection',
				kind: 'last_shoot_qc',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 2,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				setLoading(true)
				setData(response.data.data.daily_inspection)
				setlast_shoot_qc_items(response.data.data.last_shoot_qc_items)
				setDataCavity(response.data.data.daily_inspection.cavity)
				setEngProd(response.data.data.eng_product_id)
				setNGCategories(response.data.data.ng_category)
				setTooling(response.data.data.daily_inspection.tooling_num)
				setMassproQcl(response.data.data.last_shoot_qc)
				setMassproQlItems(response.data.data.last_shoot_qc_items)
				console.log("List Data Last Shoot Leader QC: ", response.data.status, "OK")
			})
			.catch(error => {
				setLoading(true)
				console.log('List Data Last Shoot Leader QC: ', error)
			})
		}else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
			const nilaiJam = parseInt(jam)
			setShift(3)
			setHours(nilaiJam)
			const params = {
				tbl: 'daily_inspection',
				kind: 'last_shoot_qc',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 2,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				setLoading(true)
				setData(response.data.data.daily_inspection)
				setlast_shoot_qc_items(response.data.data.last_shoot_qc_items)
				setDataCavity(response.data.data.daily_inspection.cavity)
				setEngProd(response.data.data.eng_product_id)
				setNGCategories(response.data.data.ng_category)
				setTooling(response.data.data.daily_inspection.tooling_num)
				setMassproQcl(response.data.data.last_shoot_qc)
				setMassproQlItems(response.data.data.last_shoot_qc_items)
				console.log("List Data Last Shoot Leader QC: ", response.data.status, "OK")
			})
			.catch(error => {
				setLoading(true)
				console.log('List Data Last Shoot Leader QC: ', error)
			})
		}else{
			const nilaiJam = parseInt(jam)
			setShift(4)
			setHours(nilaiJam)
			const params = {
				tbl: 'daily_inspection',
				kind: 'last_shoot_qc',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 2,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				setLoading(true)
				setData(response.data.data.daily_inspection)
				setlast_shoot_qc_items(response.data.data.last_shoot_qc_items)
				setDataCavity(response.data.data.daily_inspection.cavity)
				setEngProd(response.data.data.eng_product_id)
				setNGCategories(response.data.data.ng_category)
				setTooling(response.data.data.daily_inspection.tooling_num)
				setMassproQcl(response.data.data.last_shoot_qc)
				setMassproQlItems(response.data.data.last_shoot_qc_items)
				console.log("List Data Last Shoot Leader QC: ", response.data.status, "OK")
			})
			.catch(error => {
				setLoading(true)
				console.log('List Data Last Shoot Leader QC: ', error)
			})
		}
	}

	const shiftFix = (value) => {
		setHours(value)
	}

	const hString = hours.toString()
	const item = [
		{
			"cavity": 1,
			"judgement_first_piece": judgement_first_piece1,
			"qc_ng_category_id": qc_ng_category_id1,
			"fitting_test": fitting_test1,
			"product_weight": product_weight1,
			"note": note1
		},
		{
			"cavity": 2,
			"judgement_first_piece": judgement_first_piece2,
			"qc_ng_category_id": qc_ng_category_id2,
			"fitting_test": fitting_test2,
			"product_weight": product_weight2,
			"note": note2
		},
		{
			"cavity": 3,
			"judgement_first_piece": judgement_first_piece3,
			"qc_ng_category_id": qc_ng_category_id3,
			"fitting_test": fitting_test3,
			"product_weight": product_weight3,
			"note": note3
		},
		{
			"cavity": 4,
			"judgement_first_piece": judgement_first_piece4,
			"qc_ng_category_id": qc_ng_category_id4,
			"fitting_test": fitting_test4,
			"product_weight": product_weight4,
			"note": note4
		},
		{
			"cavity": 5,
			"judgement_first_piece": judgement_first_piece5,
			"qc_ng_category_id": qc_ng_category_id5,
			"fitting_test": fitting_test5,
			"product_weight": product_weight5,
			"note": note5
		},
		{
			"cavity": 6,
			"judgement_first_piece": judgement_first_piece6,
			"qc_ng_category_id": qc_ng_category_id6,
			"fitting_test": fitting_test6,
			"product_weight": product_weight6,
			"note": note6
		},
		{
			"cavity": 7,
			"judgement_first_piece": judgement_first_piece7,
			"qc_ng_category_id": qc_ng_category_id7,
			"fitting_test": fitting_test7,
			"product_weight": product_weight7,
			"note": note7
		},
		{
			"cavity": 8,
			"judgement_first_piece": judgement_first_piece8,
			"qc_ng_category_id": qc_ng_category_id8,
			"fitting_test": fitting_test8,
			"product_weight": product_weight8,
			"note": note8
		},
		{
			"cavity": 9,
			"judgement_first_piece": judgement_first_piece9,
			"qc_ng_category_id": qc_ng_category_id9,
			"fitting_test": fitting_test9,
			"product_weight": product_weight9,
			"note": note9
		},
		{
			"cavity": 10,
			"judgement_first_piece": judgement_first_piece10,
			"qc_ng_category_id": qc_ng_category_id10,
			"fitting_test": fitting_test10,
			"product_weight": product_weight10,
			"note": note10
		},
		{
			"cavity": 11,
			"judgement_first_piece": judgement_first_piece11,
			"qc_ng_category_id": qc_ng_category_id11,
			"fitting_test": fitting_test11,
			"product_weight": product_weight11,
			"note": note11
		},
		{
			"cavity": 12,
			"judgement_first_piece": judgement_first_piece12,
			"qc_ng_category_id": qc_ng_category_id12,
			"fitting_test": fitting_test12,
			"product_weight": product_weight12,
			"note": note12
		},
		{
			"cavity": 13,
			"judgement_first_piece": judgement_first_piece13,
			"qc_ng_category_id": qc_ng_category_id13,
			"fitting_test": fitting_test13,
			"product_weight": product_weight13,
			"note": note13
		},
		{
			"cavity": 14,
			"judgement_first_piece": judgement_first_piece14,
			"qc_ng_category_id": qc_ng_category_id14,
			"fitting_test": fitting_test14,
			"product_weight": product_weight14,
			"note": note14
		},
		{
			"cavity": 15,
			"judgement_first_piece": judgement_first_piece15,
			"qc_ng_category_id": qc_ng_category_id15,
			"fitting_test": fitting_test15,
			"product_weight": product_weight15,
			"note": note15
		},
		{
			"cavity": 16,
			"judgement_first_piece": judgement_first_piece16,
			"qc_ng_category_id": qc_ng_category_id16,
			"fitting_test": fitting_test16,
			"product_weight": product_weight16,
			"note": note16
		},
		{
			"cavity": 17,
			"judgement_first_piece": judgement_first_piece17,
			"qc_ng_category_id": qc_ng_category_id17,
			"fitting_test": fitting_test17,
			"product_weight": product_weight17,
			"note": note17
		},
		{
			"cavity": 18,
			"judgement_first_piece": judgement_first_piece18,
			"qc_ng_category_id": qc_ng_category_id18,
			"fitting_test": fitting_test18,
			"product_weight": product_weight18,
			"note": note18
		}
	]

	const itemNGsLoop = () => {
		var dataNGs = []
		if(ngCategories.length > 0){
			item.map((element, key) => {
				if(element.judgement_first_piece == "NG" || element.fitting_test == "NG" || copy_sample == "NG"){
					var dataNGItems = []
					dataNGItems.push(
						<Picker.Item label="--Pilih--" value={0} key={key} />
					)
					dataNGItems.push(
						<Picker.Item label="Others" value={0} key={key} />
					)
					ngCategories.map((elementdua, keydua) => {
						dataNGItems.push(
							<Picker.Item label={elementdua.name} value={elementdua.id} key={keydua} />
						)
					})
					dataNGs.push(dataNGItems)
				}else{
					var dataNGItems = []
					dataNGItems.push(
						<Picker.Item label="Tidak NG" value={9999} key={key} />
					)
					dataNGs.push(dataNGItems)
				}
			})
		}
		return dataNGs
	}
	const app_version = "0.8.5"
	
	const submit = async() => {
		setLoading(false)
		const data = {
			eng_product_id,
			prod_machine_id,
			sys_plant_id,
			qc_daily_inspection_id,
			qc_daily_inspection_item_id,
			qc_daily_inspection_method_id,
			tooling_num,
			copy_sample,
			mtr_need,
			item,
			created_by,
			created_at,
			updated_by,
			updated_at,
			remark,
			app_version
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'last_shoot_qc'
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
			navigation.navigate('ShowProducts')
			alert("Success Send Data!")
		})
		.catch(function (error){
			setLoading(true)
			alert("Failed Send Data!")
			console.log(error)
		})
	}
  
	const dataItem = () => {
		var table1 = []
		const cavity = dataCavity
		if(massproQCL == null){
			if(cavity != null){
				if(cavity > 0){
					table1.push(
						<View key="20sa559815w" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>1</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece1}
									onValueChange = {(value)=>updateStatus1(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id1}
									onValueChange = {(value)=>setCategoryNg1(value)}
									>
										{itemNGsLoop()[0]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test1}
									onValueChange = {(value)=>setFittingTest1(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 1){
					table1.push(
						<View key="xzsd1111czas2" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>2</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece2}
									onValueChange = {(value)=>updateStatus2(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id2}
									onValueChange = {(value)=>setCategoryNg2(value)}
									>
										{itemNGsLoop()[1]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test2}
									onValueChange = {(value)=>setFittingTest2(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 2){
					table1.push(
						<View key="zcvwe32xvasd" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>3</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece3}
									onValueChange = {(value)=>updateStatus3(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id3}
									onValueChange = {(value)=>setCategoryNg3(value)}
									>
										{itemNGsLoop()[2]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test3}
									onValueChange = {(value)=>setFittingTest3(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 3){
					table1.push(
						<View key="2cvbcvb0sa15w" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>4</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece4}
									onValueChange = {(value)=>updateStatus4(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id4}
									onValueChange = {(value)=>setCategoryNg4(value)}
									>
										{itemNGsLoop()[3]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test4}
									onValueChange = {(value)=>setFittingTest4(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 4){
					table1.push(
						<View key="asdawe2120sa15w" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>5</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece5}
									onValueChange = {(value)=>updateStatus5(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id5}
									onValueChange = {(value)=>setCategoryNg5(value)}
									>
										{itemNGsLoop()[4]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test5}
									onValueChange = {(value)=>setFittingTest5(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 5){
					table1.push(
						<View key="20szxcqwe1a15w" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>6</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece6}
									onValueChange = {(value)=>updateStatus6(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id6}
									onValueChange = {(value)=>setCategoryNg6(value)}
									>
										{itemNGsLoop()[5]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test6}
									onValueChange = {(value)=>setFittingTest6(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 6){
					table1.push(
						<View key="20ASczxcsa15w" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>7</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece7}
									onValueChange = {(value)=>updateStatus7(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id7}
									onValueChange = {(value)=>setCategoryNg7(value)}
									>
										{itemNGsLoop()[6]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test7}
									onValueChange = {(value)=>setFittingTest7(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 7){
					table1.push(
						<View key="20sAddqwea15w" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>8</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece8}
									onValueChange = {(value)=>updateStatus8(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id8}
									onValueChange = {(value)=>setCategoryNg8(value)}
									>
										{itemNGsLoop()[7]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test8}
									onValueChange = {(value)=>setFittingTest8(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note8} onChangeText={(value) => setKeterangan8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 8){
					table1.push(
						<View key="20sZxcqwea15w" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>9</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece9}
									onValueChange = {(value)=>updateStatus9(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id9}
									onValueChange = {(value)=>setCategoryNg9(value)}
									>
										{itemNGsLoop()[8]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test9}
									onValueChange = {(value)=>setFittingTest9(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 9){
					table1.push(
						<View key="20Csaaxzsa15w" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>10</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece10}
									onValueChange = {(value)=>updateStatus10(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id10}
									onValueChange = {(value)=>setCategoryNg10(value)}
									>
										{itemNGsLoop()[9]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test10}
									onValueChange = {(value)=>setFittingTest10(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 10){
					table1.push(
						<View key="20sa1asdwq5w" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>11</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece11}
									onValueChange = {(value)=>updateStatus11(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id11}
									onValueChange = {(value)=>setCategoryNg11(value)}
									>
										{itemNGsLoop()[10]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test11}
									onValueChange = {(value)=>setFittingTest11(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setProductWeight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 11){
					table1.push(
						<View key="20sa15wZxcqw" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>12</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece12}
									onValueChange = {(value)=>updateStatus12(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id12}
									onValueChange = {(value)=>setCategoryNg12(value)}
									>
										{itemNGsLoop()[11]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test12}
									onValueChange = {(value)=>setFittingTest12(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight12} onChangeText={(value) => setProductWeight12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note12} onChangeText={(value) => setKeterangan12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 12){
					table1.push(
						<View key="20sa15wQWsa" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>13</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece13}
									onValueChange = {(value)=>updateStatus13(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id13}
									onValueChange = {(value)=>setCategoryNg13(value)}
									>
										{itemNGsLoop()[12]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test13}
									onValueChange = {(value)=>setFittingTest13(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight13} onChangeText={(value) => setProductWeight13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note13} onChangeText={(value) => setKeterangan13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 13){
					table1.push(
						<View key="20sa15wXca" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>14</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece14}
									onValueChange = {(value)=>updateStatus14(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id14}
									onValueChange = {(value)=>setCategoryNg14(value)}
									>
										{itemNGsLoop()[13]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test14}
									onValueChange = {(value)=>setFittingTest14(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight14} onChangeText={(value) => setProductWeight14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note14} onChangeText={(value) => setKeterangan14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 14){
					table1.push(
						<View key="20sa15wSax" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>15</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece15}
									onValueChange = {(value)=>updateStatus15(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id15}
									onValueChange = {(value)=>setCategoryNg15(value)}
									>
										{itemNGsLoop()[14]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test15}
									onValueChange = {(value)=>setFittingTest15(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight15} onChangeText={(value) => setProductWeight15(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note15} onChangeText={(value) => setKeterangan15(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 15){
					table1.push(
						<View key="20sa15wDwq" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>16</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece16}
									onValueChange = {(value)=>updateStatus16(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id16}
									onValueChange = {(value)=>setCategoryNg16(value)}
									>
										{itemNGsLoop()[15]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test16}
									onValueChange = {(value)=>setFittingTest16(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight16} onChangeText={(value) => setProductWeight16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note16} onChangeText={(value) => setKeterangan16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 16){
					table1.push(
						<View key="Vcxasdwq1" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>17</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece17}
									onValueChange = {(value)=>updateStatus17(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id17}
									onValueChange = {(value)=>setCategoryNg17(value)}
									>
										{itemNGsLoop()[16]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test17}
									onValueChange = {(value)=>setFittingTest17(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight17} onChangeText={(value) => setProductWeight17(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note17} onChangeText={(value) => setKeterangan17(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
				if(cavity > 17){
					table1.push(
						<View key="cdaxWq" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100}}>
									<Text>18</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {judgement_first_piece18}
									onValueChange = {(value)=>updateStatus18(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id18}
									onValueChange = {(value)=>setCategoryNg18(value)}
									>
										{itemNGsLoop()[17]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {fitting_test18}
									onValueChange = {(value)=>setFittingTest18(value)}
									>
										<Picker.Item label="Pilih" value=""/>
										<Picker.Item label="OK" value="OK"/>
										<Picker.Item label="NG" value="NG"/>
										<Picker.Item label="No Check" value="no_check"/>
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
								<View style={{justifyContent: 'center', width: 165.5}}>
									<TextInput keyboardType="numeric" value={product_weight18} onChangeText={(value) => setProductWeight18(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{justifyContent: 'center', width: 145}}>
									<TextInput value={note18} onChangeText={(value) => setKeterangan18(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
					)
				}
			}
		}else{
			if(massproql_items.length > 0){
				var i
				for(i = 0; i < cavity; i++){
					table1.push(
						<View key={i} style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 100}}>
								<Text>{massproql_items[i].cavity}</Text>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 168.5}}>
								<Text>{massproql_items[i].first_piece}</Text>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 165.5}}>
								<Text>{massproql_items[i].qc_ng_category_id == null ? "Data Tidak NG" : massproql_items[i].qc_daily_inspection_id}</Text>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 165.5}}>
								<Text>{massproql_items[i].fitting_test}</Text>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 165.5}}>
								<Text>{massproql_items[i].product_weight}</Text>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<Text>{massproql_items[i].note}</Text>
							</View>
						</View>
					)
				}
			}
		}
		return table1
	}

	const updateStatus1 = (value) => {
		setJudgement1(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus2 = (value) => {
		setJudgement2(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus3 = (value) => {
		setJudgement3(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus4 = (value) => {
		setJudgement4(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus5 = (value) => {
		setJudgement5(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus6 = (value) => {
		setJudgement6(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus7 = (value) => {
		setJudgement7(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus8 = (value) => {
		setJudgement8(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus9 = (value) => {
		setJudgement9(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus10 = (value) => {
		setJudgement10(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus11 = (value) => {
		setJudgement11(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus12 = (value) => {
		setJudgement12(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus13 = (value) => {
		setJudgement13(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus14 = (value) => {
		setJudgement14(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus15 = (value) => {
		setJudgement15(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus16 = (value) => {
		setJudgement16(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus17 = (value) => {
		setJudgement17(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}
	const updateStatus18 = (value) => {
		setJudgement18(value)
		if(value != "NG"){
			setCopySample("OK")
		}else{
			setCopySample("NG")
		}
	}

	const updateCompareCopySampleFunc = () => {
		var data = []
		if(massproQCL != null){
			data.push(
				<View key="aoskdj2moi" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
					<Text>{massproQCL.copy_sample}</Text>
				</View>
			)
		}else{
			data.push(
				<View key="aoskdj2moi" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={copy_sample}
					onValueChange={(value) => setCopySample(value)}
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

	const updateMTRFunc = () => {
		var data = []
		if(massproQCL != null){
			data.push(
				<View key="askdnm2jk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
					<Text>{massproQCL.mtr_need}</Text>
				</View>
			)
		}else{
			data.push(
				<View key="askdnm2jk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={mtr_need}
					onValueChange={(value) => setMtrNeed(value)}
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="Perlu" value="Perlu" />
						<Picker.Item label="Tidak" value="Tidak" />
					</Picker>
				</View>
			)
		}
		return data
	}

	const updateRemark = () => {
		var data = []
		if(massproQCL != null){
			data.push(
				<View key="askdnm2jk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
					<Text>{massproQCL.remark}</Text>
				</View>
			)
		}else{
			data.push(
				<View key="askdnm2jk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40, width: 177}} placeholder="Type Here..." />
				</View>
			)
		}
		return data
	}

	const updateButtonFunc = () => {
		var data = []
		if(massproQCL != null){
			data.push(
				<View key="asokdmo2">
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center', backgroundColor: '#05c46b'}} onPress={() => alert('Data Already Saved!')}><Text>SAVED</Text></Button>
				</View>
			)
		}else{
			data.push(
				<View key="asokdmo2">
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
				</View>
			)
		}
		return data
	}
	
	const content = () => {
		var dataContent = []
		if(dataCavity != null){
			dataContent.push(
				<ScrollView key="asjdn2" style={{flex: 1}}>
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Machines Status</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{data.machine_status != null ? data.machine_status : "-"}</Text>
								</View>
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
							<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{data.tooling_num != null ? data.tooling_num : "-"}</Text>
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
							<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{dataCavity != null ? dataCavity : "-"}</Text>
								</View>
							</View>
						</View>
					</View>
	
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Compare Copy Sample</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								{updateCompareCopySampleFunc()}
							</View>
						</View>
					</View>
	
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Need MTR</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								{updateMTRFunc()}
							</View>
						</View>
					</View>
	
					<ScrollView horizontal>
						<TouchableOpacity>
							<View style={{flexDirection: 'row', height: 50, paddingTop: 10}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<Text style={{fontWeight: 'bold'}}>Cavity</Text>
									<View style={{justifyContent: 'center'}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<Text style={{fontWeight: 'bold', fontSize: 15}}>Judgement Last Shoot</Text>
									<View style={{justifyContent: 'center'}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
									<Text style={{fontWeight: 'bold'}}>Kategori NG</Text>
									<View style={{justifyContent: 'center'}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
									<Text style={{fontWeight: 'bold'}}>Fitting Test</Text>
									<View style={{justifyContent: 'center'}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 165.5}}>
									<Text style={{fontWeight: 'bold'}}>Product's Weight</Text>
									<View style={{justifyContent: 'center'}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderRightWidth: 0.5, borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 145}}>
									<Text style={{fontWeight: 'bold'}}>Keterangan</Text>
									<View style={{justifyContent: 'center'}}>
									</View>
								</View>
							</View>
	
							{dataItem()}
						</TouchableOpacity>
					</ScrollView>
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Remark</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								{updateRemark()}
							</View>
						</View>
					</View>

					<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
						{updateButtonFunc()}
					</View>
					
				</ScrollView>
			
			)
		}else{
			dataContent.push(
				<ScrollView key="29" style={{flex: 1}}>
					<View style={{marginVertical: 160, marginHorizontal: 40, padding: 40, backgroundColor: '#fff76a', borderWidth: 1, borderRadius: 25, flexDirection: 'row', alignItems: 'center'}}>
						<Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Hubungi Foreman Untuk Segera Isi Form Revisi First Piece Foreman</Text>
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
					<View style={{flex: 1, height: 120, backgroundColor: '#F5F5DC', borderWidth: 0.3, flexDirection: 'column'}}>
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5DC'}}>
							<Image source={LogoSIP}/>
							<Text style={{fontSize: 10, fontWeight: 'bold', paddingBottom: 5}}>{daily_inspection_number}</Text>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 100, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#F5F5DC'}}>
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Last Shoot Leader QC</Text>
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
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{data != null ? data.internal_part_id : "-"}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{data != null ? data.customer_part_number : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#F5F5DC'}}>
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

export default LastShootLeaderQc;