import {Image, View, StyleSheet, Picker, StatusBar, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import { Container, Text, Button } from 'native-base';
import styles from '../../components/styles/Styling';

const ListForm = ({route, navigation}) => {
	const {qc_daily_inspection_id, qc_daily_inspection_item_id, qc_daily_inspection_method_id, sys_plant_id, product_name, customer_name, internal_part_id, customer_part_number, model, machine_id, machine_name, machine_status, operator_nik, operator_nik_2, leader_nik, foreman_nik, qc_process_nik, cavity, today, yesterday} = route.params
	return(
		<Container>
			<View style={styles.headerWithBorder}>
				<View style={styles.contentHeader}>
					<Image source={LogoSIP}/>
				</View>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Text style={styles.fontButtonHeader}>{machine_name}</Text>
					<Text style={styles.fontButtonFooter}>{product_name}</Text>
				</View>
			</View>
			<ScrollView>
				<View style={{backgroundColor: '#F5F5DC', padding: 30}}>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginMaintMold', {
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Masspro Begin Maint. Mold </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginMaterialPreparation', {
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Masspro Begin Material Preparation </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginMoldSetter', {
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Masspro Begin Mold Setter </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginTechInjection', {
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Masspro Begin Tech Injection</Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginProdLeader', {
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Masspro Begin Prod. Leader </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginQCLeader', {
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Masspro Begin QC. Leader </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginForeman', {
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Masspro Begin Foreman </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('FirstPieceForeman', {
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> First Piece Foreman </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('PerJam', {
						qc_daily_inspection_id: qc_daily_inspection_id,
						qc_daily_inspection_item_id: qc_daily_inspection_item_id,
						qc_daily_inspection_method_id: qc_daily_inspection_method_id,
						sys_plant_id: sys_plant_id,
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						operator_nik: operator_nik, 
						operator_nik_2: operator_nik_2, 
						leader_nik: leader_nik, 
						foreman_nik: foreman_nik,
						qc_process_nik: qc_process_nik,
						yesterday: yesterday
					})} >
						<Text> Per Jam </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('Per4Jam', {
						qc_daily_inspection_id: qc_daily_inspection_id,
						qc_daily_inspection_method_id: qc_daily_inspection_method_id,
						qc_daily_inspection_item_id: qc_daily_inspection_item_id,
						sys_plant_id: sys_plant_id,
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						operator_nik: operator_nik, 
						operator_nik_2: operator_nik_2, 
						leader_nik: leader_nik, 
						foreman_nik: foreman_nik,
						qc_process_nik: qc_process_nik,
						yesterday: yesterday
					})} >
						<Text> Per 4 Jam </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('PerShift', {
						qc_daily_inspection_id: qc_daily_inspection_id,
						sys_plant_id: sys_plant_id,
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						operator_nik: operator_nik, 
						operator_nik_2: operator_nik_2, 
						leader_nik: leader_nik, 
						foreman_nik: foreman_nik,
						qc_process_nik: qc_process_nik,
						yesterday: yesterday
					})} >
						<Text> Per Shift </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('RevisiFirstPieceLeaderQc', {
						qc_daily_inspection_id: qc_daily_inspection_id,
						sys_plant_id: sys_plant_id,
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Revisi First Piece Leader QC </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('RevisiFirstPieceForeman', {
						qc_daily_inspection_id: qc_daily_inspection_id,
						sys_plant_id: sys_plant_id,
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Revisi First Piece Foreman </Text>
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('LastShootLeaderQc', {
						qc_daily_inspection_id: qc_daily_inspection_id,
						sys_plant_id: sys_plant_id,
						product_name: product_name,
						machine_id: machine_id,
						cavity: cavity,
						customer_name: customer_name,
						internal_part_id: internal_part_id,
						customer_part_number: customer_part_number,
						model: model,
						machine_name: machine_name,
						machine_status: machine_status,
						today: today,
						yesterday: yesterday
					})} >
						<Text> Last Shoot Leader QC </Text>   
					</Button>
					<Button style={styles.productsButton} onPress={() => navigation.navigate('LastShootForeman', {
					qc_daily_inspection_id: qc_daily_inspection_id,
					sys_plant_id: sys_plant_id,
					product_name: product_name,
					machine_id: machine_id,
					cavity: cavity,
					customer_name: customer_name,
					internal_part_id: internal_part_id,
					customer_part_number: customer_part_number,
					model: model,
					machine_name: machine_name,
					machine_status: machine_status,
					today: today,
					yesterday: yesterday
				})} >
					<Text> Last Shoot Foreman </Text>   
				</Button>
				</View>
			</ScrollView>
		</Container>
	)
}

export default ListForm;