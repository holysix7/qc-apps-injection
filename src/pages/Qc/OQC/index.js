import {Image, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, ActivityIndicator, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import cameraIcons from '../../../assets/cameraicon.png';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import { RNCamera, FaceDetector } from 'react-native-camera';

const OQC = ({route, navigation}) => {
	useEffect(() => {
		let isMounted = true
    FixInspectionTime()
		return () => {
			isMounted = false
		}
		function FixInspectionTime() {
			let initialDate    = moment();
			var inspection     = setInterval(() => {
				var currentDate    = moment();    
				var second         = parseInt((currentDate - initialDate)/1000);
				var minutes        = parseInt(second/60);
				var hour           = parseInt(minutes/60);
				var second_kedua   = second - (minutes*60); 
				var menit_kedua    = minutes - (hour*60);
				var second_asli    = (second >= 60 ? second_kedua : second);
				var menit_asli     = (minutes >= 60 ? menit_kedua : minutes);
				var CombiningTime  = (hour + ":" + menit_asli + ":" + second_asli);
				if(isMounted) setInspectionTime(CombiningTime)
			}, 1000);
		}
  }, [])

	const [inspectionTime, setInspectionTime] = useState("")
	const [loading, setLoading] 					    = useState(true)
	const [created_by, setCreatedBy]		      = useState("")
	const [updated_by, setUpdatedBy]		      = useState("")
	const [hours, setHours]		  					    = useState(0)
	const [shift, setShift]		  					    = useState(0)
	const [pn_value, setPNValue]		  		    = useState(null)
	const [check_packing, setCheckPacking]    = useState(null)
	const [check_label, setCheckLabel]        = useState(null)
	const [bqics, setBqics]                   = useState(null)
	const [item_khusus, setItemKhusu]         = useState(null)
	const [ng_category, setNGCategory]        = useState(null)
	const [note_unnormal, setNoteUnnormal]    = useState(null)
  
  const [uploadedImage, setImage]           = useState(null)

  let date_now   												    = moment().format("YYYY-MM-DD")
	let created_at 												    = moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 												    = moment().format("YYYY-MM-DD HH:mm:ss")
	
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
  }

	//images
	const chooseImage = () => {
		const options = {
			title: 'Select Image',
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
			mediaType: 'photo',
			includeBase64: true,
			maxHeight: 400,
			maxWidth: 400
		};
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = { uri: 'data:image/jpeg;base64;,' + response.data }
				setImage({source})
			}
		})
  }
  
  const resultImage = () => {
		if(uploadedImage != null)
		{
			return <Image source={{uri: uploadedImage.source.uri}} style={{width: Dimensions.get('window').width,height:Dimensions.get('window').width, resizeMode: 'contain'}} onPress={() => chooseImage()}/>
		}else{
			return (
  			<View style={{alignItems: 'center', justifyContent: 'center', height: 420, paddingTop: 20, width: 300}}>
          <Text style={{height: '100%', width: "100%", textAlign: 'center', textAlignVertical: 'center'}} onPress={() => chooseImage()}><Image style={{height: 50, width: 50}} source={cameraIcons} /></Text>
	  		</View>
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
              <Text>Jumlah Pengiriman</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>GET API</Text>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Check Appearance</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{width: "6%", height: 70, flexDirection: 'column', paddingLeft: 5, justifyContent: 'center'}}>
              <View style={{height: 25}}>
                <Text style={{fontSize: 12}}>PN</Text>                                    
              </View>
              <View style={{height: 25}}>
                <Text style={{marginTop: 10, fontSize: 12}}>N</Text>
              </View>
            </View>
            <View style={{paddingTop: 8, paddingHorizontal: 4, paddingBottom: 4, width: "44%"}}>
              <View style={{paddingTop: 5, height: 50, justifyContent: 'center'}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5}}>
                  <TextInput value={pn_value} onChangeText={(value) => setPNValue(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
                </View>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>GET API</Text>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Check Packing</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={check_packing}
                  onValueChange={(value) => setCheckPacking(value)}
                  >
                    <Picker.Item label="Pilih" value="" />
                    <Picker.Item label="OK" value="ok" />
                    <Picker.Item label="NG" value="ng" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Check Label</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={check_label}
                  onValueChange={(value) => setCheckLabel(value)}
                  >
                    <Picker.Item label="Pilih" value="" />
                    <Picker.Item label="OK" value="ok" />
                    <Picker.Item label="NG" value="ng" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>BQICS</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={bqics}
                  onValueChange={(value) => setBqics(value)}
                  >
                    <Picker.Item label="Pilih" value="" />
                    <Picker.Item label="OK" value="ok" />
                    <Picker.Item label="SA" value="ok" />
                    <Picker.Item label="NG" value="ng" />
                    <Picker.Item label="No Check" value="no_check" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Status</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={item_khusus}
                  onValueChange={(value) => setItemKhusu(value)}
                  >
                    <Picker.Item label="Pilih" value="" />
                    <Picker.Item label="Garansi Claim" value="garansi_claim" />
                    <Picker.Item label="Satelit" value="satelit" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>NG Category</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={ng_category}
                  onValueChange={(value) => setNGCategory(value)}
                  >
                    <Picker.Item label="Pilih" value="" />
                    <Picker.Item label="Bending" value="ok" />
                    <Picker.Item label="DLL" value="ng" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Note Unnormal</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <TextInput value={note_unnormal} onChangeText={(value) => setNoteUnnormal(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
                </View>
              </View>
            </View>
          </View>

          <View style={{marginTop: 20, flexDirection: 'row', borderWidth: 0.3, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{padding: 10, justifyContent: 'center', alignItems: 'center', width: '33.3%', borderRightWidth: 0.3}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>NIK Operator</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>2008107</Text>
            </View>
            <View style={{padding: 10, justifyContent: 'center', alignItems: 'center', width: '33.3%', borderRightWidth: 0.3}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>IPQC CODE</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>2008107</Text>
            </View>
            <View style={{padding: 10, justifyContent: 'center', alignItems: 'center', width: '33.3%'}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>OQC1 CODE</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>2008107</Text>
            </View>
          </View>

          <View style={{marginTop: 20, flexDirection: 'row', height: 432, borderWidth: 0.3, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{padding: 10, justifyContent: 'center', alignItems: 'center', width: '77%'}}>
              <View>
                {resultImage()}
              </View>
            </View>
            <View style={{padding: 10, marginRight: 5, height: "100%", flexDirection: 'column', borderLeftWidth: 0.3}}>
              <View style={{height: "20%", width: 65, justifyContent: 'center'}}>
                <Button onPress={() => submit()} style={{width: 65, borderRadius: 10, justifyContent: 'center'}}><Text style={{fontSize: 9}}>SAVE</Text></Button>
              </View>
              <View style={{height: "20%", width: 65, justifyContent: 'center'}}>
                <Button onPress={() => alert("Kembali")} style={{width: 65, borderRadius: 10, justifyContent: 'center'}}><Text style={{fontSize: 9}}>BACK</Text></Button>
              </View>
              <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-end'}}>
                <Text>{inspectionTime}</Text>
              </View>
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
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>OQC</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1, flexDirection: 'column'}}>
                  <View style={{width: "100%", height: "100%"}}>
                    <View style={{height: "50%", borderBottomWidth: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        {/* <RNCamera 
                        ref={cameraRef}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        androidCameraPermissionOptions={{
                          title: 'Permission to use camera',
                          message: 'We need your permission to use your camera',
                          buttonPositive: 'Ok',
                          buttonNegative: 'Cancel',
                        }}
                        androidRecordAudioPermissionOptions={{
                          title: 'Permission to use audio recording',
                          message: 'We need your permission to use your audio',
                          buttonPositive: 'Ok',
                          buttonNegative: 'Cancel',
                        }}
                        onGoogleVisionBarcodesDetected={({ barcodes }) => {
                          console.log(barcodes);
                        }}> */}
                          <Button style={{height: 30, width: 150, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('Scanner')}>
                            <Text style={{fontWeight: 'bold', fontSize: 11}}>SCAN LABEL</Text>
                          </Button>
                        {/* </RNCamera> */}
                      </View>
                    </View>
                    <View style={{height: "50%", justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 13}}>{date_now}</Text>
                    </View>
                  </View>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "50%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.9}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>Customer Name</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df', borderBottomWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>Part Name</Text>
							</View>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "33.3%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>Part No Internal</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>Part No Customer</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df', borderBottomWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>Model</Text>
							</View>
						</View>

						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default OQC;