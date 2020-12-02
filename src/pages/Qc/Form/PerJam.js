import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import cameraIcons from '../../../assets/cameraicon.png';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from "@react-native-community/async-storage";
import moment from 'moment';
import Axios from 'axios';

const PerJam = ({route, navigation}) => {
	const {machine_id, qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, internal_part_id, customer_part_number, model, machine_name, machine_status, operator_nik, operator_nik_2, leader_nik, foreman_nik, qc_process_nik, today, yesterday} = route.params
	
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
	
	//images
	const [uploadedImage, setImage] = useState(null)
	const chooseImage = () => {
		const options = {
			title: 'Select Image',
			storageOptions: {
					skipBackup: true,
					path: 'images',
			},
		};
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
					console.log('User cancelled image picker');
			} else if (response.error) {
					console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
					console.log('User tapped custom button: ', response.customButton);
			} else {
					const source = { uri: 'data:image/jpeg;base64,' + response.data }
					setImage({source})
			}
		})
	}
	//end image
	const resultImage = () => {
		if(uploadedImage != null)
		{
			return <Image source={{uri: uploadedImage.source.uri}} style={{width: Dimensions.get('window').width,height:Dimensions.get('window').width, resizeMode: 'contain'}}/>
		}else{
			return (
			<View style={{height: 150, paddingTop: 20, borderWidth: 1, width: "100%"}}>
				<Text style={{flex: 1, width: "100%", textAlign: 'center'}} onPress={() => chooseImage() }><Image style={{height: 50, width: 50}} source={cameraIcons} /></Text>
			</View>)
		}
	}

    // form
	const [data, setData] 													= useState([])
	const [NGdata, setNGData] 											= useState([])
	const [gross_prod, setDataProduction] 					= useState(0)
	const [appearance_pn, setPN] 										= useState("")
	const [start_label, setStartLabel] 							= useState("")
	const [end_label, setEndLabel] 									= useState("")
	const [appearance_n, setAppearance] 						= useState("")
	const [tooling_num, setTooling] 								= useState("")
	const [checkPackaging, setCheckPacking] 				= useState("")
	const [status, setStatus] 											= useState("")
	const [categoryNG, setCategoryNG] 							= useState("")
	const [specialItem, setSpecialItem] 						= useState("")
	const [noteUnnormal, setNoteUnnormal] 					= useState("")
	const [inspectionTime, setInspectionTime] 			= useState("")
	const [hours, setHours]		  										= useState(0)
	const [shift, setShift]		  										= useState(0)
	let created_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 																	= moment().format("YYYY-MM-DD HH:mm:ss")
	const [created_by, setCreatedBy]		  = useState("")
	const [updated_by, setUpdatedBy]		  = useState("")
	
	const date = []
	const submit = async() => {
		const data = {
			qc_daily_inspection_id,
			qc_daily_inspection_item_id,
			qc_daily_inspection_method_id,
			hours,
			machine_status,
			tooling_num,
			gross_prod,
			appearance_pn,
			appearance_n,
			start_label,
			end_label,
			checkPackaging,
			status,
			categoryNG,
			specialItem,
			noteUnnormal,
			inspectionTime,
			uploadedImage,
			created_by,
			created_at,
			updated_by,
			updated_at
		}
    console.log(data)
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'update_hour',
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
		data : data
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
		//end Form
		
	const formOke = async() => {
		let jam = moment().format("HH:mm:ss")
		const token = await AsyncStorage.getItem("key")
		const name = await AsyncStorage.getItem('name')
		setCreatedBy(name)
		setUpdatedBy(name)
		const headers = {
			'Authorization': token
		}
		if(parseInt(jam) >= 8 && parseInt(jam) <= 15)
		{
			const nilaiJam = parseInt(jam)
			setShift(2)
			setHours(nilaiJam)
			const params = {
				tbl: 'daily_inspection',
				kind: 'get_hour',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 2,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
			.then(response => {
				setNGData(response.data.data.ng_category)
				setData(response.data.data)
				setTooling(response.data.data.daily_inspection.tooling_num)
				setDataProduction(response.data.data.output_production.gross_prod)
				setAppearance(response.data.data.output_production.appearance_n)
				console.log("List Data Per Jam: ", response.data.status, "OK")
			})
			.catch(error => {
				console.log('List Data Per Jam: ', error)
			})
		}else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
			const nilaiJam = parseInt(jam)
			setShift(3)
			setHours(nilaiJam)
			const params = {
				tbl: 'daily_inspection',
				kind: 'get_hour',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 3,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
			.then(response => {
				setNGData(response.data.data.ng_category)
				setData(response.data.data)
				setTooling(response.data.data.daily_inspection.tooling_num)
				setDataProduction(response.data.data.output_production.gross_prod)
				setAppearance(response.data.data.output_production.appearance_n)
				console.log("List Data Per Jam: ", response.data.status, "OK")
			})
			.catch(error => {
				console.log('List Data Per Jam: ', error)
			})
		}else{
			const nilaiJam = parseInt(jam)
			setShift(4)
			setHours(nilaiJam)
			const params = {
				tbl: 'daily_inspection',
				kind: 'get_hour',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id,
				hrd_work_shift_id: 5,
				hours: nilaiJam,
				qc_daily_inspection_id: qc_daily_inspection_id
			}
			Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
			.then(response => { 
				setNGData(response.data.data.ng_category)
				setData(response.data.data)
				setTooling(response.data.data.daily_inspection.tooling_num)
				setDataProduction(response.data.data.output_production.gross_prod)
				setAppearance(response.data.data.output_production.appearance_n)
				console.log("List Data Per Jam: ", response.data.status, "OK")
			})
			.catch(error => {
				console.log('List Data Per Jam: ', error)
			})
		}
	}
	//getdata berdasarkan jam
	const shiftFix = async(value) => {
		setHours(value)
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'get_hour',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			hrd_work_shift_id: 2,
			hours: parseInt(value),
			qc_daily_inspection_id: qc_daily_inspection_id
		}
		Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
		.then(response => {
			setNGData(response.data.data.ng_category)
			setData(response.data.data)
			setTooling(response.data.data.daily_inspection.tooling_num)
			setDataProduction(response.data.data.output_production.gross_prod)
			changeShift(response.data.data.output_production.gross_prod)
			console.log("List Data By Shift: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Per Jam: ', error)
		})
	}

	const hString = hours.toString()

	if(today != null)
	{
		date.push(
			<Text key={"key"}>{today}</Text>
		)
	}
	if(yesterday != null)
	{
		date.push(
			<Text key={"key"}>{yesterday}</Text>
		)
	}
    
	if(NGdata.length > 0)
	{
		if(checkPackaging == "NG" || status == "NG")
		{
		var dataNGs = []
		NGdata.map((element, key) => {
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

	const updateStatus = (value) => {
		setPN(value)
		const tVal = parseInt(value)
		console.log(tVal)
		if(tVal > 0){
			const stVal = "NG"
			setStatus(stVal)
		}else{
			const stVal = "OK"
			setStatus(stVal)
		}
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
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Per Jam</Text>
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
									<Text style={{fontWeight: 'bold', fontSize: 11}}>{data.daily_inspection != null ? data.daily_inspection.product_name : "-"}</Text>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{data.daily_inspection != null ? data.daily_inspection.internal_part_id : "-" }</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{data.daily_inspection != null ? data.daily_inspection.customer_part_number : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 12}}>{data.daily_inspection != null ? data.daily_inspection.model : "-"}</Text>
							</View>
						</View>

						<ScrollView style={{flex: 1}}>
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
											<Text>Production Output</Text>
										</View>
										<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
											<Text style={{color: 'black'}}>:</Text>
										</View>
										<View style={{padding: 4, width: "50%", paddingLeft: 7}}>
											<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
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
												<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
													<TextInput onChangeText={(value) => updateStatus(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." keyboardType="numeric"/>
												</View>
												<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
													<Text>{appearance_n != 0 ? appearance_n : "-"}</Text>
												</View>
											</View>
										</View>
									</View>
									
									<View style={{paddingTop: 20, flexDirection: 'row'}}>
											<View style={{padding: 10, width: "44%"}}>
													<Text>Check Packing</Text>
											</View>
											<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
													<Text style={{color: 'black'}}>:</Text>
											</View>
											<View style={{padding: 4, width: "50%"}}>
													<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
															<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
																	<Picker 
																	mode="dropdown"
																	selectedValue={checkPackaging}
																	onValueChange={(value) => setCheckPacking(value)}
																	>
																			<Picker.Item label="Pilih" value="" />
																			<Picker.Item label="OK" value="OK" />
																			<Picker.Item label="NG" value="NG" />
																	</Picker>
															</View>
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
												<View style={{width: "100%", marginTop: 5, borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}}>
													<TextInput onChangeText={(value) => setStartLabel(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." keyboardType="numeric"/>
													{/* <Text style={{marginTop: 5}}>{data.daily_inspection != null ? data.daily_inspection.label_begin : "-"}</Text> */}
												</View>
											</View>
											<View style={{flex: 1, alignItems: 'center'}}>
												<Text>End</Text>
												<View style={{width: "100%", marginTop: 5, marginLeft: 2, borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}}>
													{/* <Text style={{marginTop: 5}}>{data.daily_inspection != null ? data.daily_inspection.label_end : "-"}</Text> */}
													<TextInput onChangeText={(value) => setEndLabel(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." keyboardType="numeric"/>
												</View>
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
											<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
												<TextInput onChangeText={(value) => setSpecialItem(value)} style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
											</View>
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
												<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
													<Text>{status != null ? status : "-"}</Text>
												</View>
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
												<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
													<Picker 
													mode="dropdown"
													selectedValue={categoryNG}
													onValueChange={(value) => setCategoryNG(value)}
													>
														{dataNGs}
													</Picker>
												</View>
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
													<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
														<TextInput onChangeText={(value) => setNoteUnnormal(value)} style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
													</View>
											</View>
									</View>

									<View style={{flexDirection: 'row', height: 75, paddingTop: 10}}>
											<View style={{alignItems: 'center', width: "25%"}}>
													<Text style={{fontWeight: 'bold', fontSize: 12}}>NIK Operator</Text>
													<Text>{operator_nik}</Text>
													<Text>{operator_nik_2}</Text>
											</View>
											<View style={{alignItems: 'center', width: "25%"}}>
													<Text style={{fontWeight: 'bold', fontSize: 12}}>NIK QC</Text>
													<Text>{qc_process_nik}</Text>
											</View>
											<View style={{alignItems: 'center', width: "25%"}}>
													<Text style={{fontWeight: 'bold', fontSize: 12}}>NIK Leader</Text>
													<Text>{leader_nik}</Text>
											</View>
											<View style={{alignItems: 'center', width: "25%"}}>
													<Text style={{fontWeight: 'bold', fontSize: 12}}>NIK Foreman</Text>
													<Text>{foreman_nik}</Text>
											</View>
									</View>
									
									<View style={{width: "100%", justifyContent: 'center', alignItems: 'center'}}>
										{resultImage()}
									</View>

									<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
										<View>
											<Button onPress={() => submit()} style={{width: 172, borderRadius: 25, justifyContent: 'center'}}><Text>SAVE</Text></Button>
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
								</TouchableOpacity>
							</View>
						</ScrollView>
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default PerJam;