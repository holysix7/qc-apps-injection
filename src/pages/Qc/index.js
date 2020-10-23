import {View, ScrollView} from 'react-native';
import React, {useState, useEffect } from 'react';
import { Container, Text, Button} from 'native-base';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import SelectPicker from 'react-native-picker-select';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';

const Qc = ({navigation}) => {
  
  const [value, setValue] = useState("");
  const [cekId, setCekId] = useState("");
  const [data, setData] = useState([])
  useEffect(() => {
    mesin()
    session()
  }, [])
  
  const mesin = async (value) => {
    // const plant = value
    setCekId(value)
    const token = await AsyncStorage.getItem("key")
    const headers = {
      'Authorization': token
    }
    const params = {
      tbl: 'machine',
      kind: 'machine',
      sys_plant_id: value
    }
    axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
    .then(response => {
      setData(response.data.data)
    })
    .catch(error => console.log('err: ', error))
  }

  const session = async () => {
    try {
      const UserSession = await AsyncStorage.multiGet(['user', 'name', 'department_name', 'sys_plant_id', 'duty_plant_option_select'])
      const user = await AsyncStorage.getItem('sys_plant_id')
      setCekId(user)
    } catch (error) {
      console.log('Multi Get Error: ', error.message)
    }
  }

  const machines = []
  if(cekId != null)
  {
    data.forEach(element => {
      machines.push(
        <Button key={element.id} style={{marginTop: 5, marginHorizontal: 4, alignItems: 'center', justifyContent: 'center', width: "31%", borderRadius: 15, flexDirection: 'column'}}
        onPress={() => {
          navigation.navigate('ShowProducts', {
            machine_id: element.id,
            machine_name: element.name,
            sys_plant_id: element.sys_plant_id,
          })
        }}
        >
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>{element.number}</Text>
          <Text style={{fontSize: 9}}>{element.name}</Text>
        </Button>
      )
    });
  }

  return (
    <Container>
      <View>
        <GeneralStatusBarColor backgroundColor="#54c3f0" barStyle="light-content"/>
      </View>
      <View style={{height: 100, backgroundColor: '#F5F5DC'}}>
        <View style={{paddingTop: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Text>PLANT</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{borderWidth: 0.5, borderRadius: 10, width: 150, height: 25, justifyContent: 'center', paddingLeft: 30}}>
            <SelectPicker onValueChange={(value) => mesin(value)} itemStyle={{backgroundColor: 'red'}}
              items={[
                {label: "PT TSSI PINANG", value: "3"},
                {label: "PT TECHNO KB", value: "2"},
                {label: "PT TECHNO DPIL", value: "4"}
              ]}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#F5F5DC'}}>
        <ScrollView style={{flex: 1, backgroundColor: '#F5F5DC'}}>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {machines}
          </View>
        </ScrollView>
      </View>
      <View style={{height: 60, backgroundColor: '#F5F5DC', flexDirection: 'row', borderWidth: 0.3}}>
        <Button style={{height: 63, backgroundColor: '#F5F5DC', justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: 'black'}}>Machines</Text>
        </Button>
        <Button style = {{height: 63, backgroundColor: '#F5F5DC', justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: 'black'}}>Profile</Text>
        </Button>
      </View>
    </Container>
  )
}

export default Qc