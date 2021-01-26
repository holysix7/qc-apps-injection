import React, {useEffect, useState} from 'react';
import {View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ActivityIndicator, BackHandler, Alert} from 'react-native';
import LogoSIP from '../../assets/logo-sip3.png';
import {Container, Button, Text, Form, Item, Label, Input} from "native-base";
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import Auth from '../API/Auth';
import styles from "../../components/styles/Styling";
import Axios from 'axios';
import DeviceStorage from '../Login/DeviceStorage';
import Session from '../Login/Session';
import app_version from '../app_version/index';

const Login = ({navigation}) => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(true)

	const submit = async() => {
		setLoading(false)
		const data = {
			user,
			password,
			app_version,
		}
		Axios.post('https://api.tri-saudara.com/signin', data)
		.then(res => {
			if (res.data.data.current_version == app_version) {
				setLoading(true)
				DeviceStorage(res.data.data.token)
				Session(res.data.data)
				console.log("Login Success!")
				navigation.replace('Qc')
				alert("Login Success!")
			}else{
				setLoading(true)
				Alert.alert(
					"Info",
					"Tolong Segera Perbarui App",
					[
						{ text: "OK", onPress: () => BackHandler.exitApp() }
					],
					{ cancelable: false }
				);
			}
		}).catch((err) => {
			setLoading(true)
			alert(err)
			console.log("Login: ", err)
		})
	}


	const content = () => {
		var data = []
		data.push(
			<Form key="aAoksmkw" style={{justifyContent: 'center', alignItems: 'center'}}>
				<Item floatingLabel success style={styles.labelFloat}>
					<Label>NIK</Label>
					<Input value={user} onChangeText={(value) => setUser(value)} keyboardType="numeric" />
				</Item>
				<Item floatingLabel success style={styles.labelFloat}>
					<Label>Password</Label>
					<Input value={password} onChangeText={(value) => setPassword(value)}  secureTextEntry={true} autoCapitalize='none' />
				</Item>
				<View style={{justifyContent: 'flex-end', marginLeft: 240}}>
					<Button rounded info style={styles.buttonLogin} onPress={() => submit()}>
						<Text>
							Login
						</Text>
					</Button>
				</View>
			</Form>
		)
		return data
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex:1}}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container style={{alignItems: 'center', justifyContent: 'center'}}>
					<View>
						<GeneralStatusBarColor backgroundColor="#54c3f0" barStyle="light-content"/>
					</View>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Image source={LogoSIP} style={styles.logoSipBesar}/>
					</View>
					{loading ? content() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default Login;