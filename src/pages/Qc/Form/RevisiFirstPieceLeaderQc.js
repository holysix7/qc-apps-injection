import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native';
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
	
	const [qc_ng_category_id1, setCategoryNg1] 													 = useState(0)
	const [qc_ng_category_id2, setCategoryNg2] 													 = useState(0)
	const [qc_ng_category_id3, setCategoryNg3] 													 = useState(0)
	const [qc_ng_category_id4, setCategoryNg4] 													 = useState(0)
	const [qc_ng_category_id5, setCategoryNg5] 													 = useState(0)
	const [qc_ng_category_id6, setCategoryNg6] 													 = useState(0)
	const [qc_ng_category_id7, setCategoryNg7] 													 = useState(0)
	const [qc_ng_category_id8, setCategoryNg8] 													 = useState(0)
	const [qc_ng_category_id9, setCategoryNg9] 													 = useState(0)
	const [qc_ng_category_id10, setCategoryNg10] 												 = useState(0)
	const [qc_ng_category_id11, setCategoryNg11] 												 = useState(0)
	const [qc_ng_category_id12, setCategoryNg12] 												 = useState(0)
	const [qc_ng_category_id13, setCategoryNg13] 												 = useState(0)
	const [qc_ng_category_id14, setCategoryNg14] 												 = useState(0)
	const [qc_ng_category_id15, setCategoryNg15] 												 = useState(0)
	const [qc_ng_category_id16, setCategoryNg16] 												 = useState(0)
	const [qc_ng_category_id17, setCategoryNg17] 												 = useState(0)
	const [qc_ng_category_id18, setCategoryNg18] 												 = useState(0)
	
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
	const [compare_sample, setCopySample]				 			= useState("")
	const [check_sheet, setCheckSheet] 							= useState("")
	const [created_by, setCreatedBy]		  					= useState("")
	const [updated_by, setUpdatedBy]		  					= useState("")
	const [remark, setRemark]		  									= useState("")
	let created_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	const date = []
	const [data, setData] 													= useState([])
	const [dataQl, setDataMachineStatus] 						= useState("")
	const [masspro_ql_id, setMassproQlId] 					= useState("")
	const [ngCategories, setNGsData]								= useState([])
	const [eng_product_id, setEngProd] 						 	= useState(0)
	const prod_machine_id = machine_id
	const [planningId, setPlanningId] 							= useState("")
	const planning_id = parseInt(planningId)
	const [internal_part_id, setIPI] 							= useState("")
	const [revisiQc, setRevisiQc] 		  					= useState([])
	const [updateCopySample, setUpdateCopySample] = useState("")
	const [updateCheckSheet, setUpdateCheckSheet] = useState("")
	const [updateRemark, setUpdateRemark] 	= useState("")

	const [loading, setLoading] = useState(false)

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
				kind: 'rev_first_piece_qc',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 2,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				setLoading(true)
				setEngProd(response.data.data.eng_product_id)
				setData(response.data.data.product_detail)
				setDataMachineStatus(response.data.data.masspro_ql)
				setMassproQlId(response.data.data.masspro_ql.id)
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
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				setLoading(true)
				setEngProd(response.data.data.eng_product_id)
				setData(response.data.data.product_detail)
				setDataMachineStatus(response.data.data.masspro_ql)
				setMassproQlId(response.data.data.masspro_ql.id)
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
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				setLoading(true)
				setEngProd(response.data.data.eng_product_id)
				setData(response.data.data.product_detail)
				setDataMachineStatus(response.data.data.masspro_ql)
				setMassproQlId(response.data.data.masspro_ql.id)
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
		}
	}

	const shiftFix = (value) => {
		setHours(value)
	}
	
	var item = []
	if(revisiQc.length > 0){
		item.push(
			{
				"item_id": revisiQc.length > 0 ? revisiQc[0].id : null,
				"cavity": 1,
				"judgement_first_piece": judgement_first_piece1,
				"qc_ng_category_id": qc_ng_category_id1,
				"fitting_test": fitting_test1,
				"product_weight": product_weight1,
				"note": note1
			},
			{
				"item_id": revisiQc.length > 1 ? revisiQc[1].id : null,
				"cavity":  2,
				"judgement_first_piece": judgement_first_piece2,
				"qc_ng_category_id": qc_ng_category_id2,
				"fitting_test": fitting_test2,
				"product_weight": product_weight2,
				"note": note2
			},
			{
				"item_id": revisiQc.length > 2 ? revisiQc[2].id : null,
				"cavity": 3,
				"judgement_first_piece": judgement_first_piece3,
				"qc_ng_category_id": qc_ng_category_id3,
				"fitting_test": fitting_test3,
				"product_weight": product_weight3,
				"note": note3
			},
			{
				"item_id": revisiQc.length > 3 ? revisiQc[3].id : null,
				"cavity": 4,
				"judgement_first_piece": judgement_first_piece4,
				"qc_ng_category_id": qc_ng_category_id4,
				"fitting_test": fitting_test4,
				"product_weight": product_weight4,
				"note": note4
			},
			{
				"item_id": revisiQc.length > 4 ? revisiQc[4].id : null,
				"cavity": 5,
				"judgement_first_piece": judgement_first_piece5,
				"qc_ng_category_id": qc_ng_category_id5,
				"fitting_test": fitting_test5,
				"product_weight": product_weight5,
				"note": note5
			},
			{
				"item_id": revisiQc.length > 5 ? revisiQc[5].id : null,
				"cavity": 6,
				"judgement_first_piece": judgement_first_piece6,
				"qc_ng_category_id": qc_ng_category_id6,
				"fitting_test": fitting_test6,
				"product_weight": product_weight6,
				"note": note6
			},
			{
				"item_id": revisiQc.length > 6 ? revisiQc[6].id : null,
				"cavity": 7,
				"judgement_first_piece": judgement_first_piece7,
				"qc_ng_category_id": qc_ng_category_id7,
				"fitting_test": fitting_test7,
				"product_weight": product_weight7,
				"note": note7
			},
			{
				"item_id": revisiQc.length > 7 ? revisiQc[7].id : null,
				"cavity": 8,
				"judgement_first_piece": judgement_first_piece8,
				"qc_ng_category_id": qc_ng_category_id8,
				"fitting_test": fitting_test8,
				"product_weight": product_weight8,
				"note": note8
			},
			{
				"item_id": revisiQc.length > 8 ? revisiQc[8].id : null,
				"cavity": 9,
				"judgement_first_piece": judgement_first_piece9,
				"qc_ng_category_id": qc_ng_category_id9,
				"fitting_test": fitting_test9,
				"product_weight": product_weight9,
				"note": note9
			},
			{
				"item_id": revisiQc.length > 9 ? revisiQc[9].id : null,
				"cavity": 10,
				"judgement_first_piece": judgement_first_piece10,
				"qc_ng_category_id": qc_ng_category_id10,
				"fitting_test": fitting_test10,
				"product_weight": product_weight10,
				"note": note10
			},
			{
				"item_id": revisiQc.length > 10 ? revisiQc[10].id : null,
				"cavity": 11,
				"judgement_first_piece": judgement_first_piece11,
				"qc_ng_category_id": qc_ng_category_id11,
				"fitting_test": fitting_test11,
				"product_weight": product_weight11,
				"note": note11
			},
			{
				"item_id": revisiQc.length > 11 ? revisiQc[11].id : null,
				"cavity": 12,
				"judgement_first_piece": judgement_first_piece12,
				"qc_ng_category_id": qc_ng_category_id12,
				"fitting_test": fitting_test12,
				"product_weight": product_weight12,
				"note": note12
			},
			{
				"item_id": revisiQc.length > 12 ? revisiQc[12].id : null,
				"cavity": 13,
				"judgement_first_piece": judgement_first_piece13,
				"qc_ng_category_id": qc_ng_category_id13,
				"fitting_test": fitting_test13,
				"product_weight": product_weight13,
				"note": note13
			},
			{
				"item_id": revisiQc.length > 13 ? revisiQc[13].id : null,
				"cavity": 14,
				"judgement_first_piece": judgement_first_piece14,
				"qc_ng_category_id": qc_ng_category_id14,
				"fitting_test": fitting_test14,
				"product_weight": product_weight14,
				"note": note14
			},
			{
				"item_id": revisiQc.length > 14 ? revisiQc[14].id : null,
				"cavity": 15,
				"judgement_first_piece": judgement_first_piece15,
				"qc_ng_category_id": qc_ng_category_id15,
				"fitting_test": fitting_test15,
				"product_weight": product_weight15,
				"note": note15
			},
			{
				"item_id": revisiQc.length > 15 ? revisiQc[15].id : null,
				"cavity": 16,
				"judgement_first_piece": judgement_first_piece16,
				"qc_ng_category_id": qc_ng_category_id16,
				"fitting_test": fitting_test16,
				"product_weight": product_weight16,
				"note": note16
			},
			{
				"item_id": revisiQc.length > 16 ? revisiQc[16].id : null,
				"cavity": 17,
				"judgement_first_piece": judgement_first_piece17,
				"qc_ng_category_id": qc_ng_category_id17,
				"fitting_test": fitting_test17,
				"product_weight": product_weight17,
				"note": note17
			},
			{
				"item_id": revisiQc.length > 17 ? revisiQc[17].id : null,
				"cavity": 18,
				"judgement_first_piece": judgement_first_piece18,
				"qc_ng_category_id": qc_ng_category_id18,
				"fitting_test": fitting_test18,
				"product_weight": product_weight18,
				"note": note18
			}
		)
	}

	// if(ngCategories.length > 0){
		// console.log("ngs: ", ngCategories)
	// }
	const itemNGsLoop = () => {
		var dataNGs = []
		var itemCheckNGs = [
			{
				"cavity": statusCavity1,
				"judgement_first_piece": judgement_first_piece1,
				"qc_ng_category_id": qc_ng_category_id1,
				"fitting_test": fitting_test1,
				"product_weight": product_weight1,
				"note": note1
			},
			{
				"cavity": statusCavity2,
				"judgement_first_piece": judgement_first_piece2,
				"qc_ng_category_id": qc_ng_category_id2,
				"fitting_test": fitting_test2,
				"product_weight": product_weight2,
				"note": note2
			},
			{
				"cavity": statusCavity3,
				"judgement_first_piece": judgement_first_piece3,
				"qc_ng_category_id": qc_ng_category_id3,
				"fitting_test": fitting_test3,
				"product_weight": product_weight3,
				"note": note3
			},
			{
				"cavity": statusCavity4,
				"judgement_first_piece": judgement_first_piece4,
				"qc_ng_category_id": qc_ng_category_id4,
				"fitting_test": fitting_test4,
				"product_weight": product_weight4,
				"note": note4
			},
			{
				"cavity": statusCavity5,
				"judgement_first_piece": judgement_first_piece5,
				"qc_ng_category_id": qc_ng_category_id5,
				"fitting_test": fitting_test5,
				"product_weight": product_weight5,
				"note": note5
			},
			{
				"cavity": statusCavity6,
				"judgement_first_piece": judgement_first_piece6,
				"qc_ng_category_id": qc_ng_category_id6,
				"fitting_test": fitting_test6,
				"product_weight": product_weight6,
				"note": note6
			},
			{
				"cavity": statusCavity7,
				"judgement_first_piece": judgement_first_piece7,
				"qc_ng_category_id": qc_ng_category_id7,
				"fitting_test": fitting_test7,
				"product_weight": product_weight7,
				"note": note7
			},
			{
				"cavity": statusCavity8,
				"judgement_first_piece": judgement_first_piece8,
				"qc_ng_category_id": qc_ng_category_id8,
				"fitting_test": fitting_test8,
				"product_weight": product_weight8,
				"note": note8
			},
			{
				"cavity": statusCavity9,
				"judgement_first_piece": judgement_first_piece9,
				"qc_ng_category_id": qc_ng_category_id9,
				"fitting_test": fitting_test9,
				"product_weight": product_weight9,
				"note": note9
			},
			{
				"cavity": statusCavity10,
				"judgement_first_piece": judgement_first_piece10,
				"qc_ng_category_id": qc_ng_category_id10,
				"fitting_test": fitting_test10,
				"product_weight": product_weight10,
				"note": note10
			},
			{
				"cavity": statusCavity11,
				"judgement_first_piece": judgement_first_piece11,
				"qc_ng_category_id": qc_ng_category_id11,
				"fitting_test": fitting_test11,
				"product_weight": product_weight11,
				"note": note11
			},
			{
				"cavity": statusCavity12,
				"judgement_first_piece": judgement_first_piece12,
				"qc_ng_category_id": qc_ng_category_id12,
				"fitting_test": fitting_test12,
				"product_weight": product_weight12,
				"note": note12
			},
			{
				"cavity": statusCavity13,
				"judgement_first_piece": judgement_first_piece13,
				"qc_ng_category_id": qc_ng_category_id13,
				"fitting_test": fitting_test13,
				"product_weight": product_weight13,
				"note": note13
			},
			{
				"cavity": statusCavity14,
				"judgement_first_piece": judgement_first_piece14,
				"qc_ng_category_id": qc_ng_category_id14,
				"fitting_test": fitting_test14,
				"product_weight": product_weight14,
				"note": note14
			},
			{
				"cavity": statusCavity15,
				"judgement_first_piece": judgement_first_piece15,
				"qc_ng_category_id": qc_ng_category_id15,
				"fitting_test": fitting_test15,
				"product_weight": product_weight15,
				"note": note15
			},
			{
				"cavity": statusCavity16,
				"judgement_first_piece": judgement_first_piece16,
				"qc_ng_category_id": qc_ng_category_id16,
				"fitting_test": fitting_test16,
				"product_weight": product_weight16,
				"note": note16
			},
			{
				"cavity": statusCavity17,
				"judgement_first_piece": judgement_first_piece17,
				"qc_ng_category_id": qc_ng_category_id17,
				"fitting_test": fitting_test17,
				"product_weight": product_weight17,
				"note": note17
			},
			{
				"cavity": statusCavity18,
				"judgement_first_piece": judgement_first_piece18,
				"qc_ng_category_id": qc_ng_category_id18,
				"fitting_test": fitting_test18,
				"product_weight": product_weight18,
				"note": note18
			}
		]
		itemCheckNGs.map((element, key) => {
			// console.log("xcv: ", key)
		if(element.judgement_first_piece == "NG" || element.fitting_test == "NG" || compare_sample == "NG" || check_sheet == "NG"){
			var dataNGItems = []
			dataNGItems.push(
				<Picker.Item label="--Pilih--" value={0} key="apsodkmk2" />
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
				<Picker.Item label="Tidak NG" value={9999} key="swQwdAcxz12" />
			)
			dataNGs.push(dataNGItems)
			}
		})
		return dataNGs
	}

	const submit = async() => {
		setLoading(false)
		const data = {
			eng_product_id,
			prod_machine_id,
			sys_plant_id,
			qc_daily_inspection_id,
			masspro_ql_id,
			tooling_num,
			planning_id,
			internal_part_id,
			compare_sample,
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
			alert("Failed Send Data!")
			console.log(error)
		})
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

	const dataItem = () => {
		var table1 = []
		if(dataQl != null){
			if(cavityCheck != null){
				if(cavityCheck > 0){
					table1.push(
						<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id1}
									onValueChange = {(value)=>setCategoryNg1(value)}
									>
										{itemNGsLoop()[0]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 1){
					table1.push(
						<View key="asdzxczxczck2" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id2}
									onValueChange = {(value)=>setCategoryNg2(value)}
									>
										{itemNGsLoop()[1]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 2){
					table1.push(
						<View key="azxczcsdk2" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id3}
									onValueChange = {(value)=>setCategoryNg3(value)}
									>
										{itemNGsLoop()[2]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 3){
					table1.push(
						<View key="Vcsdfq" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id4}
									onValueChange = {(value)=>setCategoryNg4(value)}
									>
										{itemNGsLoop()[3]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 4){
					table1.push(
						<View key="Vsacxzc" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id5}
									onValueChange = {(value)=>setCategoryNg5(value)}
									>
										{itemNGsLoop()[4]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 5){
					table1.push(
						<View key="Csawqeq" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id6}
									onValueChange = {(value)=>setCategoryNg6(value)}
									>
										{itemNGsLoop()[5]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 6){
					table1.push(
						<View key="Bcaweq" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id7}
									onValueChange = {(value)=>setCategoryNg7(value)}
									>
										{itemNGsLoop()[6]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 7){
					table1.push(
						<View key="Vxzkmcow" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id8}
									onValueChange = {(value)=>setCategoryNg8(value)}
									>
										{itemNGsLoop()[7]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				}
				if(cavityCheck > 8){
					table1.push(
						<View key="Popxkcmmww2" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id9}
									onValueChange = {(value)=>setCategoryNg9(value)}
									>
										{itemNGsLoop()[8]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 9){
					table1.push(
						<View key="asdk2" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id10}
									onValueChange = {(value)=>setCategoryNg10(value)}
									>
										{itemNGsLoop()[9]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 10){
					table1.push(
						<View key="Vkcmoqw" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id11}
									onValueChange = {(value)=>setCategoryNg11(value)}
									>
										{itemNGsLoop()[10]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 11){
					table1.push(
						<View key="KMslaiwje" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id12}
									onValueChange = {(value)=>setCategoryNg12(value)}
									>
										{itemNGsLoop()[11]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 12){
					table1.push(
						<View key="Vkamsliwj213" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id13}
									onValueChange = {(value)=>setCategoryNg13(value)}
									>
										{itemNGsLoop()[12]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 13){
					table1.push(
						<View key="Klasomqo2135" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id14}
									onValueChange = {(value)=>setCategoryNg14(value)}
									>
										{itemNGsLoop()[13]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 14){
					table1.push(
						<View key="Pkasolw12kjn1" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id15}
									onValueChange = {(value)=>setCategoryNg15(value)}
									>
										{itemNGsLoop()[14]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 15){
					table1.push(
						<View key="Bmaskjdnw" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id16}
									onValueChange = {(value)=>setCategoryNg16(value)}
									>
										{itemNGsLoop()[15]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 16){
					table1.push(
						<View key="BzxPokskajnKJn" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id17}
									onValueChange = {(value)=>setCategoryNg17(value)}
									>
										{itemNGsLoop()[16]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
				if(cavityCheck > 17){
					table1.push(
						<View key="VPaokskw" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text></Text>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
									<Picker 
									mode="dropdown"
									selectedValue= {qc_ng_category_id18}
									onValueChange = {(value)=>setCategoryNg18(value)}
									>
										{itemNGsLoop()[17]}
									</Picker>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center', width: 168.5}}>
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
			if(revisiQc.length > 0){
				var i
				for(i = 0; i < cavityCheck; i++){
					// console.log("id_cavity: ", revisiQc[i].id)
					table1.push(
						<View key={i} style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 100}}>
								<View style={{justifyContent: 'center'}}>
									<Text>{revisiQc[i].cavity}</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{justifyContent: 'center'}}>
									<Text>{revisiQc[i].first_piece}</Text>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 168.5}}>
								<Text>{revisiQc[i].qc_ng_category_id == null ? "Data OK" : revisiQc[i].qc_ng_category_id}</Text>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 168.5}}>
								<Text>{revisiQc[i].fitting_test}</Text>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, width: 168.5}}>
								<Text>{revisiQc[i].product_weight}</Text>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, backgroundColor: '#b8b8b8', borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<Text>{revisiQc[i].note}</Text>
							</View>
						</View>
					)
				}
			}
		}
		return table1
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
						selectedValue={compare_sample}
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
					selectedValue={compare_sample}
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
					<View key="Asoidjnj2" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
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
		const data = []
		if(revisiQc.length > 0){
			data.push(
				<View key="asd12q" style={{paddingTop: 10}}>
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => alert("Already Saved!")}><Text>SAVED</Text></Button>
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
		dataContent.push(
			<ScrollView key="asoij2" style={{flex: 1}}>
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
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
						<Text style={{fontWeight: 'bold'}}>Cavity</Text>
						<View style={{justifyContent: 'center'}}>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
						<Text style={{fontWeight: 'bold', fontSize: 15}}>Judgement 1st Piece</Text>
						<View style={{justifyContent: 'center'}}>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
						<Text style={{fontWeight: 'bold'}}>Kategori NG</Text>
						<View style={{justifyContent: 'center'}}>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
						<Text style={{fontWeight: 'bold'}}>Fitting Test</Text>
						<View style={{justifyContent: 'center'}}>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
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
				<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
					<View>
						{updateButton()}
					</View>
				</View>
			</ScrollView>
		
		)
		return dataContent
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

						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default RevisiFirstPieceLeaderQc;