import {Image, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import AsyncStorage from "@react-native-community/async-storage";
import Axios from 'axios';

const formOke = async() => {
  const token = await AsyncStorage.getItem("key")
  const headers = {
    'Authorization': token
  }

  let jam = moment().format("HH:mm:ss")
  if(parseInt(jam) >= 8 && parseInt(jam) <= 15)
  {
    const nilaiJam = parseInt(jam)
    setShift(2)
    setHours(nilaiJam)
    const params = {
      tbl: 'daily_inspection',
      kind: 'last_shoot_fr',
      sys_plant_id: sys_plant_id,
      machine_id: machine_id,
      hrd_work_shift_id: 2,
      hours: nilaiJam,
      qc_daily_inspection_id: qc_daily_inspection_id
    }
    Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
    .then(response => {
      setData(response.data.data.daily_inspection)
      setEngProdId(response.data.data.eng_product_id)
      setTooling(response.data.data.daily_inspection.tooling_num)
      setlast_shoot_fr(response.data.data.last_shoot_fr)
      console.log("List Data Last Shoot Foreman: ", response.data.status, "OK")
    })
    .catch(error => {
      console.log('List Data Last Shoot Foreman: ', error)
    })
  }else if(parseInt(jam) >= 16 && parseInt(jam) <= 23){
    const nilaiJam = parseInt(jam)
    setShift(3)
    setHours(nilaiJam)
    const params = {
      tbl: 'daily_inspection',
      kind: 'last_shoot_fr',
      sys_plant_id: sys_plant_id,
      machine_id: machine_id,
      hrd_work_shift_id: 3,
      hours: nilaiJam,
      qc_daily_inspection_id: qc_daily_inspection_id
    }
    Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
    .then(response => {
      setData(response.data.data.daily_inspection)
      setEngProdId(response.data.data.eng_product_id)
      setTooling(response.data.data.daily_inspection.tooling_num)
      setlast_shoot_fr(response.data.data.last_shoot_fr)
      console.log("List Data Last Shoot Foreman: ", response.data.status, "OK")
    })
    .catch(error => {
      console.log('List Data Last Shoot Foreman: ', error)
    })
  }else{
    const nilaiJam = parseInt(jam)
    setShift(4)
    setHours(nilaiJam)
    const params = {
      tbl: 'daily_inspection',
      kind: 'last_shoot_fr',
      sys_plant_id: sys_plant_id,
      machine_id: machine_id,
      hrd_work_shift_id: 4,
      hours: nilaiJam,
      qc_daily_inspection_id: qc_daily_inspection_id
    }
    Axios.get('http://139.255.26.194:3003/api/v1/qcs?', {params: params, headers: headers})
    .then(response => {
      setData(response.data.data.daily_inspection)
      setEngProdId(response.data.data.eng_product_id)
      setTooling(response.data.data.daily_inspection.tooling_num)
      setlast_shoot_fr(response.data.data.last_shoot_fr)
      console.log("List Data Last Shoot Foreman: ", response.data.status, "OK")
    })
    .catch(error => {
      console.log('List Data Last Shoot Foreman: ', error)
    })
  }
}

export default formOke