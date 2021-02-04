import {Image, View, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, Animated, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import { Container, Text, Button, Picker } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';
import moment from 'moment';
import app_version from '../../app_version';

const UpdateQCLeader = ({route, navigation}) => {
	const {product_name, today, yesterday, doc_number} = route.params
	useEffect(() => {
    formOke()
  }, [])

  const [loading, setLoading] 	        = useState(true)
  //PARAMETER YANG AKAN DIKIRIM
	const [name, setName]                 = useState(null)
	const [idUser, setIdUser]             = useState(null)
	const [shiftId, setShiftId] 	        = useState(null)
	const [created_by, setCreatedBy]      = useState(null)
	const [updated_by, setUpdatedBy]      = useState(null)
	let created_at 								        = moment().format("YYYY-MM-DD HH:mm:ss")
	let updated_at 								        = moment().format("YYYY-MM-DD HH:mm:ss")
  
  //CONSUME API SHIFT
	const [shift1, setShift1] 	          = useState(null)
	const [shift2, setShift2] 	          = useState(null)
	const [shift3, setShift3] 	          = useState(null)
  const [listQCs, setListQCs]           = useState([])
  
  //CHECKING SHIFT
	const [shift1Done, setShift1Done] 	  = useState(false)
	const [shift2Done, setShift2Done] 	  = useState(false)

	const submit = async(value) => {
		const token = await AsyncStorage.getItem("key") 
		const headers = {
			'Authorization': token
    }
    const params = {
      tbl: "daily_inspection",
      kind: "update_qcl",
      app_version: app_version
    }
    if(value == 1){
      //SUBMIT KE DATA SHIFT 1
      const qc_daily_inspection_item_id = shift1 != null ? shift1.qc_daily_inspection_item_id : null  
      const qc_process_id = shift1 != null ? shift1.qc_process_id : null
      const data = {
        name,
        idUser,
        shiftId,
        created_by,
        updated_by,
        created_at,
        qc_daily_inspection_item_id,
        qc_process_id,
        updated_at
      }
      var config = {
        method: 'put',
        params: params,
        url: 'http://192.168.131.121:3000/api/v2/qcs/update?&tbl=daily_inspection&kind=update_qcl',
        headers: headers,
        data: data
      };
      axios(config)
      .then(function (response) {
        console.log("Res: ", response.status, " Ok")
        setLoading(true)
        alert("Success Send Data!")
        navigation.navigate('ListForm')
      })
      .catch(function (error) {
				setLoading(true)
				alert("Failed Send Data!")
				console.log(error)
      });
    }else if(value == 2){
      //SUBMIT KE DATA SHIFT 2
      const qc_daily_inspection_item_id = shift2 != null ? shift2.qc_daily_inspection_item_id : null
      const qc_process_id = shift2 != null ? shift2.qc_process_id : null
      const data = {
        name,
        idUser,
        shiftId,
        created_by,
        updated_by,
        created_at,
        qc_daily_inspection_item_id,
        qc_process_id,
        updated_at
      }
      var config = {
        method: 'put',
        params: params,
        url: 'http://192.168.131.121:3000/api/v2/qcs/update?&tbl=daily_inspection&kind=update_qcl',
        headers: headers,
        data: data
      };
      axios(config)
      .then(function (response) {
        console.log("Res: ", response.status, " Ok")
        setLoading(true)
        alert("Success Send Data!")
        navigation.navigate('ListForm')
      })
      .catch(function (error) {
				setLoading(true)
				alert("Failed Send Data!")
				console.log(error)
      });
    }else{
      //SUBMIT KE DATA SHIFT 3
      const qc_daily_inspection_item_id = shift3 != null ? shift3.qc_daily_inspection_item_id : null
      const qc_process_id = shift3 != null ? shift3.qc_process_id : null
      const data = {
        name,
        idUser,
        shiftId,
        created_by,
        updated_by,
        created_at,
        qc_daily_inspection_item_id,
        qc_process_id,
        updated_at
      }
      var config = {
        method: 'put',
        params: params,
        url: 'http://192.168.131.121:3000/api/v2/qcs/update?&tbl=daily_inspection&kind=update_qcl',
        headers: headers,
        data: data
      };
      axios(config)
      .then(function (response) {
        console.log("Res: ", response.status, " Ok")
        setLoading(true)
        alert("Success Send Data!")
        navigation.navigate('ListForm')
      })
      .catch(function (error) {
				setLoading(true)
				alert("Failed Send Data!")
				console.log(error)
      });
    }
  }

  const changeShift = (value) => {
    setShiftId(value)
  }
  
	const formOke = async() => {
    setLoading(false)
		const token = await AsyncStorage.getItem("key")
    const id = await AsyncStorage.getItem('id')
    setIdUser(id)
    let jam = moment().format("HH:mm:ss")
		if(parseInt(jam) >= 8 && parseInt(jam) <= 15){
      setShiftId(1)
    }else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
      setShiftId(2)
      setShift1Done(true)
    }else{
      setShiftId(3)
      setShift2Done(true)
    }
		const headers = {
			'Authorization': token
		}
		setCreatedBy(id)
    setUpdatedBy(id)
    var config = {
      method: 'get',
      url: 'http://192.168.131.121:3000/api/v2/qcs?&tbl=daily_inspection&kind=get_qcl&qc_daily_inspection_id=58989&app_version=0.9.1.1&sys_plant_id=2',
      headers: headers
    };
    Axios(config)
    .then(response => {
      setShift1(response.data.data.shift1)
      setShift2(response.data.data.shift2)
      setShift3(response.data.data.shift3)
      setListQCs(response.data.data.qc_process)
      setLoading(true)
      console.log("Successfully Get Data QCs")
    })
    .catch(error => {
      setLoading(true)
      console.log(error)
    });

  }

  const listUsers = () => {
    var data = []
    listQCs.map(el => {
      data.push(
        <Picker.Item key={el.qc_leader_id} label={el.qc_process_name} value={el.qc_leader_id} />
      )
    })
    return data
  }

  const buttonSubmit = () => {
    return (
      <View key="1button" style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <Button style={{width: 172, borderRadius: 25, justifyContent: 'center'}} onPress={() => submit(shiftId)}><Text>SAVE</Text></Button>
      </View>
    )
  }

  const contentShift = () => {
    const name1 = shift1 != null ? shift1.qc_process_name : null
    console.log("shift 1: ", name1)
    const name2 = shift2 != null ? shift2.qc_process_name : null
    console.log("shift 2: ", name2)
    const name3 = shift3 != null ? shift3.qc_process_name : null
    console.log("shift 3: ", name3)
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
                    <Picker.Item label={name1} value={0} />
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
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>{shiftId}</Text>
                </View>
              </View>
            </View>
          </View>

          {buttonSubmit()}
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
                    <Picker.Item label={name2} value={0} />
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
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>{shiftId}</Text>
                </View>
              </View>
            </View>
          </View>

          {buttonSubmit()}
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
                    <Picker.Item label={name1} value={0} />
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
                <View style={{borderWidth: 0.5, borderRadius: 25, height: 40, justifyContent: 'center', paddingLeft: 5, backgroundColor: '#b8b8b8'}}>
                  <Text>{shiftId}</Text>
                </View>
              </View>
            </View>
          </View>

          {buttonSubmit()}
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
          <Button style={{backgroundColor: '#e1bc91', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => changeShift(1)}>
            <View style={{margin: 5, paddingRight: 10, paddingTop: 10}}>
              <Text style={{margin: 5}}>1</Text>
            </View>
          </Button>
          <View style={{paddingVertical: 10}}>
            {/* <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => changeShift(2)}> */}
            <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => { shift1Done == true ? changeShift(2) : alert("Masih Di Shift 1")}}>
              <View style={{margin: 5, paddingRight: 5, paddingTop: 5}}>
                <Text style={{margin: 5}}>2</Text>
              </View>
            </Button>
          </View>
          {/* <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => changeShift(3)}> */}
          <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => {shift1Done == true && shift2Done == true ? changeShift(3) : shift1Done == false && shift2Done == false ? alert("Masih Di Shift 1") : alert("Masih Di Shift 2") }}>
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
          {/* <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => setShiftId(3)}> */}
          <Button style={{backgroundColor: '#e3d0b9', borderTopLeftRadius: 15, borderWidth: 1, borderBottomLeftRadius: 15}} onPress={() => {shift2Done == true ? changeShift(3) : alert("Masih Di Shift 2")}}>
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
					<View style={{flex: 1, height: 100, backgroundColor: '#dfe0df', borderWidth: 0.3, flexDirection: 'column'}}>
						
						<View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#dfe0df'}}>
							<Image source={LogoSIP}/>
						</View>

						<View style={{borderBottomWidth: 0.3, flexDirection: 'row'}}>
							<View style={{borderTopWidth: 0.3, borderBottomWidth: 0.3, borderRightWidth: 0.3, height: 70, justifyContent: 'center', alignItems: 'center', width: "50%", backgroundColor: '#dfe0df'}}>
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