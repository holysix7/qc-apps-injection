import {Image, View, StyleSheet, Picker, StatusBar, ScrollView} from 'react-native';
import React, {Component, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import { Container, Header, Left, Body, Right, Title, Text, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';

const ListForm = ({navigation}) => {
	const handleGoTo = screen => {
		navigation.navigate(screen)
	}
	
	return(
		<Container>
			<View style={{height: 95, backgroundColor: '#F5F5DC', borderWidth: 0.3, flexDirection: 'column'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Image source={LogoSIP}/>
				</View>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{fontSize: 20, fontWeight: 'bold'}}>Kode Product 1</Text>
					<Text style={{fontSize: 12}}>Product 1</Text>
				</View>
			</View>
			
			<View style={{flex: 1, flexDirection: 'column'}}>
				<View style={{flex: 1, backgroundColor: '#F5F5DC', paddingTop: 20, paddingHorizontal: 20}}>
					<ScrollView style={{backgroundColor: '#F5F5DC', padding: 10}}>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('MassproBeginMaintMold')} >
							<Text> Masspro Begin Maint. Mold </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('MassproBeginMaterialPreparation')} >
							<Text> Masspro Begin Material Preparation </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('MassproBeginMoldSetter')} >
							<Text> Masspro Begin Mold Setter </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('MassproBeginTechInjection')} >
							<Text> Masspro Begin Tech Injection</Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForms')} >
							<Text> Masspro Begin Prod. Leader </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForms')} >
							<Text> Masspro Begin QC. Leader </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForms')} >
							<Text> Masspro Begin Foreman </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForms')} >
							<Text> First Piece Foreman </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForms')} >
							<Text> Per Jam </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForms')} >
							<Text> Per 4 Jam </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForms')} >
							<Text> Per Shift </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForms')} >
							<Text> Revisi First Piece </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => handleGoTo('ListForms')} >
							<Text> Last Shoot </Text>   
						</Button>
					</ScrollView>
				</View>
			</View>
		</Container>
	)
}

export default ListForm;