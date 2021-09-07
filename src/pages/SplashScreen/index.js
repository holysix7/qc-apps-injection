import React, {useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import {Text} from 'native-base';
import LogoSIP from '../../assets/logo-sip3.png';
import app_version from '../app_version';

const SplashScreen = ({navigation}) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace('BoardingScreen')
		}, 3000);
	})

	return (
		<View style={styles.container}>
			<View style={{justifyContent: "center", alignItems: 'center', flex: 1}}>
				<Image style={{borderTopRightRadius: 20, height: 145, width: 200 }} source={LogoSIP} />
			</View>
			<View style={{justifyContent: "center", alignItems: 'center', paddingBottom: 15}}>
				<Text style={{fontWeight: 'bold', fontSize: 11, color: '#64656e'}}>Current Version: {app_version}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: "#54c3f0",
		textAlign: "center"
	}
});

export default SplashScreen;