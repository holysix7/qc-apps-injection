import {Image, View, StyleSheet, Picker, StatusBar, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import { Container, Text, Button } from 'native-base';

const ListForm = ({route, navigation}) => {
	const {id, sys_plant_id, product_name, customer_name, internal_part_id, customer_part_number, model, machine_name, today, yesterday} = route.params
	return(
		<Container>
			<View style={{height: 100, backgroundColor: '#F5F5DC', borderWidth: 0.3, flexDirection: 'column'}}>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Image source={LogoSIP}/>
				</View>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{fontSize: 20, fontWeight: 'bold'}}>{machine_name}</Text>
					<Text style={{fontSize: 12}}>{product_name}</Text>
				</View>
			</View>
			
			<View style={{flex: 1, flexDirection: 'column'}}>
				<View style={{flex: 1, backgroundColor: '#F5F5DC', paddingTop: 20, paddingHorizontal: 20}}>
					<ScrollView style={{backgroundColor: '#F5F5DC', padding: 10}}>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('MassproBeginMaintMold', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Masspro Begin Maint. Mold </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('MassproBeginMaterialPreparation', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Masspro Begin Material Preparation </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('MassproBeginMoldSetter', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Masspro Begin Mold Setter </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('MassproBeginTechInjection', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Masspro Begin Tech Injection</Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('MassproBeginProdLeader', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Masspro Begin Prod. Leader </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('MassproBeginQCLeader', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Masspro Begin QC. Leader </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('MassproBeginForeman', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Masspro Begin Foreman </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('FirstPieceForeman', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> First Piece Foreman </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('PerJam', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Per Jam </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('Per4Jam', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Per 4 Jam </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('PerShift', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Per Shift </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('RevisiFirstPieceLeaderQc', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Revisi First Piece Leader QC </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('RevisiFirstPieceForeman', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Revisi First Piece Foreman </Text>
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('LastShootLeaderQc', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Last Shoot Leader QC </Text>   
						</Button>
						<Button style={{marginTop: 5, alignItems: 'center', justifyContent: 'center', width: "100%", borderRadius: 15, flexDirection: 'column'}} onPress={() => navigation.navigate('LastShootForeman', {
							id: id,
							sys_plant_id: sys_plant_id,
							product_name: product_name,
							customer_name: customer_name,
							internal_part_id: internal_part_id,
							customer_part_number: customer_part_number,
							model: model,
							machine_name: machine_name,
							today: today,
							yesterday: yesterday
						})} >
							<Text> Last Shoot Foreman </Text>   
						</Button>
					</ScrollView>
				</View>
			</View>
		</Container>
	)
}

export default ListForm;