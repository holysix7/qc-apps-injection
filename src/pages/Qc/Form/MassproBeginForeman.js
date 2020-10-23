import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import React, {Component, useState} from 'react';
import { Container, Text, Button, Input } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import SelectPicker from 'react-native-picker-select';

const MassproBeginForeman = () => {

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
								<Text style={{fontWeight: 'bold', fontSize: 17}}>Edit Daily Inspection</Text>
								<Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 17}}>YYYY-MM-DD</Text>
								<Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 11}}>PT. INDONESIA KOITO</Text>
							</View>
							<View style={{borderWidth: 0.3, height: 65, alignItems: 'center', width: "50%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontWeight: 'bold', fontSize: 17}}>31-TOSHIBA 450T</Text>
								<View style={{borderWidth: 0.5, width: 150, height: 25, justifyContent: 'center', paddingLeft: 30}}>
									<SelectPicker onValueChange={(value) => console.log(value)} 
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
								<Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 11}}>BODY TL (K59J)</Text>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', paddingLeft: 5, height: 25, width: "36%", backgroundColor: '#F5F5DC'}}>
								<Text style={{fontSize: 13}}>PIA064B00140000</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', height: 25, width: "30%", backgroundColor: '#F5F5DC'}}>
								<Text>22646-8F01F</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#F5F5DC'}}>
								<Text>K59J</Text>
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
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => console.log(value)} 
											items={[
												{label: "Normal", value: "Normal"},
												{label: "Unnormal", value: "Unnormal"}
											]}
										/>
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
									<View style={{height: 30, justifyContent: 'center'}}>
										<TextInput style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 30}} placeholder="Type Here..." />
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
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
										<Input editable={false}/>
									</View>
								</View>
							</View>
							
							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Check Sheet Sebelum Mesin Mass Pro Maint. Mold</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => console.log(value)} 
											items={[
												{label: "Not Approved", value: "Not Approved"},
												{label: "Approved", value: "Approved"}
											]}
										/>
									</View>
								</View>
							</View>
							
							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Check Sheet Sebelum Mesin Mass Pro Material Preparation</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => console.log(value)} 
											items={[
												{label: "Not Approved", value: "Not Approved"},
												{label: "Approved", value: "Approved"}
											]}
										/>
									</View>
								</View>
							</View>

							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Check Sheet Sebelum Mesin Mass Pro Tech Injection</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => console.log(value)} 
											items={[
												{label: "Not Approved", value: "Not Approved"},
												{label: "Approved", value: "Approved"}
											]}
										/>
									</View>
								</View>
							</View>

							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Check Sheet Sebelum Mesin Mass Pro Leader Production</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => console.log(value)} 
											items={[
												{label: "Not Approved", value: "Not Approved"},
												{label: "Approved", value: "Approved"}
											]}
										/>
									</View>
								</View>
							</View>

							<View style={{paddingTop: 20, flexDirection: 'row'}}>
								<View style={{padding: 10, width: "44%"}}>
									<Text>Check Sheet Sebelum Mesin Mass Pro Leader QC</Text>
								</View>
								<View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
									<Text style={{color: 'black'}}>:</Text>
								</View>
								<View style={{padding: 4, width: "50%"}}>
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => console.log(value)} 
											items={[
												{label: "Not Approved", value: "Not Approved"},
												{label: "Approved", value: "Approved"}
											]}
										/>
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
									<View style={{borderWidth: 0.5, borderRadius: 25, height: 30, justifyContent: 'center', paddingLeft: 5}}>
										<SelectPicker onValueChange={(value) => console.log(value)} 
											items={[
												{label: "Stop", value: "Stop"},
												{label: "Running", value: "Running"}
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
									<TextInput style={{borderWidth: 0.5, borderRadius: 25, paddingLeft: 5, height: 30}} placeholder="Type Here..." />
								</View>
							</View>

							<View style={{justifyContent: 'center', alignItems: 'center'}}>
								<View style={{paddingTop: 10}}>
									<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}}><Text>SAVE</Text></Button>
								</View>
							</View>

						</ScrollView>
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default MassproBeginForeman;