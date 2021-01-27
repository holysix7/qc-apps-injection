import {Image, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, Animated, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';

const UpdateQCLeader = ({route, navigation}) => {
	const {qc_daily_inspection_id, sys_plant_id, machine_id, product_name, customer_name, machine_number, daily_inspection_number, machine_name, today, yesterday, doc_number} = route.params
	useEffect(() => {
    session()
    formOke()
  }, [])

	const [shiftId, setShiftId] 	        = useState(1)
	const [loading, setLoading] 	        = useState(true)
	const [name, setName]                 = useState(null)
	const [idUser, setIdUser]             = useState(null)
	const [token, setToken]               = useState(null)
	const [shift, setShift]               = useState(null)
	const [created_by, setCreatedBy]      = useState(null)
	const [updated_by, setUpdatedBy]      = useState(null)
	let created_at 								        = moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 								        = moment().format("YYYY-MM-DD HH:mm:ss")
	
	const submit = async() => {
    alert("Telah Disubmit")
    const data = {
      name,
      idUser,
      shift,
      created_by,
      updated_by,
      created_at,
      updated_at
    }
    console.log(data)
  }
  
  const session = async() => {
    const token = await AsyncStorage.getItem("key")
		const name = await AsyncStorage.getItem('name')
    const id = await AsyncStorage.getItem('id')
    setToken(token)
    setName(name)
    setIdUser(id)
  }

	const formOke = async() => {
		const headers = {
			'Authorization': token
		}
		setCreatedBy(idUser)
		setUpdatedBy(idUser)
  }

  const listUsers = () => {
    return (
      <Picker.Item label={name} value={idUser} />
    )
  }
  const listShift = () => {
    var i
    var b = 1
    var data = []
    for(i = 2; i < 5; i++){
      const lab = "Shift Ke-"
      const labelLoop = b++
      const label = lab + labelLoop
      data.push(
        <Picker.Item key="asioj2" label={label} value={i} />
      )
    } 
    return data
  }

  const animasi = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }

  const contentShift = () => {
    var data = []
    if(shiftId == 1){
      data.push(
        <View key="aksosk" style={{marginTop: 10, backgroundColor: '#e1bc91', height: "100%", marginRight: 10, borderWidth: 1}}>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderRadius: 10, width: "80%"}}>
              <Text>Shift 1</Text>
            </View>
          </View>
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Access</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>QC Leader</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>User</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={name}
                  onValueChange={(value) => setName(value)}
                  >
                    {listUsers()}
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Shift</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={shift}
                  onValueChange={(value) => setShift(value)}
                  >
                    {listShift()}
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
  					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
          </View>
        </View>
      )
    }else if(shiftId == 2){
      data.push(
        <View key="aksosk" style={{marginTop: 10, backgroundColor: '#e1bc91', height: "100%", marginRight: 10, borderWidth: 1}}>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderRadius: 10, width: "80%"}}>
              <Text>Shift 2</Text>
            </View>
          </View>
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Access</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>QC Leader</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>User</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={name}
                  onValueChange={(value) => setName(value)}
                  >
                    {listUsers()}
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Shift</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={shift}
                  onValueChange={(value) => setShift(value)}
                  >
                    {listShift()}
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
  					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
          </View>
        </View>
      )
    }else{
      data.push(
        <View key="aksosk" style={{marginTop: 10, backgroundColor: '#e1bc91', height: "100%", marginRight: 10, borderWidth: 1}}>
          <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderRadius: 10, width: "80%"}}>
              <Text>Shift 3</Text>
            </View>
          </View>
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Access</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>QC Leader</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>User</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={name}
                  onValueChange={(value) => setName(value)}
                  >
                    {listUsers()}
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Shift</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={shift}
                  onValueChange={(value) => setShift(value)}
                  >
                    {listShift()}
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
  					<Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit()}><Text>SAVE</Text></Button>
          </View>
        </View>
      )
    }
    return data
  }

  const sideTab = () => {
    var data = []
    if(shiftId == 1){
      data.push(
        <View key="XlsksmS" style={{flexDirection: 'column', paddingTop: 10, paddingLeft: 10}}>
          <Button style={{backgroundColor: '#e1bc91', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(1)}>
            <View style={{margin: 5, paddingRight: 10, paddingTop: 10}}>
              <Text style={{margin: 5}}>1</Text>
            </View>
          </Button>
          <View style={{paddingVertical: 10}}>
            <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(2)}>
              <View style={{margin: 5, paddingRight: 5, paddingTop: 5}}>
                <Text style={{margin: 5}}>2</Text>
              </View>
            </Button>
          </View>
          <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(3)}>
            <View style={{margin: 5, paddingRight: 5, paddingTop: 5}}>
              <Text style={{margin: 5}}>3</Text>
            </View>
          </Button>
        </View>
      )
    }else if(shiftId == 2){
      data.push(
        <View key="XlsksmS" style={{flexDirection: 'column', paddingTop: 10, paddingLeft: 10}}>
          <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(1)}>
            <View style={{margin: 5, paddingRight: 5, paddingTop: 5}}>
              <Text style={{margin: 5}}>1</Text>
            </View>
          </Button>
          <View style={{paddingVertical: 10}}>
            <Button style={{backgroundColor: '#e1bc91', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(2)}>
              <View style={{margin: 5, paddingRight: 10, paddingTop: 10}}>
                <Text style={{margin: 5}}>2</Text>
              </View>
            </Button>
          </View>
          <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(3)}>
            <View style={{margin: 5, paddingRight: 5, paddingTop: 5}}>
              <Text style={{margin: 5}}>3</Text>
            </View>
          </Button>
        </View>
      )
    }else{
      data.push(
        <View key="XlsksmS" style={{flexDirection: 'column', paddingTop: 10, paddingLeft: 10}}>
          <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(1)}>
            <View style={{margin: 5, paddingRight: 5, paddingTop: 5}}>
              <Text style={{margin: 5}}>1</Text>
            </View>
          </Button>
          <View style={{paddingVertical: 10}}>
            <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(2)}>
              <View style={{margin: 5, paddingRight: 5, paddingTop: 5}}>
                <Text style={{margin: 5}}>2</Text>
              </View>
            </Button>
          </View>
          <Button style={{backgroundColor: '#e1bc91', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(3)}>
            <View style={{margin: 5, paddingRight: 10, paddingTop: 10}}>
              <Text style={{margin: 5}}>3</Text>
            </View>
          </Button>
        </View>
      )
    }
    return data
  }

	const content = () => {
    return (
     <ScrollView>
      <View style={{paddingBottom: 40}}>
        <View style={{flexDirection: 'row'}}>
            {sideTab()}
          <View style={{flexDirection: 'column', flex: 1, height: 450}}>
            {contentShift()}
          </View>
        </View>
      </View>
    </ScrollView>
    )
  }

  const date = () => {
    var data = []
    if(today != null){
      data.push(
        <Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{today}</Text>
      )
    }
    if(yesterday != null){
      data.push(
        <Text key={"key"} style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>{yesterday}</Text>
      )
    }
    return data
  }
  const productName   = <Text style={{fontWeight: 'bold', fontSize: 9}}>{product_name}</Text>
  const noProductName = <Text style={{fontWeight: 'bold', fontSize: 9}}>Tidak Ada Product</Text>
  const docNumber   = <Text style={{fontWeight: 'bold', fontSize: 9}}>{doc_number}</Text>
  const noDocNumber = <Text style={{fontWeight: 'bold', fontSize: 9}}>-Tidak Ada Daily Inspection Number-</Text>
  return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<View style={{flex: 1, height: 100, backgroundColor: '#F5F5DC', borderWidth: 0.3, flexDirection: 'column'}}>
						
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5DC'}}>
							<Image source={LogoSIP}/>
						</View>

						<View style={{borderBottomWidth: 0.3, flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderBottomWidth: 0.3, borderRightWidth: 0.3, height: 70, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#F5F5DC'}}>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Update QC Leader</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1, flexDirection: 'column'}}>
                  <View style={{width: "100%", height: "100%"}}>
                    <View style={{height: "50%", borderBottomWidth: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                      {product_name != null ? productName : noProductName} 
                      {doc_number != null ?  docNumber : noDocNumber} 
                    </View>
                    <View style={{height: "50%", justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 13}}>{date()}</Text>
                    </View>
                  </View>
								</View>
							</View>
						</View>

						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default UpdateQCLeader;