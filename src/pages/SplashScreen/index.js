import React, {useEffect, useRef} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import LogoSIP from '../../assets/logo-sip3.png';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('BoardingScreen')
        }, 2000);
	})
	
	const fadeAnim = useRef(new Animated.Value(0)).current;

	const fadeOut = () => {
		Animated.timing(fadeAnim, {
		toValue: 1,
		duration: 5000
		}).start();
	};

	return (
		<View style={styles.container}>
			<Image style={{borderTopRightRadius: 20, height: 145, width: 200 }} source={LogoSIP} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		height: "100%",
		backgroundColor: "#54c3f0",
		textAlign: "center"
	},
	fadingContainer: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: "powderblue"
	},
});

export default SplashScreen;