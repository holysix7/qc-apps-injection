import {Image, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, ActivityIndicator, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import cameraIcons from '../../../../assets/cameraicon.png';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import { RNCamera, FaceDetector } from 'react-native-camera';
import app_version from '../../../app_version/index';

const NextDay = ({route, navigation}) => {
	const {qc_daily_inspection_id, internal_part_id, customer_part_number, sys_plant_id, product_name, customer_name, machine_id, machine_name, machine_number, tomorrow, today, yesterday, daily_inspection_number, doc_number, model, next_date} = route.params
	useEffect(() => {
    formOke()
  }, [])
	const [loading, setLoading] 					          = useState(true)
	const [created_by, setCreatedBy]		            = useState("")
	const [updated_by, setUpdatedBy]		            = useState("")
	const [hours, setHours]		                      = useState(null)
	const [shift, setShift]		                      = useState(null)

	//get data
	const [data, setData]								= useState(null)
	
	const [known_by, setKnownBy]				= useState(null)
	const [leader_name, setLeaderName]	= useState(null)
	const [leader_nik, setLeaderNik]		= useState(null)
	const [foreman_id, setForemanId]		= useState(null)
	const [foreman_nik, setForemanNik]	= useState(null)

  let date_now   												          = moment().format("YYYY-MM-DD")
	let created_at 												          = moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 												          = moment().format("YYYY-MM-DD HH:mm:ss")
	var dateTime 	= moment()
	var hoursNow 	= parseInt(moment(dateTime).format("H"))
	var timeNow 	= moment(dateTime).format("HH:MM")
	
	const submit = async() => {
		const data = {
			qc_daily_inspection_id,
			created_by,
			app_version
		}
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'continue_mp_next_day',
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
		Axios(config)
		.then(function (response){
			console.log("Res: ", response.status, " Ok")
			setLoading(true)
			alert("Success Send Data!")
			navigation.navigate('ShowProducts')
		})
		.catch(function (error){
			alert("Failed Send Data!")
			console.log(error)
		})
	}
	const formOke = async() => {
		setLoading(false)
		const token = await AsyncStorage.getItem("key")
		const name = await AsyncStorage.getItem('name')
		const id = await AsyncStorage.getItem('id')
		setCreatedBy(id)
		setUpdatedBy(id)
		if(hoursNow >= 8 && hoursNow <= 15){
			setShift(1)
			setHours(hoursNow)
			var select_shift_id = 2
		}else if(hoursNow >= 16 && hoursNow <= 23){
			setShift(2)
			setHours(hoursNow)
			var select_shift_id = 3
		}else{
			setShift(3)
			setHours(hoursNow)
			var select_shift_id = 4
		}
		const headers = {
			'Authorization': token
		}
		const params = {
			tbl: 'daily_inspection',
			kind: 'continue_mp_next_day',
			qc_daily_inspection_id: qc_daily_inspection_id,
			app_version: app_version
		}
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setData(response.data.data)
			setLoading(true)
			console.log("List Data Continue MP Tomorrow: ", response.data.status, "OK")
		})
		.catch(error => {
			console.log('List Data Continue MP Tomorrow: ', error)
		})
  }

	const buttonSubmit = () => {
		if(data != null){
			if(data.known_by != null && data.foreman_id != null){
				return (
					<Button onPress={() => submit()} style={{width: 172, borderRadius: 25, justifyContent: 'center'}}><Text>CONTINUE MP</Text></Button>
				)
			}else{
				return(
					<Button onPress={() => alert("Belum Ada Data Leader Produksi Dan Data Foreman")} style={{width: 172, borderRadius: 25, justifyContent: 'center', backgroundColor: '#b8b8b8', borderWidth: 1}}><Text>CONTINUE MP</Text></Button>
				)
			}
		}else{
			return(
				<Button onPress={() => alert("Belum Ada Data Leader Produksi Dan Data Foreman")} style={{width: 172, borderRadius: 25, justifyContent: 'center', backgroundColor: '#b8b8b8', borderWidth: 1}}><Text>CONTINUE MP</Text></Button>
			)
		}
	}

	const content = () => {
		console.log(data)
    return (
     <ScrollView>
      <View style={{paddingBottom: 40}}>
        <TouchableOpacity>
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Leader Produksi</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>{data != null && data.known_by != null ? data.leader_name : "-"}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Foreman</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>{data != null && data.foreman_id != null ? data.foreman_name : "-"}</Text>
                </View>
              </View>
            </View>
          </View>
          
					<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
						<View>
							{buttonSubmit()}
						</View>
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
					<View style={{flex: 1, height: 100, backgroundColor: '#dfe0df', borderWidth: 0.3, flexDirection: 'column'}}>
						
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#dfe0df'}}>
							<Image source={LogoSIP}/>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, height: 70, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#dfe0df'}}>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Daily Inspection</Text>
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Continue MP Tomorrow</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1, flexDirection: 'column'}}>
                  <View style={{width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center'}}>
                    <Text style ={{fontSize: 17, fontWeight: 'bold'}}>{machine_number}</Text>
                    <Text style ={{fontSize: 17, fontWeight: 'bold'}}>{machine_name}</Text>
                  </View>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "50%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.9}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>{next_date}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "50%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.9}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>Shift Ke-{shift} / Jam {timeNow}</Text>
							</View>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 40, width: "50%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>{customer_name}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 40, backgroundColor: '#dfe0df', borderBottomWidth: 0.3, padding: 5}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>{product_name}</Text>
							</View>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "33.3%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>{internal_part_id}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "33.3%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>{customer_part_number}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df', borderBottomWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>{model}</Text>
							</View>
						</View>

						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default NextDay;