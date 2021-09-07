import {Image, View, TextInput, TouchableWithoutFeedback, Alert, Keyboard, KeyboardAvoidingView, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import app_version from	'../../../app_version/index';
import base_url_submit from '../../../../API/BaseUrlSubmit';

const ReworkOperator = ({route, navigation}) => {
	useEffect(() => {
		getDataPerHour()	
	}, [])
	//GET
	const {sys_plant_id, machine_id, machine_name, machine_number, app_pms_access, eng_product_id, product_name, internal_part_id, color, model, customer_part_number, customer_name, date} = route.params
	const [dataPerHours, setDataPerHours]		  			  = useState(null)
	const [username, setNameUser]		  			          = useState(null)
	const [loading, setLoading] 					  					= useState(false)
	const [qc_daily_inspection_method_id, setMethodId]= useState(null)
	const [hour, setJamProduksi] 											= useState("")
	const [data, setData]		  			  								= useState(null)
	
	//count
	const [quantity_ok, setQtyOk] 														= useState(null)
	const [quantity_ng, setQtyNg] 														= useState(null)
	
	//PUT
	const [itemQuantityCanBeRework, setItemQuantityCanBeRework]						= useState([])
	const [itemQuantityCannotBeRework, setItemQuantityCannotBeRework]		= useState([])

	const submit = async() => {
    setLoading(false)
		if(itemQuantityCanBeRework.length > 0){
			const updated_by = await AsyncStorage.getItem('id')
			const data = {
				qc_daily_inspection_method_id,
				updated_by,
				itemQuantityCanBeRework,
				itemQuantityCannotBeRework
			}
			const token = await AsyncStorage.getItem("key")
			const params = {
				tbl: 'inprocess_lot_out',
				kind: 'product_lot_out_production_operator',
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
				setLoading(true)
				Alert.alert(
					"Success Send Data",
					"Silahkan Hubungi Leader Produksi",
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
	const formOke = async(value) => {
		setLoading(false)
		setJamProduksi(value)
		const token = await AsyncStorage.getItem("key")
		const headers = {
			'Authorization': token
		}
		const name = await AsyncStorage.getItem('name')
    setNameUser(name)
		if(value >= 8 && value <= 15){
			var shiftNow = 2
		}else if(value >= 16 && value <= 23){
			var shiftNow = 3
		}else{
			var shiftNow = 4
		}
		const params = {
			tbl: 'inprocess_lot_out',
			kind: 'product_lot_out_production_operator',
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
			console.log(response.data.data)
			setMethodId(response.data.data.qc_daily_inspection_method_id)
			console.log('List Data QC Leader: 200 OK')
			setLoading(true)
		})
		.catch(error => {
			setLoading(true)
			console.log('List Rework Prod Leader: ', error)
		})
	}

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

	const dataPickerItemShow = () => {
		var datItemPicker = []
		datItemPicker.push(
			<Picker.Item key="asoasd" label="Pilih" value="" />
		)
		if(dataPerHours.length > 0){
			dataPerHours.map((val, key) => {
				datItemPicker.push(
					<Picker.Item key={"hour", key} label={val.hour.toString()} value={val.hour} />
				)
			})
		}
		return datItemPicker
	}

	const updateButton = () => {
		if(data != null){
			if(data.rework_operator_id == null){
				return (
					<View style={{paddingTop: 10}}>
						<Button style={{width: 172, borderRadius: 5, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
					</View>
				)
			}
		}
	}

  const contentHeader = () => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 75, padding: 5, justifyContent: 'center', alignItems: 'center', width: "100%", backgroundColor: '#dfe0df'}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>LAPORAN REWORK PRODUK LOT OUT</Text>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 15}}>Operator Rework</Text>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 13}}>({machine_number}) - {machine_name}</Text>
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
	
	const addItemBisaRework = () => {
		setItemQuantityCanBeRework([
			...itemQuantityCanBeRework, {
				id: itemQuantityCanBeRework.length + 1,
				ng_can_be_reworked_quantity: 0,
				ng_can_be_reworked_note: null
			}
		])
	}

	const contentBisaRework = () => {
		const dataQty = []
		const itemNg = []
		if(data != null){
			if(data.ng_category.length > 0){
				itemNg.push(
					<Picker.Item key={"hour"} label={"Pilih"} value={0} />
				)
				data.ng_category.map((val, key) => {
					itemNg.push(
						<Picker.Item key={"hour", key} label={val.name.toString()} value={val.name} />
					)
				})
			}
			if(data.ng_can_be_reworked.length > 0){
				const sudahIsi = data.ng_can_be_reworked
				sudahIsi.map((val, index) => {
					dataQty.push(
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
				if(itemQuantityCanBeRework.length > 0){
					itemQuantityCanBeRework.map((val, index) => {
						// console.log(index)
						dataQty.push(
							<View key={index} style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 4, width: "40%"}}>
									<Text style={{fontSize: 15}}> {val.id}. NG Bisa Dirework</Text>
								</View>
								<View style={{padding: 4}}>
									<Text style={{fontSize: 15}}>: </Text>
								</View>
								<View style={{padding: 4, width: "20%"}}>
									<View style={{height: 40, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5}}>
										<TextInput onChangeText={(value) => updateValueQtyBisaRework(value, index)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." keyboardType="numeric"/>
									</View>
								</View>
								<View style={{padding: 4, width: "33%"}}>
									<View key={1} style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5}}>
										<Picker 
										mode="dropdown"
										selectedValue={itemQuantityCanBeRework[index].ng_can_be_reworked_note}
										onValueChange={(value) => updateValueNoteBisaRework(value, index)}
										itemStyle={{marginLeft: 0}}
										itemTextStyle={{fontSize: 9}}
										>
											{itemNg}
										</Picker>
									</View>
								</View>
							</View>	
						)
					})
				}
			}
		}
		return dataQty
	}

	const updateValueQtyBisaRework = (element, index) => {
		let newArr = [...itemQuantityCanBeRework];
		newArr[index].ng_can_be_reworked_quantity =  element
		setItemQuantityCanBeRework(newArr);
	}

	const updateValueNoteBisaRework = (element, index) => {
		let newArr = [...itemQuantityCanBeRework];
		newArr[index].ng_can_be_reworked_note =  element
		setItemQuantityCanBeRework(newArr);
	}

// abcd
	const buttonBisaRework = () => {
		if(data != null){
			if(data.rework_operator_id == null){
				return (
					<View style={{paddingTop: 10, flexDirection: 'row', justifyContent: 'center'}}>
						<Button style={{width: 145, height: 35}} onPress={() => addItemBisaRework()}><Text style={{fontSize: 8}}>Tambah NG Bisa Rework</Text></Button>
					</View>
				)
			}
		}
	}

	const buttonTidakBisaRework = () => {
		if(data != null){
			if(data.rework_operator_id == null){
				return (
					<View style={{paddingTop: 10, flexDirection: 'row', justifyContent: 'center'}}>
						<Button style={{width: 145, height: 35}} onPress={() => addTidakBisaItemBisaRework()}><Text style={{fontSize: 6}}>Tambah NG Tidak Bisa Rework</Text></Button>
					</View>
				)
			}
		}
	}
	
	const addTidakBisaItemBisaRework = () => {
		setItemQuantityCannotBeRework([
			...itemQuantityCannotBeRework, {
				id: itemQuantityCannotBeRework.length + 1,
				ng_cannot_be_reworked_quantity: 0,
				ng_cannot_be_reworked_note: null
			}
		])
	}
	
	const contentTidakBisaRework = () => {
		const dataQty = []
		const itemNg = []
		if(data != null){
			if(data.ng_category.length > 0){
				itemNg.push(
					<Picker.Item key={"hour"} label={"Pilih"} value={0} />
				)
				data.ng_category.map((val, key) => {
					itemNg.push(
						<Picker.Item key={"hour", key} label={val.name.toString()} value={val.name} />
					)
				})
			}
			if(data.ng_cannot_be_reworked.length > 0){
				const sudahIsi = data.ng_cannot_be_reworked
				sudahIsi.map((val, index) => {
					dataQty.push(
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
				if(itemQuantityCannotBeRework.length > 0){
					itemQuantityCannotBeRework.map((val, index) => {
						dataQty.push(
							<View key={index} style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 4, width: "40%"}}>
									<Text style={{fontSize: 15}}> {val.id}. NG Tidak Bisa Dirework</Text>
								</View>
								<View style={{padding: 4}}>
									<Text style={{fontSize: 15}}>: </Text>
								</View>
								<View style={{padding: 4, width: "20%"}}>
									<View style={{height: 40, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5}}>
										<TextInput onChangeText={(value) => updateValueQtyTidakBisaRework(value, index)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." keyboardType="numeric"/>
									</View>
								</View>
								<View style={{padding: 4, width: "33%"}}>
									<View key={1} style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5}}>
										<Picker 
										mode="dropdown"
										selectedValue={itemQuantityCannotBeRework[index].ng_cannot_be_reworked_note}
										onValueChange={(value) => updateValueNoteTidakBisaRework(value, index)}
										itemStyle={{marginLeft: 0}}
										itemTextStyle={{fontSize: 9}}
										>
											{itemNg}
										</Picker>
									</View>
								</View>
							</View>	
						)
					})
				}
			}
		}
		return dataQty
	}

	const updateValueQtyTidakBisaRework = (element, index) => {
		let newArr = [...itemQuantityCannotBeRework];
		newArr[index].ng_cannot_be_reworked_quantity =  element
		setItemQuantityCannotBeRework(newArr);
	}

	const updateValueNoteTidakBisaRework = (element, index) => {
		let newArr = [...itemQuantityCannotBeRework];
		newArr[index].ng_cannot_be_reworked_note =  element
		setItemQuantityCannotBeRework(newArr);
	}

	const content = () => {
		var dataContent = []
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
					
					<View style={{flexDirection: 'row'}}>
						<View style={{padding: 10, width: "44%"}}>
							<Text>Nama Operator</Text>
						</View>
						<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
							<Text style={{color: 'black'}}>:</Text>
						</View>
						<View style={{padding: 4, width: "50%"}}>
							<View style={{height: 40, justifyContent: 'center', width: 177, paddingLeft: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: '#b8b8b8'}}>
								<Text>{username != null ? username : '-'}</Text>
							</View>
						</View>
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
					
					<View style={{padding: 20, flexDirection: 'row', borderWidth: 1, justifyContent: 'center', marginTop: 10}}>
						<Text style={{fontSize: 18, fontWeight: 'bold'}}>Detail NG</Text>
					</View>
					
					{buttonBisaRework()}
					
					{contentBisaRework()}
					
					<View style={{flex: 1, flexDirection: 'row', borderBottomWidth: 1}}>
						<Text style={{color: '#dfe0df'}}>asjdakjdasjkdhakjsdhakjsdhjkad</Text>
					</View>

					{buttonTidakBisaRework()}
					
					{contentTidakBisaRework()}

					<View style={{flex: 1, flexDirection: 'row', borderBottomWidth: 1}}>
						<Text style={{color: '#dfe0df'}}>asjdakjdasjkdhakjsdhakjsdhjkad</Text>
					</View>
										
				</TouchableOpacity>

        <View style={{paddingVertical: 40, justifyContent: 'center', alignItems: 'center'}}>
					{updateButton()}
				</View>
			</ScrollView>
		)
		return dataContent
	}

	//test 611

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

export default ReworkOperator;