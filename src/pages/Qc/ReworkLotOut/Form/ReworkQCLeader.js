import {Image, View, TextInput, TouchableWithoutFeedback, Dimensions, Keyboard, KeyboardAvoidingView, Alert, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import cameraIcons from '../../../../assets/cameraicon.png';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import app_version from	'../../../app_version/index';
import base_url_submit from '../../../../API/BaseUrlSubmit';

const ReworkQCLeader = ({route, navigation}) => {
	useEffect(() => {
		getDataPerHour()
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
	//GET
	const {sys_plant_id, machine_id, eng_product_id, product_name, internal_part_id, color, model, customer_name, date} = route.params
	const [loading, setLoading] 					  					= useState(false)
	const [username, setUsername] 					  				= useState(false)
	const [qc_daily_inspection_method_id, setMethodId]= useState(null)
	const [hour, setJamProduksi] 											= useState("")
	const [data, setData]		  			  								= useState(null)
	const [dataPerHours, setDataPerHours]		  			  = useState([])

	//PUT
	const [uploadedImage, setImage] = useState(null)
	const [rework_inspection_time, setInspectionTime] = useState(null)
	const [check_appearance, setPN] 				= useState("0")
	const [rework_check_packaging, setCheckPacking] 	= useState("")
	const [rework_status, setStatus] 									= useState("ok")
	const [rework_ng_category_id, setNGCategory] 	    = useState(null)
	const [rework_note, setNoteUnnormal] 	= useState("")

	//images
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
	//end image
	const resultImage = () => {
		if(uploadedImage != null){
			return <Image source={{uri: uploadedImage.source.uri}} style={{width: Dimensions.get('window').width,height:Dimensions.get('window').width, resizeMode: 'contain'}} onPress={() => chooseImage()} />
		}else{
			return (
			<View style={{height: 150, paddingTop: 20, borderWidth: 1, width: "100%"}}>
				<Text style={{flex: 1, width: "100%", textAlign: 'center'}} onPress={() => chooseImage()}><Image style={{height: 50, width: 50}} source={cameraIcons} /></Text>
			</View>
			)
		}
	}
	
	const submit = async() => {
    setLoading(false)
		if(parseInt(check_appearance) != null){
			const updated_by = await AsyncStorage.getItem('id') 
			const rework_check_appearance_pn = parseInt(check_appearance)
			const data = {
				qc_daily_inspection_method_id,
				rework_check_appearance_pn,
				rework_check_packaging,
				rework_status,
				rework_ng_category_id,
				rework_note,
				updated_by,
				uploadedImage,
				rework_inspection_time
			}
			const token = await AsyncStorage.getItem("key")
			const params = {
				tbl: 'inprocess_lot_out',
				kind: 'product_lot_out_qc_verification',
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
				navigation.navigate('ShowNGProducts')
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
				"Periksa Kembali Form Inputnya",
				[
					{ 
						text: "OK", 
						onPress: () => console.log('kwkw') 
					}
				],
				{ cancelable: false }
			)
		}
	}

// abcd
	const getDataPerHour = async() => {
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const params = {
			tbl: 'inprocess_lot_out',
			kind: 'get_hour',
			sys_plant_id: sys_plant_id,
			app_version: app_version,
			machine_id: machine_id,
			eng_product_id: eng_product_id,
			date: date
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setDataPerHours(response.data.data)
			console.log('List Data IPQC By Hour: 200 OK')
			setLoading(true)
		})
		.catch(error => {
			setLoading(true)
			console.log('List Rework Prod Leader: ', error)
		})		
	}

	const formOke = async(value) => {
		setLoading(false)
		setJamProduksi(value)
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const name = await AsyncStorage.getItem('name')
		setUsername(name)
		const id = await AsyncStorage.getItem('id')
		if(value >= 8 && value <= 15){
			var shiftNow = 2
		}else if(value >= 16 && value <= 23){
			var shiftNow = 3
		}else{
			var shiftNow = 4
		}
		const params = {
			tbl: 'inprocess_lot_out',
			kind: 'product_lot_out_qc_verification',
			sys_plant_id: sys_plant_id,
			app_version: app_version,
			machine_id: machine_id,
			eng_product_id: eng_product_id,
			hour: parseInt(value),
			hrd_work_shift_id: parseInt(shiftNow),
			date: date
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setData(response.data.data)
			setMethodId(response.data.data.qc_daily_inspection_method_id)
			console.log('List Data IPQC : 200 OK')
			setLoading(true)
		})
		.catch(error => {
			setLoading(true)
			console.log('List Rework IPQC: ', error)
		})
	}

	const ngItem = () => {
		var dataArrNG = []
		var fixDataNG = []
		if(data != null){
			if(rework_status == 'NG' || rework_status == 'ng'){
				if(data.rework_ng_category_id != null){
					fixDataNG.push(
						<View key="029ijkas" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{data.rework_ng_category_name}</Text>
						</View>
					)
				}else{
					if(data.ng_category.length > 0){
						dataArrNG.push(
							<Picker.Item key={1} value={0} label="Pilih" />
						)
						data.ng_category.map((val, key) => {
							dataArrNG.push(
								<Picker.Item key={key} value={val.id} label={val.name} />
							)
						})
						fixDataNG.push(
							<View key="029ijkas" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5}}>
								<Picker 
								mode="dropdown"
								selectedValue={rework_ng_category_id}
								onValueChange={(value) => setNGCategory(value)}
								>
									{dataArrNG}
								</Picker>
							</View>
						)
					}
				}
			}else{
				if(data.rework_ng_category_id != null){
					fixDataNG.push(
						<View key="029ijkas" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
							<Text>{data.rework_ng_category_name}</Text>
						</View>
					)
				}else{
					fixDataNG.push(
						<View key="029ijkas" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
							<Text>-</Text>
						</View>
					)
				}
			}
		}else{
			fixDataNG.push(
				<View key="029ijkas" style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
					<Text>-</Text>
				</View>
			)
		}
		return fixDataNG
	}

	const updateButton = () => {
		if(data != null){
			if(data.rework_qc_verification_id == null){
				return (
					<View key="asd12q" style={{paddingTop: 10}}>
						<Button style={{width: 172, borderRadius: 5, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVED</Text></Button>
					</View>
				)
			}
		}
	}

  const contentHeader = () => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 70, justifyContent: 'center', alignItems: 'center', width: "100%", backgroundColor: '#dfe0df'}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>LAPORAN REWORK PRODUK LOT OUT</Text>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 15}}>QC Inspector</Text>
          </View>
        </View>
        <View style={{borderWidth: 0.5, borderBottomWidth: 1, flexDirection: 'row'}}>
          <View style={{alignItems: 'center', borderRightWidth: 1, height: 25, width: "50%", backgroundColor: '#dfe0df'}}>
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>{customer_name != null ? customer_name : '-'}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "50%", backgroundColor: '#dfe0df'}}>
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>{product_name != null ? product_name : '-'}</Text>
          </View>
        </View>
        <View style={{borderBottomWidth: 0.5, flexDirection: 'row'}}>
          <View style={{alignItems: 'center', borderRightWidth: 0.5, height: 25, width: "33%", backgroundColor: '#dfe0df'}}>
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>{internal_part_id != null ? internal_part_id : '-'}</Text>
          </View>
          <View style={{justifyContent: 'center', borderRightWidth: 0.5, alignItems: 'center', height: 25, width: "33%", backgroundColor: '#dfe0df'}}>
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>{color != null ? color : '-'}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "33%", backgroundColor: '#dfe0df'}}>
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>{model != null ? model : '-'}</Text>
          </View>
        </View>
      </View>
    )
  }
	
	const dataPickerItemShow = () => {
		var datItemPicker = []
		datItemPicker.push(
			<Picker.Item key="asoasd" label="Pilih" value="" />
		)
		if(dataPerHours.length > 0){
			dataPerHours.map((val, key) => {
				datItemPicker.push(
					<Picker.Item key={"hour", val.hour.toString()} label={val.hour.toString()} value={val.hour} />
				)
			})
		}
		return datItemPicker
	}

	const updatePNNG = (value) => {
		setPN(value)
		if(value > 0){
			setStatus('ng')	
		}else if(value == 0){
			setStatus('ok')
		}
	}

	const updateAppearancePN = () => {
		if(data != null){
			if(data.rework_check_appearance_pn != null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{data.rework_check_appearance_pn}</Text>
					</View>
				)
			}else{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput value={check_appearance} onChangeText={(value) => updatePNNG(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." keyboardType="numeric"/>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
					<Text>-</Text>
				</View>
			)
		}
	}

	const updateReworkPackaging = () => {
		if(data != null){
			if(data.rework_check_packaging != null){
				return (
					<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{data.rework_check_packaging}</Text>
					</View>
				)
			}else{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={rework_check_packaging}
						onValueChange={(value) => setCheckPacking(value)}
						itemStyle={{marginLeft: 0}}
						itemTextStyle={{fontSize: 9}}
						>
							<Picker.Item label={"Pilih"} value={0} />
							<Picker.Item label={"OK"} value={"ok"} />
							<Picker.Item label={"NG"} value={"ng"} />
						</Picker>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
					<Text>-</Text>
				</View>
			)
		}
	}

	const updateReworkStatus = () => {
		if(data != null){
			if(data.rework_status != null){
				return(
					<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{data.rework_status}</Text>
					</View>
				)
			}else{
				return (
					<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{rework_status != null ? rework_status : '-'}</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
					<Text>-</Text>
				</View>
			)
		}
	}

	const updateReworkNote = () => {
		if(data != null){
			if(data.rework_note != null){
				return(
					<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, paddingTop: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{data.rework_note}</Text>
					</View>
				)
			}else{
				return(
					<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
						<TextInput onChangeText={(value) => setNoteUnnormal(value)} style={{paddingLeft: 5, height: 40, width: 130}} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			return(
				<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, paddingTop: 5, backgroundColor: '#b8b8b8'}}>
					<Text>-</Text>
				</View>
			)
		}
	}

	const operator = () => {
		if(data != null){
			if(data.rework_operator_id != null){
				return (
					<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8' }}>
						<Text>{data.rework_operator_name}</Text>
					</View>
				)
			}else{
				return (
					<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8'}}>
						<Text>-</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8'}}>
					<Text>-</Text>
				</View>
			)
		}
	}

	const leadProd = () => {
		if(data != null){
			if(data.rework_prod_leader_name != null){
				return(
					<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8' }}>
						<Text>{data.rework_prod_leader_name}</Text>
					</View>
				)
			}else{
				return (
					<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8' }}>
						<Text>-</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8' }}>
					<Text>-</Text>
				</View>
			)
		}
	}

	const foreMan = () => {
		if(data != null){
			if(data.rework_prod_foremen_name != null){
				return(
					<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8' }}>
						<Text>{data.rework_prod_foremen_name}</Text>
					</View>
				)
			}else{
				return (
					<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8' }}>
						<Text>-</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8' }}>
					<Text>-</Text>
				</View>
			)
		}
	}

	const statusBisaRework = () => {
		const element = []
		if(data != null){
			if(data.ng_can_be_reworked.length > 0){
				data.ng_can_be_reworked.map((val, index) => {
					element.push (
						<View key={index} style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 4, width: "40%"}}>
								<Text style={{fontSize: 15}}> {index + 1}. NG Bisa Dirework</Text>
							</View>
							<View style={{padding: 4}}>
								<Text style={{fontSize: 15}}>: </Text>
							</View>
							<View style={{padding: 4, width: "20%"}}>
								<View style={{height: 40, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{val.quantity}</Text>
								</View>
							</View>
							<View style={{padding: 4, width: "33%"}}>
								<View key={1} style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{val.name}</Text>
								</View>
							</View>
						</View>	
					)
				})
			}else{
				element.push (
					<View key={'can'} style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 4, width: "40%"}}>
							<Text style={{fontSize: 15}}>NG Bisa Dirework</Text>
						</View>
						<View style={{padding: 4}}>
							<Text style={{fontSize: 15}}>: </Text>
						</View>
						<View style={{padding: 4, width: "20%"}}>
							<View style={{height: 40, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
								<Text>-</Text>
							</View>
						</View>
						<View style={{padding: 4, width: "33%"}}>
							<View key={1} style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
								<Text>-</Text>
							</View>
						</View>
					</View>	
				)
			}
		}else{
			element.push (
				<View key={'can'} style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 4, width: "40%"}}>
						<Text style={{fontSize: 15}}>NG Bisa Dirework</Text>
					</View>
					<View style={{padding: 4}}>
						<Text style={{fontSize: 15}}>: </Text>
					</View>
					<View style={{padding: 4, width: "20%"}}>
						<View style={{height: 40, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
							<Text>-</Text>
						</View>
					</View>
					<View style={{padding: 4, width: "33%"}}>
						<View key={1} style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
							<Text>-</Text>
						</View>
					</View>
				</View>	
			)
		}
		return element
	}

	const statusTidakBisaRework = () => {
		const element = []
		if(data != null){
			if(data.ng_cannot_be_reworked.length > 0){
				data.ng_cannot_be_reworked.map((val, index) => {
					element.push (
						<View key={index} style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 4, width: "40%"}}>
								<Text style={{fontSize: 15}}> {index + 1}. NG Tidak Bisa Dirework</Text>
							</View>
							<View style={{padding: 4}}>
								<Text style={{fontSize: 15}}>: </Text>
							</View>
							<View style={{padding: 4, width: "20%"}}>
								<View style={{height: 40, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{val.quantity}</Text>
								</View>
							</View>
							<View style={{padding: 4, width: "33%"}}>
								<View key={1} style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{val.name}</Text>
								</View>
							</View>
						</View>	
					)
				})
			}else{
				element.push (
					<View key={"cant"} style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 4, width: "40%"}}>
							<Text style={{fontSize: 15}}>NG Tidak Bisa Dirework</Text>
						</View>
						<View style={{padding: 4}}>
							<Text style={{fontSize: 15}}>: </Text>
						</View>
						<View style={{padding: 4, width: "20%"}}>
							<View style={{height: 40, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
								<Text>-</Text>
							</View>
						</View>
						<View style={{padding: 4, width: "33%"}}>
							<View key={1} style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
								<Text>-</Text>
							</View>
						</View>
					</View>	
				)
			}
		}else{
			element.push (
				<View key={"cant"} style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 4, width: "40%"}}>
						<Text style={{fontSize: 15}}>NG Tidak Bisa Dirework</Text>
					</View>
					<View style={{padding: 4}}>
						<Text style={{fontSize: 15}}>: </Text>
					</View>
					<View style={{padding: 4, width: "20%"}}>
						<View style={{height: 40, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
							<Text>-</Text>
						</View>
					</View>
					<View style={{padding: 4, width: "33%"}}>
						<View key={1} style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
							<Text>-</Text>
						</View>
					</View>
				</View>	
			)
		}
		return element
	}

	const content = () => {
		var dataContent = []
		// console.log(data.lot_number)
		dataContent.push(
			<ScrollView key="2">
				<TouchableOpacity>
					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Tanggal</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 40, justifyContent: 'center', width: 177, paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
								<Text>{date != null ? date : "-"}</Text>
							</View>
						</View>
					</View>

					<View style={{flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Jam Produksi</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 40, justifyContent: 'center', width: 177}}>
								<View key="asdw2"  style={{borderWidth: 0.5, borderRadius: 5, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
								<Picker 
								mode="dropdown"
								selectedValue={hour}
								onValueChange={(value) => formOke(value)}
								itemStyle={{marginLeft: 0}}
								itemTextStyle={{fontSize: 9}}
								>
									{dataPickerItemShow()}
								</Picker>
							</View>
							</View>
						</View>
					</View>

					<View style={{flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Lot Number</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 40, justifyContent: 'center', width: 177, paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
								<Text>{data != null ? data.lot_number != null ? data.lot_number : '-' : '-'}</Text>
							</View>
						</View>
					</View>

					<View style={{flexDirection: 'row', borderWidth: 1, marginTop: 15}}>
						<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center' }}>
							<Text style={{fontWeight: 'bold'}}>Operator</Text>
						</View>
						<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center' }}>
							<Text style={{fontWeight: 'bold'}}>Prod. Leader</Text>
						</View>
						<View style={{flexDirection: 'column', width: '33%', alignItems: 'center' }}>
							<Text style={{fontWeight: 'bold'}}>Foreman</Text>
						</View>
					</View>

					<View style={{flexDirection: 'row', borderLeftWidth: 1, borderBottomWidth: 1, marginBottom: 15}}>
						{operator()}
						{leadProd()}
						{foreMan()}
					</View>

					<View style={{flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Jumlah</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 40, justifyContent: 'center', width: 177, paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
								<Text>{data != null ? data.quantity_product_lotout != null ? data.quantity_product_lotout : 0 : 0}</Text>              
							</View>
						</View>
					</View>

					<View style={{paddingTop: 20, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "25%"}}>
							<Text style={{fontSize: 13}}>Jumlah OK: </Text>
						</View>
						<View style={{padding: 4, width: "25%"}}>
							<View style={{backgroundColor: '#b8b8b8', marginTop: 2, height: 30, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5}}>
								<Text>{data != null ? data.quantity_ok != null ? data.quantity_ok : 0 : 0 }</Text>
							</View>
						</View>
						<View style={{padding: 10, width: "25%"}}>
							<Text style={{fontSize: 13}}>Jumlah NG: </Text>
						</View>
						<View style={{padding: 4, width: "25%"}}>
							<View style={{backgroundColor: '#b8b8b8', marginTop: 2, height: 30, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5}}>
								<Text>{data != null ? data.quantity_ng != null ? data.quantity_ng : 0 : 0 }</Text>
							</View>
						</View>
					</View>
					
					<View style={{padding: 20, flexDirection: 'row', borderWidth: 1, justifyContent: 'center', marginTop: 10}}>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Detail NG</Text>
					</View>
					
					{statusBisaRework()}
					
					<View style={{flex: 1, flexDirection: 'row', borderBottomWidth: 1}}>
						<Text style={{color: '#dfe0df'}}>asjdakjdasjkdhakjsdhakjsdhjkad</Text>
					</View>
					
					{statusTidakBisaRework()}


					<View style={{flexDirection: 'row'}}>
						<View style={{paddingLeft: 4, paddingVertical: 10, width: "40%"}}>
							<Text>Kategori 4M</Text>
						</View>
						<View style={{paddingLeft: 4, paddingVertical: 10, alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{paddingLeft: 10, paddingVertical: 10, width: "53%"}}>
							<View key="asdw2"  style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
								<Text>{data != null ? data.category_4m != null ? data.category_4m : '-' : '-' }</Text>
							</View>
						</View>
					</View>
					
					<View style={{padding: 20, flexDirection: 'row', borderWidth: 1, justifyContent: 'center', marginTop: 10}}>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>VERIFIKASI QC</Text>
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
								{updateAppearancePN()}
								<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
									<Text>{data != null ? data.rework_check_appearance_n != null ? data.rework_check_appearance_n : 0 : 0}</Text>
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
								{updateReworkPackaging()}
							</View>
						</View>
					</View>

					<View style={{paddingTop: 10, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Status</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								{updateReworkStatus()}
							</View>
						</View>
					</View>

					<View style={{paddingTop: 10, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>NG Category</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								{ngItem()}
							</View>
						</View>
					</View>

					<View style={{paddingTop: 10, flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Note Unnormal</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								{updateReworkNote()}
							</View>
						</View>
					</View>

					<View style={{flexDirection: 'row'}}>
						<View style={{width: "100%", justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
							{data != null ? data.rework_qc_verification_id != null ?  null : resultImage() : null}
						</View>
					</View>
					<View style={{flexDirection: 'row', height: 27, alignItems: 'center', justifyContent: 'center'}}>
						<Text style={{fontWeight: 'bold'}}>Inspection Time</Text>
					</View>
					<View style={{flexDirection: 'row', height: 23, alignItems: 'center', justifyContent: 'center'}}>
						{data != null ? data.rework_inspection_time != null ? <Text style={{backgroundColor: '#b8b8b8'}}>{data.rework_inspection_time}</Text> : <Text>{rework_inspection_time}</Text> : <Text>{rework_inspection_time}</Text>}
					</View>

					
					<View style={{flexDirection: 'row', borderWidth: 1, marginTop: 15}}>
						<View style={{flexDirection: 'column', width: '50%', borderRightWidth: 1, alignItems: 'center' }}>
							<Text style={{fontWeight: 'bold'}}>QC Inspection</Text>
						</View>
						<View style={{flexDirection: 'column', width: '50%', alignItems: 'center' }}>
							<Text style={{fontWeight: 'bold'}}>Prod. Leader</Text>
						</View>
					</View>

					<View style={{flexDirection: 'row', borderLeftWidth: 1, borderBottomWidth: 1, marginBottom: 15}}>
						<View style={{flexDirection: 'column', width: '50%', borderRightWidth: 1, alignItems: 'center' }}>
							<Text>{data != null ? data.rework_qc_verification_name != null ? data.rework_qc_verification_name : username : '-'}</Text>
						</View>
						<View style={{flexDirection: 'column', width: '50%', alignItems: 'center' }}>
							<Text>{data != null ? data.rework_prod_leader_name != null ? data.rework_prod_leader_name : '-' : '-' }</Text>
						</View>
					</View>

				</TouchableOpacity>

				<View style={{flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
					{updateButton()}
				</View>
			</ScrollView>
		)
		return dataContent
	}

	//test 766

	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<View style={{flex: 1, height: 100, backgroundColor: '#dfe0df', borderWidth: 0.3, flexDirection: 'column'}}>
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#dfe0df'}}>
							<Image source={LogoSIP}/>
						</View>
						{loading ? contentHeader() : null}
						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default ReworkQCLeader;