import {Image, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';

const UpdateQCLeader = ({route, navigation}) => {
	useEffect(() => {
    session()
    formOke()
  }, [])

	const [loading, setLoading] 	        = useState(true)
	const [name, setName]                 = useState(null)
	const [idUser, setIdUser]             = useState(null)
	const [token, setToken]               = useState(null)
	const [shift, setShift]               = useState(null)
	let date_now   								        = moment().format("YYYY-MM-DD")
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
// asdadsd
// asdasdsadzxczxczczczasdaaslkdmalksdmalksmdlaskdsdasd
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

	const content = () => {
    return (
     <ScrollView>
      <View style={{paddingBottom: 40}}>
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
    </ScrollView>
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

						<View style={{borderBottomWidth: 0.3, flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderBottomWidth: 0.3, borderRightWidth: 0.3, height: 70, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#F5F5DC'}}>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>UpdateQCLeader</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1, flexDirection: 'column'}}>
                  <View style={{width: "100%", height: "100%"}}>
                    <View style={{height: "50%", borderBottomWidth: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{fontWeight: 'bold', fontSize: 13}}>SCAN LABEL</Text>
                    </View>
                    <View style={{height: "50%", justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 13}}>{date_now}</Text>
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