import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import moment from 'moment';
import Axios from 'axios';

const PerShift = ({route, navigation}) => {
	const {qc_daily_inspection_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, machine_id, machine_name, machine_status, operator_nik, operator_nik_2, leader_nik, foreman_nik, qc_process_nik, today, yesterday} = route.params
	useEffect(() => {
		formOke()
		let isMounted = true
		FixInspectionTime()
		return () => {
				isMounted = false
		}
		function FixInspectionTime() {
			let initialDate    = moment();
			var inspection     = setInterval(() => {
				var currentDate    = moment();    
				var second         = parseInt((currentDate - initialDate)/1000);
				var minutes        = parseInt(second/60);
				var hour           = parseInt(minutes/60);
				var second_kedua   = second - (minutes*60); 
				var menit_kedua    = minutes - (hour*60);
				var second_asli    = (second >= 60 ? second_kedua : second);
				var menit_asli     = (minutes >= 60 ? menit_kedua : minutes);
				var CombiningTime  = (hour + ":" + menit_asli + ":" + second_asli);
				if(isMounted) setInspectionTime(CombiningTime)
			}, 1000);
		} 
	}, [])

	
	const [product_weight1, setproduct_weight1]	  			= useState("")
	const [product_weight2, setproduct_weight2]   			= useState("")
	const [product_weight3, setproduct_weight3]   			= useState("")
	const [product_weight4, setproduct_weight4]   			= useState("")
	const [product_weight5, setproduct_weight5]   			= useState("")
	const [product_weight6, setproduct_weight6]   			= useState("")
	const [product_weight7, setproduct_weight7]   			= useState("")
	const [product_weight8, setproduct_weight8]   			= useState("")
	const [product_weight9, setproduct_weight9]   			= useState("")
	const [product_weight10, setproduct_weight10]   		= useState("")
	const [product_weight11, setproduct_weight11]   		= useState("")
	const [product_weight12, setproduct_weight12]   		= useState("")
	const [product_weight13, setproduct_weight13]   		= useState("")
	const [product_weight14, setproduct_weight14]   		= useState("")
	const [product_weight15, setproduct_weight15]   		= useState("")
	const [product_weight16, setproduct_weight16]   		= useState("")
	const [product_weight17, setproduct_weight17]   		= useState("")
	const [product_weight18, setproduct_weight18]   		= useState("")

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

	const [cavityDetail, setCavityDetail] = useState("")
	const [internal_part_id, setInternalPartId] = useState("")
	const [customer_part_number, setCustomerPartNumber] = useState("")
	const [model, setModel] = useState("")
	const [data1, setData1] = useState("")
	const [dataCavity, setDataCavity] = useState(null)

	const [cavityCheck, setCavityCheck] 			= useState("")
	const [qc_daily_inspection_item_id, setqc_daily_inspection_item_id] 			= useState(0)
	const [weightStandard, setWeightStandard] = useState(0)
	const [tooling_num, setTooling] 					= useState(null)
	const [keterangan, setKeterangan] 				= useState([])
	const [inspectionTime, setInspectionTime] = useState([])
	const [data, setData] 										= useState([]);
	const [hours, setHours]		  							= useState(0)
	const [shift, setShift]		  							= useState(1)
	const [checkCavityIF, setCheckCavity]		  = useState(null)
	let created_at 														= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 														= moment().format("YYYY-MM-DD HH:mm:ss")
	const [created_by, setCreatedBy]		  		= useState("")
	const [updated_by, setUpdatedBy]		  		= useState("")
	
	const [updateinspection_time, setinspection_timeupdate]		  		= useState("")
	
	
	const date = []

	const [loading, setLoading]		= useState(false)

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
			const fixShift = 2
			const params = {
				tbl: 'daily_inspection',
				kind: 'get_4hour',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: fixShift,
				hours: parseInt(jam),
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				// console.log(response.data.data.daily_inspection.tooling_num)
				setLoading(true)
				setData(response.data.data)
				setinspection_timeupdate(response.data.data.daily_inspection.inspection_time)
				setCavityDetail(response.data.data.cavity_detail)
				setqc_daily_inspection_item_id(response.data.data.daily_inspection.qc_daily_inpspection_item_id)
				setInternalPartId(response.data.data.daily_inspection.internal_part_id)
				setCustomerPartNumber(response.data.data.daily_inspection.customer_part_number)
				setModel(response.data.data.daily_inspection.model)
				setData1(response.data.data.daily_inspection)
				setTooling(response.data.data.daily_inspection.tooling_num)
				setDataCavity(response.data.data.daily_inspection.cavity)
				setWeightStandard(response.data.data.product_weight)
				console.log("List Data Per Shift: ", response.data.status, "OK")
			})
			.catch(error => {
				console.log('List Data Per Shift: ', error)
			})
		}else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
			const nilaiJam = parseInt(jam)
			setShift(3)
			setHours(nilaiJam)
			const fixShift = 3
			const params = {
				tbl: 'daily_inspection',
				kind: 'get_4hour',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: fixShift,
				hours: parseInt(jam),
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				setLoading(true)
				setData(response.data.data)
				setinspection_timeupdate(response.data.data.daily_inspection.inspection_time)
				setCavityDetail(response.data.data.cavity_detail)
				setqc_daily_inspection_item_id(response.data.data.daily_inspection.qc_daily_inpspection_item_id)
				setInternalPartId(response.data.data.daily_inspection.internal_part_id)
				setCustomerPartNumber(response.data.data.daily_inspection.customer_part_number)
				setModel(response.data.data.daily_inspection.model)
				setData1(response.data.data.daily_inspection)
				setTooling(response.data.data.daily_inspection.tooling_num)
				setDataCavity(response.data.data.daily_inspection.cavity)
				setWeightStandard(response.data.data.product_weight)
				console.log("List Data Per Shift: ", response.data.status, "OK")
			})
			.catch(error => {
					console.log('List Data Per Shift: ', error)
			})
		}else{
			const nilaiJam = parseInt(jam)
			setShift(4)
			setHours(nilaiJam)
			const fixShift = 4
			const params = {
				tbl: 'daily_inspection',
				kind: 'get_4hour',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: fixShift,
				hours: parseInt(jam),
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				setLoading(true)
				setData(response.data.data)
				setinspection_timeupdate(response.data.data.daily_inspection.inspection_time)
				setCavityDetail(response.data.data.cavity_detail)
				setqc_daily_inspection_item_id(response.data.data.daily_inspection.qc_daily_inpspection_item_id)
				setInternalPartId(response.data.data.daily_inspection.internal_part_id)
				setCustomerPartNumber(response.data.data.daily_inspection.customer_part_number)
				setModel(response.data.data.daily_inspection.model)
				setData1(response.data.data.daily_inspection)
				setCheckCavity(response.data.data.daily_inspection.cavity)
				setTooling(response.data.data.daily_inspection.tooling_num)
				setDataCavity(response.data.data.daily_inspection.cavity)
				setWeightStandard(response.data.data.product_weight)
				console.log("List Data Per Shift: ", response.data.status, "OK")
			})
			.catch(error => {
				console.log('List Data Per Shift: ', error)
			})
		}
	}

	const shiftFix = async(value) => {
		setLoading(false)
		setHours(value)
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		let hoursNow = moment().format("HH")
		const minHours = parseInt(hoursNow) - 1
		if(value == minHours || value == hoursNow){
			if(value >= 8 && value <= 15){
				const params = {
					tbl: 'daily_inspection',
					kind: 'get_shift',
					sys_plant_id: sys_plant_id,
					machine_id: machine_id,
					hrd_work_shift_id: 2,
					hours: parseInt(value),
					qc_daily_inspection_id: qc_daily_inspection_id
				}
				Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
				.then(response => {
					setLoading(true)
					setData(response.data.data)
					setinspection_timeupdate(response.data.data.daily_inspection.inspection_time)
					setCavityDetail(response.data.data.cavity_detail)
					setqc_daily_inspection_item_id(response.data.data.daily_inspection.qc_daily_inpspection_item_id)
					setCavityCheck(response.data.data.daily_inspection.cavity)
					setTooling(response.data.data.daily_inspection.tooling_num)
					setDataCavity(response.data.data.daily_inspection.cavity)
					setWeightStandard(response.data.data.product_weight)
					console.log("List Data Per Shift Berdasarkan Shift 1: ", response.data.status, "OK")
				})
				.catch(error => {
					console.log('List Data Per Shift: ', error)
				})
			}else if(value >= 16 && value <= 23){
				const params = {
					tbl: 'daily_inspection',
					kind: 'get_shift',
					sys_plant_id: sys_plant_id,
					machine_id: machine_id,
					hrd_work_shift_id: 3,
					hours: parseInt(value),
					qc_daily_inspection_id: qc_daily_inspection_id
				}
				Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
				.then(response => {
					setLoading(true)
					setData(response.data.data)
					setinspection_timeupdate(response.data.data.daily_inspection.inspection_time)
					setCavityDetail(response.data.data.cavity_detail)
					setqc_daily_inspection_item_id(response.data.data.daily_inspection.qc_daily_inpspection_item_id)
					setCavityCheck(response.data.data.daily_inspection.cavity)
					setTooling(response.data.data.daily_inspection.tooling_num)
					setDataCavity(response.data.data.daily_inspection.cavity)
					setWeightStandard(response.data.data.product_weight)
					console.log("List Data Per Shift Berdasarkan Shift 2: ", response.data.status, "OK")
				})
				.catch(error => {
					console.log('List Data Per Shift: ', error)
				})
			}else{
				const params = {
					tbl: 'daily_inspection',
					kind: 'get_shift',
					sys_plant_id: sys_plant_id,
					machine_id: machine_id,
					hrd_work_shift_id: 4,
					hours: parseInt(value),
					qc_daily_inspection_id: qc_daily_inspection_id
				}
				Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
				.then(response => {
					setLoading(true)
					setData(response.data.data)
					setinspection_timeupdate(response.data.data.daily_inspection.inspection_time)
					setCavityDetail(response.data.data.cavity_detail)
					setqc_daily_inspection_item_id(response.data.data.daily_inspection.qc_daily_inpspection_item_id)
					setCavityCheck(response.data.data.daily_inspection.cavity)
					setTooling(response.data.data.daily_inspection.tooling_num)
					setDataCavity(response.data.data.daily_inspection.cavity)
					setWeightStandard(response.data.data.product_weight)
					console.log("List Data Per Shift Berdasarkan Shift 3: ", response.data.status, "OK")
				})
				.catch(error => {
					console.log('List Data Per Shift: ', error)
				})
			}
			setLoading(true)
			console.log("Berhasil!")
		}else{
			setLoading(true)
			setHours(parseInt(hoursNow))
			alert("Access Denied")
		}
	}
	
	const hString = hours.toString()

	const item = {
		"cav_1": {
			"cavity": 1,
			"weight_standard": weightStandard,
			"product_weight": product_weight1,
			"note": note1
		},
		"cav_2": {
			"cavity": 2,
			"weight_standard": weightStandard,
			"product_weight": product_weight2,
			"note": note2
		},
		"cav_3": {
			"cavity": 3,
			"weight_standard": weightStandard,
			"product_weight": product_weight3,
			"note": note3
		},
		"cav_4": {
			"cavity": 4,
			"weight_standard": weightStandard,
			"product_weight": product_weight4,
			"note": note4
		},
		"cav_5": {
			"cavity": 5,
			"weight_standard": weightStandard,
			"product_weight": product_weight5,
			"note": note5
		},
		"cav_6": {
			"cavity": 6,
			"weight_standard": weightStandard,
			"product_weight": product_weight6,
			"note": note6
		},
		"cav_7": {
			"cavity": 7,
			"weight_standard": weightStandard,
			"product_weight": product_weight7,
			"note": note7
		},
		"cav_8": {
			"cavity": 8,
			"weight_standard": weightStandard,
			"product_weight": product_weight8,
			"note": note8
		},
		"cav_9": {
			"cavity": 9,
			"weight_standard": weightStandard,
			"product_weight": product_weight9,
			"note": note9
		},
		"cav_10": {
			"cavity": 10,
			"weight_standard": weightStandard,
			"product_weight": product_weight10,
			"note": note10
		},
		"cav_11": {
			"cavity": 11,
			"weight_standard": weightStandard,
			"product_weight": product_weight11,
			"note": note11
		},
		"cav_12": {
			"cavity": 12,
			"weight_standard": weightStandard,
			"product_weight": product_weight12,
			"note": note12
		},
		"cav_13": {
			"cavity": 13,
			"weight_standard": weightStandard,
			"product_weight": product_weight13,
			"note": note13
		},
		"cav_14": {
			"cavity": 14,
			"weight_standard": weightStandard,
			"product_weight": product_weight14,
			"note": note14
		},
		"cav_15": {
			"cavity": 15,
			"weight_standard": weightStandard,
			"product_weight": product_weight15,
			"note": note15
		},
		"cav_16": {
			"cavity": 16,
			"weight_standard": weightStandard,
			"product_weight": product_weight16,
			"note": note16
		},
		"cav_17": {
			"cavity": 17,
			"weight_standard": weightStandard,
			"product_weight": product_weight17,
			"note": note17
		},
		"cav_18": {
			"cavity": 18,
			"weight_standard": weightStandard,
			"product_weight": product_weight18,
			"note": note18
		},

	}

	const submit = async() => {
		setLoading(false)
		const el = {
			qc_daily_inspection_id,
			qc_daily_inspection_item_id,
			qc_daily_inspection_method_id,
			hours,
			tooling_num,
			keterangan,
			inspectionTime,
			item,
			created_by,
			created_at,
			updated_by,
			updated_at
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'update_shift',
			update_hour: sys_plant_id
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
		data : el
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
			setLoading(true)
			console.log(error)
		})
	}

	const dataItem = () => {
		const checkingCavity = dataCavity
		var table1 = []
		if(cavityDetail.length > 0){
			if(cavityDetail[0].weight_product != null){
				var i
				for(i = 0; i < dataCavity; i++){
					table1.push(
						<View key={i} style={{flexDirection: 'row', height: 50}}>
							<View style={{backgroundColor: '#b8b8b8', paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
								<View style={{alignItems: 'center', justifyContent: 'center', width: 100, alignItems: 'center'}}>
									<Text>{cavityDetail[i].cavity}</Text>
								</View>
							</View>
							<View style={{backgroundColor: '#b8b8b8', paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{alignItems: 'center', justifyContent: 'center', width: 168.5}}>
									<Text>{cavityDetail[i].weight_product}</Text>
								</View>
							</View>
							<View style={{backgroundColor: '#b8b8b8', paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<View style={{alignItems: 'center', justifyContent: 'center', width: 168.5}}>
									<Text>{weightStandard}</Text>
								</View>
							</View>
							<View style={{backgroundColor: '#b8b8b8', paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
								<View style={{alignItems: 'center', justifyContent: 'center', width: 145}}>
									<Text>{cavityDetail[i].note_shift}</Text>
								</View>
							</View>
						</View>
					)
				}	
			}else{
				if(checkingCavity != null){
					if(checkingCavity > 0){
						table1.push(
							<View key="asdk2Caxd" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>1</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight1} onChangeText={(value) => setproduct_weight1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 1){
						table1.push(
							<View key="VGacwFAs" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>2</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight2} onChangeText={(value) => setproduct_weight2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 2){
						table1.push(
							<View key="BHnvxFerq" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>3</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight3} onChangeText={(value) => setproduct_weight3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 3){
						table1.push(
							<View key="BvCDVDxSEqsd11" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>4</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight4} onChangeText={(value) => setproduct_weight4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 4){
						table1.push(
							<View key="PlvKnXOijw" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>5</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight5} onChangeText={(value) => setproduct_weight5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 5){
						table1.push(
							<View key="Vdfswe6" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>6</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight6} onChangeText={(value) => setproduct_weight6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 6){
						table1.push(
							<View key="BgCacxdfa7" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>7</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight7} onChangeText={(value) => setproduct_weight7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 7){
						table1.push(
							<View key="VxCasdXWeq2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>8</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight8} onChangeText={(value) => setproduct_weight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 8){
						table1.push(
							<View key="BghAsdwCvzx" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>9</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight9} onChangeText={(value) => setproduct_weight9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 9){
						table1.push(
							<View key="BhGasdw231" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>10</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight10} onChangeText={(value) => setproduct_weight10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 10){
						table1.push(
							<View key="Axkcmwklnqiuhn11" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>11</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight11} onChangeText={(value) => setproduct_weight11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 11){
						table1.push(
							<View key="VbAcXSDqsDxx" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>12</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight12} onChangeText={(value) => setproduct_weight12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 12){
						table1.push(
							<View key="VBFGascwEQsd" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>13</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight13} onChangeText={(value) => setproduct_weight13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 13){
						table1.push(
							<View key="VGsjjkJVkjnkasjdo" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>14</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight14} onChangeText={(value) => setproduct_weight14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 14){
						table1.push(
							<View key="BhgkMOsijd" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>15</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight15} onChangeText={(value) => setproduct_weight15(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 15){
						table1.push(
							<View key="Axcdfqwe16" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>16</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight16} onChangeText={(value) => setproduct_weight16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 16){
						table1.push(
							<View key="Ascawionai17" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>17</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight17} onChangeText={(value) => setproduct_weight17(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
					if(checkingCavity > 17){
						table1.push(
							<View key="AxkcmOIujnsdKJn18" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100}}>
										<Text>18</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
									<TextInput keyboardType="numeric" value={product_weight18} onChangeText={(value) => setproduct_weight18(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Text>{weightStandard}</Text>
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
			}
		}
		return table1
	}

	const buttonUpdate = () => {
		var data = []
		if(cavityDetail > 0){
			data.push(
				<View key="SokemlIj2">
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => alert("Already Saved!")}><Text>SAVED</Text></Button>
				</View>
			)
		}else{
			data.push(
				<View key="SokemlIj2">
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
				<ScrollView key="asoijm2" style={{flex: 1}}>
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
									<Text>{data.daily_inspection != null ? data.daily_inspection.machine_status : "-"}</Text>
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
									<Text>{tooling_num != null ? tooling_num : "-"}</Text>
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
									{/* <Text>2</Text> */}
									<Text>{dataCavity != null ? dataCavity : "-"}</Text>
								</View>
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
									<Text style={{fontWeight: 'bold'}}>Products Weight</Text>
									<View style={{justifyContent: 'center'}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<Text style={{fontWeight: 'bold'}}>Weight Standard</Text>
									<View style={{justifyContent: 'center'}}>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
									<Text style={{fontWeight: 'bold'}}>Keterangan</Text>
									<View style={{justifyContent: 'center'}}>
									</View>
								</View>
							</View>
							{dataItem()}
						</TouchableOpacity>
					</ScrollView>
	
					<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
						{buttonUpdate()}
					</View>
	
					<View style={{flexDirection: 'column', height: 50}}>
							<View style={{height: 27, alignItems: 'center'}}>
								<Text style={{fontWeight: 'bold'}}>
									Inspection Time
								</Text>
							</View>
							<View style={{height: 23, alignItems: 'center'}}>
								<Text>
									{updateinspection_time != null ? updateinspection_time : inspectionTime}
								</Text>
							</View>
						</View>
				</ScrollView>
			
			)
		}else{
			dataContent.push(
				<ScrollView key="2" style={{flex: 1}}>
					<View style={{marginVertical: 160, marginHorizontal: 40, padding: 40, backgroundColor: 'red', borderWidth: 1, borderRadius: 25, flexDirection: 'row', alignItems: 'center'}}>
						<Text style={{fontSize: 12, textAlign: 'center', fontWeight: 'bold'}}>Tidak Ada Cavity, Harap Isi Cavity Terlebih Dahulu</Text>
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
					<View style={{flex: 1, height: 100, backgroundColor: '#F5F5DC', borderWidth: 0.3, flexDirection: 'column'}}>
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5DC'}}>
							<Image source={LogoSIP}/>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 100, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#F5F5DC'}}>
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Per Shift</Text>
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
								<Text style={{fontSize: 12}}>{internal_part_id}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{customer_part_number}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{model}</Text>
							</View>
						</View>

						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default PerShift;