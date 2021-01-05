import {Image, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import { Container, Text, Button } from 'native-base';
import moment from 'moment';
import styles from '../../components/styles/Styling';

const ShowPlanning = ({route, navigation}) => {
	const {machine_id, machine_name, sys_plant_id} = route.params
  const [data, setData] = useState([])
  const [planning, setDataPlanning] = useState(null)
  const [featureUser, setFeature] = useState(null);
  const [loading, setLoading] = useState(false);
	useEffect(() => {
    session()
		let isMounted = true;
		const products = async () => {
			const token = await AsyncStorage.getItem("key")
			const headers = {
				'Authorization': token
			}
			const params = {
				tbl: 'daily_inspection',
				kind: 'by_machine',
				sys_plant_id: sys_plant_id,
				machine_id: machine_id
			}
			// console.log(params)
			try {
				axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
				.then(response => {
					setLoading(true)
					if(isMounted) setData(response.data.data)
					console.log("Products List Data: ", response.data.status, response.data.message)
				})
				.catch(error => console.log(error))
			} catch (error) {
				console.log(error)
			}
		}
		products()
		return () => {
			isMounted = false
		}
	}, [])

  const session = async () => {
    try {
      const UserSession = await AsyncStorage.multiGet(['user', 'name', 'department_name', 'sys_plant_id', 'duty_plant_option_select', 'feature'])
      const feature    = await AsyncStorage.getItem('feature')
			setFeature(JSON.parse(feature))
    } catch (error) {
      console.log('Multi Get Error: ', error.message)
    }
	}

  const loopFeature = () => {
		var data = []
		var i
		for(i = 0; i < 4; i++){
			if(featureUser != null){
				if(sys_plant_id == i+1){
          if(planning != null){
            if(featureUser[i].qc_masspro_main_mold.view_permissions == true){
              data.push(
                <Button key="ASoidjk2" style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginMaintMold', {
                machine_id: machine_id,
                sys_plant_id: sys_plant_id,
                customer_name: customer_name,
                machine_name: machine_name,
                today: today,
                yesterday: yesterday
              })} >
                <Text> Masspro Begin Maint. Mold </Text>   
              </Button>
              )
            }
            if(featureUser[i].qc_masspro_material_preparation.view_permissions == true){
              data.push(
                <Button key="asuiohdn2" style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginMaterialPreparation', {
                  product_name: product_name,
                  machine_id: machine_id,
                  sys_plant_id: sys_plant_id,
                  customer_name: customer_name,
                  machine_name: machine_name,
                  today: today,
                  yesterday: yesterday
                })} >
                  <Text> Masspro Begin Material Preparation </Text>   
                </Button>
              )
            }
            if(featureUser[i].qc_masspro_mold_setter.view_permissions == true){
              data.push(
                <Button key="asoidjm2kasd" style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginMoldSetter', {
                  machine_id: machine_id,
                  sys_plant_id: sys_plant_id,
                  customer_name: customer_name,
                  machine_name: machine_name,
                  today: today,
                  yesterday: yesterday
                })} >
                  <Text> Masspro Begin Mold Setter </Text>   
                </Button>
              )
            }
            if(featureUser[i].qc_masspro_tech_injection.view_permissions == true){
              data.push(
                <Button key="askdmasjkd" style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginTechInjection', {
                  product_name: product_name,
                  machine_id: machine_id,
                  sys_plant_id,
                  customer_name: customer_name,
                  machine_name: machine_name,
                  today: today,
                  yesterday: yesterday
                })} >
                  <Text> Masspro Begin Tech Injection</Text>   
                </Button>
              )
            }
            if(featureUser[i].qc_masspro_prod_leader.view_permissions == true){
              data.push(
                <Button key="askdmaswq12sjkd" style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginProdLeader', {
                  product_name: product_name,
                  machine_id: machine_id,
                  sys_plant_id,
                  customer_name: customer_name,
                  machine_name: machine_name,
                  today: today,
                  yesterday: yesterday
                })} >
                  <Text> Masspro Begin Prod. Leader </Text>   
                </Button>
                
              )
            }
            if(featureUser[i].qc_masspro_qc_leader.view_permissions == true){
              data.push(
                <Button key="asjnjqjwkn123" style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginQCLeader', {
                  product_name: product_name,
                  machine_id: machine_id,
                  sys_plant_id,
                  customer_name: customer_name,
                  machine_name: machine_name,
                  today: today,
                  yesterday: yesterday
                })} >
                  <Text> Masspro Begin QC. Leader </Text>   
                </Button>
                
              )
            }
            if(featureUser[i].qc_masspro_foreman.view_permissions == true){
              data.push(
                <Button key="asjasdq2njqjwkn123" style={styles.productsButton} onPress={() => navigation.navigate('MassproBeginForeman', {
                  product_name: product_name,
                  machine_id: machine_id,
                  sys_plant_id,
                  customer_name: customer_name,
                  machine_name: machine_name,
                  today: today,
                  yesterday: yesterday
                })} >
                  <Text> Masspro Begin Foreman </Text>   
                </Button>
                
              )
            }
          }else{
            if(featureUser[i].qc_masspro_main_mold.view_permissions == true){
              data.push(
                <Button key="ASoidjk2" style={styles.productsButton} onPress={() => alert("There's No Planning")} >
                <Text> Masspro Begin Maint. Mold </Text>   
              </Button>
              )
            }
            if(featureUser[i].qc_masspro_material_preparation.view_permissions == true){
              data.push(
                <Button key="asuiohdn2" style={styles.productsButton} onPress={() => alert("There's No Planning")} >
                  <Text> Masspro Begin Material Preparation </Text>   
                </Button>
              )
            }
            if(featureUser[i].qc_masspro_mold_setter.view_permissions == true){
              data.push(
                <Button key="asoidjm2kasd" style={styles.productsButton} onPress={() => alert("There's No Planning")} >
                  <Text> Masspro Begin Mold Setter </Text>   
                </Button>
              )
            }
            if(featureUser[i].qc_masspro_tech_injection.view_permissions == true){
              data.push(
                <Button key="askdmasjkd" style={styles.productsButton} onPress={() => alert("There's No Planning")} >
                  <Text> Masspro Begin Tech Injection</Text>   
                </Button>
              )
            }
            if(featureUser[i].qc_masspro_prod_leader.view_permissions == true){
              data.push(
                <Button key="askdmaswq12sjkd" style={styles.productsButton} onPress={() => alert("There's No Planning")} >
                  <Text> Masspro Begin Prod. Leader </Text>   
                </Button>
                
              )
            }
            if(featureUser[i].qc_masspro_qc_leader.view_permissions == true){
              data.push(
                <Button key="asjnjqjwkn123" style={styles.productsButton} onPress={() => alert("There's No Planning")} >
                  <Text> Masspro Begin QC. Leader </Text>   
                </Button>
                
              )
            }
            if(featureUser[i].qc_masspro_foreman.view_permissions == true){
              data.push(
                <Button key="asjasdq2njqjwkn123" style={styles.productsButton} onPress={() => alert("There's No Planning")} >
                  <Text> Masspro Begin Foreman </Text>   
                </Button>
              )
            }
          }
				}
			}
		}
		return data
  }
  
	var today = moment()
							.format('YYYY-MM-DD')
	var yesterday = moment()
									.subtract(1, 'days')
									.format('YYYY-MM-DD')

	return(
		<Container>
			<View style={styles.headerWithBorder}>
				<View style={styles.contentHeader}>
					<Image source={LogoSIP}/>
				</View>
				<View style={styles.contentHeader}>
					<Text style={styles.fontPlanning}>{machine_name}</Text>
					<Text style={styles.fontPlanning}>Create Daily Inspection</Text>
				</View>
			</View>
			
			<View style={styles.contentFullWithPadding}>
				<ScrollView>
					<View style={styles.contentHeader}>
						{loading ? loopFeature() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
					</View>
				</ScrollView>
			</View>
		</Container>
	)
}

export default ShowPlanning;