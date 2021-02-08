import {View, ScrollView, ActivityIndicator, Image, Alert, RefreshControl} from 'react-native';
import React, {useState, useEffect, useCallback } from 'react';
import { Container, Text, Button, Picker} from 'native-base';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import styles from '../../components/styles/Styling'
import Home from '../../assets/FixHome.png'
import Profile from '../../assets/FixProfile.png'
import Cog from '../../assets/FixCog.png'
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import Header from '../API/Header';
import app_version from '../app_version/index';

const Qc = ({navigation}) => {
  
  const [cekId, setCekId]           = useState("");
  const [name, setCekName]          = useState("");
  const [deptName, setCekDeptName]  = useState("");
  const [userNik, setUserNik]       = useState(null);
  const [dutyId, setDutyId]         = useState([]);
  const [loading, setLoading]       = useState(false);
  const [data, setData]             = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    session()
  }, [])
  
  const mesin = async(value) => {
    setCekId(value)
    setLoading(false)
    const abs = await AsyncStorage.getItem("key")
    const headers = {
      'Authorization': abs
    }
    const params = {
      tbl: 'machine',
      kind: 'machine',
      sys_plant_id: value,
      app_version: app_version
    }
    axios.get('https://api.tri-saudara.com/api/v2/qcs', {params: params, headers: headers})
    .then(response => {
      setLoading(true)
      setData(response.data.data)
      setRefreshing(false)
      console.log("Machines List Data: ", response.data.status, "OK")
    })
    .catch(error => {
      Alert.alert(
        "Info",
        "Silahkan Login Kembali",
        [
          { text: "OK", onPress: () => logout() }
        ],
        { cancelable: false }
      );
    })
  }

  const logout = async() => {
    AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => {
      navigation.replace('Login')
      alert("Successfully Logout!")
    })
  }

  const session = async () => {
    try {
      const UserSession = await AsyncStorage.multiGet(['user', 'name', 'department_name', 'sys_plant_id', 'duty_plant_option_select', 'feature'])
      const id = await AsyncStorage.getItem('id')
      const sys_plant_id = await AsyncStorage.getItem('sys_plant_id')
      const duty = await AsyncStorage.getItem('duty_plant_option_select')
      const deptName    = await AsyncStorage.getItem('department_name')
      const name    = await AsyncStorage.getItem('name')
      const user    = await AsyncStorage.getItem('user')
      const feature    = await AsyncStorage.getItem('feature')
      setDutyId(JSON.parse(duty))
      setCekId(sys_plant_id)
      setUserNik(user)
      setCekDeptName(deptName)
      setCekName(name)
    } catch (error) {
      console.log('Multi Get Error: ', error.message)
    }
  }

  const plantId = () => {
    var plantDuty = []
    if(dutyId != null){
      dutyId.map((element, key) => {
      plantDuty.push(
          <Picker.Item label={element.plant_name} value={element.plant_id} key={key} />
        )
      })
    }else{
      console.log("Duty Id = Kosong")
    }
    return plantDuty
  }

  const listMachines = () => {
    const machines = []
    if(cekId != null){
      data.forEach(element => {
        if(element.status  == 'loaded'){
          machines.push(
            <Button key={element.id} style={styles.machineLoaded}
            onPress={() => {
              navigation.navigate('ShowProducts', {
                machine_id: element.id,
                machine_name: element.name,
                machine_number: element.number,
                sys_plant_id: element.sys_plant_id,
              })
            }}
            >
              <Text style={styles.putihBold}>{element.number}</Text>
              <Text style={{fontSize: 6}}>{element.name}</Text>
            </Button>
          )
        }else if(element.status == 'no_load'){
          machines.push(
            <Button key={element.id} style={styles.machineNoLoad}
            onPress={() => {
              navigation.navigate('ShowProducts', {
                machine_id: element.id,
                machine_name: element.name,
                machine_number: element.number,
                sys_plant_id: element.sys_plant_id,
              })
            }}
            >
              <Text style={styles.hitamBold}>{element.number}</Text>
              <Text style={{color: 'black', fontSize: 6}}>{element.name}</Text>
            </Button>
          )
        }else if(element.status == 'broken'){
          machines.push(
            <Button key={element.id} style={styles.machineBroken}
            onPress={() => {
              navigation.navigate('ShowProducts', {
                machine_id: element.id,
                machine_name: element.name,
                machine_number: element.number,
                sys_plant_id: element.sys_plant_id,
              })
            }}
            >
              <Text style={styles.hitamBold}>{element.number}</Text>
              <Text style={{color: 'black', fontSize: 6}}>{element.name}</Text>
            </Button>
          )
        }else if(element.status == 'maintenance'){
          machines.push(
            <Button key={element.id} style={styles.machineMaintenance}
            onPress={() => {
              navigation.navigate('ShowProducts', {
                machine_id: element.id,
                machine_name: element.name,
                machine_number: element.number,
                sys_plant_id: element.sys_plant_id,
              })
            }}
            >
              <Text style={styles.hitamBold}>{element.number}</Text>
              <Text style={{color: 'black', fontSize: 6}}>{element.name}</Text>
            </Button>
          )
  
        }else{
          machines.push(
            <Button key={element.id} style={styles.machineElse}
            onPress={() => {
              navigation.navigate('ShowProducts', {
                machine_id: element.id,
                machine_name: element.name,
                machine_number: element.number,
                sys_plant_id: element.sys_plant_id,
              })
            }}
            >
              <Text style={styles.putihBold}>{element.number}</Text>
              <Text style={{fontSize: 6}}>{element.name}</Text>
            </Button>
          )
        }
      });
    }
    return machines
  }

  const buttonNavbar = () => {
    if(userNik == 32008107 || userNik == 21410012){
      return (
        <View style={styles.bottomNavbar}>
          <Button style={styles.buttonNavbar}>
            <Image source={Home} style={styles.homeButton}/>
          </Button>
      
          <Button style={styles.buttonNavbar} onPress={() => {
            navigation.navigate('OQC')
          }}>
            <Image source={Cog} style={styles.cogButton}/>
          </Button>
        
          <Button style={styles.buttonNavbar} onPress={() => {
            navigation.navigate('Profile', {
              name: name,
              deptName: deptName,
              dutyId: dutyId,
              userNik: userNik
            })
          }}>
            <Image source={Profile} style={styles.profileButton}/>
          </Button>
        </View>
      )
    }else{
      return (
        <View style={styles.bottomNavbar}>
          <Button style={styles.buttonNavbar}>
            <Image source={Home} style={{width: 25, height: 25 }}/>
          </Button>
        
          <Button style={styles.buttonNavbar} onPress={() => {
            navigation.navigate('Profile', {
              name: name,
              deptName: deptName,
              dutyId: dutyId,
              userNik: userNik
            })
          }}>
            <Image source={Profile} style={{width: 30, height: 30 }}/>
          </Button>
        </View>
      )
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    mesin(cekId);
  }, []);

  return (
    <Container>
      <View>
        <GeneralStatusBarColor backgroundColor="#54c3f0" barStyle="light-content"/>
      </View>
      <View >
        <View style={{padding: 5, backgroundColor: '#dfe0df'}}>
          <View style={{borderWidth: 1, borderColor: 'gray', height: 40, justifyContent: 'center'}} >
            <Picker 
              mode="dropdown"
              selectedValue={cekId}
              onValueChange={(value) => mesin(value)}
              itemStyle={{marginLeft: 0}}
              itemTextStyle={{fontSize: 8}}
            >
              {plantId()}
            </Picker>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#dfe0df'}}>
        <ScrollView style={styles.contentFull}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {/* {loading == true ? <View><ActivityIndicator size="large" color='#0000ff'/></View> : null} */}
          <View style={styles.responsiveButtonLoop}>
            {loading ? listMachines() : <View style={{flex: 1, height: 500, justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View> }
          </View>
          {loading ? <View style={{alignItems: 'center', borderTopWidth: 1, borderTopColor: 'gray', paddingVertical: 10}}></View> : null}
          {loading ? <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

            <View style={{width: "97%", flexDirection: 'row', paddingVertical: 0}}>
              <View style={{width: '25%', flexDirection: 'column'}}>
                {/* Column A */}
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                  <View style={{backgroundColor: '#1a508b', padding: 8, margin: 5}}></View>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 8}}>: Loaded</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                  <View style={{backgroundColor: 'yellow', padding: 8, margin: 5}}></View>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 8}}>: No Load</Text>
                  </View>
                </View>
              </View>
              <View style={{width: '25%', flexDirection: 'column'}}>
                {/* Column B */}
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                  <View style={{backgroundColor: 'red', padding: 8, margin: 5}}></View>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 8}}>: Broken</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                </View>
              </View>
              <View style={{width: '25%', flexDirection: 'column'}}>
                {/* Column C */}
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                  <View style={{backgroundColor: '#ebae34', padding: 8, margin: 5}}></View>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 8}}>: Maintenance</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                </View>
              </View>
              <View style={{width: '25%', flexDirection: 'column'}}>
                {/* Column D */}
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                  <View style={{backgroundColor: 'green', padding: 8, margin: 5}}></View>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 8}}>: Trial</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                </View>
              </View>
            </View>

          </View> : null }
        </ScrollView>
      </View>
      {userNik != null ? buttonNavbar() : <View style={{flex: 1, height: 500, justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View> }
    </Container>
  ) 
}

export default Qc