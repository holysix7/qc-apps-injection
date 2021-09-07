import {Image, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, ActivityIndicator, Dimensions, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import cameraIcons from '../../../assets/cameraicon.png';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import base_url_submit from '../../../API/BaseUrlSubmit';
import app_version from '../../app_version/index';
import { RNCamera, FaceDetector } from 'react-native-camera';

const FormIQC = ({route, navigation}) => {
	const {qc_incoming, sys_plant_id, wh_spg_supplier_id, code_spg, status_spg, internal_part_id, packaging_quantity, packaging_type, part_color, part_name, spg_date, spg_number, spg_quantity, supplier_id, supplier_name, check_appearance_n, ng_categories, nik, name} = route.params
  useEffect(() => {
    formOke()
    setInterval(() => {
      setLoading(true)
    }, 2000);
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

	const [inspection_time, setInspectionTime]         = useState("")
	const [loading, setLoading] 					             = useState(false)
	const [dataIncoming, setDataQcIncoming] 					 = useState(null)
	const [imageIncoming, setImageIncoming] 					 = useState([])
	const [production_lot_number, setLotProduksi]		   = useState(null)
	const [select_pn, setPNValue]		  		             = useState('0')
	const [select_rohs_compliance, setRohsCompliance]  = useState(null)
	const [select_dimension, setDimension]             = useState(null)
	const [select_fitting_test, setFittingTest]        = useState(null)
	const [select_packing_status, setPacking]          = useState(null)
	const [select_icp_data, setICP]                    = useState(null)
	const [status, setStatus]                          = useState(null)
	const [qc_ng_category_id, setNGCategory]           = useState(null)
	const [note_unnormal, setNoteUnnormal]             = useState(null)
	const [created_by, setCreatedBy]                   = useState(null)
	const [token, setToken]                            = useState(null)
	const [username, setUsername]                      = useState(null)
	const [statusForm, setForm]                        = useState('Do Nothing')
  const [qc_incoming_id, setQCId]                    = useState(null)

  const [imageAwal, setImage]                    = useState(null)
  const [uploadedImageDua, setImageDua]              = useState(null)

  var check_appearance_pn    = select_pn
  var rohs_compliance_status = select_rohs_compliance
  var rohs_compliance_status = select_rohs_compliance
  var dimension_status       = select_dimension
  var fitting_test_status    = select_fitting_test
  var packing_status         = select_packing_status
  var icp_data_status        = select_icp_data

  const updateFunc = () => {
    setLoading(false)
    if(imageAwal != null || uploadedImageDua != null){
      if(imageAwal == null && uploadedImageDua != null){
        var uploadedImage = [uploadedImageDua]
      }else if(imageAwal != null && uploadedImageDua == null){
        var uploadedImage = [imageAwal]
      }else{
        var uploadedImage = [imageAwal, uploadedImageDua]
      }
    }else{
      var uploadedImage = []
    }
    const data = {
      uploadedImage
    }
		const params = {
			tbl: 'incoming'
		}
		var config = {
			method: 'put',
			url: 'https://api.tri-saudara.com/api/v2/qcs/'+qc_incoming_id,
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
			console.log("Res: ", response.status, " Ok")
			navigation.navigate('IQC')
			alert("Success Send Data!")
		})
		.catch(function (error){
			setLoading(true)
			alert("Failed Send Data!")
			console.log(error)
		})
  }

	const submit = () => {
    setLoading(false)
    if(imageAwal != null || uploadedImageDua != null){
      if(imageAwal == null && uploadedImageDua != null){
        var uploadedImage = [uploadedImageDua]
      }else if(imageAwal != null && uploadedImageDua == null){
        var uploadedImage = [imageAwal]
      }else{
        var uploadedImage = [imageAwal, uploadedImageDua]
      }
    }else{
      var uploadedImage = []
    }
    if(uploadedImage.length > 0){
      const data = {
        sys_plant_id,
        qc_ng_category_id,
        production_lot_number,
        wh_spg_supplier_id,
        internal_part_id,
        packaging_type,
        spg_quantity,
        packaging_quantity,
        check_appearance_pn,
        check_appearance_n,
        rohs_compliance_status,
        dimension_status,
        fitting_test_status,
        packing_status,
        icp_data_status,
        note_unnormal,
        created_by,
        inspection_time,
        status,
        uploadedImage,
      }
      const params = {
        tbl: 'incoming',
        app_version: app_version
      }
      var config = {
        method: 'post',
        url: 'https://api.tri-saudara.com/api/v2/qcs?',
        params: params,
        headers: { 
          'Authorization': token, 
          'Content-Type': 'application/json', 
          'Cookie': '_denapi_session=ubcfq3AHCuVeTlxtg%2F1nyEa3Ktylg8nY1lIEPD7pgS3YAWwlKOxwA0S9pw7JhvZ2mNkrYl0j62wAWJWJZd7AbfolGuHCwXgEMeJH6EoLiQ%3D%3D--M%2BjBb0uJeHmOf%2B3o--%2F2Fjw57x0Fyr90Ec9FVibQ%3D%3D'
        },
        data : data
      };
      if(production_lot_number != null && check_appearance_pn != null && rohs_compliance_status != null && dimension_status != null && fitting_test_status != null && packing_status != null && icp_data_status != null){
        Axios(config)
        .then(function (response){
          console.log("Res: ", response.status, " Ok")
          setLoading(true)
          Alert.alert(
            "Success Send Data",
            "Berhasil Menyimpan Data",
            [
              { 
                text: "OK", 
                onPress: () => console.log('200 OK') 
              }
            ],
            { cancelable: false }
          )
          navigation.navigate('IQC')
        })
        .catch(function (error){
          console.log("Shet")
          setLoading(true)
          Alert.alert(
            "Failed Send Data",
            "Gagal Kirim Data, Hubungi IT Department",
            [
              { 
                text: "OK", 
                onPress: () => console.log('400 BAD') 
              }
            ],
            { cancelable: false }
          )
          console.log(error)
        })
      }else{
        setLoading(true)
        Alert.alert(
          "Failed Send Data",
          "Periksa Kembali Form Input!",
          [
            { 
              text: "OK", 
              onPress: () => console.log('200 OK') 
            }
          ],
          { cancelable: false }
        )  
      }
    }else{
      setLoading(true)
      Alert.alert(
        "Failed Send Data",
        "Wajib Mengupload Foto!",
        [
          { 
            text: "OK", 
            onPress: () => console.log('200 OK') 
          }
        ],
        { cancelable: false }
      )  
    }
	}

	const formOke = async() => {
		const token = await AsyncStorage.getItem("key")
		const id = await AsyncStorage.getItem("id")
		const user = await AsyncStorage.getItem("user")
		setToken(token)
		setUsername(user)
    const headers = {
			'Authorization': token
		}
    setCreatedBy(id)
    const params = {
      'tbl': 'incoming',
      'kind': 'get_qc_incoming',
      'sys_plant_id': sys_plant_id,
      'app_version': app_version,
      'wh_spg_supplier_id': wh_spg_supplier_id,
      'internal_part_id': internal_part_id
    }
    // console.log(params)
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setDataQcIncoming(response.data.data.qc_incoming)
			setQCId(response.data.data.qc_incoming.id)
			setImageIncoming(response.data.data.qc_incoming_file)
      console.log('Data Form IQC: 200 OK')
			setLoading(true)
		})
		.catch(error => {
      console.log('Data Form IQC: ', error)
			setLoading(true)
		})
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
			maxHeight: 1000,
			maxWidth: 1000
		};
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = {counter_image: 1, uri: 'data:image/jpeg;base64;,' + response.data, status: 'active' }
        setImage(source)
			}
		})
  }

  const resultImage = () => {
		if(imageAwal != null){
      return (
  			<View style={{alignItems: 'center', justifyContent: 'center', height: 300, width: 300}}>
          <Image source={{uri: imageAwal.uri}} style={{width: 270, height: 270, resizeMode: 'contain'}} onPress={() => chooseImage()}/>
        </View>
      )
		}else{
			return (
  			<View style={{alignItems: 'center', justifyContent: 'center', height: 300, width: 300}}>
          <Text style={{height: '100%', width: "100%", textAlign: 'center', textAlignVertical: 'center'}} onPress={() => chooseImage()}><Image style={{height: 50, width: 50}} source={cameraIcons} /></Text>
	  		</View>
      )
		}
	}

  const imageSatu = () => {
    if(statusForm == 'Update'){
      return resultImage()
    }else if(statusForm == 'Delete'){
      deleteImage(1)
      return (
        imageIncoming.length > 0 ?
        imageIncoming[0].base64_full != null ?
        <Image style={{width: '100%', height: '100%'}} source={{ uri: `${imageIncoming[0].base64_full}` }} /> :
        resultImage() :
        resultImage()
      )
    }else{
      return (
        imageIncoming.length > 0 ?
        imageIncoming[0].base64_full != null ?
        <Image style={{width: '100%', height: '100%'}} source={{ uri: `${imageIncoming[0].base64_full}` }} /> :
        resultImage() :
        resultImage()
      )
    }
  }

  const deleteImage = (value) => {
    if(value != 2){
      console.log(value)
    }else{
      console.log("aoskdao")
    }
  }

  const imageDuaFunc = () => {
    if(statusForm != 'Update'){
      return (
        imageIncoming.length > 1 ?
        imageIncoming[1].base64_full != null ?
        <Image style={{width: '100%', height: '100%'}} source={{ uri: `${imageIncoming[1].base64_full}` }} /> :
        resultImageDua() :
        resultImageDua()
      )
    }else{
      
      return resultImageDua()
    }
  }
  
	//images
	const chooseImageDua = () => {
		const options = {
			title: 'Select Image',
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
			mediaType: 'photo',
			includeBase64: true,
			maxHeight: 1000,
			maxWidth: 1000
		};
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = {counter_image: 2, uri: 'data:image/jpeg;base64;,' + response.data, status: 'active' }
				setImageDua(source)
			}
		})
  }

  const resultImageDua = () => {
		if(uploadedImageDua != null){
			return (
  			<View style={{alignItems: 'center', justifyContent: 'center', height: 300, width: 300}}>
          <Image source={{uri: uploadedImageDua.uri}} style={{width: 270, height: 270, resizeMode: 'contain'}} onPress={() => chooseImage()}/>
        </View>
      )
		}else{
			return (
  			<View style={{alignItems: 'center', justifyContent: 'center', height: 300, width: 300}}>
          <Text style={{height: '100%', width: "100%", textAlign: 'center', textAlignVertical: 'center'}} onPress={() => chooseImageDua()}><Image style={{height: 50, width: 50}} source={cameraIcons} /></Text>
	  		</View>
      )
		}
	}

  const ListNGCategories = () => {
    var data = []
    if(status != "OK"){
      data.push(
        <Picker.Item label="Pilih" value="" key="ASKSMANs" />
      )
      if(ng_categories.length > 0){
        ng_categories.map((val, key) => {
          data.push(
            <Picker.Item label={val.name} value={val.id} key={key} />
          )
        })
      }
    }else{
      data.push(
        <Picker.Item label="Tidak NG" value={null} key="Ngs" />
      )
    }
    return data
  }

  const statusFunc = () => {
    if(check_appearance_pn > 0 || rohs_compliance_status == 'NG' || dimension_status == 'NG' || fitting_test_status == 'NG' || packing_status == 'NG' || icp_data_status == 'NG'){
      return setStatus('NG')
    }else{
      return setStatus('OK')
    }
  }

  const statusPN = (val) => {
    check_appearance_pn = val
    setPNValue(val)
    statusFunc()
  }

  const statusRohs = (val) => {
    rohs_compliance_status = val
    setRohsCompliance(val)
    statusFunc()
  }

  const statusDimension = (val) => {
    dimension_status = val
    setDimension(val)
    statusFunc()
  }
  
  const statusFittingTest = (val) => {
    fitting_test_status = val
    setFittingTest(val)
    statusFunc()
  }

  const statusPacking = (val) => {
    packing_status = val
    setPacking(val)
    statusFunc()
  }
  
  const setStatusIcp = (val) => {
    icp_data_status = val
    setICP(val)
    statusFunc()
  }

  const CheckNG = () => {
    if(status != null){
      if(status != 'OK'){
        return (
          <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
            <Picker 
            mode="dropdown"
            selectedValue={qc_ng_category_id}
            onValueChange={(value) => setNGCategory(value)}
            >
              {ListNGCategories()}
            </Picker>
          </View>
        )
      }else{
        return (
          <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
            <Text>- Tidak NG -</Text>
          </View>
        )
      }
    }else{
      return (
        <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
          <Text>- Tidak NG -</Text>
        </View>
      )
    }
  }

  const funcButton = (value) => {
    setForm(value)
    if(value == 'Update'){
      console.log('User Melakukan Update')
      Alert.alert(
        "Alert",
        "Silahkan Melakukan Update",
        [
          { 
            text: "OK", 
            onPress: () => console.log('200 OK') 
          }
        ],
        { cancelable: false }
      )
    }else{
      console.log('User Melakukan Delete')
      Alert.alert(
        "Alert",
        "Silahkan Melakukan Delete Foto",
        [
          { 
            text: "OK", 
            onPress: () => console.log('200 OK') 
          }
        ],
        { cancelable: false }
      )
    }
  }
  
  const updateButton = () => {
    console.log(statusForm)
    if(statusForm != 'Update'){
      if(dataIncoming != null){
        if(dataIncoming.id != null){
          if(qc_incoming != null){
            if(qc_incoming.modify_permissions == true){
              if(statusForm == 'Delete'){
                return (
                  <Button onPress={() => updateFunc()} style={{width: 190, borderRadius: 25, justifyContent: 'center'}}><Text>Simpan Perubahan</Text></Button>
                )
              }else{
                return (
                  <View>
                    <Button onPress={() => funcButton('Update')} style={{width: 172, borderRadius: 25, justifyContent: 'center'}}><Text>Update</Text></Button>
                    {/* <Button onPress={() => funcButton('Delete')} style={{width: 172, borderRadius: 25, justifyContent: 'center', backgroundColor: 'red', marginTop: 10}}><Text>Delete Image</Text></Button> */}
                  </View>
                )
              }
            }
          }
        }else{
          return (
            <Button onPress={() => submit()} style={{width: 172, borderRadius: 25, justifyContent: 'center'}}><Text>SAVE</Text></Button>
          )
        }
      }
    }else{
      return (
        <Button onPress={() => updateFunc()} style={{width: 190, borderRadius: 25, justifyContent: 'center'}}><Text>Simpan Perubahan</Text></Button>
      )
    }
  }

  const contentHeader = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: 25, borderWidth: 0.3}}>
          <View style={{width: "26%", paddingLeft: 5, justifyContent: 'center'}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>SPG Supplier</Text>
          </View>
          <View style={{borderRightWidth: 0.3, width: "2%"}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>:</Text>
          </View>
          <View style={{borderRightWidth: 0.3, width: "30%", paddingLeft: 5}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{spg_number}</Text>
          </View>
          <View style={{borderRightWidth: 0.3, width: "24%", alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{spg_date}</Text>
          </View>
          <View style={{borderRightWidth: 0.3, width: "18%", alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{status_spg}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', borderBottomWidth: 0.3}}>
          <View style={{width: "26%", paddingLeft: 5, justifyContent: 'center'}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>Supplier Name</Text>
          </View>
          <View style={{borderRightWidth: 0.3, width: "2%"}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>:</Text>
          </View>
          <View style={{borderRightWidth: 0.3, width: "72%", paddingLeft: 5}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{supplier_name}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', borderBottomWidth: 0.3}}>
          <View style={{flexDirection: 'row', width: "28%", paddingLeft: 5, justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.3}}>
            <View style={{flexDirection: 'column', width: '92%'}}>
              <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>Part Detail</Text>
            </View>
            <View style={{flexDirection: 'column', width: "8%"}}>
              <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>:</Text>
            </View>
          </View>
          <View style={{borderTopWidth: 0.3, borderRightWidth: 0.3, width: "72%"}}>
            <View style={{flexDirection: 'row', paddingLeft: 5}}>
              <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{part_name}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', borderTopWidth: 0.3, borderRightWidth: 0.3, width: '50%', paddingLeft: 5}}>
                <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{internal_part_id}</Text>
              </View>
              <View style={{flexDirection: 'column', borderTopWidth: 0.3, borderRightWidth: 0.3, width: '50%', paddingLeft: 5}}>
                <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{part_color != null ? part_color : '-'}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', borderBottomWidth: 0.3}}>
          <View style={{width: "26%", paddingLeft: 5, justifyContent: 'center'}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>QC Inspector</Text>
          </View>
          <View style={{borderRightWidth: 0.3, width: "2%"}}>
            <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>:</Text>
          </View>
          <View style={{borderRightWidth: 0.3, width: "72%", paddingLeft: 5}}>
            {
              dataIncoming != null ?
              dataIncoming.id != null ?
              <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{dataIncoming.qc_inspector}</Text> :
              <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{nik} - {name}</Text> : 
              <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 12}}>{nik} - {name}</Text>  
            }
          </View>
        </View>
      </View>
    )
  }

	const content = () => {
    // console.log(imageIncoming[1].filename)
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
                {
                  dataIncoming != null ? 
                  dataIncoming.production_lot_number != null ? 
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.production_lot_number}</Text>
                  </View> : 
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5}}>
                    <TextInput value={production_lot_number} onChangeText={(value) => setLotProduksi(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
                  </View> : 
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5}}>
                    <TextInput value={production_lot_number} onChangeText={(value) => setLotProduksi(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
                  </View> 
                }
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
                <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>{spg_quantity != null || spg_quantity > 0 ? spg_quantity : 0}</Text>
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
                <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>{packaging_quantity != null || packaging_quantity > 0 ? packaging_quantity : 0}</Text>
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
                {
                  dataIncoming != null ? 
                  dataIncoming.id != null ? 
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.check_appearance_pn != null ? dataIncoming.check_appearance_pn : '-'}</Text>
                  </View> : 
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5}}>
                    <TextInput value={select_pn} onChangeText={(value) => statusPN(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." keyboardType="numeric" />
                  </View> : 
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5}}>
                    <TextInput value={select_pn} onChangeText={(value) => statusPN(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." keyboardType="numeric" />
                  </View>
                }
                <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, marginTop: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>{check_appearance_n}</Text>
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
                {
                  dataIncoming != null ? 
                  dataIncoming.rohs_compliance_status != null ? 
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.rohs_compliance_status}</Text>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_rohs_compliance}
                    onValueChange={(value) => statusRohs(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View> : 
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_rohs_compliance}
                    onValueChange={(value) => statusRohs(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View>
                }
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
                {
                  dataIncoming != null ?
                  dataIncoming.dimension_status != null ?
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.dimension_status}</Text>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_dimension}
                    onValueChange={(value) => statusDimension(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_dimension}
                    onValueChange={(value) => statusDimension(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View>
                }
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
                {
                  dataIncoming != null ?
                  dataIncoming.fitting_test_status != null ?
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.fitting_test_status}</Text>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_fitting_test}
                    onValueChange={(value) => statusFittingTest(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_fitting_test}
                    onValueChange={(value) => statusFittingTest(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View>
                }
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
                {
                  dataIncoming != null ?
                  dataIncoming.packing_status != null ?
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.packing_status}</Text>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_packing_status}
                    onValueChange={(value) => statusPacking(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_packing_status}
                    onValueChange={(value) => statusPacking(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View>
                }
              </View>
            </View>
          </View>
          
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{padding: 10, width: "44%"}}>
              <Text>Guaranteed Letter</Text>
            </View>
            <View style={{padding: 10, width: "6%", alignItems: 'flex-end'}}>
              <Text style={{color: 'black'}}>:</Text>
            </View>
            <View style={{padding: 4, width: "50%"}}>
              <View style={{height: 30, justifyContent: 'center', paddingLeft: 5, paddingTop: 5}}>
                {
                  dataIncoming != null ? 
                  dataIncoming.icp_data_status != null ?
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.icp_data_status}</Text>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_icp_data}
                    onValueChange={(value) => setStatusIcp(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <Picker 
                    mode="dropdown"
                    selectedValue={select_icp_data}
                    onValueChange={(value) => setStatusIcp(value)}
                    >
                      <Picker.Item label="Pilih" value="" />
                      <Picker.Item label="OK" value="OK" />
                      <Picker.Item label="NG" value="NG" />
                      <Picker.Item label="NA" value="NA" />
                    </Picker>
                  </View>
                }
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
                {
                  
                  dataIncoming != null ?
                  dataIncoming.incoming_status != null  ?
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.incoming_status}</Text>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{status != null ? status : '-'}</Text>
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{status != null ? status : '-'}</Text>
                  </View>
                }
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
                {
                  dataIncoming != null ? 
                  dataIncoming.qc_ng_category_id != null ?
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.qc_ng_category_name}</Text>
                  </View> :
                  CheckNG() :
                  CheckNG()
                }
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
                {
                  dataIncoming != null ?
                  dataIncoming.id != null ?
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                    <Text>{dataIncoming.note_unnormal != null ? dataIncoming.note_unnormal  : '-'}</Text>
                  </View> : 
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <TextInput value={note_unnormal} onChangeText={(value) => setNoteUnnormal(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
                  </View> :
                  <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, justifyContent: 'center', paddingLeft: 5}}>
                    <TextInput value={note_unnormal} onChangeText={(value) => setNoteUnnormal(value)} style={{paddingLeft: 5, height: 40}} placeholder="Type Here..." />
                  </View>
                }
              </View>
            </View>
          </View>

          <View style={{marginTop: 20, flexDirection: 'row', height: 300, borderWidth: 0.3, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center', width: '50%', height: 300}}>
              {imageSatu()}
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', width: '50%', height: 300, borderLeftWidth: 0.3}}>
              {imageDuaFunc()}
            </View>
          </View>

          <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {updateButton()}
          </View>

          <View style={{flex:1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
            {
              dataIncoming != null ?
              dataIncoming.inspection_time != null ?
              <Text style={{backgroundColor: '#b8b8b8', borderWidth: 0.3}}>{dataIncoming.inspection_time}</Text> :
              <Text>{inspection_time}</Text> :
              <Text>{inspection_time}</Text> 
            }
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
              <Text style={{marginTop: 1, fontWeight: 'bold', fontSize: 17}}>Daily Inspection: Incoming Quality Check (IQC)</Text>
						</View>
            {loading ? contentHeader() : null}

						{loading ? content() : <View style={{justifyContent: 'center', paddingTop: 300}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default FormIQC;