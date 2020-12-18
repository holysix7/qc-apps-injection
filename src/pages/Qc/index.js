import {View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useState, useEffect } from 'react';
import { Container, Text, Button, Picker} from 'native-base';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import styles from '../../components/styles/Styling'
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';

const Qc = ({navigation}) => {
  
  const [cekId, setCekId] = useState("");
  const [name, setCekName] = useState("");
  const [deptName, setCekDeptName] = useState("");
  const [dutyId, setDutyId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    session()
    mesin(cekId)
  }, [])
  
  const mesin = async(value) => {
    setCekId(value)
    setLoading(false)
    const token = await AsyncStorage.getItem("key")
    const headers = {
      'Authorization': token
    }
    const params = {
      tbl: 'machine',
      kind: 'machine',
      sys_plant_id: value
    }
    try {
      axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
      .then(response => {
        setLoading(true)
        setData(response.data.data)
        console.log("Machines List Data: ", response.data.status, "OK")
      })
      .catch(error => console.log('err: ', error))
    } catch (error) {
      console.log("Machines Lisst Data: ", error)
    }
  }

  const session = async () => {
    try {
      const UserSession = await AsyncStorage.multiGet(['user', 'name', 'department_name', 'sys_plant_id', 'duty_plant_option_select'])
      const id = await AsyncStorage.getItem('id')
      const plantId = await AsyncStorage.getItem('sys_plant_id')
      const duty = await AsyncStorage.getItem('duty_plant_option_select')
      const deptName    = await AsyncStorage.getItem('department_name')
      const name    = await AsyncStorage.getItem('name')
      setDutyId(JSON.parse(duty))
      setCekId(plantId)
      setCekDeptName(deptName)
      setCekName(name)
    } catch (error) {
      console.log('Multi Get Error: ', error.message)
    }
  }

  var plantDuty = []

  
  if(dutyId != null)
  {
    dutyId.map((element, key) => {
    plantDuty.push(
      <Picker.Item label={element.plant_name} value={element.plant_id} key={key} />
      )
    })
  }else{
    console.log("Duty Id = Kosong")
  }

  const machines = []
  if(cekId != null)
  {
    data.forEach(element => {
      if(element.status  == 'loaded')
      {
        machines.push(
          <Button key={element.id} style={{marginTop: 5, marginVertical: 2, marginHorizontal: 3, height: 45, width: "23%", borderRadius: 5, flexDirection: 'column'}}
          onPress={() => {
            navigation.navigate('ShowProducts', {
              machine_id: element.id,
              machine_name: element.name,
              sys_plant_id: element.sys_plant_id,
            })
          }}
          >
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>{element.number}</Text>
            <Text style={{fontSize: 6}}>{element.name}</Text>
          </Button>
        )
      }else if(element.status == 'no_load'){
        machines.push(
          <Button key={element.id} style={{backgroundColor: 'yellow', marginTop: 5, marginVertical: 2, marginHorizontal: 3, height: 45, width: "23%", borderRadius: 5, flexDirection: 'column'}}
          onPress={() => {
            navigation.navigate('ShowProducts', {
              machine_id: element.id,
              machine_name: element.name,
              sys_plant_id: element.sys_plant_id,
            })
          }}
          >
            <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>{element.number}</Text>
            <Text style={{color: 'black', fontSize: 6}}>{element.name}</Text>
          </Button>
        )
      }else if(element.status == 'broken'){
        machines.push(
          <Button key={element.id} style={{backgroundColor: 'red', marginTop: 5, marginVertical: 2, marginHorizontal: 3, height: 45, width: "23%", borderRadius: 5, flexDirection: 'column'}}
          onPress={() => {
            navigation.navigate('ShowProducts', {
              machine_id: element.id,
              machine_name: element.name,
              sys_plant_id: element.sys_plant_id,
            })
          }}
          >
            <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>{element.number}</Text>
            <Text style={{color: 'black', fontSize: 6}}>{element.name}</Text>
          </Button>
        )
      }else if(element.status == 'maintenance'){
        machines.push(
          <Button key={element.id} style={{backgroundColor: '#ebae34', marginTop: 5, marginVertical: 2, marginHorizontal: 3, height: 45, width: "23%", borderRadius: 5, flexDirection: 'column'}}
          onPress={() => {
            navigation.navigate('ShowProducts', {
              machine_id: element.id,
              machine_name: element.name,
              sys_plant_id: element.sys_plant_id,
            })
          }}
          >
            <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>{element.number}</Text>
            <Text style={{color: 'black', fontSize: 6}}>{element.name}</Text>
          </Button>
        )

      }else{
        machines.push(
          <Button key={element.id} style={{backgroundColor: 'green', marginTop: 5, marginVertical: 2, marginHorizontal: 3, height: 45, width: "23%", borderRadius: 5, flexDirection: 'column'}}
          onPress={() => {
            navigation.navigate('ShowProducts', {
              machine_id: element.id,
              machine_name: element.name,
              sys_plant_id: element.sys_plant_id,
            })
          }}
          >
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>{element.number}</Text>
            <Text style={{fontSize: 6}}>{element.name}</Text>
          </Button>
        )
      }
    });
  }
  // if(loading)
  return (
    <Container>
      <View>
        <GeneralStatusBarColor backgroundColor="#54c3f0" barStyle="light-content"/>
      </View>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <Text>PLANT</Text>
        </View>
        <View style={styles.contentHeaderChild}>
          <View style={styles.itemHeader2}>
            <Picker 
              mode="dropdown"
              selectedValue={cekId}
              onValueChange={(value) => mesin(value)}
              itemStyle={{marginLeft: 0}}
              itemTextStyle={{fontSize: 9}}
            >
              {plantDuty}
            </Picker>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#F5F5DC'}}>
        <ScrollView style={styles.contentFull}>
          {/* {loading == true ? <View><ActivityIndicator size="large" color='#0000ff'/></View> : null} */}
          <View style={styles.responsiveButtonLoop}>
        {loading ? machines : <View style={{flex: 1, height: 500, justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View> }
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomNavbar}>
        <Button style={styles.buttonNavbar}>
          <Text style={styles.textStyle}>Machines</Text>
        </Button>
        <Button style={styles.buttonNavbar} onPress={() => {
          navigation.navigate('Profile', {
            name: name,
            deptName: deptName,
            dutyId: dutyId,
          })
        }}>
          <Text style={styles.textStyle}>Profile</Text>
        </Button>
      </View>
    </Container>
  ) 
}

export default Qc