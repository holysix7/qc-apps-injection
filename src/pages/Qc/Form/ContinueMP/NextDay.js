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

const NextDay = ({route, navigation}) => {
	const {qc_daily_inspection_id, internal_part_id, customer_part_number, sys_plant_id, product_name, customer_name, machine_id, machine_name, machine_number, tomorrow, today, yesterday, daily_inspection_number, doc_number, model} = route.params
	useEffect(() => {
    formOke()
  }, [])
	const [inspectionTime, setInspectionTime]       = useState("")
	const [loading, setLoading] 					          = useState(true)
	const [created_by, setCreatedBy]		            = useState("")
	const [updated_by, setUpdatedBy]		            = useState("")
	const [hours, setHours]		                      = useState(null)
	const [shift, setShift]		                      = useState(null)

	const [spg_supplier, setSpgSupplier]		        = useState(null)
	const [part_number_supplier, setPartNoSupplier]	= useState(null)
  
	const [lot_produksi, setLotProduksi]		        = useState(null)
	const [pn_value, setPNValue]		  		          = useState(null)
	const [rohs_compliance, setRohsCompliance]      = useState(null)
	const [dimension, setDimension]                 = useState(null)
	const [fitting_test, setFittingTest]            = useState(null)
	const [packing, setPacking]                     = useState(null)

	const [bqics, setBqics]                         = useState(null)
	const [item_khusus, setItemKhusu]               = useState(null)
	const [ng_category, setNGCategory]              = useState(null)
	const [note_unnormal, setNoteUnnormal]          = useState(null)
  
  const [uploadedImage, setImage]                 = useState(null)

  let date_now   												          = moment().format("YYYY-MM-DD")
	let created_at 												          = moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 												          = moment().format("YYYY-MM-DD HH:mm:ss")
	var dateTime 	= moment()
	var hoursNow 	= parseInt(moment(dateTime).format("H"))
	var timeNow 	= moment(dateTime).format("HH:MM")
	
	const submit = async() => {
    alert("Telah Disubmit")
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
  }

	const content = () => {
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
                  <Text>GET API</Text>
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
                  <Text>GET API</Text>
                </View>
              </View>
            </View>
          </View>
          
					<View style={{height: 100, justifyContent: 'center', alignItems: 'center'}}>
						<View>
              <Button onPress={() => submit()} style={{width: 172, borderRadius: 25, justifyContent: 'center'}}><Text>CONTINUE MP</Text></Button>
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
								<Text style={{fontWeight: 'bold', fontSize: 12}}>{tomorrow}</Text>
							</View>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "50%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.9}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>Shift Ke-{shift} / Jam {timeNow}</Text>
							</View>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "50%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>{customer_name}</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df', borderBottomWidth: 0.3}}>
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