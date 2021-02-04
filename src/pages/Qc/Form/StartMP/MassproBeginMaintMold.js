import {Image, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import app_version from	'../../../app_version/index';

const MassproBeginMaintMold = ({route, navigation}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {sys_plant_id, machine_id, customer_name, machine_name, today, machine_number, eng_product_id} = route.params
	const [mold_condition, setCondition] 	= useState("")
	const [loading, setLoading] 					= useState(false)
	const [neeple_cooling, setCooling] 		= useState("")
	const [standard_part, setStandard] 		= useState("")
	const [remark, setRemark] 						= useState("")
	const [dataProduct1, setDataProduct1] = useState("")
	const [created_by, setCreatedBy]		  = useState("")
	const [updated_by, setUpdatedBy]		  = useState("")
	const [tooling, setTooling]		  			= useState(null)
	const [hours, setHours]		  					= useState(0)
	const [shift, setShift]		  					= useState(0)
	const date 														= []
	const [planningId, setPlanningId]		  = useState("")
	const [internal_part_id, setDataIPI] 	= useState("")
	const [cavityAmount, setCavMount] 		= useState("")
	const prod_machine_id 								= machine_id
	const status 													= "new"
	let created_at 												= moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 												= moment().format("YYYY-MM-DD HH:mm:ss")
	const [massProMM, setMassProMM]		  	= useState(null)
	const [massMold, setMassMold]		  		= useState("")
	const [massNeeple, setMassNeeple]		  = useState("")
	const [massStandard, setMassStandard]	= useState("")
	const [massRemark, setMassRemark]		  = useState("")
	const [massTooling, setMassTooling]		= useState("")
	const [massIPI, setMassIPI]		  			= useState("")

	const planning_id = parseInt(planningId)
	
	const submit = async() => {
		if(tooling != null){
			setLoading(false)
			const data = {
				eng_product_id,
				prod_machine_id,
				sys_plant_id,
				internal_part_id,
				mold_condition,
				neeple_cooling,
				standard_part,
				tooling,
				planning_id,
				remark,
				status,
				created_by,
				created_at,
				updated_by,
				updated_at
			}
			const token = await AsyncStorage.getItem("key")
			const params = {
				tbl: 'daily_inspection',
				kind: 'masspro_mm',
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
				data : data
			};
			try {
				Axios(config)
				.then(function (response){
					console.log("Res: ", response.status, " Ok")
					setLoading(true)
					alert("Success Send Data!")
					navigation.navigate('ShowPlanning')
				})
				.catch(function (error){
					alert("Failed Send Data!")
					console.log(error)
				})
			} catch (error) {
				console.log(error)
			}
		}else{
			alert("Harap Periksa Inputan Kembali")
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
		}else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
			const nilaiJam = parseInt(jam)
			setShift(3)
			setHours(nilaiJam)
		}else{
			const nilaiJam = parseInt(jam)
			setShift(4)
			setHours(nilaiJam)
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'masspro_mm',
			sys_plant_id: sys_plant_id,
			machine_id: machine_id,
			eng_product_id: eng_product_id,
			app_version: app_version
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setLoading(true)
			setDataProduct1(response.data.data.product_1_detail)
			setDataIPI(response.data.data.product_1_detail.internal_part_id)
			setCavMount(response.data.data.product_1_detail.cavity)
			setTooling(response.data.data.planning.tooling_1)
			setPlanningId(response.data.data.planning.id)
			setMassProMM(response.data.data.masspro_mm)
			setMassTooling(response.data.data.masspro_mm.tooling_num)
			setMassMold(response.data.data.masspro_mm.mold_condition)
			setMassNeeple(response.data.data.masspro_mm.neeple_cooling)
			setMassStandard(response.data.data.masspro_mm.standard_part)
			setMassRemark(response.data.data.masspro_mm.remark)
			setMassIPI(response.data.data.masspro_mm.internal_part_id)
			console.log("List Data Maint. Mold: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Maint. Mold: ', error)
		})
	}
	const shiftFix = (value) => {
		setHours(value)
	}
	const hString = hours.toString()
	if(today != null)
	{
		date.push(
			<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{today}</Text>
		)
	}
	var yesterday = null
	if(yesterday != null)
	{
		date.push(
			<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{yesterday}</Text>
		)
	}

	const statusMoldCondition = () => {
		const mldCondition = massMold
		const mpmmData = massProMM
		const data = []
		if(mpmmData != null){
			if(mldCondition != "OK" && mldCondition != "NG")
			{
				data.push(
					<View key="skehj2" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={mold_condition}
						onValueChange={(value) => setCondition(value)}
						itemStyle={{marginLeft: 0}}
						itemTextStyle={{fontSize: 9}}
						key="asdweq"
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="skehj2" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{mldCondition}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="skehj2" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={mold_condition}
					onValueChange={(value) => setCondition(value)}
					itemStyle={{marginLeft: 0}}
					itemTextStyle={{fontSize: 9}}
					key="asdweq"
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
	const neepleCoolingMold = () => {
		const neepleCooling = massNeeple
		const data = []
		const mpmmData = massProMM
		if(mpmmData != null){
			if(neepleCooling != "OK" && neepleCooling != "NG")
			{
				data.push(
				<View key="sdw21" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={neeple_cooling}
					onValueChange={(value) => setCooling(value)}
					itemStyle={{marginLeft: 0}}
					itemTextStyle={{fontSize: 9}}
					key="asdweq"
					>
						<Picker.Item label="Pilih" value="" />
						<Picker.Item label="OK" value="OK" />
						<Picker.Item label="NG" value="NG" />
					</Picker>
				</View>
				)
			}else{
				data.push(
					<View key="sdw21" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{neepleCooling}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="sdw21" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={neeple_cooling}
					onValueChange={(value) => setCooling(value)}
					itemStyle={{marginLeft: 0}}
					itemTextStyle={{fontSize: 9}}
					key="asdweq"
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
	const standardPart = () => {
		const standardPart = massStandard
		const data = []
		const mpmmData = massProMM
		if(mpmmData != null){
			if(standardPart != "OK" && standardPart != "NG")
			{
				data.push(
					<View key="asdw2"  style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<Picker 
						mode="dropdown"
						selectedValue={standard_part}
						onValueChange={(value) => setStandard(value)}
						itemStyle={{marginLeft: 0}}
						itemTextStyle={{fontSize: 9}}
						key="asdweq"
						>
							<Picker.Item label="Pilih" value="" />
							<Picker.Item label="OK" value="OK" />
							<Picker.Item label="NG" value="NG" />
						</Picker>
					</View>
				)
			}else{
				data.push(
					<View key="asle21" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{standardPart}</Text>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asdw2"  style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<Picker 
					mode="dropdown"
					selectedValue={standard_part}
					onValueChange={(value) => setStandard(value)}
					itemStyle={{marginLeft: 0}}
					itemTextStyle={{fontSize: 9}}
					key="asdweq"
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
	const remarkData = () => {
		const updateRemark = massRemark
		const mpmmData = massProMM
		const data = []
		if(mpmmData != null){
			if(updateRemark != null){
				data.push(
					<View key="123seqw" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
						<Text>{updateRemark}</Text>
					</View>
				)
			}else{
				data.push(
					<View key="123seqw" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
						<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40, width: 177}} placeholder="Type Here..." />
					</View>
				)
			}
		}else{
			data.push(
				<View key="123seqw" style={{borderWidth: 0.5, borderRadius: 25, width: 177, height: 40, justifyContent: 'center', paddingLeft: 5}}>
					<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{paddingLeft: 5, height: 40, width: 177}} placeholder="Type Here..." />
				</View>
			)
		}
		return data
	}
	const updateButton = () => {
		const updateMS = massProMM
		const mpmmData = massProMM
		const data = []
		if(mpmmData != null)
		{
			if(updateMS != null){
				data.push(
					<View key="asd12q" style={{paddingTop: 10}}>
						<Button style={{width: 172, borderRadius: 25, justifyContent: 'center', backgroundColor: '#05c46b'}} onPress={() => alert("Data Maintenance Mold Already Saved!")}><Text>SAVED</Text></Button>
					</View>
				)
			}else{
				data.push(
					<View key="asd12q" style={{paddingTop: 10}}>
						<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
					</View>
				)
			}
		}else{
			data.push(
				<View key="asd12q" style={{paddingTop: 10}}>
					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
				</View>
			)
		}
		return data
	}

	const toolingUpdate = () => {
		var data = []
		if(massProMM != null){
			if(massTooling != null){
				data.push(
					<View key="ss12" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, width: 177, backgroundColor: '#b8b8b8'}}>
						<Text>{massTooling != null ? massTooling : "-"}</Text>
					</View>
				)
			}else{
				data.push(
					<View key="ss12" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, width: 177}}>
						<TextInput value={tooling} onChangeText={(value) => setTooling(value)} style={{paddingLeft: 5, height: 40, width: 177}} placeholder="Type Here..." />
					</View>
				)	
			}
		}else{
			data.push(
				<View key="ss12" style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, width: 177}}>
					<TextInput value={tooling} onChangeText={(value) => setTooling(value)} style={{paddingLeft: 5, height: 40, width: 177}} placeholder="Type Here..." />
				</View>
			)	
		}
		return data
	}

	const content = () => {
		var dataContent = []
		dataContent.push(
			<ScrollView key="2" style={{flex: 1}}>
				<View style={{paddingTop: 20, flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Tooling</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{toolingUpdate()}
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Cavity Amount</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8', width: 177}}>
							<Text>{cavityAmount != null ? cavityAmount : "-"}</Text>
						</View>
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Status and Mold Condition</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{statusMoldCondition()}
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Neeple Cooling Mold</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{neepleCoolingMold()}
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Standard Part</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{standardPart()}
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{padding: 10, width: "44%"}}>
						<Text>Remark</Text>
					</View>
					<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
						<Text style={{color: 'black'}}>:</Text>
					</View>
					<View style={{padding: 4, width: "50%"}}>
						{remarkData()}
					</View>
				</View>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					{updateButton()}
				</View>
			</ScrollView>
		)
		return dataContent
	}

	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<View style={{flex: 1, height: 100, backgroundColor: '#dfe0df', borderWidth: 0.3, flexDirection: 'column'}}>
						
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#dfe0df'}}>
							<Image source={LogoSIP}/>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 100, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#dfe0df'}}>
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date}</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Masspro Begin Maintenance Mold</Text>
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
									<Text style={{fontWeight: 'bold', fontSize: 11}}>{dataProduct1 != null ? dataProduct1.name : "-"}</Text>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 13}}>{dataProduct1 != null ? dataProduct1.internal_part_id : "-"}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{dataProduct1 != null ? dataProduct1.customer_part_number : "-"}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df'}}>
								<Text style={{fontSize: 12}}>{dataProduct1 != null ? dataProduct1.model : "-"}</Text>
							</View>
						</View>
						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default MassproBeginMaintMold;