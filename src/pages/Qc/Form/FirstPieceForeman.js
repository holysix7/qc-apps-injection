import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import React, {Component, useState} from 'react';
import { Container, Text, Button, Input, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import SelectPicker from 'react-native-picker-select';

const FirstPieceForeman = ({route}) => {
	const {product_name, customer_name, internal_part_id, customer_part_number, model, machine_name, machine_status, today, yesterday} = route.params
	const [item, setItem] = useState("")
	const [tooling, setTooling] = useState("")
	const [cavity, setCavity] = useState("")
	const [actionForeman, setActionForeman] = useState("")
	const [keputusan, setKeputusan] = useState("")
	const [remark, setRemark] = useState("")
	const date = []
	const submit = () => {
		const data = {
			item,
			machine_status,
			tooling,
			cavity,
			actionForeman,
			keputusan,
			remark
		}
		console.log(data)
	}
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
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>First Piece Foreman</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>{customer_name}</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1}}>
									<Text style={{fontWeight: 'bold', fontSize: 17}}>{machine_name}</Text>
									<View style={{borderWidth: 0.5, width: 150, height: 25, justifyContent: 'center'}}>
										<Picker 
										mode="dropdown"
										selectedValue={item}
										onValueChange={(value) => setItem(value)}
										itemStyle={{marginLeft: 0}}
										itemTextStyle={{fontSize: 9}}
										>
											<Picker.Item label="--Pilih Shift--" value="--Pilih Shift--" />
											<Picker.Item label="Shift 1 - 1" value="Shift 1 - 1" />
											<Picker.Item label="Shift 1 - 2" value="Shift 1 - 2" />
											<Picker.Item label="Shift 1 - 3" value="Shift 1 - 3" />
											<Picker.Item label="Shift 1 - 4" value="Shift 1 - 4" />
											<Picker.Item label="Shift 1 - 5" value="Shift 1 - 5" />
											<Picker.Item label="Shift 1 - 6" value="Shift 1 - 6" />
											<Picker.Item label="Shift 1 - 7" value="Shift 1 - 7" />
											<Picker.Item label="Shift 1 - 8" value="Shift 1 - 8" />
											<Picker.Item label="Shift 2 - 1" value="Shift 2 - 1" />
											<Picker.Item label="Shift 2 - 2" value="Shift 2 - 2" />
											<Picker.Item label="Shift 2 - 3" value="Shift 2 - 3" />
											<Picker.Item label="Shift 2 - 4" value="Shift 2 - 4" />
											<Picker.Item label="Shift 2 - 5" value="Shift 2 - 5" />
											<Picker.Item label="Shift 2 - 6" value="Shift 2 - 6" />
											<Picker.Item label="Shift 2 - 7" value="Shift 2 - 7" />
											<Picker.Item label="Shift 2 - 8" value="Shift 2 - 8" />
											<Picker.Item label="Shift 3 - 1" value="Shift 3 - 1" />
											<Picker.Item label="Shift 3 - 2" value="Shift 3 - 2" />
											<Picker.Item label="Shift 3 - 3" value="Shift 3 - 3" />
											<Picker.Item label="Shift 3 - 4" value="Shift 3 - 4" />
											<Picker.Item label="Shift 3 - 5" value="Shift 3 - 5" />
											<Picker.Item label="Shift 3 - 6" value="Shift 3 - 6" />
											<Picker.Item label="Shift 3 - 7" value="Shift 3 - 7" />
											<Picker.Item label="Shift 3 - 8" value="Shift 3 - 8" />
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
										<Text>{machine_status}</Text>
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
									<TextInput onChangeText={(value) => setTooling(value)} style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
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
									<TextInput onChangeText={(value) => setCavity(value)} style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40, backgroundColor: '#b8b8b8'}} editable={false}/>
								</View>
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Action Foreman</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
									<TextInput onChangeText={(value) => setActionForeman(value)} style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
								</View>
							</View>
						</View>
						
						<View style={{paddingTop: 20, flexDirection: 'row'}}>
							<View style={{padding: 10, width: "44%"}}>
								<Text>Keputusan</Text>
							</View>
							<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
								<Text style={{color: 'black'}}>:</Text>
							</View>
							<View style={{padding: 4, width: "50%"}}>
								<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
									<TextInput onChangeText={(value) => setKeputusan(value)} style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
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
								<View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
									<TextInput onChangeText={(value) => setRemark(value)} style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 40}} placeholder="Type Here..." />
								</View>
							</View>
						</View>

						<View style={{justifyContent: 'center', alignItems: 'center'}}>
							<View style={{paddingTop: 10}}>
								<Button onPress={() => submit()} style={{width: 172, borderRadius: 25, justifyContent: 'center'}}><Text>SAVE</Text></Button>
							</View>
						</View>

					</ScrollView>
				</View>
			</Container>
		</TouchableWithoutFeedback>
	</KeyboardAvoidingView>
	)
}

export default FirstPieceForeman;