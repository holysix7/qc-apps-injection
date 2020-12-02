import React, {useState} from 'react';
import {View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import LogoSIP from '../../assets/logo-sip3.png';
import {Container, Button, Text, Spinner, Form, Item, Label, Input} from "native-base";
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import Axios from 'axios';
import DeviceStorage from './DeviceStorage';
import Session from './Session';
import styles from "../../components/styles/Styling";

const Login = ({navigation}) => {
	//Form
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	const submit = () => {
		const data = {
			user,
			password
		}

		Axios.post('http://139.255.26.194:3003/auth', data)
		.then(res => {
			DeviceStorage(res.data.data.token)
			Session(res.data.data)
			alert("Login Success!")
			console.log("Login Success!")
			navigation.replace('Qc')
		})
		.catch(function (error){
			console.log(error)
			alert("Login Failed!")
		})
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
					<Form style={{justifyContent: 'center', alignItems: 'center'}}>
						<Item floatingLabel success style={styles.labelFloat}>
							<Label>NIK</Label>
							<Input value={user} onChangeText={(value) => setUser(value)} keyboardType="numeric" />
						</Item>
						<Item floatingLabel success style={styles.labelFloat}>
							<Label>Password</Label>
							<Input value={password} onChangeText={(value) => setPassword(value)}  secureTextEntry={true}/>
						</Item>
						<View style={{justifyContent: 'flex-end', marginLeft: 240}}>
							<Button rounded info style={styles.buttonLogin} onPress={() => submit()}>
								<Text>
									Login
								</Text>
							</Button>
						</View>
					</Form>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default Login;