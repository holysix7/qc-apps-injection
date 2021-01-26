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

const Scanner = ({route, navigation}) => {  
  const cameraRef                           = useRef(null)
  const [flash, setFlash]                   = useState('off')
  const [zoom, setZoom]                     = useState(0)
  const [autofocus, setAutofocus]           = useState('on')
  const [depth, setDepth]                   = useState(0)
  const [type, setType]                     = useState('back')
  const [permission, setPermission]         = useState('undetermined')

  const openCamera = async() => {
    if(cameraRef){
      const option = { quality: 0.5, base64: true }
      const data = await cameraRef.current.takePictureAsync(option)
      console.log(data)
    }
  }
  return (
    <RNCamera 
      style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
      ref={cameraRef}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      onGoogleVisionBarcodesDetected={({ barcodes }) => {
        console.log(barcodes);
      }}>
        <View></View>
        <Button style={{height: 30, width: 150, alignItems: 'center', justifyContent: 'center'}} onPress={() => openCamera()}>
          <Text style={{fontWeight: 'bold', fontSize: 11}}>SCAN LABEL</Text>
        </Button>
    </RNCamera>
  )
}

export default Scanner