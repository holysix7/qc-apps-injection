import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import moment from 'moment';
import Axios from 'axios';

const LastShootLeaderQc = ({route, navigation}) => {
    const {qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, internal_part_id, customer_part_number, model, machine_id, machine_name, today, yesterday} = route.params

    const [item, setItem] = useState(0)
    const [cavityCheck, setCavityCheck] = useState(0)
    const [judgementFirstPiece, setJudgementFirstPiece] = useState("")
    const [ngCategory, setNGCategory] = useState("")
    const [fittingTest, setFittingTest] = useState("")
	const [tooling, setTooling] = useState("")
    const [statusCavity, setStatusCavity] = useState("")
    const [data, setData] = useState([]);
    const date = []
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

    const formOke = async(value) => {
        setItem(value)
        const token = await AsyncStorage.getItem("key")
        const headers = {
            'Authorization': token
        }
        const params = {
            tbl: 'daily_inspection',
            kind: 'get_shift',
            sys_plant_id: sys_plant_id,
            machine_id: machine_id,
            hrd_work_shift_id: 2,
            hours: value,
            qc_daily_inspection_id: qc_daily_inspection_id
        }
        Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
        .then(response => {
            setData(response.data.data)
            setCavityCheck(response.data.data.daily_inspection.cavity)
            console.log("List Data: ", response.data.status, "OK")
        })
        .catch(error => {
            console.log('err: ', error)
        })
    }
    
    const submit = async() => {
        const el = {
            qc_daily_inspection_id,
            qc_daily_inspection_item_id,
            qc_daily_inspection_method_id,
            ngCategory,
            judgementFirstPiece,
            fittingTest,
            item,
            tooling,
            statusCavity,
            ProductsWeight,
            WeightStandard,
            inspectionTime
        }
        console.log(el);
    }

    const tableLoop = () => {
        var tableByAmount = []
        if(cavityCheck != null)
        {
            tableByAmount.push(
                <View key={"2exQsmv"} style={{flexDirection: 'row', height: 50}}>
                    <View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
                        <View style={{justifyContent: 'center', width: 100}}>
                            <Picker 
                            mode="dropdown"
                            selectedValue={statusCavity}
                            onValueChange={(value) => setStatusCavity(value)}
                            >
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="OK" value="OK" />
                                <Picker.Item label="NG" value="NG" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
                        <View style={{justifyContent: 'center', width: 100}}>
                            <Picker 
                            mode="dropdown"
                            selectedValue={judgementFirstPiece}
                            onValueChange={(value) => setJudgementFirstPiece(value)}
                            >
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="OK" value="OK" />
                                <Picker.Item label="NG" value="NG" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
                        <View style={{justifyContent: 'center', width: 100}}>
                            <Picker 
                            mode="dropdown"
                            selectedValue={ngCategory}
                            onValueChange={(value) => setNGCategory(value)}
                            >
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="OK" value="OK" />
                                <Picker.Item label="NG" value="NG" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
                        <View style={{justifyContent: 'center', width: 100}}>
                            <Picker 
                            mode="dropdown"
                            selectedValue={fittingTest}
                            onValueChange={(value) => setFittingTest(value)}
                            >
                                <Picker.Item label="Pilih" value="" />
                                <Picker.Item label="OK" value="OK" />
                                <Picker.Item label="NG" value="NG" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
                        <View style={{justifyContent: 'center', paddingTop: 5, width: 100}}>
                            <TextInput style={{paddingLeft: 5, paddingRight: 5, height: 40}} placeholder="Type Here..." />
                        </View>
                    </View>
                    <View style={{alignItems: 'center', width: "25%", borderLeftWidth: 0.5, borderBottomWidth: 0.9}}>
                        <View style={{justifyContent: 'center', paddingTop: 5, width: 100}}>
                            <TextInput style={{paddingLeft: 5, paddingRight: 5, height: 40}} placeholder="Type Here..." />
                        </View>
                    </View>
                </View>
            )
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
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>Revisi First Piece Leader QC</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 11}}>{customer_name}</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1}}>
									<Text style={{fontWeight: 'bold', fontSize: 17}}>{machine_name}</Text>
									<View style={{borderWidth: 0.5, width: 150, height: 25, justifyContent: 'center'}}>
										<Picker 
										mode="dropdown"
										selectedValue={item}
										onValueChange={(value) => formOke(value)}
										itemStyle={{marginLeft: 0}}
										itemTextStyle={{fontSize: 9}}
										>
											<Picker.Item label="--Pilih Shift--" value="" />
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
                                        <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                                            <Text>{data.daily_inspection != null ? data.daily_inspection.cavity : "-"}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{paddingTop: 20, flexDirection: 'row'}}>
                                <View style={{padding: 10, width: "44%"}}>
                                    <Text>Compare Copy Sample</Text>
                                </View>
                                <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
                                    <Text style={{color: 'black'}}>:</Text>
                                </View>
                                <View style={{padding: 4, width: "50%"}}>
                                    <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                                        <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                                            <Picker 
                                            mode="dropdown"
                                            selectedValue={statusCavity}
                                            onValueChange={(value) => setStatusCavity(value)}
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
                                <View style={{padding: 10, width: "44%"}}>
                                    <Text>Need MTR</Text>
                                </View>
                                <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
                                    <Text style={{color: 'black'}}>:</Text>
                                </View>
                                <View style={{padding: 4, width: "50%"}}>
                                    <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                                        <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                                            <Picker 
                                            mode="dropdown"
                                            selectedValue={statusCavity}
                                            onValueChange={(value) => setStatusCavity(value)}
                                            >
                                                <Picker.Item label="Pilih" value="" />
                                                <Picker.Item label="OK" value="OK" />
                                                <Picker.Item label="NG" value="NG" />
                                            </Picker>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <ScrollView horizontal>
								<TouchableOpacity>
									<View style={{flexDirection: 'row', justifyContent: 'center', height: 50, paddingTop: 10}}>
                                        <View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
                                            <Text style={{fontWeight: 'bold'}}>Cavity</Text>
                                            <View style={{justifyContent: 'center', width: 100}}>
                                            </View>
                                        </View>
                                        <View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
                                            <Text style={{fontWeight: 'bold'}}>Judgement 1st Piece</Text>
                                            <View style={{justifyContent: 'center', width: 100}}>
                                            </View>
                                        </View>
                                        <View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
                                            <Text style={{fontWeight: 'bold'}}>NG Category</Text>
                                            <View style={{justifyContent: 'center', width: 100}}>
                                            </View>
                                        </View>
                                        <View style={{paddingHorizontal: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
                                            <Text style={{fontWeight: 'bold'}}>Fitting Test</Text>
                                            <View style={{justifyContent: 'center', width: 100}}>
                                            </View>
                                        </View>
                                        <View style={{paddingHorizontal: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
                                            <Text style={{fontWeight: 'bold'}}>Products Weight</Text>
                                            <View style={{justifyContent: 'center', width: 100}}>
                                            </View>
                                        </View>
                                        <View style={{paddingLeft: 5, alignItems: 'center', borderLeftWidth: 0.5, borderTopWidth: 0.5, borderBottomWidth: 0.9}}>
                                            <Text style={{fontWeight: 'bold'}}>Keterangan</Text>
                                            <View style={{justifyContent: 'center', width: 100}}>
                                            </View>
                                        </View>
									</View>
									{tableLoop()}
								</TouchableOpacity>
							</ScrollView>

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

export default LastShootLeaderQc;