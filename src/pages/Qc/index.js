import {Image, View, StyleSheet, Picker, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { Container, Header, Left, Body, Right, Title, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import SelectPicker from 'react-native-picker-select';
import axios from 'axios';
import Login from '../Login/index';
import AsyncStorage from "@react-native-community/async-storage"
import TOKEN from '../../Key';

const Qc = ({navigation}) => {
  useEffect(() => {
    mesin()
    session()
  })
      const mesin = async () => {
        const token = await AsyncStorage.getItem("key")
        console.log('cek: ', token)
        fetch("http://139.255.26.194:3003/api/v1/qcs?tbl=daily_inspection&kind=machine&sys_plant_id=2", {
          method: 'GET',
          header: {
            'Authorization': token
          }
        })
        .then((response) => response.json())
        .then((json) => {
          return json.data
        })
      }

      const session = async () => {
        try {
          const UserSession = await AsyncStorage.multiGet(['id', 'user', 'name', 'department_name'])
          console.log(UserSession)
        } catch (error) {
          console.log('Multi Get Error: ', error.message)
        }
      }  
      console.log('ini session: ', session)


      const handleGoTo = screen => {
		navigation.navigate(screen)
  }

  // var myloop = [];
  // for (let i = 1; i <= mesin.data.id; i++) {

  //   myloop.push(
  //     <Button rounded style={{justifyContent: 'center', width: "32.5%", borderWidth: 1, height: 40, marginHorizontal: 1, marginVertical: 2}} onPress={() => handleGoTo('ShowProducts')} >
  //       <Text>
  //         Mesin  
  //       </Text>   
  //     </Button>
  //   ); 
  // }
  // var myloop = [];
  // mesin.data.map(element => {
  //   <Button rounded style={{justifyContent: 'center', width: "32.5%", borderWidth: 1, height: 40, marginHorizontal: 1, marginVertical: 2}} onPress={() => handleGoTo('ShowProducts')} >
  //     <Text>
  //       Mesin  
  //     </Text>   
  //   </Button>
  // });
    
  return (
    <Container>
      <View>
        <GeneralStatusBarColor backgroundColor="#54c3f0" barStyle="light-content"/>
      </View>
      <View style={{ widht: 100, height: 100, backgroundColor: '#F0FFF0'}}>
        <View style={{paddingTop: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Text>PLANT</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{borderWidth: 0.5, width: 150, height: 25, justifyContent: 'center', paddingLeft: 30}}>
            <SelectPicker onValueChange={(value) => console.log(value)} 
              items={[
                {label: "PT TSSI PINANG", value: "PT TSSI PINANG"},
                {label: "PT TSSI KAPUK", value: "PT TSSI KAPUK"},
                {label: "PT TECHNO", value: "PT TECHNO"}
              ]}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1}}>
          <ScrollView style={{backgroundColor: '#F0FFF0'}} >
            <View style = {{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', paddingTop: 20 }} >

            </View>
          </ScrollView>
        </View>
      </View>
      <View style={{height: 60, backgroundColor: '#F5F5DC', flexDirection: 'row', borderWidth: 0.3}}>
        <Button style={{height: 63, backgroundColor: '#F5F5DC', justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Ionicons style={{fontSize: 30, color: "black"}}
            name = "ios-business"
          />
          <Text style={{color: 'black'}}>Machines</Text>
        </Button>
        <Button style = {{height: 63, backgroundColor: '#F5F5DC', justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Ionicons style={{fontSize: 30, color: "black"}}
            name = "md-person"
          />
          <Text style={{color: 'black'}}>Profile</Text>
        </Button>
      </View>
    </Container>
  )
}

export default Qc