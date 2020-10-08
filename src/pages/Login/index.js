import React, {Component, useEffect, useState} from 'react';
import {View, Image, TextInput, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import LogoSIP from '../../assets/logo-sip3.png';
import {Container, Button, Text, Header, Content, Form, Item, Label, Input} from "native-base";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import Axios from 'axios';
import DeviceStorage from './DeviceStorage';
import Session from './Session';

const Login = ({navigation}) => {
	//Move
	const handleGoTo = screen => {
		navigation.replace(screen)
	}

	//Form
	const [value, setValue] = useState('value');
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const submit = () => {
		const data = {
			user,
			password
		}

		Axios.defaults.baseURL='http://139.255.26.194:3003'
		Axios.post('/auth', data)
		.then(res => {
			// console.log(res.data.data)
			DeviceStorage(res.data.data.token)
			Session(res.data.data)
			alert("Login Success!")
			handleGoTo('Qc')
		})
		.catch(function (error){
			console.log(error)
			alert("Login Failed!")
		})
		
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container style={{alignItems: 'center', justifyContent: 'center'}}>
				<View>
					<GeneralStatusBarColor backgroundColor="#54c3f0" barStyle="light-content"/>
				</View>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Image source={LogoSIP} style={{width: 188, height: 150}}/>
				</View>
				<Form style={{justifyContent: 'center', alignItems: 'center'}}>
					<Item floatingLabel success style={{height: 60, width: 300}}>
						<Label>NIK</Label>
						<Input value={user} onChangeText={(value) => setUser(value)} />
					</Item>
					<Item floatingLabel success style={{height: 60, width: 300,}}>
						<Label>Password</Label>
						<Input value={password} onChangeText={(value) => setPassword(value)}  secureTextEntry={true}/>
					</Item>
					<View style={{justifyContent: 'flex-end', marginLeft: 240}}>
						<Button rounded info style={{marginTop: 10}} onPress={submit}>
							<Text>
								Login
							</Text>
						</Button>
					</View>
				</Form>
			</Container>
		</TouchableWithoutFeedback>
	)
}

export default Login;