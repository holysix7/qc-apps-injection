import React, {Component, useState} from 'react';
import {Container, Button, Text} from "native-base";
import {Image, View, StyleSheet} from 'react-native';
import LogoSIP from '../../assets/logo-sip3.png';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';

const BoardingScreen = ({navigation}) => {
	const handleGoTo = (screen) => {
		navigation.replace(screen)
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
					Lorem Ipsum
				</Text>
				<Text style={styles.paragraph}>
					dolor sit amet, consectetur adipiscing elit.Aliquam a viverra sem.Vestibulum suscipit ornare tellus, eget posuere justo pulvinar non.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</Text>
			</View>
			<View>
				<Button rounded info style={{marginTop: 10}} onPress={() => handleGoTo('Login')}>
					<Text>
						✓
					</Text>
				</Button>
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
	title: {
		color: "black",
		fontWeight: "bold",
		fontSize: 22,
		margin: 24
	}
})

export default BoardingScreen;