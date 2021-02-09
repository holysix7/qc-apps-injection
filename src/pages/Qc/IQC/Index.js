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

const IQC = ({route, navigation}) => {
	useEffect(() => {
    formOke()
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
	var timeNow 	= moment()
	var hoursNow 	= parseInt(moment(timeNow).format("H"))
	
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

  const ListNGCategories = () => {
    var data = []
    var dataNG = [
      {
        "id" : 1,
        "nama" : 'Bending',
      },
      {
        "id" : 2,
        "nama" : 'Dirty',
        
      },
      {
        "id" : 3,
        "nama" : 'Broken',
      }
    ]
    data.push(
      <Picker.Item label="Pilih" value="" key="ASKSMANs" />
    )
    dataNG.map((value, key) => {
      data.push(
        <Picker.Item label={value.nama} value={value.id} key={key} />
      )
    })
    return data
  }

	const content = () => {
    return (
     <ScrollView>
      <View style={{paddingBottom: 40}}>
        <TouchableOpacity>
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>LOT Produksi</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5}}>
                  <TextInput value={lot_produksi} onChangeText={(value) => setLotProduksi(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
                </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Jumlah Kedatangan</Text>
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
              <Text>Jumlah Packing</Text>
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
              <Text>ROHs Compliance</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={rohs_compliance}
                  onValueChange={(value) => setRohsCompliance(value)}
                  >
                    <Picker.Item label="Pilih" value="" />
                    <Picker.Item label="OK" value="ok" />
                    <Picker.Item label="NG" value="ng" />
                    <Picker.Item label="NA" value="na" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Dimension</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={dimension}
                  onValueChange={(value) => setDimension(value)}
                  >
                    <Picker.Item label="Pilih" value="" />
                    <Picker.Item label="OK" value="ok" />
                    <Picker.Item label="NG" value="ng" />
                    <Picker.Item label="NA" value="na" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Fitting Test</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={fitting_test}
                  onValueChange={(value) => setFittingTest(value)}
                  >
                    <Picker.Item label="Pilih" value="" />
                    <Picker.Item label="OK" value="ok" />
                    <Picker.Item label="NG" value="ng" />
                    <Picker.Item label="NA" value="na" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Packing</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={packing}
                  onValueChange={(value) => setPacking(value)}
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
              <Text>COA/MSDC/ICP Data</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={packing}
                  onValueChange={(value) => setPacking(value)}
                  >
                    <Picker.Item label="Pilih" value="" />
                    <Picker.Item label="OK" value="ok" />
                    <Picker.Item label="NG" value="ng" />
                    <Picker.Item label="NA" value="na" />
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
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>Automatis</Text>
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
                    {ListNGCategories()}
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
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>IQC CODE</Text>
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

  const listSpg = () => {
    return (
      <Picker.Item label="PT. Uye Uye Uye" value="PT. Uye Uye Uye" />
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
								<Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>IQC</Text>
							</View>
							<View style={{flexDirection: 'column', width: "100%"}}>
								<View style={{borderTopWidth: 0.3, height: 65, justifyContent: 'center', alignItems: 'center', width: "50%", flex: 1, flexDirection: 'column'}}>
                  <View style={{width: "100%", height: "100%"}}>
                    <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, margin: 2}}>
                      <Picker 
                      mode="dropdown"
                      selectedValue={spg_supplier}
                      onValueChange={(value) => setSpgSupplier(value)}
                      >
                        {listSpg()}
                      </Picker>
                    </View>
                    <View style={{height: "50%", justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{marginBottom: 2, fontWeight: 'bold', fontSize: 11}}>{date_now} / Shift Ke-{shift} / Jam {hoursNow}</Text>
                    </View>
                  </View>
								</View>
							</View>
						</View>

						<View style={{borderWidth: 0.5, flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "50%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.9, height: 50}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>- GET API SUPPLIER -</Text>
							</View>
							<View style={{flex: 1, height: 25, backgroundColor: '#dfe0df', borderBottomWidth: 0.3, height: 50}}>
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, margin: 2, marginTop: 5}}>
                  <Picker 
                  mode="dropdown"
                  selectedValue={part_number_supplier}
                  onValueChange={(value) => setPartNoSupplier(value)}
                  >
                    {listSpg()}
                  </Picker>
                </View>
							</View>
						</View>

						<View style={{flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "50%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>- GET API Part No Internal -</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df', borderBottomWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>- GET API Part Name -</Text>
							</View>
						</View>
						<View style={{flexDirection: 'row'}}>
							<View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5, height: 25, width: "50%", backgroundColor: '#dfe0df', borderBottomWidth: 0.3, borderRightWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>- GET API NIK Inspector -</Text>
							</View>
							<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 25, backgroundColor: '#dfe0df', borderBottomWidth: 0.3}}>
								<Text style={{fontWeight: 'bold', fontSize: 12}}>- GET API Warna -</Text>
							</View>
						</View>

						{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default IQC;