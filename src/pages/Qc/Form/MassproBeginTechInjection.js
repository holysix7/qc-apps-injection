import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker} from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';

const MassproBeginTechInjection = ({route}) => {
	useEffect(() => {
		formOke()
	}, [])

	const {product_name, customer_name, internal_part_id, customer_part_number, model, machine_name, today, yesterday} = route.params
	const [cavity, setCavity] 	= useState("")
	const [param, setParam] 		= useState("")
	const [robot, setRobot] 		= useState("")
	const [channel, setChannel] = useState("")
	const [sheet, setSheet] 		= useState("")
	const [actMold, setActMold] = useState("")
	const [remark, setRemark] 	= useState("")
	const [hours, setHours]			= useState(0)
	const [shift, setShift]			= useState(0)
	const date = []

	const submit = () => {
		const data = {
			hours,
			cavity,
			param,
			robot,
			channel,
			sheet,
			actMold,
			remark
		}
		console.log(data)
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
		}else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
			const nilaiJam = parseInt(jam)
			setShift(3)
			setHours(nilaiJam)
		}else{
			const nilaiJam = parseInt(jam)
			setShift(4)
			setHours(nilaiJam)
		}
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
	if(yesterday != null)
	{
		date.push(
			<Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{yesterday}</Text>
		)
	}
	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
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
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Masspro Begin Tech. Injection</Text>
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
							<TouchableOpacity>
								<View style={{paddingTop: 20, flexDirection: 'row'}}>
									<View style={{padding: 10, width: "44%"}}>
										<Text>Cleaning Mold Core / Cavity</Text>
									</View>
									<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
										<Text style={{color: 'black'}}>:</Text>
									</View>
									<View style={{padding: 4, width: "50%"}}>
										<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
											<Picker 
											mode="dropdown"
											selectedValue={cavity}
											onValueChange={(value) => setCavity(value)}
											>
												<Picker.Item label="Pilih" value="" />
												<Picker.Item label="OK" value="OK" />
												<Picker.Item label="NG" value="NG" />
											</Picker>
										</View>
									</View>
								</View>

								<View style={{paddingTop: 20, flexDirection: 'row'}}>
									<View style={{padding: 10, width: "44%"}}>
										<Text>Input Standar Parameter</Text>
									</View>
									<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
										<Text style={{color: 'black'}}>:</Text>
									</View>
									<View style={{padding: 4, width: "50%"}}>
										<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
											<Picker 
											mode="dropdown"
											selectedValue={param}
											onValueChange={(value) => setParam(value)}
											>
												<Picker.Item label="Pilih" value="" />
												<Picker.Item label="OK" value="OK" />
												<Picker.Item label="NG" value="NG" />
											</Picker>
										</View>
									</View>
								</View>
								
								<View style={{paddingTop: 20, flexDirection: 'row'}}>
									<View style={{padding: 10, width: "44%"}}>
										<Text>Robot setting</Text>
									</View>
									<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
										<Text style={{color: 'black'}}>:</Text>
									</View>
									<View style={{padding: 4, width: "50%"}}>
										<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
											<Picker 
											mode="dropdown"
											selectedValue={robot}
											onValueChange={(value) => setRobot(value)}
											>
												<Picker.Item label="Pilih" value="" />
												<Picker.Item label="OK" value="OK" />
												<Picker.Item label="NG" value="NG" />
											</Picker>
										</View>
									</View>
								</View>
								
								<View style={{paddingTop: 20, flexDirection: 'row'}}>
									<View style={{padding: 10, width: "44%"}}>
										<Text>Check cooling Channel</Text>
									</View>
									<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
										<Text style={{color: 'black'}}>:</Text>
									</View>
									<View style={{padding: 4, width: "50%"}}>
										<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
											<Picker 
											mode="dropdown"
											selectedValue={channel}
											onValueChange={(value) => setChannel(value)}
											>
												<Picker.Item label="Pilih" value="" />
												<Picker.Item label="OK" value="OK" />
												<Picker.Item label="NG" value="NG" />
											</Picker>
										</View>
									</View>
								</View>
								
								<View style={{paddingTop: 20, flexDirection: 'row'}}>
									<View style={{padding: 10, width: "44%"}}>
										<Text>4M Check Sheet</Text>
									</View>
									<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
										<Text style={{color: 'black'}}>:</Text>
									</View>
									<View style={{padding: 4, width: "50%"}}>
										<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
											<Picker 
											mode="dropdown"
											selectedValue={sheet}
											onValueChange={(value) => setSheet(value)}
											>
												<Picker.Item label="Pilih" value="" />
												<Picker.Item label="OK" value="OK" />
												<Picker.Item label="NG" value="NG" />
											</Picker>
										</View>
									</View>
								</View>
								
								<View style={{paddingTop: 20, flexDirection: 'row'}}>
									<View style={{padding: 10, width: "44%"}}>
										<Text>Mold Temp ActMold Temp Act</Text>
									</View>
									<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
										<Text style={{color: 'black'}}>:</Text>
									</View>
									<View style={{padding: 4, width: "50%"}}>
										<View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
											<Picker 
											mode="dropdown"
											selectedValue={actMold	}
											onValueChange={(value) => setActMold(value)}
											>
												<Picker.Item label="Pilih" value="" />
												<Picker.Item label="OK" value="OK" />
												<Picker.Item label="NG" value="NG" />
											</Picker>
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
										<TextInput onChangeText={(value) => setRemark(value)}  style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
									</View>
								</View>
								
								<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
									<View>
										<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
									</View>
								</View>
							</TouchableOpacity>
						</ScrollView>
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default MassproBeginTechInjection;