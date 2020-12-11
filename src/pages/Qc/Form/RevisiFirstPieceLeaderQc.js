import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import moment from 'moment';
import Axios from 'axios';

const RevisiFirstPieceLeaderQc = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {qc_daily_inspection_id, sys_plant_id, product_name, customer_name, machine_id, machine_name, today, yesterday} = route.params

	const [statusCavity1, setStatusCavity1] 														 = useState("")
	const [statusCavity2, setStatusCavity2] 														 = useState("")
	const [statusCavity3, setStatusCavity3] 														 = useState("")
	const [statusCavity4, setStatusCavity4] 														 = useState("")
	const [statusCavity5, setStatusCavity5] 														 = useState("")
	const [statusCavity6, setStatusCavity6] 														 = useState("")
	const [statusCavity7, setStatusCavity7] 														 = useState("")
	const [statusCavity8, setStatusCavity8] 														 = useState("")
	const [statusCavity9, setStatusCavity9] 														 = useState("")
	const [statusCavity10, setStatusCavity10] 													 = useState("")
	const [statusCavity11, setStatusCavity11] 													 = useState("")
	const [statusCavity12, setStatusCavity12] 													 = useState("")
	const [statusCavity13, setStatusCavity13] 													 = useState("")
	const [statusCavity14, setStatusCavity14] 													 = useState("")
	const [statusCavity15, setStatusCavity15] 													 = useState("")
	const [statusCavity16, setStatusCavity16] 													 = useState("")
	const [statusCavity17, setStatusCavity17] 													 = useState("")
	const [statusCavity18, setStatusCavity18] 													 = useState("")
	
	const [judgement_first_piece1, setJudgement1] 											 = useState("")
	const [judgement_first_piece2, setJudgement2] 											 = useState("")
	const [judgement_first_piece3, setJudgement3] 											 = useState("")
	const [judgement_first_piece4, setJudgement4] 											 = useState("")
	const [judgement_first_piece5, setJudgement5] 											 = useState("")
	const [judgement_first_piece6, setJudgement6] 											 = useState("")
	const [judgement_first_piece7, setJudgement7] 											 = useState("")
	const [judgement_first_piece8, setJudgement8] 											 = useState("")
	const [judgement_first_piece9, setJudgement9] 											 = useState("")
	const [judgement_first_piece10, setJudgement10] 										 = useState("")
	const [judgement_first_piece11, setJudgement11] 										 = useState("")
	const [judgement_first_piece12, setJudgement12] 										 = useState("")
	const [judgement_first_piece13, setJudgement13] 										 = useState("")
	const [judgement_first_piece14, setJudgement14] 										 = useState("")
	const [judgement_first_piece15, setJudgement15] 										 = useState("")
	const [judgement_first_piece16, setJudgement16] 										 = useState("")
	const [judgement_first_piece17, setJudgement17] 										 = useState("")
	const [judgement_first_piece18, setJudgement18] 										 = useState("")
	
	const [qc_ng_category_id1, setCategoryNg1] 													 = useState("")
	const [qc_ng_category_id2, setCategoryNg2] 													 = useState("")
	const [qc_ng_category_id3, setCategoryNg3] 													 = useState("")
	const [qc_ng_category_id4, setCategoryNg4] 													 = useState("")
	const [qc_ng_category_id5, setCategoryNg5] 													 = useState("")
	const [qc_ng_category_id6, setCategoryNg6] 													 = useState("")
	const [qc_ng_category_id7, setCategoryNg7] 													 = useState("")
	const [qc_ng_category_id8, setCategoryNg8] 													 = useState("")
	const [qc_ng_category_id9, setCategoryNg9] 													 = useState("")
	const [qc_ng_category_id10, setCategoryNg10] 												 = useState("")
	const [qc_ng_category_id11, setCategoryNg11] 												 = useState("")
	const [qc_ng_category_id12, setCategoryNg12] 												 = useState("")
	const [qc_ng_category_id13, setCategoryNg13] 												 = useState("")
	const [qc_ng_category_id14, setCategoryNg14] 												 = useState("")
	const [qc_ng_category_id15, setCategoryNg15] 												 = useState("")
	const [qc_ng_category_id16, setCategoryNg16] 												 = useState("")
	const [qc_ng_category_id17, setCategoryNg17] 												 = useState("")
	const [qc_ng_category_id18, setCategoryNg18] 												 = useState("")
	
	const [fitting_test1, setFittingTest1] 															 = useState("")
	const [fitting_test2, setFittingTest2] 															 = useState("")
	const [fitting_test3, setFittingTest3] 															 = useState("")
	const [fitting_test4, setFittingTest4] 															 = useState("")
	const [fitting_test5, setFittingTest5] 															 = useState("")
	const [fitting_test6, setFittingTest6] 															 = useState("")
	const [fitting_test7, setFittingTest7] 															 = useState("")
	const [fitting_test8, setFittingTest8] 															 = useState("")
	const [fitting_test9, setFittingTest9] 															 = useState("")
	const [fitting_test10, setFittingTest10] 														 = useState("")
	const [fitting_test11, setFittingTest11] 														 = useState("")
	const [fitting_test12, setFittingTest12] 														 = useState("")
	const [fitting_test13, setFittingTest13] 														 = useState("")
	const [fitting_test14, setFittingTest14] 														 = useState("")
	const [fitting_test15, setFittingTest15] 														 = useState("")
	const [fitting_test16, setFittingTest16] 														 = useState("")
	const [fitting_test17, setFittingTest17] 														 = useState("")
	const [fitting_test18, setFittingTest18] 														 = useState("")
	
	const [product_weight1, setProductWeight1] 													 = useState("")
	const [product_weight2, setProductWeight2] 													 = useState("")
	const [product_weight3, setProductWeight3] 													 = useState("")
	const [product_weight4, setProductWeight4] 													 = useState("")
	const [product_weight5, setProductWeight5] 													 = useState("")
	const [product_weight6, setProductWeight6] 													 = useState("")
	const [product_weight7, setProductWeight7] 													 = useState("")
	const [product_weight8, setProductWeight8] 													 = useState("")
	const [product_weight9, setProductWeight9] 													 = useState("")
	const [product_weight10, setProductWeight10] 												 = useState("")
	const [product_weight11, setProductWeight11] 												 = useState("")
	const [product_weight12, setProductWeight12] 												 = useState("")
	const [product_weight13, setProductWeight13] 												 = useState("")
	const [product_weight14, setProductWeight14] 												 = useState("")
	const [product_weight15, setProductWeight15] 												 = useState("")
	const [product_weight16, setProductWeight16] 												 = useState("")
	const [product_weight17, setProductWeight17] 												 = useState("")
	const [product_weight18, setProductWeight18] 												 = useState("")
	
	const [note1, setKeterangan1] 																	 		 = useState("")
	const [note2, setKeterangan2] 																	 		 = useState("")
	const [note3, setKeterangan3] 																	 		 = useState("")
	const [note4, setKeterangan4] 																	 		 = useState("")
	const [note5, setKeterangan5] 																	 		 = useState("")
	const [note6, setKeterangan6] 																	 		 = useState("")
	const [note7, setKeterangan7] 																	 		 = useState("")
	const [note8, setKeterangan8] 																	 		 = useState("")
	const [note9, setKeterangan9] 																	 		 = useState("")
	const [note10, setKeterangan10] 																	 	 = useState("")
	const [note11, setKeterangan11] 																	 	 = useState("")
	const [note12, setKeterangan12] 																	 	 = useState("")
	const [note13, setKeterangan13] 																	 	 = useState("")
	const [note14, setKeterangan14] 																	 	 = useState("")
	const [note15, setKeterangan15] 																	 	 = useState("")
	const [note16, setKeterangan16] 																	 	 = useState("")
	const [note17, setKeterangan17] 																	 	 = useState("")
	const [note18, setKeterangan18] 																	 	 = useState("")

	const [hours, setHours] 												= useState(0)
	const [shift, setShift]		  										= useState(0)
	const [cavityCheck, setCavityCheck] 						= useState("")
	const [tooling_num, setTooling] 								= useState("")
	const [copy_sample, setCopySample]				 			= useState("")
	const [check_sheet, setCheckSheet] 							= useState("")
	const [created_by, setCreatedBy]		  					= useState("")
	const [updated_by, setUpdatedBy]		  					= useState("")
	const [remark, setRemark]		  									= useState("")
	let created_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	const date = []
	const [data, setData] 													= useState([])
	const [dataQl, setDataMachineStatus] 						= useState([])
	const [ngCategories, setNGsData]								= useState([])
	const [eng_product_id, setEngProd] 						 	= useState(0)
	const prod_machine_id = machine_id
	const [planningId, setPlanningId] 							= useState("")
	const planning_id = parseInt(planningId)
	const [internal_part_id, setIPI] 							= useState("")
	const [revisiQc, setRevisiQc] 		  					= useState("")
	const [updateCopySample, setUpdateCopySample] = useState("")
	const [updateCheckSheet, setUpdateCheckSheet] = useState("")
	const [updateRemark, setUpdateRemark] 	= useState("")
	
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

	if(ngCategories.length > 0)
	{
		if(check_sheet == "NG" || copy_sample == "NG")
		{
			var dataNGs = []
			ngCategories.map((element, key) => {
				dataNGs.push(
				<Picker.Item label={element.name} value={element.id} key={key} />
				)
			})
		}else{
			var dataNGs = []
			dataNGs.push(
				<Picker.Item label="Tidak NG" value="" key="swQwdAcxz12" />
			)
		}
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
				kind: 'rev_first_piece_qc',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 2,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
			.then(response => {
				setEngProd(response.data.data.eng_product_id)
				setData(response.data.data.product_detail)
				setDataMachineStatus(response.data.data.masspro_ql)
				setNGsData(response.data.data.ng_category)
				setTooling(response.data.data.tooling_num)
				setCavityCheck(response.data.data.product_detail.cavity)
				setPlanningId(response.data.data.planning_id)
				setIPI(response.data.data.product_detail.internal_part_id)
				setRevisiQc(response.data.data.masspro_ql_items)
				setUpdateCopySample(response.data.data.masspro_ql_items.copy_sample)
				setUpdateCheckSheet(response.data.data.masspro_ql_items.check_sheet)
				setCopySample(response.data.data.masspro_ql.compare_sample)
				setCheckSheet(response.data.data.masspro_ql.check_sheet)
				setRemark(response.data.data.masspro_ql.remark)
				setUpdateRemark(response.data.data.masspro_ql_items.remark)
				console.log("List Data Revisi First Piece Leader QC: ", response.data.status, "OK")
			})
			.catch(error => {
				console.log('List Data Revisi First Piece Leader QC: ', error)
			})
		}else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
			const nilaiJam = parseInt(jam)
			setShift(3)
			setHours(nilaiJam)
			const params = {
				tbl: 'daily_inspection',
				kind: 'rev_first_piece_qc',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 3,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
			.then(response => {
				setEngProd(response.data.data.eng_product_id)
				setData(response.data.data.product_detail)
				setDataMachineStatus(response.data.data.masspro_ql)
				setNGsData(response.data.data.ng_category)
				setTooling(response.data.data.product_detail.tooling_num)
				setCavityCheck(response.data.data.product_detail.cavity)
				setPlanningId(response.data.data.planning_id)
				setIPI(response.data.data.product_detail.internal_part_id)
				setRevisiQc(response.data.data.masspro_ql_items)
				setUpdateCopySample(response.data.data.masspro_ql_items.copy_sample)
				setUpdateCheckSheet(response.data.data.masspro_ql_items.check_sheet)
				setCopySample(response.data.data.masspro_ql.compare_sample)
				setCheckSheet(response.data.data.masspro_ql.check_sheet)
				setRemark(response.data.data.masspro_ql.remark)
				setUpdateRemark(response.data.data.masspro_ql_items.remark)
				console.log("List Data Revisi First Piece Leader QC: ", response.data.status, "OK")
			})
			.catch(error => {
				console.log('List Data Revisi First Piece Leader QC: ', error)
			})
		}else{
			const nilaiJam = parseInt(jam)
			setShift(4)
			setHours(nilaiJam)
			const params = {
				tbl: 'daily_inspection',
				kind: 'rev_first_piece_qc',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 4,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
			.then(response => {
				setEngProd(response.data.data.eng_product_id)
				setData(response.data.data.product_detail)
				setDataMachineStatus(response.data.data.masspro_ql)
				setNGsData(response.data.data.ng_category)
				setTooling(response.data.data.product_detail.tooling_num)
				setCavityCheck(response.data.data.product_detail.cavity)
				setPlanningId(response.data.data.planning_id)
				setIPI(response.data.data.product_detail.internal_part_id)
				setRevisiQc(response.data.data.masspro_ql_items)
				setUpdateCopySample(response.data.data.masspro_ql_items.copy_sample)
				setUpdateCheckSheet(response.data.data.masspro_ql_items.check_sheet)
				setCopySample(response.data.data.masspro_ql.compare_sample)
				setCheckSheet(response.data.data.masspro_ql.check_sheet)
				setRemark(response.data.data.masspro_ql.remark)
				setUpdateRemark(response.data.data.masspro_ql_items.remark)
				console.log("List Data Revisi First Piece Leader QC: ", response.data.status, "OK")
			})
			.catch(error => {
				console.log('List Data Revisi First Piece Leader QC: ', error)
			})
		}
	}

	const shiftFix = async(value) => {
		setHours(value)
	}
	
	const item = {
			"cav_1": {
				"cavity": statusCavity1,
				"judgement_first_piece": judgement_first_piece1,
				"qc_ng_category_id": qc_ng_category_id1,
				"fitting_test": fitting_test1,
				"product_weight": product_weight1,
				"note": note1
			},
			"cav_2": {
				"cavity": statusCavity2,
				"judgement_first_piece": judgement_first_piece2,
				"qc_ng_category_id": qc_ng_category_id2,
				"fitting_test": fitting_test2,
				"product_weight": product_weight2,
				"note": note2
			},
			"cav_3": {
				"cavity": statusCavity3,
				"judgement_first_piece": judgement_first_piece3,
				"qc_ng_category_id": qc_ng_category_id3,
				"fitting_test": fitting_test3,
				"product_weight": product_weight3,
				"note": note3
			},
			"cav_4": {
				"cavity": statusCavity4,
				"judgement_first_piece": judgement_first_piece4,
				"qc_ng_category_id": qc_ng_category_id4,
				"fitting_test": fitting_test4,
				"product_weight": product_weight4,
				"note": note4
			},
			"cav_5": {
				"cavity": statusCavity5,
				"judgement_first_piece": judgement_first_piece5,
				"qc_ng_category_id": qc_ng_category_id5,
				"fitting_test": fitting_test5,
				"product_weight": product_weight5,
				"note": note5
			},
			"cav_6": {
				"cavity": statusCavity6,
				"judgement_first_piece": judgement_first_piece6,
				"qc_ng_category_id": qc_ng_category_id6,
				"fitting_test": fitting_test6,
				"product_weight": product_weight6,
				"note": note6
			},
			"cav_7": {
				"cavity": statusCavity7,
				"judgement_first_piece": judgement_first_piece7,
				"qc_ng_category_id": qc_ng_category_id7,
				"fitting_test": fitting_test7,
				"product_weight": product_weight7,
				"note": note7
			},
			"cav_8": {
				"cavity": statusCavity8,
				"judgement_first_piece": judgement_first_piece8,
				"qc_ng_category_id": qc_ng_category_id8,
				"fitting_test": fitting_test8,
				"product_weight": product_weight8,
				"note": note8
			},
			"cav_9": {
				"cavity": statusCavity9,
				"judgement_first_piece": judgement_first_piece9,
				"qc_ng_category_id": qc_ng_category_id9,
				"fitting_test": fitting_test9,
				"product_weight": product_weight9,
				"note": note9
			},
			"cav_10": {
				"cavity": statusCavity10,
				"judgement_first_piece": judgement_first_piece10,
				"qc_ng_category_id": qc_ng_category_id10,
				"fitting_test": fitting_test10,
				"product_weight": product_weight10,
				"note": note10
			},
			"cav_11": {
				"cavity": statusCavity11,
				"judgement_first_piece": judgement_first_piece11,
				"qc_ng_category_id": qc_ng_category_id11,
				"fitting_test": fitting_test11,
				"product_weight": product_weight11,
				"note": note11
			},
			"cav_12": {
				"cavity": statusCavity12,
				"judgement_first_piece": judgement_first_piece12,
				"qc_ng_category_id": qc_ng_category_id12,
				"fitting_test": fitting_test12,
				"product_weight": product_weight12,
				"note": note12
			},
			"cav_13": {
				"cavity": statusCavity13,
				"judgement_first_piece": judgement_first_piece13,
				"qc_ng_category_id": qc_ng_category_id13,
				"fitting_test": fitting_test13,
				"product_weight": product_weight13,
				"note": note13
			},
			"cav_14": {
				"cavity": statusCavity14,
				"judgement_first_piece": judgement_first_piece14,
				"qc_ng_category_id": qc_ng_category_id14,
				"fitting_test": fitting_test14,
				"product_weight": product_weight14,
				"note": note14
			},
			"cav_15": {
				"cavity": statusCavity15,
				"judgement_first_piece": judgement_first_piece15,
				"qc_ng_category_id": qc_ng_category_id15,
				"fitting_test": fitting_test15,
				"product_weight": product_weight15,
				"note": note15
			},
			"cav_16": {
				"cavity": statusCavity16,
				"judgement_first_piece": judgement_first_piece16,
				"qc_ng_category_id": qc_ng_category_id16,
				"fitting_test": fitting_test16,
				"product_weight": product_weight16,
				"note": note16
			},
			"cav_17": {
				"cavity": statusCavity17,
				"judgement_first_piece": judgement_first_piece17,
				"qc_ng_category_id": qc_ng_category_id17,
				"fitting_test": fitting_test17,
				"product_weight": product_weight17,
				"note": note17
			},
			"cav_18": {
				"cavity": statusCavity18,
				"judgement_first_piece": judgement_first_piece18,
				"qc_ng_category_id": qc_ng_category_id18,
				"fitting_test": fitting_test18,
				"product_weight": product_weight18,
				"note": note18
			}
	}

	const cavity = cavityCheck

	const submit = async() => {
		const data = {
			eng_product_id,
			prod_machine_id,
			sys_plant_id,
			qc_daily_inspection_id,
			tooling_num,
			planning_id,
			internal_part_id,
			copy_sample,
			check_sheet,
			remark,
			item,
			created_by,
			created_at,
			updated_by,
			updated_at
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'rev_first_piece_qc'
		}
		var config = {
			method: 'put',
			url: 'http://139.255.26.194:3003/api/v1/qcs/update?',
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
			navigation.navigate('ShowProducts')
			alert("Success Send Data!")
			console.log("Res: ", response.status, " Ok")
		})
		.catch(function (error){
			console.log(error)
		})
	}

	const fxData = []
	if(revisiQc == null){
	if(cavityCheck != null)
	{
		var table1 = []
		var table2 = []
		var table3 = []
		var table4 = []
		var table5 = []
		var table6 = []
		var table7 = []
		var table8 = []
		var table9 = []
		var table10 = []
		var table11 = []
		var table12 = []
		var table13 = []
		var table14 = []
		var table15 = []
		var table16 = []
		var table17 = []
		var table18 = []
		if(cavityCheck == 1){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 166}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 2){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 3){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKerangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 4){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 5){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 6){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 7){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 8){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 9){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 10){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table10.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity10}
							onValueChange = {(value)=>setStatusCavity10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece10}
							onValueChange = {(value)=>setJudgement10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id10}
							onValueChange = {(value)=>setCategoryNg10(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test10}
							onValueChange = {(value)=>setFittingTest10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 11){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table10.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity10}
							onValueChange = {(value)=>setStatusCavity10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece10}
							onValueChange = {(value)=>setJudgement10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id10}
							onValueChange = {(value)=>setCategoryNg10(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test10}
							onValueChange = {(value)=>setFittingTest10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table11.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity11}
							onValueChange = {(value)=>setStatusCavity11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece11}
							onValueChange = {(value)=>setJudgement11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id11}
							onValueChange = {(value)=>setCategoryNg11(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test11}
							onValueChange = {(value)=>setFittingTest11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setProductWeight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 12){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table10.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity10}
							onValueChange = {(value)=>setStatusCavity10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece10}
							onValueChange = {(value)=>setJudgement10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id10}
							onValueChange = {(value)=>setCategoryNg10(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test10}
							onValueChange = {(value)=>setFittingTest10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table11.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity11}
							onValueChange = {(value)=>setStatusCavity11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece11}
							onValueChange = {(value)=>setJudgement11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id11}
							onValueChange = {(value)=>setCategoryNg11(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test11}
							onValueChange = {(value)=>setFittingTest11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setProductWeight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table12.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity12}
							onValueChange = {(value)=>setStatusCavity12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece12}
							onValueChange = {(value)=>setJudgement12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id12}
							onValueChange = {(value)=>setCategoryNg12(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test12}
							onValueChange = {(value)=>setFittingTest12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight12} onChangeText={(value) => setProductWeight12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note12} onChangeText={(value) => setKeterangan12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 13){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table10.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity10}
							onValueChange = {(value)=>setStatusCavity10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece10}
							onValueChange = {(value)=>setJudgement10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id10}
							onValueChange = {(value)=>setCategoryNg10(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test10}
							onValueChange = {(value)=>setFittingTest10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table11.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity11}
							onValueChange = {(value)=>setStatusCavity11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece11}
							onValueChange = {(value)=>setJudgement11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id11}
							onValueChange = {(value)=>setCategoryNg11(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test11}
							onValueChange = {(value)=>setFittingTest11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setProductWeight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table12.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity12}
							onValueChange = {(value)=>setStatusCavity12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece12}
							onValueChange = {(value)=>setJudgement12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id12}
							onValueChange = {(value)=>setCategoryNg12(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test12}
							onValueChange = {(value)=>setFittingTest12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight12} onChangeText={(value) => setProductWeight12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note12} onChangeText={(value) => setKeterangan12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table13.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity13}
							onValueChange = {(value)=>setStatusCavity13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece13}
							onValueChange = {(value)=>setJudgement13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id13}
							onValueChange = {(value)=>setCategoryNg13(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test13}
							onValueChange = {(value)=>setFittingTest13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight13} onChangeText={(value) => setProductWeight13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note13} onChangeText={(value) => setKeterangan13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 14){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table10.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity10}
							onValueChange = {(value)=>setStatusCavity10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece10}
							onValueChange = {(value)=>setJudgement10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id10}
							onValueChange = {(value)=>setCategoryNg10(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test10}
							onValueChange = {(value)=>setFittingTest10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table11.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity11}
							onValueChange = {(value)=>setStatusCavity11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece11}
							onValueChange = {(value)=>setJudgement11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id11}
							onValueChange = {(value)=>setCategoryNg11(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test11}
							onValueChange = {(value)=>setFittingTest11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setProductWeight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table12.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity12}
							onValueChange = {(value)=>setStatusCavity12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece12}
							onValueChange = {(value)=>setJudgement12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id12}
							onValueChange = {(value)=>setCategoryNg12(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test12}
							onValueChange = {(value)=>setFittingTest12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight12} onChangeText={(value) => setProductWeight12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note12} onChangeText={(value) => setKeterangan12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table13.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity13}
							onValueChange = {(value)=>setStatusCavity13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece13}
							onValueChange = {(value)=>setJudgement13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id13}
							onValueChange = {(value)=>setCategoryNg13(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test13}
							onValueChange = {(value)=>setFittingTest13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight13} onChangeText={(value) => setProductWeight13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note13} onChangeText={(value) => setKeterangan13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table14.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity14}
							onValueChange = {(value)=>setStatusCavity14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece14}
							onValueChange = {(value)=>setJudgement14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id14}
							onValueChange = {(value)=>setCategoryNg14(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test14}
							onValueChange = {(value)=>setFittingTest14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight14} onChangeText={(value) => setProductWeight14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note14} onChangeText={(value) => setKeterangan14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 15){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput keyboardType="numeric" value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table10.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity10}
							onValueChange = {(value)=>setStatusCavity10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece10}
							onValueChange = {(value)=>setJudgement10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id10}
							onValueChange = {(value)=>setCategoryNg10(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test10}
							onValueChange = {(value)=>setFittingTest10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table11.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity11}
							onValueChange = {(value)=>setStatusCavity11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece11}
							onValueChange = {(value)=>setJudgement11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id11}
							onValueChange = {(value)=>setCategoryNg11(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test11}
							onValueChange = {(value)=>setFittingTest11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setProductWeight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table12.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity12}
							onValueChange = {(value)=>setStatusCavity12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece12}
							onValueChange = {(value)=>setJudgement12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id12}
							onValueChange = {(value)=>setCategoryNg12(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test12}
							onValueChange = {(value)=>setFittingTest12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight12} onChangeText={(value) => setProductWeight12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note12} onChangeText={(value) => setKeterangan12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table13.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity13}
							onValueChange = {(value)=>setStatusCavity13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece13}
							onValueChange = {(value)=>setJudgement13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id13}
							onValueChange = {(value)=>setCategoryNg13(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test13}
							onValueChange = {(value)=>setFittingTest13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight13} onChangeText={(value) => setProductWeight13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note13} onChangeText={(value) => setKeterangan13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table14.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity14}
							onValueChange = {(value)=>setStatusCavity14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece14}
							onValueChange = {(value)=>setJudgement14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id14}
							onValueChange = {(value)=>setCategoryNg14(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test14}
							onValueChange = {(value)=>setFittingTest14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight14} onChangeText={(value) => setProductWeight14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note14} onChangeText={(value) => setKeterangan14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table15.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity15}
							onValueChange = {(value)=>setStatusCavity15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece15}
							onValueChange = {(value)=>setJudgement15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id15}
							onValueChange = {(value)=>setCategoryNg15(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test15}
							onValueChange = {(value)=>setFittingTest15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight15} onChangeText={(value) => setProductWeight15(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note15} onChangeText={(value) => setKeterangan15(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 16){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table10.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity10}
							onValueChange = {(value)=>setStatusCavity10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece10}
							onValueChange = {(value)=>setJudgement10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id10}
							onValueChange = {(value)=>setCategoryNg10(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test10}
							onValueChange = {(value)=>setFittingTest10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table11.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity11}
							onValueChange = {(value)=>setStatusCavity11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece11}
							onValueChange = {(value)=>setJudgement11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id11}
							onValueChange = {(value)=>setCategoryNg11(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test11}
							onValueChange = {(value)=>setFittingTest11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setProductWeight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table12.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity12}
							onValueChange = {(value)=>setStatusCavity12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece12}
							onValueChange = {(value)=>setJudgement12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id12}
							onValueChange = {(value)=>setCategoryNg12(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test12}
							onValueChange = {(value)=>setFittingTest12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight12} onChangeText={(value) => setProductWeight12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note12} onChangeText={(value) => setKeterangan12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table13.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity13}
							onValueChange = {(value)=>setStatusCavity13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece13}
							onValueChange = {(value)=>setJudgement13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id13}
							onValueChange = {(value)=>setCategoryNg13(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test13}
							onValueChange = {(value)=>setFittingTest13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight13} onChangeText={(value) => setProductWeight13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note13} onChangeText={(value) => setKeterangan13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table14.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity14}
							onValueChange = {(value)=>setStatusCavity14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece14}
							onValueChange = {(value)=>setJudgement14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id14}
							onValueChange = {(value)=>setCategoryNg14(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test14}
							onValueChange = {(value)=>setFittingTest14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight14} onChangeText={(value) => setProductWeight14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note14} onChangeText={(value) => setKeterangan14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table15.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity15}
							onValueChange = {(value)=>setStatusCavity15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece15}
							onValueChange = {(value)=>setJudgement15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id15}
							onValueChange = {(value)=>setCategoryNg15(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test15}
							onValueChange = {(value)=>setFittingTest15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {product_weight15}
							onValueChange = {(value)=>setProductWeight15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<Picker 
							mode="dropdown"
							selectedValue= {note15}
							onValueChange = {(value)=>setKeterangan15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
				</View>
			)
			table16.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity16}
							onValueChange = {(value)=>setStatusCavity16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece16}
							onValueChange = {(value)=>setJudgement16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id16}
							onValueChange = {(value)=>setCategoryNg16(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test16}
							onValueChange = {(value)=>setFittingTest16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight16} onChangeText={(value) => setProductWeight16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note16} onChangeText={(value) => setKeterangan16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(cavity == 17){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table10.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity10}
							onValueChange = {(value)=>setStatusCavity10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece10}
							onValueChange = {(value)=>setJudgement10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id10}
							onValueChange = {(value)=>setCategoryNg10(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test10}
							onValueChange = {(value)=>setFittingTest10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table11.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity11}
							onValueChange = {(value)=>setStatusCavity11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece11}
							onValueChange = {(value)=>setJudgement11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id11}
							onValueChange = {(value)=>setCategoryNg11(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test11}
							onValueChange = {(value)=>setFittingTest11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setProductWeight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table12.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity12}
							onValueChange = {(value)=>setStatusCavity12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece12}
							onValueChange = {(value)=>setJudgement12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id12}
							onValueChange = {(value)=>setCategoryNg12(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test12}
							onValueChange = {(value)=>setFittingTest12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight12} onChangeText={(value) => setProductWeight12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note12} onChangeText={(value) => setKeterangan12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table13.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity13}
							onValueChange = {(value)=>setStatusCavity13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece13}
							onValueChange = {(value)=>setJudgement13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id13}
							onValueChange = {(value)=>setCategoryNg13(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test13}
							onValueChange = {(value)=>setFittingTest13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight13} onChangeText={(value) => setProductWeight13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note13} onChangeText={(value) => setKeterangan13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table14.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity14}
							onValueChange = {(value)=>setStatusCavity14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece14}
							onValueChange = {(value)=>setJudgement14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id14}
							onValueChange = {(value)=>setCategoryNg14(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test14}
							onValueChange = {(value)=>setFittingTest14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight14} onChangeText={(value) => setProductWeight14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note14} onChangeText={(value) => setKeterangan14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table15.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity15}
							onValueChange = {(value)=>setStatusCavity15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece15}
							onValueChange = {(value)=>setJudgement15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id15}
							onValueChange = {(value)=>setCategoryNg15(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test15}
							onValueChange = {(value)=>setFittingTest15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {product_weight15}
							onValueChange = {(value)=>setProductWeight15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<Picker 
							mode="dropdown"
							selectedValue= {note15}
							onValueChange = {(value)=>setKeterangan15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
				</View>
			)
			table16.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity16}
							onValueChange = {(value)=>setStatusCavity16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece16}
							onValueChange = {(value)=>setJudgement16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id16}
							onValueChange = {(value)=>setCategoryNg16(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test16}
							onValueChange = {(value)=>setFittingTest16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight16} onChangeText={(value) => setProductWeight16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note16} onChangeText={(value) => setKeterangan16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table17.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity17}
							onValueChange = {(value)=>setStatusCavity17(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece17}
							onValueChange = {(value)=>setJudgement17(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id17}
							onValueChange = {(value)=>setCategoryNg17(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test17}
							onValueChange = {(value)=>setFittingTest17(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight17} onChangeText={(value) => setProductWeight17(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note17} onChangeText={(value) => setKeterangan17(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		
		}else if(cavity == 18){
			table1.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity1}
							onValueChange = {(value)=>setStatusCavity1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece1}
							onValueChange = {(value)=>setJudgement1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id1}
							onValueChange = {(value)=>setCategoryNg1(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test1}
							onValueChange = {(value)=>setFittingTest1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setProductWeight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table2.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity2}
							onValueChange = {(value)=>setStatusCavity2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece2}
							onValueChange = {(value)=>setJudgement2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id2}
							onValueChange = {(value)=>setCategoryNg2(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test2}
							onValueChange = {(value)=>setFittingTest2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setProductWeight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table3.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity3}
							onValueChange = {(value)=>setStatusCavity3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece3}
							onValueChange = {(value)=>setJudgement3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id3}
							onValueChange = {(value)=>setCategoryNg3(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test3}
							onValueChange = {(value)=>setFittingTest3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setProductWeight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table4.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity4}
							onValueChange = {(value)=>setStatusCavity4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece4}
							onValueChange = {(value)=>setJudgement4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id4}
							onValueChange = {(value)=>setCategoryNg4(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test4}
							onValueChange = {(value)=>setFittingTest4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setProductWeight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table5.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity5}
							onValueChange = {(value)=>setStatusCavity5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece5}
							onValueChange = {(value)=>setJudgement5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id5}
							onValueChange = {(value)=>setCategoryNg5(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test5}
							onValueChange = {(value)=>setFittingTest5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setProductWeight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table6.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity6}
							onValueChange = {(value)=>setStatusCavity6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece6}
							onValueChange = {(value)=>setJudgement6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id6}
							onValueChange = {(value)=>setCategoryNg6(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test6}
							onValueChange = {(value)=>setFittingTest6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setProductWeight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table7.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity7}
							onValueChange = {(value)=>setStatusCavity7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece7}
							onValueChange = {(value)=>setJudgement7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id7}
							onValueChange = {(value)=>setCategoryNg7(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test7}
							onValueChange = {(value)=>setFittingTest7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setProductWeight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table8.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity8}
							onValueChange = {(value)=>setStatusCavity8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece8}
							onValueChange = {(value)=>setJudgement8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id8}
							onValueChange = {(value)=>setCategoryNg8(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test8}
							onValueChange = {(value)=>setFittingTest8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table9.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity9}
							onValueChange = {(value)=>setStatusCavity9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece9}
							onValueChange = {(value)=>setJudgement9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id9}
							onValueChange = {(value)=>setCategoryNg9(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test9}
							onValueChange = {(value)=>setFittingTest9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setProductWeight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table10.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity10}
							onValueChange = {(value)=>setStatusCavity10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece10}
							onValueChange = {(value)=>setJudgement10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id10}
							onValueChange = {(value)=>setCategoryNg10(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test10}
							onValueChange = {(value)=>setFittingTest10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setProductWeight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table11.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity11}
							onValueChange = {(value)=>setStatusCavity11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece11}
							onValueChange = {(value)=>setJudgement11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id11}
							onValueChange = {(value)=>setCategoryNg11(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test11}
							onValueChange = {(value)=>setFittingTest11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setProductWeight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table12.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity12}
							onValueChange = {(value)=>setStatusCavity12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece12}
							onValueChange = {(value)=>setJudgement12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id12}
							onValueChange = {(value)=>setCategoryNg12(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test12}
							onValueChange = {(value)=>setFittingTest12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight12} onChangeText={(value) => setProductWeight12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note12} onChangeText={(value) => setKeterangan12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table13.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity13}
							onValueChange = {(value)=>setStatusCavity13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece13}
							onValueChange = {(value)=>setJudgement13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id13}
							onValueChange = {(value)=>setCategoryNg13(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test13}
							onValueChange = {(value)=>setFittingTest13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight13} onChangeText={(value) => setProductWeight13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note13} onChangeText={(value) => setKeterangan13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table14.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity14}
							onValueChange = {(value)=>setStatusCavity14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece14}
							onValueChange = {(value)=>setJudgement14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id14}
							onValueChange = {(value)=>setCategoryNg14(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test14}
							onValueChange = {(value)=>setFittingTest14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight14} onChangeText={(value) => setProductWeight14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note14} onChangeText={(value) => setKeterangan14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table15.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity15}
							onValueChange = {(value)=>setStatusCavity15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece15}
							onValueChange = {(value)=>setJudgement15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id15}
							onValueChange = {(value)=>setCategoryNg15(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test15}
							onValueChange = {(value)=>setFittingTest15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {product_weight15}
							onValueChange = {(value)=>setProductWeight15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<Picker 
							mode="dropdown"
							selectedValue= {note15}
							onValueChange = {(value)=>setKeterangan15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
				</View>
			)
			table16.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity16}
							onValueChange = {(value)=>setStatusCavity16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece16}
							onValueChange = {(value)=>setJudgement16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id16}
							onValueChange = {(value)=>setCategoryNg16(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test16}
							onValueChange = {(value)=>setFittingTest16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight16} onChangeText={(value) => setProductWeight16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note16} onChangeText={(value) => setKeterangan16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table17.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity17}
							onValueChange = {(value)=>setStatusCavity17(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece17}
							onValueChange = {(value)=>setJudgement17(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id17}
							onValueChange = {(value)=>setCategoryNg17(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test17}
							onValueChange = {(value)=>setFittingTest17(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight17} onChangeText={(value) => setProductWeight17(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note17} onChangeText={(value) => setKeterangan17(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
			table18.push(
				<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 100}}>
							<Picker 
							mode="dropdown"
							selectedValue= {statusCavity18}
							onValueChange = {(value)=>setStatusCavity18(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 168.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {judgement_first_piece18}
							onValueChange = {(value)=>setJudgement18(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {qc_ng_category_id18}
							onValueChange = {(value)=>setCategoryNg18(value)}
							>
								{dataNGs}
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 165.5}}>
							<Picker 
							mode="dropdown"
							selectedValue= {fitting_test18}
							onValueChange = {(value)=>setFittingTest18(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 133.5}}>
							<TextInput keyboardType="numeric" value={product_weight18} onChangeText={(value) => setProductWeight18(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note18} onChangeText={(value) => setKeterangan18(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}
	}
	}else{
		fxData.push(
			<View key="asdk2" style={{flexDirection: 'row', height: 50, backgroundColor : '#b8b8b8'}}>
				<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
					<View style={{justifyContent: 'center', width: 908.5, alignItems: 'center', justifyContent: 'center'}}>
						<Text style={{fontSize: 18}}>Already Saved</Text>
					</View>
				</View>
			</View>
		)
	}	

	const hString = hours.toString()

	const updateCompareCopyFunc = () => {
		const updateRF = updateCopySample
		var data = []
		const rfData = revisiQc
		if(rfData != null){
			if(updateRF != "OK" && updateRF != "NG"){
				data.push(
					<View key="askdj2nk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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
			}else{
				data.push(
					<View key="askdj2nk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateRF}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="askdj2nk" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
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

	const updateCheckSheetFunc = () => {
		const updateRF = updateCheckSheet
		var data = []
		const rfData = revisiQc
		if(rfData != null){
			if(updateRF != "OK" && updateRF != "NG"){
				data.push(
					<View key="Asoidjnj2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={check_sheet}
						onValueChange={(value) => setCheckSheet(value)}
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				<View key="Asoidjnj2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
					<Text>{updateRF}</Text>
				</View>
			}
		}else{
			data.push(
				<View key="Asoidjnj2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={check_sheet}
					onValueChange={(value) => setCheckSheet(value)}
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

	const updateRemarkFunc = () => {
		const updateRF = updateRemark
		var data = []
		const rfData = revisiQc
		if(rfData != null){
			if(updateRF != null){
				data.push(
					<View key="asidjn2j" style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5, borderWidth: 0.5, borderRadius: 25,}}>
						<Text>{updateRF}</Text>
					</View>
				)
			}else{
				data.push(
					<View key="Asoidjnj2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} value={remark} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			data.push(
				<View key="Asoidjnj2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40}} value={remark} placeholder="Type Here..." />
				</View>
			)
		}
		return data
	}

	const updateButton = () => {
		const updateRF = revisiQc
		const data = []
		if(updateRF != null){
			data.push(
				<View key="asd12q" style={{paddingTop: 10}}>
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center', backgroundColor: '#05c46b'}} onPress={() => alert("Data QC Leader Already Saved!")}><Text>SAVED</Text></Button>
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

	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex: 1}} >
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
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Revisi First Piece Leader QC</Text>
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

						<ScrollView style={{flex: 1}}>
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
											<Text>{dataQl != null ? dataQl.machine_status : "-"}</Text>
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
									<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
										<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
											<Text>{cavityCheck != null ? cavityCheck : "-"}</Text>
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
										{updateCompareCopyFunc()}
									</View>
								</View>
							</View>

							<View style={{paddingTop: 20, flexDirection: 'row'}}>
									<View style={{padding: 10, width: "44%"}}>
										<Text>Check Sheet QC</Text>
									</View>
									<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
										<Text style={{color: 'black'}}>:</Text>
									</View>
									<View style={{padding: 4, width: "50%"}}>
										<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
											{updateCheckSheetFunc()}
										</View>
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
						<ScrollView horizontal>
						<TouchableOpacity>
							<View style={{flexDirection: 'row', justifyContent: 'center', height: 50, paddingTop: 10}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
									<Text style={{fontWeight: 'bold'}}>Cavity</Text>
									<View style={{justifyContent: 'center', width: 100}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
									<Text style={{fontWeight: 'bold'}}>Judgement 1st Piece</Text>
									<View style={{justifyContent: 'center', width: 100}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
									<Text style={{fontWeight: 'bold'}}>Kategori NG</Text>
									<View style={{justifyContent: 'center', width: 165.5}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
									<Text style={{fontWeight: 'bold'}}>Fitting Test</Text>
									<View style={{justifyContent: 'center', width: 165.5}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
									<Text style={{fontWeight: 'bold'}}>Product's Weight</Text>
									<View style={{justifyContent: 'center', width: 100}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderRightWidth: 0.5, borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 150}}>
									<Text style={{fontWeight: 'bold'}}>Keterangan</Text>
									<View style={{justifyContent: 'center', width: 100}}>
									</View>
								</View>
							</View>
							{fxData}
							{table1}
							{table2}
							{table3}
							{table4}
							{table5}
							{table6}
							{table7}
							{table8}
							{table9}
							{table10}
							{table11}
							{table12}
							{table13}
							{table14}
							{table15}
							{table16}
							{table17}
							{table18}
						</TouchableOpacity>
						</ScrollView>
							<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
								<View>
									{updateButton()}
								</View>
							</View>
						</ScrollView>
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default RevisiFirstPieceLeaderQc;