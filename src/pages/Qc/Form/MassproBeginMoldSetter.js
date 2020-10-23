import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import { Container, Text, Button } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import SelectPicker from 'react-native-picker-select';

const MassproBeginMoldSetter = ({route}) => {
	const {id, sys_plant_id, product_name, customer_name, internal_part_id, customer_part_number, model, machine_name, today, yesterday} = route.params
	const [item, setItem] = useState("")
	const [clamping, setClamping] = useState("")
	const [cooling, setCooling] = useState("")
	const [slider, setSlider] = useState("")
	const [stroke, setStroke] = useState("")
	const [touching, setTouching] = useState("")
	const [hydraulic, setHydraulic] = useState("")
	const [remark, setRemark] = useState("")
	const date = []
	const submit = () => {
		const data = {
			item,
			clamping,
			cooling,
			slider,
			stroke,
			touching,
			hydraulic,
			remark
		}
		console.warn(data)
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
							<View style={{borderWidth: 0.3, height: 65, alignItems: 'center', width: "50%", backgroundColor: '#F5F5DC'}}>
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>{date}</Text>
								<Text style={{fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{fontWeight: 'bold', fontSize: 11}}>Mass Pro Begin Mold Setter</Text>
								<Text style={{fontWeight: 'bold', fontSize: 11}}>{customer_name}</Text>
							</View>
							<View style={{borderWidth: 0.3, height: 65, alignItems: 'center', width: "50%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontWeight: 'bold', fontSize: 17}}>{machine_name}</Text>
								<View style={{borderWidth: 0.5, width: 150, height: 25, justifyContent: 'center', paddingLeft: 30}}>
									<SelectPicker onValueChange={(value) => setItem(value)} 
									items={[
										{label: "Shift 1 - 1", value: "Shift 1 - 1"},
										{label: "Shift 1 - 2", value: "Shift 1 - 2"},
										{label: "Shift 1 - 3", value: "Shift 1 - 3"},
										{label: "Shift 1 - 4", value: "Shift 1 - 4"},
										{label: "Shift 1 - 5", value: "Shift 1 - 5"},
										{label: "Shift 1 - 6", value: "Shift 1 - 6"},
										{label: "Shift 1 - 7", value: "Shift 1 - 7"},
										{label: "Shift 1 - 8", value: "Shift 1 - 8"},
										{label: "Shift 2 - 1", value: "Shift 2 - 1"},
										{label: "Shift 2 - 2", value: "Shift 2 - 2"},
										{label: "Shift 2 - 3", value: "Shift 2 - 3"},
										{label: "Shift 2 - 4", value: "Shift 2 - 4"},
										{label: "Shift 2 - 5", value: "Shift 2 - 5"},
										{label: "Shift 2 - 6", value: "Shift 2 - 6"},
										{label: "Shift 2 - 7", value: "Shift 2 - 7"},
										{label: "Shift 2 - 8", value: "Shift 2 - 8"},
										{label: "Shift 3 - 1", value: "Shift 3 - 1"},
										{label: "Shift 3 - 2", value: "Shift 3 - 2"},
										{label: "Shift 3 - 3", value: "Shift 3 - 3"},
										{label: "Shift 3 - 4", value: "Shift 3 - 4"},
										{label: "Shift 3 - 5", value: "Shift 3 - 5"},
										{label: "Shift 3 - 6", value: "Shift 3 - 6"},
										{label: "Shift 3 - 7", value: "Shift 3 - 7"},
										{label: "Shift 3 - 8", value: "Shift 3 - 8"}
									]}
									/>
								</View>
								<Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 11}}>{product_name}</Text>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 13}}>{internal_part_id}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#F5F5DC'}}>
								<Text>{customer_part_number}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#F5F5DC'}}>
								<Text>{model}</Text>
							</View>
						</View>

						<ScrollView style={{flex: 1}}>
							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Clamping Bolt</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => setClamping(value)} 
											items={[
												{label: "OK", value: "OK"},
												{label: "NG", value: "NG"}
											]}
										/>
									</View>
								</View>
							</View>

							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Cooling System</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => setCooling(value)} 
											items={[
												{label: "OK", value: "OK"},
												{label: "NG", value: "NG"}
											]}
										/>
									</View>
								</View>
							</View>
							
							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Limit Swith Ejector / Slider</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => setSlider(value)} 
											items={[
												{label: "OK", value: "OK"},
												{label: "NG", value: "NG"}
											]}
										/>
									</View>
								</View>
							</View>
							
							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Eject Stroke</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => setStroke(value)} 
											items={[
												{label: "OK", value: "OK"},
												{label: "NG", value: "NG"}
											]}
										/>
									</View>
								</View>
							</View>
							
							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Touching Nozzle With SprueBush</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => setTouching(value)} 
											items={[
												{label: "OK", value: "OK"},
												{label: "NG", value: "NG"}
											]}
										/>
									</View>
								</View>
							</View>
							
							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Hydraulic Core Pack</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => setHydraulic(value)} 
											items={[
												{label: "OK", value: "OK"},
												{label: "NG", value: "NG"}
											]}
										/>
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
									<TextInput value={remark} onChangeText={(value) => setRemark(value)} style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 30}} placeholder="Type Here..." />
								</View>
							</View>
						
							<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
								<View>
										<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
								</View>
						</View>
							
						</ScrollView>

					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default MassproBeginMoldSetter;