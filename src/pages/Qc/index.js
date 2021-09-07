import {View, ScrollView, ActivityIndicator, Image, Alert, RefreshControl} from 'react-native';
import React, {useState, useEffect, useCallback } from 'react';
import { Container, Text, Button, Picker} from 'native-base';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import styles from '../../components/styles/Styling'
import Home from '../../assets/FixHomeWhite.png'
import Profile from '../../assets/FixProfileWhite.png'
import Cog from '../../assets/FixCogWhite.png'
import CalendarBlack from '../../assets/calendar.png'
import CalendarWhite from '../../assets/calendarWhite.png'
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import app_version from '../app_version/index';
import messaging from '@react-native-firebase/messaging';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Qc = ({navigation}) => {
  
  const [cekId, setCekId]             = useState("");
  const [name, setCekName]            = useState("");
  const [deptName, setCekDeptName]    = useState("");
  const [versionIQC, setVersionIQC]   = useState(null);
  const [featureUser, setFeature]     = useState([]);
  const [userNik, setUserNik]         = useState(null);
  const [user_image, setImage]        = useState(null);
  const [dutyId, setDutyId]           = useState([]);
  const [loading, setLoading]         = useState(false);
  const [data, setData]               = useState([]);
  const [refreshing, setRefreshing]   = useState(false);

  useEffect(() => {
    session()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
    });
    return unsubscribe;
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
      const sys_plant_id          = await AsyncStorage.getItem('sys_plant_id')
      const duty                  = await AsyncStorage.getItem('duty_plant_option_select')
      const deptName              = await AsyncStorage.getItem('department_name')
      const name                  = await AsyncStorage.getItem('name')
      const user                  = await AsyncStorage.getItem('user')
      const feature               = await AsyncStorage.getItem('feature')
      const current_version_iqc   = await AsyncStorage.getItem('current_version_iqc')
      const image                 = await AsyncStorage.getItem('employee_image_base64')
      console.log(image)
      setDutyId(JSON.parse(duty))
      setCekId(sys_plant_id)
      setUserNik(user)
      setImage(image)
      setCekDeptName(deptName)
      setCekName(name)
      setVersionIQC(current_version_iqc)
      setFeature(JSON.parse(feature))
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
    }
    return plantDuty
  }

  const listMachines = () => {
    const machines = []
    if(cekId != null){
      data.forEach(element => {
        if(element.status == 'loaded'){
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
              <View style={{flexDirection: 'row', flex: 1, width: "100%", justifyContent: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.putihBold}>{element.product_lot_out == true ? <Text style={styles.asterixMerah}>*</Text> : null} {element.number}</Text> 
                </View>
                <View style={{flexDirection: 'column'}}>
                  {element.product_id != null ? <Image source={CalendarWhite} style={{width: 20, height: 20}} /> : null}
                </View>
              </View>
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
              <View style={{flexDirection: 'row', flex: 1, width: "100%", justifyContent: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.hitamBold}>{element.product_lot_out == true ? <Text style={styles.asterixMerah}>*</Text> : null} {element.number}</Text> 
                </View>
                <View style={{flexDirection: 'column'}}>
                  {element.product_id != null ? <Image source={CalendarBlack} style={{width: 20, height: 20}} /> : null}
                </View>
              </View>
              <Text style={{fontSize: 6, color: 'black'}}>{element.name}</Text>
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
              <View style={{flexDirection: 'row', flex: 1, width: "100%", justifyContent: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.hitamBold}>{element.product_lot_out == true ? <Text style={styles.asterixMerah}>*</Text> : null} {element.number}</Text> 
                </View>
                <View style={{flexDirection: 'column'}}>
                  {element.product_id != null ? <Image source={CalendarBlack} style={{width: 20, height: 20}} /> : null}
                </View>
              </View>
              <Text style={{fontSize: 6, color: 'black'}}>{element.name}</Text>
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
              <View style={{flexDirection: 'row', flex: 1, width: "100%", justifyContent: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.hitamBold}>{element.product_lot_out == true ? <Text style={styles.asterixMerah}>*</Text> : null} {element.number}</Text> 
                </View>
                <View style={{flexDirection: 'column'}}>
                  {element.product_id != null ? <Image source={CalendarBlack} style={{width: 20, height: 20}} /> : null}
                </View>
              </View>
              <Text style={{fontSize: 6, color: 'black'}}>{element.name}</Text>
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
              <View style={{flexDirection: 'row', flex: 1, width: "100%", justifyContent: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.putihBold}>{element.product_lot_out == true ? <Text style={styles.asterixMerah}>*</Text> : null} {element.number}</Text> 
                </View>
                <View style={{flexDirection: 'column'}}>
                  {element.product_id != null ? <Image source={CalendarWhite} style={{width: 20, height: 20}} /> : null}
                </View>
              </View>
              <Text style={{fontSize: 6}}>{element.name}</Text>
            </Button>
          )
        }
      });
    }
    return machines
  }

  const loopFeature = () => {
    const iqcData = []
    featureUser.map((element, key) => {
      if(cekId == element.sys_plant_id){
        if(element.qc_incoming != null){
          if(element.qc_incoming.view_permissions != false){
            if(versionIQC == "0.9.6.5.A"){
              iqcData.push(
                <TouchableOpacity key={key} style={{borderWidth: 1, borderRadius: 15, borderColor: 'white', width: 80, paddingVertical: 3, marginTop: 5, flexDirection: 'column', alignItems: 'center'}} onPress={() => {
                  navigation.navigate('IQC', {
                    sys_plant_id: cekId,
                    qc_incoming: element.qc_incoming
                  })
                }}>
                  <Image source={Cog} style={styles.cogButton}/>
                  <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>IQC</Text>
                </TouchableOpacity>
              )
            }else{
              iqcData.push(
                <TouchableOpacity key={key} style={{borderWidth: 1, borderRadius: 15, borderColor: 'white', width: 80, paddingVertical: 3, marginTop: 5, flexDirection: 'column', alignItems: 'center'}} onPress={() => Alert.alert(
                  "Info",
                  "Silahkan Hubungi IT Karena Versi Yang Digunakan Tidak Sesuai",
                  [
                    { text: "OK", onPress: () => console.log('User Tidak Punya Akses') }
                  ],
                  { cancelable: false }
                )}>
                  <Image source={Cog} style={styles.cogButton}/>
                  <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>IQC</Text>
                </TouchableOpacity>
              )
            }
          }else{
            iqcData.push(
              <TouchableOpacity key={key} style={{borderWidth: 1, borderRadius: 15, borderColor: 'white', width: 80, paddingVertical: 3, marginTop: 5, flexDirection: 'column', alignItems: 'center'}} onPress={() => alert('Maaf Anda Tidak Memiliki Hak Akses Inprocess QC')}>
                <Image source={Cog} style={styles.cogButton}/>
                <Text style={{fontWeight: 'bold', fontSize: 11, color: 'white'}}>IQC</Text>
              </TouchableOpacity>
            )
          }
        }
      }
    })
    return iqcData
  }

  const buttonNavbar = () => {
    return (
      <View style={styles.bottomNavbar}>
        <Button style={styles.buttonNavbar}>
          <Image source={Home} style={styles.homeButton}/>
        </Button>
        {/* </Button> */}
      
        {loopFeature()}
        
        <Button style={styles.buttonNavbar} onPress={() => {
          navigation.navigate('Profile', {
            name: name,
            deptName: deptName,
            dutyId: dutyId,
            userNik: userNik,
            user_image: user_image
          })
        }}>
          <Image source={Profile} style={styles.profileButton}/>
        </Button>
      </View>
    )
  }

  const headerContent = () => {
    return (
      <View>
        <View style={{borderBottomWidth: 1, borderColor: 'gray', padding: 5, paddingLeft: 20,  backgroundColor: '#19456b'}}>
          <View style={{height: 35, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{color: 'white'}}>LIST MACHINES</Text>
          </View>
        </View>
      </View>
    )
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
      {headerContent()}
      <View>
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
        <ScrollView style={styles.contentFull} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} >
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
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                  <View style={{paddingLeft: 8}}><Text style={{color: 'red'}}>* </Text></View>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 8}}>  : Terdapat NG</Text>
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
                <View style={{flexDirection: 'row', paddingVertical: 1}}>
                  <Image source={CalendarBlack} style={{width: 20, height: 20, marginLeft: 4 }} />
                  <View style={{justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 8}}>: Terdapat Planning</Text>
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