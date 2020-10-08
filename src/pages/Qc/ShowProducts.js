import {Image, View, StyleSheet, Picker, StatusBar, ScrollView} from 'react-native';
import React, {Component, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import { Container, Header, Left, Body, Right, Title, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';

const ShowProducts = ({navigation}) => {
	const handleGoTo = screen => {
		navigation.navigate(screen)
	}
	var uye = [];
  const jumlah_product  = 15;
	
	for (let i = 1; i <= jumlah_product; i++) {
    uye.push(
      <Button style={{color: '#F5F5DC', marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForm')} >
        <Text> Kode Product {i} </Text>   
        <Text style={{fontSize: 12}}> Product {i} </Text>   
      </Button>
    ); 
  }
	return(
		<Container>
			<View style={{height: 75, backgroundColor: '#F5F5DC', borderWidth: 0.3, flexDirection: 'column'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Image source={LogoSIP}/>
				</View>
				<View style={{marginLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{fontSize: 25, fontWeight: 'bold'}}>Mesin 1</Text>
				</View>
			</View>
			
			<View style={{flex: 1, flexDirection: 'column'}}>
				<View style={{backgroundColor: '#F5F5DC', alignItems: 'center'}}>
					<Text style={{fontSize: 22}}>YYYY-MM-DD</Text>
				</View>
				<View style={{flex: 1, backgroundColor: '#F5F5DC', paddingTop: 20, paddingHorizontal: 20}}>
					<ScrollView style={{backgroundColor: '#F5F5DC', padding: 10}}>
						{uye}
					</ScrollView>
				</View>
			</View>
		</Container>
	)
}

export default ShowProducts;