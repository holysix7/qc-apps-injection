import {Image, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, ActivityIndicator, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import app_version from '../../../app_version/index';
import base_url_submit from '../../../../API/BaseUrlSubmit';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarBlack from '../../../../assets/calendar.png'

const NextDay = ({route, navigation}) => {
	const {qc_daily_inspection_id, internal_part_id, customer_part_number, product_name, customer_name, machine_name, machine_number, model, next_date} = route.params
	useEffect(() => {
    formOke()
  }, [])
	const [loading, setLoading] 					          = useState(true)
	const [created_by, setCreatedBy]		            = useState("")

	//get data
	const [data, setData]							= useState(null)
	const [shift, setShift]		        = useState(null)
	const [show, setShow]		          = useState(false)
	const [choosenDate, setDate]			= useState(new Date(next_date))
	var dateTime 					= moment()
	var timeNow 					= moment(dateTime).format("HH:MM")
	var hoursNow 					= parseInt(moment(timeNow).format("H"))
	var choosenFixedDate 	= moment(choosenDate).format("YYYY-MM-DD")
	var maximumDateFix		= moment(dateTime).add(2, 'days')
	var minimumDateFix		= moment(dateTime).add(1, 'days')
	
// abcd
	const submit = async() => {
		const next_date = moment(choosenDate).format("YYYY-MM-DD")
		const data = {
			qc_daily_inspection_id,
			created_by,
			next_date,
			app_version
		}
		// console.log(data)
		const token = await AsyncStorage.getItem("key")
		const params = {
			tbl: 'daily_inspection',
			kind: 'continue_mp_next_day',
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
		const id = await AsyncStorage.getItem('id')
		setCreatedBy(id)
		const headers = {
			'Authorization': token
		}
		if(hoursNow >= 8 && hoursNow <= 15){
			setShift(1)
		}else if(hoursNow >= 16 && hoursNow <= 23){
			setShift(2)
		}else{
			setShift(3)
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

  const showDate = () => {
    setShow(true)
  }

  const onChange = (event, val) => {
    const currentDate = val || choosenDate;
    setShow(Platform.OS === 'ios');
    setDate(currentDate)
  };

  const showDateModal = () => {
    if(show == true){
			return (
				<DateTimePicker
					testID="dateTimePicker"
					value={choosenDate}
					maximumDate={new Date(maximumDateFix)}
					minimumDate={new Date(minimumDateFix)}
					is24Hour={true}
					display="calendar"
					onChange={(evt, val) => onChange(evt, val)}
				/>
			)
    }
  }

	const content = () => {
    return (
     <ScrollView>
      <View style={{paddingBottom: 40}}>
        <TouchableOpacity>
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Date</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
								<View style={{borderWidth: 0.5, borderRadius: 5, height: 40, paddingLeft: 5, paddingTop: 5, flexDirection: 'row'}}>
									<View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
										<Text onPress={() => showDate()}>{choosenFixedDate}</Text>
									</View>
									<View style={{flexDirection: 'column', alignItems: 'flex-end', width: 35, paddingTop: 2, marginLeft: 55}}>
										<TouchableOpacity onPress={() => showDate()}>
											<Image source={CalendarBlack} style={{width: 25, height: 25, marginLeft: 4}}/>
										</TouchableOpacity>
									</View>
								</View>
              </View>
            </View>
          </View>

					{showDateModal()}

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Leader Produksi</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
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
                <View style={{borderWidth: 0.5, borderRadius: 5, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
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
                    <Text style ={{fontSize: 17, fontWeight: 'bold'}}>Machine Number: {machine_number}</Text>
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