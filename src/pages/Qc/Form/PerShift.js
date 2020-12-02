import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import moment from 'moment';
import Axios from 'axios';

const PerShift = ({route, navigation}) => {
	const {qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, machine_id, machine_name, machine_status, operator_nik, operator_nik_2, leader_nik, foreman_nik, qc_process_nik, today, yesterday} = route.params
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
	
	const [product_weight1, setproduct_weight1]	  											 = useState("")
	const [product_weight2, setproduct_weight2]   											 = useState("")
	const [product_weight3, setproduct_weight3]   											 = useState("")
	const [product_weight4, setproduct_weight4]   											 = useState("")
	const [product_weight5, setproduct_weight5]   											 = useState("")
	const [product_weight6, setproduct_weight6]   											 = useState("")
	const [product_weight7, setproduct_weight7]   											 = useState("")
	const [product_weight8, setproduct_weight8]   											 = useState("")
	const [product_weight9, setproduct_weight9]   											 = useState("")
	const [product_weight10, setproduct_weight10]   										 = useState("")
	const [product_weight11, setproduct_weight11]   										 = useState("")
	const [product_weight12, setproduct_weight12]   										 = useState("")
	const [product_weight13, setproduct_weight13]   										 = useState("")
	const [product_weight14, setproduct_weight14]   										 = useState("")
	const [product_weight15, setproduct_weight15]   										 = useState("")
	const [product_weight16, setproduct_weight16]   										 = useState("")
	const [product_weight17, setproduct_weight17]   										 = useState("")
	const [product_weight18, setproduct_weight18]   										 = useState("")
	
	const [weight_standard1, setweight_standard1] 															 = useState("")
	const [weight_standard2, setweight_standard2] 															 = useState("")
	const [weight_standard3, setweight_standard3] 															 = useState("")
	const [weight_standard4, setweight_standard4] 															 = useState("")
	const [weight_standard5, setweight_standard5] 															 = useState("")
	const [weight_standard6, setweight_standard6] 															 = useState("")
	const [weight_standard7, setweight_standard7] 															 = useState("")
	const [weight_standard8, setweight_standard8] 															 = useState("")
	const [weight_standard9, setweight_standard9] 															 = useState("")
	const [weight_standard10, setweight_standard10] 														 = useState("")
	const [weight_standard11, setweight_standard11] 														 = useState("")
	const [weight_standard12, setweight_standard12] 														 = useState("")
	const [weight_standard13, setweight_standard13] 														 = useState("")
	const [weight_standard14, setweight_standard14] 														 = useState("")
	const [weight_standard15, setweight_standard15] 														 = useState("")
	const [weight_standard16, setweight_standard16] 														 = useState("")
	const [weight_standard17, setweight_standard17] 														 = useState("")
	const [weight_standard18, setweight_standard18] 														 = useState("")
	
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

	const [internal_part_id, setInternalPartId] = useState("")
	const [customer_part_number, setCustomerPartNumber] = useState("")
	const [model, setModel] = useState("")
	const [data1, setData1] = useState("")

	const [cavityCheck, setCavityCheck] 			= useState(0)
	const [tooling_num, setTooling] 								= useState("")
	const [statusCavity, setStatusCavity] 		= useState("")
	const [ProductsWeight, setProductsWeight] = useState([])
	const [WeightStandard, setWeightStandard] = useState([])
	const [keterangan, setKeterangan] 				= useState([])
	const [inspectionTime, setInspectionTime] = useState([])
	const [data, setData] 										= useState([]);
	const [hours, setHours]		  							= useState(0)
	const [shift, setShift]		  							= useState(1)
	const [checkCavityIF, setCheckCavity]		  = useState(null)
	const date = []

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
			Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
			.then(response => {
				setData(response.data.data)
				setInternalPartId(response.data.data.daily_inspection.internal_part_id)
				setCustomerPartNumber(response.data.data.daily_inspection.customer_part_number)
				setModel(response.data.data.daily_inspection.model)
				setData1(response.data.data.daily_inspection)
				setTooling(response.data.data.daily_inspection.tooling_num)
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
			Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
			.then(response => {
				setData(response.data.data)
				setInternalPartId(response.data.data.daily_inspection.internal_part_id)
				setCustomerPartNumber(response.data.data.daily_inspection.customer_part_number)
				setModel(response.data.data.daily_inspection.model)
				setData1(response.data.data.daily_inspection)
				setTooling(response.data.data.daily_inspection.tooling_num)
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
			Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
			.then(response => {
				setData(response.data.data)
				setInternalPartId(response.data.data.daily_inspection.internal_part_id)
				setCustomerPartNumber(response.data.data.daily_inspection.customer_part_number)
				setModel(response.data.data.daily_inspection.model)
				setData1(response.data.data.daily_inspection)
				setCheckCavity(response.data.data.daily_inspection.cavity)
				setTooling(response.data.data.daily_inspection.tooling_num)
				console.log("List Data Per Shift: ", response.data.status, "OK")
			})
			.catch(error => {
				console.log('List Data Per Shift: ', error)
			})
		}
	}

	const shiftFix = async(value) => {
		setHours(value)
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'get_shift',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			hrd_work_shift_id: 2,
			hours: value,
			qc_daily_inspection_id: qc_daily_inspection_id
		}
		Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
		.then(response => {
			setData(response.data.data)
			setCavityCheck(response.data.data.daily_inspection.cavity)
			setTooling(response.data.data.daily_inspection.tooling_num)
			console.log("List Data Per Shift Berdasarkan Shift: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Per Shift: ', error)
		})
	}
	
	const hString = hours.toString()

	const item = JSON.stringify({
	"item":{
		"cav_1": {
			"cavity": statusCavity1,
			"weight_standard": weight_standard1,
			"product_weight": product_weight1,
			"note": note1
		},
		"cav_2": {
			"cavity": statusCavity2,
			"weight_standard": weight_standard2,
			"product_weight": product_weight2,
			"note": note2
		},
		"cav_3": {
			"cavity": statusCavity3,
			"weight_standard": weight_standard3,
			"product_weight": product_weight3,
			"note": note3
		},
		"cav_4": {
			"cavity": statusCavity4,
			"weight_standard": weight_standard4,
			"product_weight": product_weight4,
			"note": note4
		},
		"cav_5": {
			"cavity": statusCavity5,
			"weight_standard": weight_standard5,
			"product_weight": product_weight5,
			"note": note5
		},
		"cav_6": {
			"cavity": statusCavity6,
			"weight_standard": weight_standard6,
			"product_weight": product_weight6,
			"note": note6
		},
		"cav_7": {
			"cavity": statusCavity7,
			"weight_standard": weight_standard7,
			"product_weight": product_weight7,
			"note": note7
		},
		"cav_8": {
			"cavity": statusCavity8,
			"weight_standard": weight_standard8,
			"product_weight": product_weight8,
			"note": note8
		},
		"cav_9": {
			"cavity": statusCavity9,
			"weight_standard": weight_standard9,
			"product_weight": product_weight9,
			"note": note9
		},
		"cav_10": {
			"cavity": statusCavity10,
			"weight_standard": weight_standard10,
			"product_weight": product_weight10,
			"note": note10
		},
		"cav_11": {
			"cavity": statusCavity11,
			"weight_standard": weight_standard11,
			"product_weight": product_weight11,
			"note": note11
		},
		"cav_12": {
			"cavity": statusCavity12,
			"weight_standard": weight_standard12,
			"product_weight": product_weight12,
			"note": note12
		},
		"cav_13": {
			"cavity": statusCavity13,
			"weight_standard": weight_standard13,
			"product_weight": product_weight13,
			"note": note13
		},
		"cav_14": {
			"cavity": statusCavity14,
			"weight_standard": weight_standard14,
			"product_weight": product_weight14,
			"note": note14
		},
		"cav_15": {
			"cavity": statusCavity15,
			"weight_standard": weight_standard15,
			"product_weight": product_weight15,
			"note": note15
		},
		"cav_16": {
			"cavity": statusCavity16,
			"weight_standard": weight_standard16,
			"product_weight": product_weight16,
			"note": note16
		},
		"cav_17": {
			"cavity": statusCavity17,
			"weight_standard": weight_standard17,
			"product_weight": product_weight17,
			"note": note17
		},
		"cav_18": {
			"cavity": statusCavity18,
			"weight_standard": weight_standard18,
			"product_weight": product_weight18,
			"note": note18
		},
	}
})

	const submit = async() => {
		const el = {
			qc_daily_inspection_id,
			qc_daily_inspection_item_id,
			qc_daily_inspection_method_id,
			hours,
			tooling_num,
			statusCavity,
			ProductsWeight,
			WeightStandard,
			keterangan,
			inspectionTime,
			item
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'update_shift',
			update_hour: sys_plant_id
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
		data : el
		};
		Axios(config)
		.then(function (response){
			navigation.navigate('ListForm')
			alert("Success Send Data!")
			console.log("Res: ", response.status, " Ok")
		})
		.catch(function (error){
			console.log(error)
		})
	}

	const checkData = data1.cavity
	if(checkData != null){
		const checkingCavity = checkData
		// const checkingCavity = 2
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
		if(checkingCavity == 1){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note1} onChangeText={(value) => setKeterangan1(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 2){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note2} onChangeText={(value) => setKeterangan2(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 3){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note3} onChangeText={(value) => setKeterangan3(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 4){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note4} onChangeText={(value) => setKeterangan4(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 5){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note5} onChangeText={(value) => setKeterangan5(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 6){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note6} onChangeText={(value) => setKeterangan6(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 7){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note7} onChangeText={(value) => setKeterangan7(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 8){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={product_weight8} onChangeText={(value) => setProductWeight8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 9){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note9} onChangeText={(value) => setKeterangan9(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 10){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight10}
							onValueChange = {(value)=>setproduct_weight10(value)}
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
							selectedValue= {weight_standard10}
							onValueChange = {(value)=>setweight_standard10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note10} onChangeText={(value) => setKeterangan10(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 11){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight10}
							onValueChange = {(value)=>setproduct_weight10(value)}
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
							selectedValue= {weight_standard10}
							onValueChange = {(value)=>setweight_standard10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight11}
							onValueChange = {(value)=>setproduct_weight11(value)}
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
							selectedValue= {weight_standard11}
							onValueChange = {(value)=>setweight_standard11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note11} onChangeText={(value) => setKeterangan11(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 12){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight10}
							onValueChange = {(value)=>setproduct_weight10(value)}
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
							selectedValue= {weight_standard10}
							onValueChange = {(value)=>setweight_standard10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight11}
							onValueChange = {(value)=>setproduct_weight11(value)}
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
							selectedValue= {weight_standard11}
							onValueChange = {(value)=>setweight_standard11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight12}
							onValueChange = {(value)=>setproduct_weight12(value)}
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
							selectedValue= {weight_standard12}
							onValueChange = {(value)=>setweight_standard12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note12} onChangeText={(value) => setKeterangan12(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 13){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight10}
							onValueChange = {(value)=>setproduct_weight10(value)}
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
							selectedValue= {weight_standard10}
							onValueChange = {(value)=>setweight_standard10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight11}
							onValueChange = {(value)=>setproduct_weight11(value)}
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
							selectedValue= {weight_standard11}
							onValueChange = {(value)=>setweight_standard11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight12}
							onValueChange = {(value)=>setproduct_weight12(value)}
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
							selectedValue= {weight_standard12}
							onValueChange = {(value)=>setweight_standard12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight13}
							onValueChange = {(value)=>setproduct_weight13(value)}
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
							selectedValue= {weight_standard13}
							onValueChange = {(value)=>setweight_standard13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note13} onChangeText={(value) => setKeterangan13(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 14){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight10}
							onValueChange = {(value)=>setproduct_weight10(value)}
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
							selectedValue= {weight_standard10}
							onValueChange = {(value)=>setweight_standard10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight11}
							onValueChange = {(value)=>setproduct_weight11(value)}
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
							selectedValue= {weight_standard11}
							onValueChange = {(value)=>setweight_standard11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight12}
							onValueChange = {(value)=>setproduct_weight12(value)}
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
							selectedValue= {weight_standard12}
							onValueChange = {(value)=>setweight_standard12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight13}
							onValueChange = {(value)=>setproduct_weight13(value)}
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
							selectedValue= {weight_standard13}
							onValueChange = {(value)=>setweight_standard13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight14}
							onValueChange = {(value)=>setproduct_weight14(value)}
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
							selectedValue= {weight_standard14}
							onValueChange = {(value)=>setweight_standard14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note14} onChangeText={(value) => setKeterangan14(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 15){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight10}
							onValueChange = {(value)=>setproduct_weight10(value)}
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
							selectedValue= {weight_standard10}
							onValueChange = {(value)=>setweight_standard10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight11}
							onValueChange = {(value)=>setproduct_weight11(value)}
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
							selectedValue= {weight_standard11}
							onValueChange = {(value)=>setweight_standard11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight12}
							onValueChange = {(value)=>setproduct_weight12(value)}
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
							selectedValue= {weight_standard12}
							onValueChange = {(value)=>setweight_standard12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight13}
							onValueChange = {(value)=>setproduct_weight13(value)}
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
							selectedValue= {weight_standard13}
							onValueChange = {(value)=>setweight_standard13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight14}
							onValueChange = {(value)=>setproduct_weight14(value)}
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
							selectedValue= {weight_standard14}
							onValueChange = {(value)=>setweight_standard14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight15}
							onValueChange = {(value)=>setproduct_weight15(value)}
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
							selectedValue= {weight_standard15}
							onValueChange = {(value)=>setweight_standard15(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note15} onChangeText={(value) => setKeterangan15(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 16){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight10}
							onValueChange = {(value)=>setproduct_weight10(value)}
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
							selectedValue= {weight_standard10}
							onValueChange = {(value)=>setweight_standard10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight11}
							onValueChange = {(value)=>setproduct_weight11(value)}
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
							selectedValue= {weight_standard11}
							onValueChange = {(value)=>setweight_standard11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight12}
							onValueChange = {(value)=>setproduct_weight12(value)}
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
							selectedValue= {weight_standard12}
							onValueChange = {(value)=>setweight_standard12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight13}
							onValueChange = {(value)=>setproduct_weight13(value)}
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
							selectedValue= {weight_standard13}
							onValueChange = {(value)=>setweight_standard13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight14}
							onValueChange = {(value)=>setproduct_weight14(value)}
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
							selectedValue= {weight_standard14}
							onValueChange = {(value)=>setweight_standard14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight15}
							onValueChange = {(value)=>setproduct_weight15(value)}
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
							selectedValue= {weight_standard15}
							onValueChange = {(value)=>setweight_standard15(value)}
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
							selectedValue= {product_weight16}
							onValueChange = {(value)=>setproduct_weight16(value)}
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
							selectedValue= {weight_standard16}
							onValueChange = {(value)=>setweight_standard16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note16} onChangeText={(value) => setKeterangan16(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == 17){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight10}
							onValueChange = {(value)=>setproduct_weight10(value)}
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
							selectedValue= {weight_standard10}
							onValueChange = {(value)=>setweight_standard10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight11}
							onValueChange = {(value)=>setproduct_weight11(value)}
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
							selectedValue= {weight_standard11}
							onValueChange = {(value)=>setweight_standard11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight12}
							onValueChange = {(value)=>setproduct_weight12(value)}
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
							selectedValue= {weight_standard12}
							onValueChange = {(value)=>setweight_standard12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight13}
							onValueChange = {(value)=>setproduct_weight13(value)}
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
							selectedValue= {weight_standard13}
							onValueChange = {(value)=>setweight_standard13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight14}
							onValueChange = {(value)=>setproduct_weight14(value)}
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
							selectedValue= {weight_standard14}
							onValueChange = {(value)=>setweight_standard14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight15}
							onValueChange = {(value)=>setproduct_weight15(value)}
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
							selectedValue= {weight_standard15}
							onValueChange = {(value)=>setweight_standard15(value)}
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
							selectedValue= {product_weight16}
							onValueChange = {(value)=>setproduct_weight16(value)}
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
							selectedValue= {weight_standard16}
							onValueChange = {(value)=>setweight_standard16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight17}
							onValueChange = {(value)=>setproduct_weight17(value)}
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
							selectedValue= {weight_standard17}
							onValueChange = {(value)=>setweight_standard17(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note17} onChangeText={(value) => setKeterangan17(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		
		}else if(checkingCavity == 18){
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
							selectedValue= {product_weight1}
							onValueChange = {(value)=>setproduct_weight1(value)}
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
							selectedValue= {weight_standard1}
							onValueChange = {(value)=>setweight_standard1(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight2}
							onValueChange = {(value)=>setproduct_weight2(value)}
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
							selectedValue= {weight_standard2}
							onValueChange = {(value)=>setweight_standard2(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight3}
							onValueChange = {(value)=>setproduct_weight3(value)}
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
							selectedValue= {weight_standard3}
							onValueChange = {(value)=>setweight_standard3(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight4}
							onValueChange = {(value)=>setproduct_weight4(value)}
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
							selectedValue= {weight_standard4}
							onValueChange = {(value)=>setweight_standard4(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight5}
							onValueChange = {(value)=>setproduct_weight5(value)}
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
							selectedValue= {weight_standard5}
							onValueChange = {(value)=>setweight_standard5(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight6}
							onValueChange = {(value)=>setproduct_weight6(value)}
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
							selectedValue= {weight_standard6}
							onValueChange = {(value)=>setweight_standard6(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight7}
							onValueChange = {(value)=>setproduct_weight7(value)}
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
							selectedValue= {weight_standard7}
							onValueChange = {(value)=>setweight_standard7(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight8}
							onValueChange = {(value)=>setproduct_weight8(value)}
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
							selectedValue= {weight_standard8}
							onValueChange = {(value)=>setweight_standard8(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight9}
							onValueChange = {(value)=>setproduct_weight9(value)}
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
							selectedValue= {weight_standard9}
							onValueChange = {(value)=>setweight_standard9(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight10}
							onValueChange = {(value)=>setproduct_weight10(value)}
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
							selectedValue= {weight_standard10}
							onValueChange = {(value)=>setweight_standard10(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight11}
							onValueChange = {(value)=>setproduct_weight11(value)}
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
							selectedValue= {weight_standard11}
							onValueChange = {(value)=>setweight_standard11(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight12}
							onValueChange = {(value)=>setproduct_weight12(value)}
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
							selectedValue= {weight_standard12}
							onValueChange = {(value)=>setweight_standard12(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight13}
							onValueChange = {(value)=>setproduct_weight13(value)}
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
							selectedValue= {weight_standard13}
							onValueChange = {(value)=>setweight_standard13(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight14}
							onValueChange = {(value)=>setproduct_weight14(value)}
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
							selectedValue= {weight_standard14}
							onValueChange = {(value)=>setweight_standard14(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight15}
							onValueChange = {(value)=>setproduct_weight15(value)}
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
							selectedValue= {weight_standard15}
							onValueChange = {(value)=>setweight_standard15(value)}
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
							selectedValue= {product_weight16}
							onValueChange = {(value)=>setproduct_weight16(value)}
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
							selectedValue= {weight_standard16}
							onValueChange = {(value)=>setweight_standard16(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight17}
							onValueChange = {(value)=>setproduct_weight17(value)}
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
							selectedValue= {weight_standard17}
							onValueChange = {(value)=>setweight_standard17(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
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
							selectedValue= {product_weight18}
							onValueChange = {(value)=>setproduct_weight18(value)}
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
							selectedValue= {weight_standard18}
							onValueChange = {(value)=>setweight_standard18(value)}
							>
								<Picker.Item label="Pilih" value=""/>
								<Picker.Item label="OK" value="OK"/>
								<Picker.Item label="NG" value="NG"/>
							</Picker>
						</View>
					</View>
					<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
						<View style={{justifyContent: 'center', width: 145}}>
							<TextInput value={note18} onChangeText={(value) => setKeterangan18(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
						</View>
					</View>
				</View>
			)
		}else if(checkingCavity == null){
			// console.log("Tidak ada Cavity")
		}
	}
	// console.log(table1)

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
											{/* <Text>2</Text> */}
											<Text>{data.daily_inspection != null ? data.daily_inspection.cavity : "-"}</Text>
										</View>
									</View>
								</View>
							</View>

							<ScrollView horizontal>
								<TouchableOpacity>
									<View style={{flexDirection: 'row', height: 50, paddingTop: 10}}>
										<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
											<Text style={{fontWeight: 'bold'}}>Cavity</Text>
											<View style={{justifyContent: 'center', width: 100}}>
											</View>
										</View>
										<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
											<Text style={{fontWeight: 'bold'}}>Products Weight</Text>
											<View style={{justifyContent: 'center', width: 167.8}}>
											</View>
										</View>
										<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
											<Text style={{fontWeight: 'bold'}}>Weight Standard</Text>
											<View style={{justifyContent: 'center', width: 165.5}}>
											</View>
										</View>
										<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9}}>
											<Text style={{fontWeight: 'bold'}}>Keterangan</Text>
											<View style={{justifyContent: 'center', width: 145}}>
											</View>
										</View>
									</View>
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
									<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
								</View>
							</View>

							<View style={{flexDirection: 'column', height: 50}}>
									<View style={{height: 27, alignItems: 'center'}}>
										<Text style={{fontWeight: 'bold'}}>
											Inspection Time
										</Text>
									</View>
									<View style={{height: 23, alignItems: 'center'}}>
										<Text>
											{inspectionTime}
										</Text>
									</View>
								</View>
						</ScrollView>
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default PerShift;