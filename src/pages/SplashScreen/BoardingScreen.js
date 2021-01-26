import React, {Component, useEffect, useState} from 'react';
import {Container, Button, Text} from "native-base";
import {Image, View, StyleSheet} from 'react-native';
import LogoSIP from '../../assets/logo-sip3.png';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import AsyncStorage from "@react-native-community/async-storage";

const BoardingScreen = ({navigation}) => {
	const [token, setToken] = useState(null)
	useEffect(() => {
		cekLogin()
	}, [])
	
	const cekLogin = async() => {
		const isLogin = await AsyncStorage.getItem('key')
		setToken(isLogin)
	}
	
	const buttonFix = () => {
		// console.log(token)
		if(token != null){
			return (
				<Button rounded info style={{marginTop: 10}} onPress={() => navigation.replace('Qc')}>
					<Text>
						✓
					</Text>
				</Button>
			)
		}else{
			return(
				<Button rounded info style={{marginTop: 10}} onPress={() => navigation.replace('Login')}>
					<Text>
						✓
					</Text>
				</Button>
			)
		}
	}

	return (
		<Container style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#54c3f0'}}>
			<View>
				<GeneralStatusBarColor backgroundColor="#772ea2" barStyle="light-content"/>
			</View>
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<Image source={LogoSIP} style={{width: 188, height: 150}}/>
			</View>
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<Text style={styles.title}>
					Quality Control
				</Text>
				<Text style={styles.paragraph}>
					Aplikasi QC ini bertujuan untuk memaksimalkan kualitas dan meminimalisirkan kesalahan. Dengan dilakukannya integrasi antara mesin dengan <Text style={styles.bodyParagraph}>planning</Text> maka kesalahan dapat diminimalisirkan. Oleh karena itu, jangan sampai lupa melakukan <Text style={styles.bodyParagraph}>Check Product</Text> dengan <Text style={styles.bodyParagraph}>Compare Sample</Text>, Ya!
				</Text>
			</View>
			<View>
				{buttonFix()}
			</View>
		</Container>
	)
}

const styles = StyleSheet.create({
	paragraph: {
		color: "black",
		textDecorationColor: "yellow",
		textAlign: 'justify',
		margin: 30
	},
	bodyParagraph: {
		fontStyle: 'italic',
		fontWeight: 'bold'
	},
	title: {
		color: "black",
		fontWeight: "bold",
		fontSize: 22,
		margin: 24
	}
})

export default BoardingScreen;