import {Image, View, TouchableWithoutFeedback, Alert, Keyboard, KeyboardAvoidingView, ScrollView, ActivityIndicator, TouchableOpacity, Picker} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button } from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import base_url_submit from '../../../../API/BaseUrlSubmit';
import app_version from	'../../../app_version/index';

const ReworkProdLeader = ({route, navigation}) => {
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
	const [listForeman, setListForeman] 							= useState(null)
	const [data, setData]		  			  								= useState(null)
	const [category_4m, setCategory4m]		  			  	= useState(null)
	//PUT
	const [rework_prod_foremen_id, setForemanId] 			= useState(null)
	
	const submit = async() => {
    setLoading(false)
		const updated_by = await AsyncStorage.getItem('id') 
		const data = {
			qc_daily_inspection_method_id,
			category_4m,
			updated_by,
			rework_prod_foremen_id
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'inprocess_lot_out',
			kind: 'product_lot_out_production_leader',
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
				"Silahkan Hubungi IP QC",
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
	}
	
// abcd
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
		if(value != null){
			const params = {
				tbl: 'inprocess_lot_out',
				kind: 'product_lot_out_production_leader',
				sys_plant_id: sys_plant_id,
				app_version: app_version,
				machine_id: machine_id,
				eng_product_id: eng_product_id,
				hour: value,
				hrd_work_shift_id: shiftNow,
				date: date
			}
			console.log(params)
			Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
			.then(response => {
				setData(response.data.data)
				setMethodId(response.data.data.qc_daily_inspection_method_id)
				setListForeman(response.data.data.foreman)
				console.log('List Data QC Leader: 200 OK')
				setLoading(true)
			})
			.catch(error => {
				setLoading(true)
				console.log('List Rework Prod Leader: ', error)
			})
		}else{
			setLoading(true)
		}
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
			<Picker.Item key="asoasd" label="Pilih" value={null} />
		)
		if(dataPerHours != null){
			if(dataPerHours.length > 0){
				dataPerHours.map((val, key) => {
					datItemPicker.push(
						<Picker.Item key={"hour", key} label={val.hour.toString()} value={val.hour} />
					)
				})
			}
		}
		return datItemPicker
	}

	const dataListForeman = () => {
		var listFore = []
		listFore.push(
			<Picker.Item key="asoasd" label="Pilih" value="" />
		)
		if(listForeman != null){
			if(listForeman.length > 0){
				listForeman.map((val, key) => {
					listFore.push(
						<Picker.Item key={"foreman", key} label={val.foreman_name} value={val.foreman_id} />
					)
				})
			}
		}
		return listFore
	}

	const updateButton = () => {
		if(data != null){
			if(rework_prod_foremen_id != null && category_4m != null && data.rework_prod_leader_id == null){
				return (
					<View key="asd12q" style={{paddingTop: 10}}>
						<Button style={{width: 172, borderRadius: 5, justifyContent: 'center'}} onPress={() => submit()}><Text>Approve</Text></Button>
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
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 15}}>Production Leader</Text>
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
	
	const pickerForeman = () => {
		if(data != null){
			if(data.rework_prod_foremen_id != null){
				return (
					<View style={{flexDirection: 'column', width: '33%', alignItems: 'center', backgroundColor: '#b8b8b8'}}>
						<Text>{data.rework_prod_foremen_name}</Text>
					</View>
				)
			}else{
				return (
					<View style={{flexDirection: 'column', width: '33%', alignItems: 'center' }}>
						<Picker 
						mode="dropdown"
						selectedValue={rework_prod_foremen_id}
						onValueChange={(value) => setForemanId(value)}
						style={{ height: 40, width: 130 }}
						>
							{dataListForeman()}
						</Picker>
					</View>
				)
			}
		}else{
			return (
				<View style={{flexDirection: 'column', width: '33%', alignItems: 'center' }}>
					<Text>-</Text>
				</View>
			)
		}
	}

	const leadProd = () => {
		if(data != null){
			if(data.rework_prod_leader_id != null){
				return(
					<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center', backgroundColor: '#b8b8b8' }}>
						<Text>{data.rework_prod_leader_name}</Text>
					</View>
				)
			}else{
				return (
					<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center' }}>
						<Text>{username != null ? username : '-' }</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center' }}>
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
					<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center' }}>
						<Text>-</Text>
					</View>
				)
			}
		}else{
			return (
				<View style={{flexDirection: 'column', width: '33%', borderRightWidth: 1, alignItems: 'center' }}>
					<Text>-</Text>
				</View>
			)
		}
	}
	
	const statusCategory4m = () => {
		if(data != null){
			if(data.category_4m != null){
				return (
					<View key="asdw2"  style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{data.category_4m}</Text>
					</View>
				)
			}else{
				return (
					<View key="asdw2"  style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={category_4m}
						onValueChange={(value) => setCategory4m(value)}
						itemStyle={{marginLeft: 0}}
						itemTextStyle={{fontSize: 9}}
						key="asdweq"
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="Machines" value="Machines" />
							<Picker.Item label="Methods" value="Methods" />
							<Picker.Item label="Materials" value="Materials" />
							<Picker.Item label="Man" value="Man" />
						</Picker>
					</View>
				)
			}
		}else{
			return (
				<View key="asdw2"  style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
					<Text>-</Text>
				</View>
			)
		}
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
        					style={{ height: 40, width: 177 }}
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
							<Text style={{fontWeight: 'bold'}}>Leader Produksi</Text>
						</View>
						<View style={{flexDirection: 'column', width: '33%', alignItems: 'center' }}>
							<Text style={{fontWeight: 'bold'}}>Foreman</Text>
						</View>
					</View>
					<View style={{flexDirection: 'row', borderLeftWidth: 1, borderBottomWidth: 1, marginBottom: 15}}>
						{operator()}
						{leadProd()}
						{pickerForeman()}
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
								<Text>{data != null ? data.quantity_ok ? data.quantity_ok : 0 : 0}</Text>
							</View>
						</View>
						<View style={{padding: 10, width: "25%"}}>
							<Text style={{fontSize: 13}}>Jumlah NG: </Text>
						</View>
						<View style={{padding: 4, width: "25%"}}>
							<View style={{backgroundColor: '#b8b8b8', marginTop: 2, height: 30, justifyContent: 'center', paddingLeft: 5, borderWidth: 0.5, borderRadius: 5}}>
								<Text>{data != null ? data.quantity_ng > 0 ? data.quantity_ng : 0 : 0}</Text>
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
							{statusCategory4m()}
						</View>
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

export default ReworkProdLeader;