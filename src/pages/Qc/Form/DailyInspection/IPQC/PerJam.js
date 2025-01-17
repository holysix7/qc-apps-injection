import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, Dimensions, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../../assets/logo-sip370x50.png';
import cameraIcons from '../../../../../assets/cameraicon.png';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from "@react-native-community/async-storage";
import moment from 'moment';
import Axios from 'axios';
import app_version from '../../../../app_version/index';
import base_url_submit from '../../../../../API/BaseUrlSubmit';

const PerJam = ({route, navigation}) => {
	const {daily_inspection_number, machine_number, machine_id, qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, customer_name, machine_name, machine_status, date, doc_number} = route.params
	useEffect(() => {
		formOke()
		FixInspectionTime()
		let isMounted = true
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
	//images
	const [uploadedImage, setImage] = useState(null)
	const chooseImage = () => {
		const options = {
			title: 'Select Image',
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
			mediaType: 'photo',
			includeBase64: true,
			maxHeight: 400,
			maxWidth: 400
		};
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = { uri: 'data:image/jpeg;base64;,' + response.data }
				setImage({source})
			}
		})
	}

// abcd
    // form
	const [data, setData] 										= useState(null)
	const [NGdata, setNGData] 								= useState([])
	const [gross_prod, setDataProduction] 		= useState(null)
	const [loading, setLoading] 							= useState(false)
	const [appearance_pn, setPN] 							= useState(null)
	const [start_label, setStartLabel] 				= useState("")
	const [end_label, setEndLabel] 						= useState("")
	const [appearance_n, setAppearance] 			= useState(0)
	const [tooling_num, setTooling] 					= useState("")
	const [checkPackaging, setCheckPacking] 	= useState("")
	const [status, setStatus] 								= useState('ok')
	const [categoryNG, setCategoryNG] 				= useState(0)
	const [specialItem, setSpecialItem] 			= useState("")
	const [noteUnnormal, setNoteUnnormal] 		= useState(null)
	const [inspectionTime, setInspectionTime] = useState(null)
	const [hours, setHours]		  							= useState(0)
	const [shift, setShift]		  							= useState(0)
	let created_at 														= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 														= moment().format("YYYY-MM-DD HH:mm:ss")
	const [created_by, setCreatedBy]		  		= useState("")
	const [updated_by, setUpdatedBy]		  		= useState("")

	const [operator_1_id, setOperatorId1]		  = useState("")
	const [operatorNik1, setOperatorNik1]		  = useState("")
	const [operatorName1, setOperatorName1]		= useState("")
	const [operator_2_id, setOperatorId2]		  = useState("")
	const [operatorNik2, setOperatorNik2]		  = useState("")
	const [operatorName2, setOperatorName2]		= useState("")

	const [idButton, setIdButton]	= useState(true)
	const check_appearance_n = appearance_n
	var timeNow 	= moment()
	var hoursNow 	= parseInt(moment(timeNow).format("H"))

	const submit = async() => {
		setLoading(false)
		const data = {
			qc_daily_inspection_id,
			qc_daily_inspection_item_id,
			qc_daily_inspection_method_id,
			hours,
			machine_status,
			tooling_num,
			gross_prod,
			appearance_pn,
			check_appearance_n,
			start_label,
			end_label,
			checkPackaging,
			status,
			categoryNG,
			specialItem,
			noteUnnormal,
			inspectionTime,
			uploadedImage,
			operator_1_id,
			operatorNik1,
			operatorName1,
			operator_2_id,
			operatorNik2,
			operatorName2,
			created_by,
			created_at,
			updated_by,
			updated_at,
			app_version
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'update_hour',
			update_hour: sys_plant_id,
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
			console.log("Res: ", response.status, " Ok")
			setLoading(true)
			alert("Success Send Data!")
			navigation.navigate('ListForm')
		})
		.catch(function (error){
			setLoading(true)
			alert("Failed Send Data!")
			console.log(error)
		})
	}
	
	const formOke = async() => {
		const token = await AsyncStorage.getItem("key")
		const id = await AsyncStorage.getItem('id')
		setCreatedBy(id)
		setUpdatedBy(id)
		const headers = {
			'Authorization': token
		}
		if(hoursNow >= 8 && hoursNow <= 15){
			setShift(2)
			setHours(hoursNow)
			var select_shift_id = 2
		}else if(hoursNow >= 16 && hoursNow <= 23){
			setShift(3)
			setHours(hoursNow)
			var select_shift_id = 3
		}else{
			setShift(4)
			setHours(hoursNow)
			var select_shift_id = 4
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'get_hour',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			hrd_work_shift_id: select_shift_id,
			hours: hoursNow,
			qc_daily_inspection_id: qc_daily_inspection_id,
			app_version: app_version
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setNGData(response.data.data.ng_category)
			setData(response.data.data)
			setTooling(response.data.data.daily_inspection.tooling_num)
			setIdButton(true)
			setLoading(true)
			setDataProduction(response.data.data.output_production.gross_prod)
			setOperatorId1(response.data.data.output_production.operator_1_id)
			setOperatorNik1(response.data.data.output_production.nik_operator_1)
			setOperatorName1(response.data.data.output_production.name_operator_1)
			setOperatorId2(response.data.data.output_production.operator_2_id)
			setOperatorNik2(response.data.data.output_production.nik_operator_2)
			setOperatorName2(response.data.data.output_production.name_operator_2)
			setAppearance(response.data.data.output_production.appearance_n)
			console.log("List Data Per Jam: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Per Jam: ', error)
			setLoading(true)
		})
	}
	
	const shiftFix = async(value) => {
		setLoading(false)
		setHours(value)
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		var select_hour = parseInt(value)
		var minTime 	= moment(timeNow).add(-1,'hours')
		var minHours 	= moment(minTime).format("H")
		if(hoursNow >= 8 && hoursNow <= 15){
			var shiftNow = 2
		}else if(hoursNow >= 16 && hoursNow <= 23){
			var shiftNow = 3
		}else{
			var shiftNow = 4
		}
		if(select_hour >= 8 && select_hour <= 15){
			var select_shift_id = 2
		}else if(select_hour >= 16 && select_hour <= 23){
			var select_shift_id = 3
		}else{
			var select_shift_id = 4
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'get_hour',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			hrd_work_shift_id: select_shift_id,
			hours: select_hour,
			qc_daily_inspection_id: qc_daily_inspection_id,
			app_version: app_version
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setNGData(response.data.data.ng_category)
			setData(response.data.data)
			setTooling(response.data.data.daily_inspection.tooling_num)
			setAppearance(response.data.data.output_production.appearance_n)

			if (select_shift_id <= shiftNow) {
				if(select_hour == hoursNow){
					setDataProduction(response.data.data.output_production.gross_prod)
				} else if (select_hour > hoursNow) {
					setDataProduction(0)
				} else {
					setDataProduction(response.data.data.daily_inspection.output_production)
				}
			} else {
				setDataProduction(0)
			}

			console.log("List Data By Shift: ", response.data.status, "OK")
		})
		.catch(error => {
			setLoading(true)
			console.log('List Data Per Jam: ', error)
		})

		if (select_shift_id <= shiftNow) {
			if(select_hour == hoursNow){
				setLoading(true)
				setIdButton(true)
				console.log("Berhasil!")
			} else if (select_hour > hoursNow) {
				setLoading(true)
				alert("Access Denied!")
				setHours(hoursNow)
			} else {
				setLoading(true)
				setIdButton(false)
			}
		} else {
			setLoading(true)
			alert("Access Denied!")
			setHours(hoursNow)
		}
	}

	const hString = hours.toString()
		
	const ngsDataFix = () => {
		if(NGdata.length > 0){
			var dataNGs = []
			if(checkPackaging == "ng" || status == "ng"){
			dataNGs.push(
				<Picker.Item label="--Tidak NG--" value={0} key="key1" />
			)
			NGdata.map((element, key) => {
				dataNGs.push(
					<Picker.Item label={element.name} value={element.id} key={key} />
					)
				})
			}else{
				dataNGs.push(
					<Picker.Item label="Tidak NG" value={0} key="swQwdAcxz12" />
				)
			}
			return dataNGs
		}
	}

	const updateStatus = (value) => {
		setPN(value)
		const tVal = parseInt(value)
		if(tVal > 0){
			const stVal = "ng"
			setStatus(stVal)
		}else{
			const stVal = "ok"
			setStatus(stVal)
		}
	}

	const updatePN = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.check_appearance_pn != null){
					record.push(
						<View key="appearance_pn" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{data.daily_inspection.check_appearance_pn}</Text>
						</View>
					)
				}else{
					record.push(
						<View key="appearance_pn" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5}}>
							<TextInput onChangeText={(value) => updateStatus(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." keyboardType="numeric"/>
						</View>
					)
				}
			}
		}
		return record
	}

	const updateCheckPackagingFunc = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.check_packaging == ""){
					record.push(
						<View key="packaging" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5}}>
							<Picker 
							mode="dropdown"
							selectedValue={checkPackaging}
							onValueChange={(value) => setCheckPacking(value)}
							>
								<Picker.Item label="Pilih" value="" />
								<Picker.Item label="OK" value="ok" />
								<Picker.Item label="NG" value="ng" />
							</Picker>
						</View>
					)
				}else{
					record.push(
						<View key="029ijkas" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{data.daily_inspection.check_packaging}</Text>
						</View>
					)
				}
			}
		}
		return record
	}

	const updateStartFunc = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.label_begin != null){
					record.push(
						<View key="startlabel" style={{width: "100%", marginTop: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8', paddingTop: 5, paddingLeft: 5, height: 40}}>
							<Text>{data.daily_inspection.label_begin}</Text>
						</View>
					)
				}else{
					record.push(
						<View key="startlabel" style={{width: "100%", marginTop: 5, borderWidth: 0.5, borderRadius: 5, paddingLeft: 5, height: 40}}>
							<TextInput onChangeText={(value) => setStartLabel(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." keyboardType="numeric"/>
						</View>
					)
				}
			}
		}
		return record
	}
	
	const updateEndFunc = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.label_end != null){
					record.push(
						<View key="asoidjn2" style={{width: "100%", marginTop: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8', paddingTop: 5, paddingLeft: 5, height: 40}}>
							<Text>{data.daily_inspection.label_end}</Text>
						</View>
					)
				}else{
					record.push(
						<View key="asoidjn2" style={{width: "100%", marginTop: 5, marginLeft: 2, borderWidth: 0.5, borderRadius: 5, paddingLeft: 5, height: 40}}>
							<TextInput onChangeText={(value) => setEndLabel(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." keyboardType="numeric"/>
						</View>
					)
				}
			}
		}
		return record
	}

	const updateSpecialItemFunc = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.special_item == ""){
					record.push(
						<View key="specialItem" style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
							<TextInput onChangeText={(value) => setSpecialItem(value)} style={{borderWidth: 0.5, borderRadius: 5, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
						</View>
					)
				}else{
					record.push(
						<View key="asiuhj2" style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8', height: 40}}>
							<Text>{data.daily_inspection.special_item}</Text>
						</View>
					)
				}
			}
		}
		return record
	}

	const updateCategoryNGFunc = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.ng_name != null){
					record.push(
						<View key="ngcategories" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{data.daily_inspection.ng_name}</Text>
						</View>
					)
				}else{
					record.push(
						<View key="ngcategories" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5}}>
							<Picker 
							mode="dropdown"
							selectedValue={categoryNG}
							onValueChange={(value) => setCategoryNG(value)}
							>
								{ngsDataFix()}
							</Picker>
						</View>
					)
				}
			}
		}
		return record
	}

	const updateNoteFunc = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.note != null){
					record.push(
						<View key="noteunnormal" style={{height: 40, justifyContent: 'center', paddingLeft: 5, paddingTop: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{data.daily_inspection.note}</Text>
						</View>
					)
				}else{
					record.push(
						<View key="noteunnormal" style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
							<TextInput onChangeText={(value) => setNoteUnnormal(value)} style={{borderWidth: 0.5, borderRadius: 5, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
						</View>
					)
				}
			}
		}
		return record
	}

	const updateLastUpdated = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.method_updated_at != null){
					record.push(
						<View key="last_update" style={{height: 40, justifyContent: 'center', paddingLeft: 5, paddingTop: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{data.daily_inspection.method_updated_at}</Text>
						</View>
					)
				}else{
					record.push(
						<View key="last_update" style={{height: 40, justifyContent: 'center', paddingLeft: 5, paddingTop: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{"-"}</Text>
						</View>
					)
				}
			}
		}
		return record
	}

	const updateStatusFunc = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.status == ""){
					record.push(
						<View key="asoihdnj2" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{status != null ? status : "-"}</Text>
						</View>
					)
				}else{
					record.push(
						<View key="asoihdnj2" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{data.daily_inspection.status}</Text>
						</View>
					)
				}
			}
		}
		return record
	}

	const buttonUpdateGet = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.inspection_time != null){
					record.push(
						<View key="inspection_time">
							<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
								<View>
									<Button onPress={() => alert("Already Saved!")} style={{width: 172, borderRadius: 5, justifyContent: 'center', backgroundColor: '#05c46b'}}><Text>SAVED</Text></Button> 
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
										{data.daily_inspection.inspection_time}
									</Text>
								</View>
							</View>
						</View>
					)
				}else{
					record.push(
						<View key="inspection_time">
							<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
								<View>
									<Button onPress={() => submit()} style={{width: 172, borderRadius: 5, justifyContent: 'center'}}><Text>SAVE</Text></Button>
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
						</View>
					)
				}
			}
		}
		return record
	}

	const isiManusia = () => {
		var record = []
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.leader_nik != null){
					record.push(
						<View key="1" style={{flexDirection: 'row', height: 50}}>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
									{data.daily_inspection.leader_nik != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.leader_nik}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "40%", borderBottomWidth: 1, borderRightWidth: 1}}>
									{data.daily_inspection.leader_name != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.leader_name}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
									{data.daily_inspection.leader_nik != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>Leader Produksi</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
						</View>
					)
				}
				if(data.daily_inspection.qc_process_nik != null){
					record.push(
						<View key="2" style={{flexDirection: 'row', height: 50}}>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
									{data.daily_inspection.qc_process_nik != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.qc_process_nik}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "40%", borderBottomWidth: 1, borderRightWidth: 1}}>
									{data.daily_inspection.qc_process_name != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.qc_process_name}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
									{data.daily_inspection.qc_process_nik != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>IPQC</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
						</View>
					)
				}
				if(data.daily_inspection.foreman_nik != null){
					record.push(
						<View key="3" style={{flexDirection: 'row', height: 50}}>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
								{data.daily_inspection.foreman_nik != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.foreman_nik}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "40%", borderBottomWidth: 1, borderRightWidth: 1}}>
								{data.daily_inspection.foreman_name != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.foreman_name}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
								{data.daily_inspection.foreman_nik != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>Foreman</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
						</View>
					)
				}
				if(data.daily_inspection.operator_nik != null){
					record.push(
						<View key="4" style={{flexDirection: 'row', height: 50}}>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
									{data.daily_inspection.operator_nik != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.operator_nik}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "40%", borderBottomWidth: 1, borderRightWidth: 1}}>
									{data.daily_inspection.operator_name != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.operator_name}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
									{data.daily_inspection.operator_nik != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>Operator 1</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
						</View>
					)
				}
				if(data.daily_inspection.operator_nik_2 != null){
					record.push(
						<View key="5" style={{flexDirection: 'row', height: 50}}>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
								{data.daily_inspection.operator_nik_2 != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.operator_nik_2}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "40%", borderBottomWidth: 1, borderRightWidth: 1}}>
								{data.daily_inspection.operator_name_2 != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>{data.daily_inspection.operator_name_2}</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
							<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderBottomWidth: 1, borderRightWidth: 1}}>
								{data.daily_inspection.operator_nik_2 != null ? <Text style={{fontWeight: 'bold', fontSize: 10}}>Operator 2</Text> : <Text style={{fontWeight: 'bold', fontSize: 10}}> - </Text>}
							</View>
						</View>
					)
				}
			}
		}
		return record
	}

	const resultImage = () => {
		if(data != null){
			if(data.daily_inspection != null){
				if(data.daily_inspection.inspection_time == null){
					if(uploadedImage != null)
					{
						return <Image source={{uri: uploadedImage.source.uri}} style={{width: Dimensions.get('window').width,height:Dimensions.get('window').width, resizeMode: 'contain'}} onPress={() => chooseImage()}/>
					}else{
						return (
						<View style={{height: 150, paddingTop: 20, borderWidth: 1, width: "100%"}}>
							<Text style={{flex: 1, width: "100%", textAlign: 'center'}} onPress={() => chooseImage()}><Image style={{height: 50, width: 50}} source={cameraIcons} /></Text>
						</View>)
					}
				} 
			}
		}
	}

	const content = () => {
		var bodatData = []
		bodatData.push(
			<TouchableOpacity key="12">
				{idButton == true ? 
				<View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
					<View style={{padding: 10}}>
						<Button style={{borderRadius: 10}} onPress={() => formOke()}><Text>Refresh Data</Text></Button>
					</View>
				</View> : null}

				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Machines Status</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
							<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
								<Text>{machine_status == null ? "-" : machine_status}</Text>
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
							<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
								<Text>{tooling_num != null ? tooling_num : "-"}</Text>
							</View>
						</View>
					</View>
				</View>
				
				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Production Output</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%", paddingLeft: 7}}>
						<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{gross_prod != null ? gross_prod : "-"}</Text>
						</View>
					</View>
				</View>
				
				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Check Appearance</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{width: "6%", height: 70, flexDirection: 'column', paddingLeft: 5, justifyContent: 'center'}}>
						<View style={{height: 25}}>
							<Text style={{fontSize: 12}}>PN</Text>                                    
						</View>
						<View style={{height: 25}}>
							<Text style={{marginTop: 10, fontSize: 12}}>N</Text>
						</View>
					</View>
					<View style={{paddingTop: 8, paddingHorizontal: 4, paddingBottom: 4, width: "44%"}}>
						<View style={{paddingTop: 5, height: 50, justifyContent: 'center'}}>
							{updatePN()}
							<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
								<Text>{appearance_n != 0 ? appearance_n : "-"}</Text>
							</View>
						</View>
					</View>
				</View>
				
				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Check Packaging</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
							{updateCheckPackagingFunc()}
						</View>
					</View>
				</View>
				
				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{paddingHorizontal: 10, paddingBottom: 10, paddingTop: 20, width: "44%"}}>
						<Text>Check Label And Write Label Number</Text>
					</View>
					<View style={{paddingHorizontal: 10, paddingBottom: 10, paddingTop: 20, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%", flexDirection: 'row'}}>
						<View style={{width: "50%", alignItems: 'center'}}>
							<Text>Start</Text>
							{updateStartFunc()}
						</View>
						<View style={{flex: 1, alignItems: 'center'}}>
							<Text>End</Text>
							{updateEndFunc()}
						</View>
					</View>
				</View>

				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Special Item</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{updateSpecialItemFunc()}
					</View>
				</View>

				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Status</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
							{updateStatusFunc()}
						</View>
					</View>
				</View>

				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Category NG</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
							{updateCategoryNGFunc()}
						</View>
					</View>
				</View>

				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Note Unnormal</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{updateNoteFunc()}
					</View>
				</View>

				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Last Updated</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{updateLastUpdated()}
					</View>
				</View>

				<View style={{flexDirection: 'row', height: 60, paddingTop: 10}}>
						<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderTopWidth: 1, borderBottomWidth: 1, borderRightWidth: 1}}>
								<Text style={{fontWeight: 'bold', fontSize: 10}}>NIK</Text>
						</View>
						<View style={{alignItems: 'center', justifyContent: 'center', width: "40%", borderTopWidth: 1, borderBottomWidth: 1, borderRightWidth: 1}}>
								<Text style={{fontWeight: 'bold', fontSize: 10}}>NAMA</Text>
						</View>
						<View style={{alignItems: 'center', justifyContent: 'center', width: "30%", borderTopWidth: 1, borderBottomWidth: 1, borderRightWidth: 1}}>
								<Text style={{fontWeight: 'bold', fontSize: 10}}>JABATAN</Text>
						</View>
				</View>
				{isiManusia()}
				<View style={{width: "100%", justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
					{resultImage()}
				</View>
				{buttonUpdateGet()}
			</TouchableOpacity>
		)
		return bodatData
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
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date} - {hoursNow} {hoursNow >= 0 && hoursNow < 12 ? <Text>AM</Text> : <Text>PM</Text>}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Per Jam</Text>
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
									<Text style={{fontWeight: 'bold', fontSize: 11}}>{data != null ? data.daily_inspection != null ? data.daily_inspection.product_name : "-" : "-"}</Text>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data != null ? data.daily_inspection != null ? data.daily_inspection.internal_part_id : "-" : "-" }</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data != null ? data.daily_inspection != null ? data.daily_inspection.customer_part_number : "-" : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{data != null ? data.daily_inspection != null ? data.daily_inspection.model : "-" : "-"}</Text>
							</View>
						</View>

						<ScrollView style={{flex: 1}}>
							<View style={{paddingBottom: 40}}> 
							  {loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}               
							</View>
						</ScrollView>
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default PerJam;