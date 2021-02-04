import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import moment from 'moment';
import Axios from 'axios';
import app_version from '../../../../app_version/index';

const Per4Jam = ({route, navigation}) => {
	const {qc_daily_inspection_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, machine_id, machine_number, machine_name, today, yesterday, daily_inspection_number} = route.params
	useEffect(() => {
		// fixPer4Jam()
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

	const [cavityCheck, setCavityCheck] 			= useState(null)
	const [tooling_num, setTooling] 					= useState(null)
	const [inspectionTime, setInspectionTime] = useState("")
	const [hours, setHours]		  							= useState(0)
	const [shift, setShift]		  							= useState(0)

	const [compare1, setCompare1]	  											 = useState("")
	const [compare2, setCompare2]   											 = useState("")
	const [compare3, setCompare3]   											 = useState("")
	const [compare4, setCompare4]   											 = useState("")
	const [compare5, setCompare5]   											 = useState("")
	const [compare6, setCompare6]   											 = useState("")
	const [compare7, setCompare7]   											 = useState("")
	const [compare8, setCompare8]   											 = useState("")
	const [compare9, setCompare9]   											 = useState("")
	const [compare10, setCompare10]   										 = useState("")
	const [compare11, setCompare11]   										 = useState("")
	const [compare12, setCompare12]   										 = useState("")
	const [compare13, setCompare13]   										 = useState("")
	const [compare14, setCompare14]   										 = useState("")
	const [compare15, setCompare15]   										 = useState("")
	const [compare16, setCompare16]   										 = useState("")
	const [compare17, setCompare17]   										 = useState("")
	const [compare18, setCompare18]   										 = useState("")
	
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

	const [cavityDetail, setCavityDetail] = useState("")
	const [qc_daily_inspection_item_id, setqc_daily_inspection_item_id]  = useState("")
	const [created_by, setCreatedBy]																		 = useState("")
	let created_at 																											 = moment().format("YYYY-MM-DD HH:mm:ss")
	const [updated_by, setUpdatedBy]																		 = useState("")
	let updated_at 																											 = moment().format("YYYY-MM-DD HH:mm:ss")
	
	const [updateinspection_time, setupdateInspectionTime]							 = useState("")
	const [loading, setLoading] = useState(false)

	const [idButton, setIdButton] = useState(true);

	const [data, setData] = useState("");
	const [daily_inspection, setDaily] = useState("");
	const date = []
	if(today != null){
		date.push(
			<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{today}</Text>
		)
	}
	if(yesterday != null){
		date.push(
			<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{yesterday}</Text>
		)
	}
	var timeNow = moment()
	var jam 		= parseInt(moment(timeNow).format("H"))
	const formOke = async() => {
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}		
		const id = await AsyncStorage.getItem('id')
		setCreatedBy(id)
		setUpdatedBy(id)

		if(parseInt(jam) >= 8 && parseInt(jam) <= 15){
			setShift(2)
			setHours(jam)
			var select_shift_id = 2
		}else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
			setShift(3)
			setHours(jam)
			var select_shift_id = 3
		}else{
			setShift(4)
			setHours(jam)
			var select_shift_id = 4
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'get_4hour',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			hrd_work_shift_id: select_shift_id,
			hours: parseInt(jam),
			qc_daily_inspection_id: qc_daily_inspection_id,
			app_version: app_version
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setLoading(true)
			setIdButton(true)
			setData(response.data.data)
			setupdateInspectionTime(response.data.data.daily_inspection.inspection_time)
			setCavityCheck(response.data.data.daily_inspection.cavity)
			setCavityDetail(response.data.data.cavity_detail)
			setqc_daily_inspection_item_id(response.data.data.daily_inspection.qc_daily_inspection_item_id)
			setTooling(response.data.data.daily_inspection.tooling_num)
			setDaily(response.data.data.daily_inspection)
			console.log("List Data Per 4 Jam: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Per 4 Jam: ', error)
		})
	}

	const item = {
		"cav_1": {
			"cavity": 1,
			"compare": compare1,
			"fitting_test": fitting_test1,
			"note": note1
		},
		"cav_2": {
			"cavity": 2,
			"compare": compare2,
			"fitting_test": fitting_test2,
			"note": note2
		},
		"cav_3": {
			"cavity": 3,
			"compare": compare3,
			"fitting_test": fitting_test3,
			"note": note3
		},
		"cav_4": {
			"cavity": 4,
			"compare": compare4,
			"fitting_test": fitting_test4,
			"note": note4
		},
		"cav_5": {
			"cavity": 5,
			"compare": compare5,
			"fitting_test": fitting_test5,
			"note": note5
		},
		"cav_6": {
			"cavity": 6,
			"compare": compare6,
			"fitting_test": fitting_test6,
			"note": note6
		},
		"cav_7": {
			"cavity": 7,
			"compare": compare7,
			"fitting_test": fitting_test7,
			"note": note7
		},
		"cav_8": {
			"cavity": 8,
			"compare": compare8,
			"fitting_test": fitting_test8,
			"note": note8
		},
		"cav_9": {
			"cavity": 9,
			"compare": compare9,
			"fitting_test": fitting_test9,
			"note": note9
		},
		"cav_10": {
			"cavity": 10,
			"compare": compare10,
			"fitting_test": fitting_test10,
			"note": note10
		},
		"cav_11": {
			"cavity": 11,
			"compare": compare11,
			"fitting_test": fitting_test11,
			"note": note11
		},
		"cav_12": {
			"cavity": 12,
			"compare": compare12,
			"fitting_test": fitting_test12,
			"note": note12
		},
		"cav_13": {
			"cavity": 13,
			"compare": compare13,
			"fitting_test": fitting_test13,
			"note": note13
		},
		"cav_14": {
			"cavity": 14,
			"compare": compare14,
			"fitting_test": fitting_test14,
			"note": note14
		},
		"cav_15": {
			"cavity": 15,
			"compare": compare15,
			"fitting_test": fitting_test15,
			"note": note15
		},
		"cav_16": {
			"cavity": 16,
			"compare": compare16,
			"fitting_test": fitting_test16,
			"note": note16
		},
		"cav_17": {
			"cavity": 17,
			"compare": compare17,
			"fitting_test": fitting_test17,
			"note": note17
		},
		"cav_18": {
			"cavity": 18,
			"compare": compare18,
			"fitting_test": fitting_test18,
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
			inspectionTime,
			item,
			created_by,
			created_at,
			updated_by,
			updated_at,
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'update_4hour',
			update_hour: sys_plant_id,
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
	
	const shiftFix = async(value) => {
		setLoading(false)
		setHours(value)
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		var hoursNow = moment().format("HH")
		var select_hour = parseInt(value)
		const minHours = parseInt(hoursNow) - 1
		if(hoursNow >= 8 && hoursNow <= 15){
			var shiftNow = 2
		}else if(hoursNow >= 16 && hoursNow <= 23){
			var shiftNow = 3
		}else{
			var shiftNow = 4
		}
		if(value >= 8 && value <= 15){
			var select_shift_id = 2
		}else if(value >= 16 && value <= 23){
			var select_shift_id = 3
		}else{
			var select_shift_id = 4
		}
		const params = {	
			tbl: 'daily_inspection',
			kind: 'get_4hour',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			hrd_work_shift_id: select_shift_id,
			hours: select_hour,
			qc_daily_inspection_id: qc_daily_inspection_id,
			app_version: app_version
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setLoading(true)
			setData(response.data.data)
			setupdateInspectionTime(response.data.data.daily_inspection.inspection_time)
			setCavityCheck(response.data.data.daily_inspection.cavity)
			setCavityDetail(response.data.data.cavity_detail)
			setqc_daily_inspection_item_id(response.data.data.daily_inspection.qc_daily_inspection_item_id)
			setTooling(response.data.data.daily_inspection.tooling_num)
			setDaily(response.data.data.daily_inspection)
			console.log("List Data Per 4 Jam: ", response.data.status, "OK")
		})
		.catch(error => {
			setLoading(true)
			console.log('List Data Per 4 Jam: ', error)
		})
		if(select_shift_id <= shiftNow){
			if(select_hour == hoursNow){
				setLoading(true)
				setIdButton(true)
			}else if(select_hour > hoursNow){
				setLoading(true)
				setHours(hoursNow)
				alert("Access Denied!")
			}else{
				setLoading(true)
				setIdButton(false)
			}
		}else{
			setLoading(true)
			alert("Access Denied!")
			setHours(hoursNow)
		}
	}

	const hString = hours.toString()
	const dataItem = () => {
		
		const checkData = daily_inspection
		var table1 = []
		if(cavityDetail.length > 0){
			var i
			for(i = 0; i < cavityCheck; i++){
				table1.push(
					<View key={i} style={{flexDirection: 'row', height: 50}}>
						<View style={{backgroundColor: '#b8b8b8', paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
							<View style={{ alignItems: 'center', justifyContent: 'center', width: 100, alignItems: 'center'}}>
								<Text>{cavityDetail[i].cavity}</Text>
							</View>
						</View>
						<View style={{backgroundColor: '#b8b8b8', paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
							<View style={{ alignItems: 'center', justifyContent: 'center', width: 168.5}}>
								<Text>{cavityDetail[i].compare}</Text>
							</View>
						</View>
						<View style={{backgroundColor: '#b8b8b8', paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
							<View style={{ alignItems: 'center', justifyContent: 'center', width: 168.5}}>
								<Text>{cavityDetail[i].fitting_test}</Text>
							</View>
						</View>
						<View style={{backgroundColor: '#b8b8b8', paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
							<View style={{ alignItems: 'center', justifyContent: 'center', width: 145}}>
								<Text>{cavityDetail[i].note_shift}</Text>
							</View>
						</View>
					</View>
				)
			}
		}else{
			// console.log(checkData)
			if(checkData != null){
				const checkingCavity = checkData.cavity
				if(checkingCavity != null){
					if(checkingCavity > 0){
						table1.push(
							<View key="asdk2123asd" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											1
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare1}
										onValueChange = {(value)=>setCompare1(value)}
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
							<View key="assadwdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											2
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare2}
										onValueChange = {(value)=>setCompare2(value)}
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
							<View key="asdzxczxk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											3
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare3}
										onValueChange = {(value)=>setCompare3(value)}
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
							<View key="asqweasdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											4
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare4}
										onValueChange = {(value)=>setCompare4(value)}
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
							<View key="asdzxcqdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											5
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare5}
										onValueChange = {(value)=>setCompare5(value)}
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
							<View key="aasdwqsdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											6
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare6}
										onValueChange = {(value)=>setCompare6(value)}
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
							<View key="zxcwqasdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											7
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare7}
										onValueChange = {(value)=>setCompare7(value)}
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
							<View key="aszxcqfdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											8
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare8}
										onValueChange = {(value)=>setCompare8(value)}
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
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
									<View style={{justifyContent: 'center', width: 145}}>
										<TextInput value={note8} onChangeText={(value) => setKeterangan8(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
							</View>
						)
					}
	
					if(checkingCavity > 8){
						table1.push(
							<View key="avfssasdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											9
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare9}
										onValueChange = {(value)=>setCompare9(value)}
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
							<View key="aszxcqeasdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											10
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare10}
										onValueChange = {(value)=>setCompare10(value)}
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
							<View key="avdvwsdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											11
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare11}
										onValueChange = {(value)=>setCompare11(value)}
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
							<View key="asdvfdsdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											12
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare12}
										onValueChange = {(value)=>setCompare12(value)}
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
							<View key="asfewqdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											13
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare13}
										onValueChange = {(value)=>setCompare13(value)}
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
							<View key="asdfeqqfk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											14
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare14}
										onValueChange = {(value)=>setCompare14(value)}
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
							<View key="afewfqsdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											15
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare15}
										onValueChange = {(value)=>setCompare15(value)}
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
							<View key="ascasczxdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											16
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare16}
										onValueChange = {(value)=>setCompare16(value)}
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
							<View key="ascqsqwdk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											17
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare17}
										onValueChange = {(value)=>setCompare17(value)}
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
							<View key="asasdq2dk2" style={{flexDirection: 'row', height: 50}}>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 100}}>
									<View style={{justifyContent: 'center', width: 100, alignItems: 'center'}}>
										<Text>
											18
										</Text>
									</View>
								</View>
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
									<View style={{justifyContent: 'center', width: 168.5}}>
										<Picker 
										mode="dropdown"
										selectedValue= {compare18}
										onValueChange = {(value)=>setCompare18(value)}
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
								<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, borderRightWidth: 0.9, width: 145}}>
									<View style={{justifyContent: 'center', width: 145}}>
										<TextInput value={note18} onChangeText={(value) => setKeterangan18(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
									</View>
								</View>
							</View>
						)
					}
				}else{
					table1.push(
						<View key="asdk2123asd" style={{flexDirection: 'row', height: 50}}>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9, width: 582, backgroundColor: '#b8b8b8'}}>
								<Text>Cavity Kosong! Silahkan Lakukan Update Cavity Di SIP QC Daily Inspection Dengan No: {daily_inspection_number}</Text>
							</View>
						</View>
					)
				}
			}
		}
		return table1
	}

	const updateButton = () => {
		if(idButton == true){
			return (
				<View>
					<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
						<View>
							{ updateinspection_time != null ? <Button style={{width: 172, borderRadius: 25, justifyContent: 'center', backgroundColor: '#05c46b'}} onPress={() => alert("Already Saved!")}><Text>SAVE</Text></Button> : <Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>}
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
								{updateinspection_time != null ? updateinspection_time : inspectionTime}
							</Text>
						</View>
					</View>
				</View>
			)
		}
	}

	const content = () => {
		return (
			<ScrollView key="asoijkm" style={{flex: 1}}>
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
								<Text>{daily_inspection != null ? daily_inspection.machine_status : "-"}</Text>
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
								<Text>{cavityCheck != null ? cavityCheck : "-"}</Text>
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
								<Text style={{fontWeight: 'bold'}}>Compare</Text>
								<View style={{justifyContent: 'center'}}>
								</View>
							</View>
							<View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9, width: 168.5}}>
								<Text style={{fontWeight: 'bold'}}>Fitting Test</Text>
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
				{updateButton()}
			</ScrollView>
		)
	}

	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex: 1}} >
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<View style={{flex: 1, height: 120, backgroundColor: '#dfe0df', borderWidth: 0.3, flexDirection: 'column'}}>
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#dfe0df'}}>
							<Image source={LogoSIP}/>
							<Text style={{fontSize: 10, fontWeight: 'bold', paddingBottom: 5}}>{daily_inspection_number}</Text>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 100, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#dfe0df'}}>
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Per 4 Jam</Text>
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
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data.daily_inspection != null ? data.daily_inspection.internal_part_id : "-"}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data.daily_inspection != null ? data.daily_inspection.customer_part_number : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data.daily_inspection != null ? data.daily_inspection.model : "-"}</Text>
							</View>
						</View>

						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default Per4Jam;