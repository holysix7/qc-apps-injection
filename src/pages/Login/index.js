import React, {useState} from 'react';
import {View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import LogoSIP from '../../assets/logo-sip3.png';
import {Container, Button, Text, Spinner, Icon, Form, Item, Label, Input} from "native-base";
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import Axios from 'axios';
import DeviceStorage from './DeviceStorage';
import Session from './Session';
import styles from "../../components/styles/Styling";

const Login = ({navigation}) => {
	//Form
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [icon, setIcon] = useState("")
	const [loading, setLoading] = useState(true)

	const submit = async() => {
		// setLoading(false)
		const data = {
			user,
			password
		}
		try {
			Axios.post('https://api.tri-saudara.com/auth', data)
			.then(res => {
				// setLoading(true)
				DeviceStorage(res.data.data.token)
				Session(res.data.data)
				console.log("Login Success!")
				navigation.replace('Qc')
				alert("Login Success!")
			}).catch((err) => {
				console.log("Login: ", err)
				alert("Login Failed!")
			})
		} catch (error) {
			// setLoading(true)
			console.log("Login: ", error)
			alert("Login Failed!")
		}
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
					{/* {loading ? null : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View> } */}
					<Form style={{justifyContent: 'center', alignItems: 'center'}}>
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
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	)
}

export default Login;