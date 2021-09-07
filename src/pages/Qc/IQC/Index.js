import {Image, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, RefreshControl, ActivityIndicator, TextInput} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import CalendarBlack from '../../../assets/calendar.png'
import search from '../../../assets/search.png'
import { Container, Text, Button } from 'native-base';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import styles from '../../../components/styles/Styling';
import Axios from 'axios';
import moment from 'moment';
import app_version from '../../app_version';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import checklist from '../../../assets/check.png';

const IQC = ({route, navigation}) => {
	const {sys_plant_id, qc_incoming} = route.params
  // console.log(qc_incoming)
  const [nama_plant, setPlant]      = useState(null)
	// var nama_plant
  var datetimenow = new Date()
	var timeNow 	= moment()
	var dateNow 	= moment(timeNow).format("YYYY-MM-DD")
	const [loading, setLoading]       = useState(false);
	const [loadingDua, setLoadingDua] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
	const [data, setData]		          = useState([])
	const [nik, setUser]		          = useState(null)
	const [name, setName]		          = useState(null)
	const [mode, setMode]		          = useState(null)
	const [show, setShow]		          = useState(false)
	const [start_date, setStart]		  = useState(new Date(timeNow))
	const [end_date, setEnd]		      = useState(new Date(timeNow))
	var startDateText 	= moment(start_date).format("YYYY-MM-DD")
	var endDateText 	= moment(end_date).format("YYYY-MM-DD")
  useEffect(() => {
    formOke()
    namaPlant()
    setInterval(() => {
      setLoading(true)
    }, 1500);
  }, [])

  const namaPlant = () => {
    if(sys_plant_id == 2){
      setPlant("Techno (KB)")
    }else{
      setPlant("TSSI")
    }
  }
  
	const formOke = async() => {
		const token = await AsyncStorage.getItem("key")
		const headers = {
      'Authorization': token
		}
    const user = await AsyncStorage.getItem("user")
    const name = await AsyncStorage.getItem("name")
    setUser(user)
    setName(name)
    const params = {
      'tbl': 'incoming',
      'kind': 'get_spg_supplier',
      'sys_plant_id': sys_plant_id,
      'app_version': app_version,
      'date': dateNow,
    }
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setData(response.data.data)
			console.log('List Data SPG')
			// setLoading(true)
		})
		.catch(error => {
      console.log('List SPG: ', error)
			// setLoading(true)
		})		
  }

  const searchData = async() => {
		const token = await AsyncStorage.getItem("key")
		const headers = {
      'Authorization': token
		}
    setLoadingDua(false)
    const user = await AsyncStorage.getItem("user")
    const name = await AsyncStorage.getItem("name")
    setUser(user)
    setName(name)
    const params = {
      'tbl': 'incoming',
      'kind': 'get_spg_supplier',
      'sys_plant_id': sys_plant_id,
      'app_version': app_version,
      'begin_date': startDateText,
      'end_date': endDateText
    }
    console.log(params)
		Axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
		.then(response => {
			setData(response.data.data)
			console.log('Result Search Data SPG')
			setLoadingDua(true)
		})
		.catch(error => {
      console.log('List SPG: ', error)
			setLoadingDua(true)
		})	
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(false);
    searchData();
  }, []);

  const content = () => {
    const arrData = []
    if(data.length > 0){
      data.map((val, key) => {
        var style = {fontWeight: 'bold', fontSize: 13}
        if(val.supplier_name.length > 21){
          style = {fontWeight: 'bold', fontSize: 11}
        }
        if(val.supplier_name.length > 26){
          style = {fontWeight: 'bold', fontSize: 10, textAlign: 'right'}
        }
        arrData.push(
          <Button key={key} style={{marginTop: 10, alignItems: 'center', width: "100%", borderRadius: 15, backgroundColor: '#1a508b', flexDirection: 'row'}} onPress={() => {
            navigation.navigate('ListPartNumber', {
              sys_plant_id: sys_plant_id,
              id: val.id,
              code: val.code,
              status: val.status,
              date: val.date,
              supplier_name: val.supplier_name,
              nik: nik,
              name: name,
              nama_plant: nama_plant,
              qc_incoming: qc_incoming
            })
          }}>
            <View style={{flexDirection: 'column'}}>
              <Text>{val.date}</Text>
              <Text style={{fontWeight: 'bold'}}>{val.code}</Text>
            </View>
            <View style={{flexDirection: 'column', flex: 1, alignItems: 'flex-end'}}>
              <Text style={style}>{val.supplier_name}</Text>
            </View>
            {val.iqc_status != false ? 
              <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}} />
            : null}
          </Button>
        )
      })
    }else{
      arrData.push(
        <View key="as1" style={{backgroundColor: 'yellow', borderWidth: 1, borderRadius: 15, marginTop: 100, height: 100, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>Tidak Terdapat Data SPG Supplier Di Plant <Text style={{fontWeight: 'bold'}}>{nama_plant}</Text>, Pada Tanggal {startDateText} - {endDateText}.</Text>
        </View>
      )
    }
    return arrData
  }

  const onChange = (event, val) => {
    const currentDate = val || start_date;
    setShow(Platform.OS === 'ios');
    setStart(currentDate)
  };

  const onChangeEnd = (event, val) => {
    const currentDate = val || end_date;
    setShow(Platform.OS === 'ios');
    setEnd(currentDate)
  };

  const showDate = (val) => {
    setShow(true)
    setMode(val)
  }

  const functionUpdateMode = (value) => {
    if(value == 1){
      showDate('start-date')
    }else{
      showDate('end-date')
    }
  }

  const showDateModal = () => {
    if(show == true){
      if(mode == 'start-date'){
        return (
          <DateTimePicker
            testID="dateTimePicker"
            value={start_date}
            maximumDate={end_date}
            mode={mode}
            is24Hour={true}
            display="calendar"
            onChange={(evt, val) => onChange(evt, val)}
          />
        )
      }else{
        return (
          <DateTimePicker
            testID="dateTimePicker"
            maximumDate={new Date(timeNow)}
            minimumDate={start_date}
            value={end_date}
            mode={mode}
            is24Hour={true}
            display="calendar"
            onChange={(evt, val) => onChangeEnd(evt, val)}
          />
        )
      }
    }
  }

  const searchContent = () => {
    return (
      <View style={{marginTop: 10, paddingVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopWidth: 0.3, borderBottomWidth: 0.3}}>
          
          <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, paddingHorizontal: 5, flexDirection: 'row', paddingTop: 5}}>
            <View style={{flexDirection: 'column'}}>
              <Text onPress={() => functionUpdateMode(1)}>{startDateText}</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'flex-end', width: 35, paddingTop: 2}}>
              <TouchableOpacity onPress={() => functionUpdateMode(1)}>
                <Image source={CalendarBlack} style={{width: 25, height: 25, marginLeft: 4}}/>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={{paddingHorizontal: 5}}>
            <Text>-</Text>
          </View>

          <View style={{borderWidth: 0.5, borderRadius: 10, height: 40, paddingHorizontal: 5, flexDirection: 'row', paddingTop: 5}}>
            <View style={{flexDirection: 'column'}}>
              <Text onPress={() => functionUpdateMode(2)}>{endDateText}</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'flex-end', width: 35, paddingTop: 2}}>
              <TouchableOpacity onPress={() => functionUpdateMode(2)}>
                <Image source={CalendarBlack} style={{width: 25, height: 25, marginLeft: 4}}/>
              </TouchableOpacity>
            </View>
          </View>
          
          {showDateModal()}

        <View style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 5}}>
          <Button style={{backgroundColor: '#1a508b', borderRadius: 15, width: 50, justifyContent: 'center'}} onPress={() => searchData()}>
            <Image source={search} style={{width: 25, height: 25, marginLeft: 4}}/>
          </Button>
        </View>
      </View>
    )
  }

  const loadData = () => {
    if(loadingDua == null){
      null
    }else if(loadingDua == true){
      return content()
    }else{
      return <View style={{backgroundColor: '#dfe0df', alignItems: 'center', justifyContent: 'center', paddingTop: 100}}><ActivityIndicator size="large" color="#0000ff"/></View>
    }
  }

	return(
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
          <View style={{height: 100, backgroundColor: '#dfe0df', flexDirection: 'column', justifyContent: 'center'}}>
            <View style={styles.contentHeader}>
              <Image source={LogoSIP}/>
            </View>
            <View style={styles.contentHeader}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>SPG SUPPLIER ({nama_plant})</Text>
              {/* <Text style={styles.fontListProducts}>List SPG Supplier {nama_plant}</Text>  */}
            </View>
          </View>
          
          {loading ? null : <View style={{backgroundColor: '#dfe0df', alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
          <View style={{backgroundColor: '#dfe0df', }}>
            {loading ? searchContent() : null}
          </View>
          <View style={styles.contentFullWithPadding}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
              {loadData()}
            </ScrollView>
          </View>
        
        
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default IQC;