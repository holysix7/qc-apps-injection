import {Image, View, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSIP from '../../assets/logo-sip370x50.png';
import checklist from '../../assets/check.png';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import { Container, Text, Button } from 'native-base';
import moment from 'moment';
import styles from '../../components/styles/Styling';
import app_version from '../app_version/index';

const ShowPlanning = ({route, navigation}) => {
  const {machine_id, sys_plant_id, machine_number} = route.params
  const [data, setData] = useState([])
  const [planning, setDataPlanning] = useState(null)
  const [productName, setProductName] = useState(null)
  const [maintMoldId, setMaintMoldId] = useState(null)
  const [materialId, setMaterialId] = useState(null)
  const [moldSetterId, setMoldSetterId] = useState(null)
  const [techInjecionId, setTechInjectionId] = useState(null)
  const [prodLeader, setProdLeaderId] = useState(null)
  const [qcLeaderId, setQcLeaderId] = useState(null)
  const [foremandId, setForemanId] = useState(null)
  const [customer_name, setCustomerName] = useState(null)
  const [machine_name, setMachineName] = useState(null)
  const [featureUser, setFeature] = useState(null)
  const [loading, setLoading] = useState(false)
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
				kind: 'by_planning',
				sys_plant_id: sys_plant_id,
        machine_id: machine_id,
        app_version: app_version
			}
			try {
				axios.get('https://api.tri-saudara.com/api/v2/qcs?', {params: params, headers: headers})
				.then(response => {
          setDataPlanning(response.data.data.product_1)
          setProductName(response.data.data.product1_name)
          setMaintMoldId(response.data.data.qc_masspro_main_mold_id)
          setMaterialId(response.data.data.qc_masspro_material_preparation_id)
          setMoldSetterId(response.data.data.qc_masspro_mold_setter_id)
          setTechInjectionId(response.data.data.qc_masspro_tech_injection_id)
          setProdLeaderId(response.data.data.qc_masspro_prod_leader_id)
          setQcLeaderId(response.data.data.qc_masspro_qc_leader_id)
          setForemanId(response.data.data.qc_masspro_foreman_id)
          setCustomerName(response.data.data.customer_name)
          setMachineName(response.data.data.machine_name)
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
            if(featureUser[i].qc_masspro_main_mold != null){
              if(featureUser[i].qc_masspro_main_mold.view_permissions == true){
                data.push(
                  <Button key="ASoidjk2" style={styles.massProButton} onPress={() => navigation.navigate('MassproBeginMaintMold', {
                    machine_id: machine_id,
                    sys_plant_id: sys_plant_id,
                    customer_name: customer_name,
                    machine_name: machine_name,
                    machine_number: machine_number,
                    eng_product_id: planning,
                    today: today,
                    yesterday: yesterday
                  })}>
                    <Text> Maint. Mold </Text>
                    {maintMoldId ?  <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}  
                  </Button>
                )
              }else{
                data.push(
                  <Button key="ASoidjk2" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Akses Ke Form Maint. Mold")}>
                    <Text> Maint. Mold </Text>
                    {maintMoldId ?  <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}  
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_material_preparation != null){
              if(featureUser[i].qc_masspro_material_preparation.view_permissions == true){
                data.push(
                  <Button key="asuiohdn2" style={styles.massProButton} onPress={() => navigation.navigate('MassproBeginMaterialPreparation', {
                    machine_id: machine_id,
                    sys_plant_id: sys_plant_id,
                    customer_name: customer_name,
                    machine_name: machine_name,
                    machine_number: machine_number,
                    eng_product_id: planning,
                    today: today,
                    yesterday: yesterday
                  })} >
                    <Text> Material Preparation </Text>
                    {materialId ?  <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}  
                  </Button>
                )
              }else{
                data.push(
                  <Button key="asuiohdn2" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Akses Ke Form Tech. Injection")} >
                    <Text> Material Preparation </Text>
                    {materialId ?  <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}  
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_mold_setter != null){
              if(featureUser[i].qc_masspro_mold_setter.view_permissions == true){
                data.push(
                  <Button key="asoidjm2kasd" style={styles.massProButton} onPress={() => navigation.navigate('MassproBeginMoldSetter', {
                    machine_id: machine_id,
                    sys_plant_id: sys_plant_id,
                    customer_name: customer_name,
                    machine_name: machine_name,
                    machine_number: machine_number,
                    eng_product_id: planning,
                    today: today,
                    yesterday: yesterday
                  })}>
                    <Text> Mold Setter </Text>
                    {moldSetterId != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
                  </Button>
                )
              }else{
                data.push(
                  <Button key="asoidjm2kasd" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Akses Ke Form Mold Setter")} >
                    <Text> Mold Setter </Text> 
                    {moldSetterId != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_tech_injection != null){
              if(featureUser[i].qc_masspro_tech_injection.view_permissions == true){
                data.push(
                  <Button key="askdmasjkd" style={styles.massProButton} onPress={() => navigation.navigate('MassproBeginTechInjection', {
                    machine_id: machine_id,
                    sys_plant_id,
                    customer_name: customer_name,
                    machine_name: machine_name,
                    machine_number: machine_number,
                    eng_product_id: planning,
                    today: today,
                    yesterday: yesterday
                  })} >
                    <Text> Tech Injection</Text> 
                    {techInjecionId != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/>    : null }
                  </Button>
                )
              }else{
                data.push(
                  <Button key="askdmasjkd" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Akses Ke Form Tech. Injection")} >
                    <Text> Tech Injection</Text> 
                    {techInjecionId != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null }
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_prod_leader != null){
              if(featureUser[i].qc_masspro_prod_leader.view_permissions == true){
                data.push(
                  <Button key="askdmaswq12sjkd" style={styles.massProButton} onPress={() => navigation.navigate('MassproBeginProdLeader', {
                    machine_id: machine_id,
                    sys_plant_id,
                    customer_name: customer_name,
                    machine_name: machine_name,
                    machine_number: machine_number,
                    eng_product_id: planning,
                    today: today,
                    yesterday: yesterday
                  })} >
                    <Text> Prod. Leader </Text> 
                    {prodLeader != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
                  </Button>
                )
              }else{
                data.push(
                  <Button key="askdmaswq12sjkd" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Akses Ke Form Prod. Leader")} >
                    <Text> Prod. Leader </Text> 
                    {prodLeader != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_qc_leader != null){
              if(featureUser[i].qc_masspro_qc_leader.view_permissions == true){
                data.push(
                  <Button key="asjnjqjwkn123" style={styles.massProButton} onPress={() => navigation.navigate('MassproBeginQCLeader', {
                    machine_id: machine_id,
                    sys_plant_id,
                    customer_name: customer_name,
                    machine_name: machine_name,
                    machine_number: machine_number,
                    eng_product_id: planning,
                    today: today,
                    yesterday: yesterday
                  })} >
                    <Text> QC. Leader </Text> 
                    {qcLeaderId != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null }
                  </Button>
                )
              }else{
                data.push(
                  <Button key="asjnjqjwkn123" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Akses Ke Form QC. Leader")} >
                    <Text> QC. Leader </Text> 
                    {qcLeaderId != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null }
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_foreman != null){
              if(featureUser[i].qc_masspro_foreman.view_permissions == true){
                data.push(
                  <Button key="asjasdq2njqjwkn123" style={styles.massProButton} onPress={() => navigation.navigate('MassproBeginForeman', {
                    machine_id: machine_id,
                    sys_plant_id,
                    customer_name: customer_name,
                    machine_name: machine_name,
                    machine_number: machine_number,
                    eng_product_id: planning,
                    today: today,
                    yesterday: yesterday
                  })} >
                    <Text> Foreman </Text> 
                    {foremandId != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
                  </Button> 
                )
              }else{
                data.push(
                  <Button key="asjasdq2njqjwkn123" style={styles.productsNotAccessButton} onPress={() => alert("Maaf Anda Tidak Memiliki Akses Ke Form Foreman")} >
                    <Text> Foreman </Text> 
                    {foremandId != null ? <Image source={checklist} style={{width: 30, height: 30, marginRight: 10}}/> : null}
                  </Button> 
                )
              }
            }
          }else{
            if(featureUser[i].qc_masspro_main_mold != null){
              if(featureUser[i].qc_masspro_main_mold.view_permissions == true){
                data.push(
                  <Button key="ASoidjk2" style={styles.massProButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Maint. Mold </Text> 
                  </Button>
                )
              }else{
                data.push(
                  <Button key="ASoidjk2" style={styles.productsNotAccessButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Maint. Mold </Text>   
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_material_preparation != null){
              if(featureUser[i].qc_masspro_material_preparation.view_permissions == true){
                data.push(
                  <Button key="asuiohdn2" style={styles.massProButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Material Preparation </Text>   
                  </Button>
                )
              }else{
                data.push(
                  <Button key="asuiohdn2" style={styles.productsNotAccessButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Material Preparation </Text>   
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_mold_setter != null){
              if(featureUser[i].qc_masspro_mold_setter.view_permissions == true){
                data.push(
                  <Button key="asoidjm2kasd" style={styles.massProButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Mold Setter </Text>   
                  </Button>
                )
              }else{
                data.push(
                  <Button key="asoidjm2kasd" style={styles.productsNotAccessButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Mold Setter </Text>   
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_tech_injection != null){
              if(featureUser[i].qc_masspro_tech_injection.view_permissions == true){
                data.push(
                  <Button key="askdmasjkd" style={styles.massProButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Tech Injection</Text>   
                  </Button>
                )
              }else{
                data.push(
                  <Button key="askdmasjkd" style={styles.productsNotAccessButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Tech Injection</Text>   
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_prod_leader != null){
              if(featureUser[i].qc_masspro_prod_leader.view_permissions == true){
                data.push(
                  <Button key="askdmaswq12sjkd" style={styles.massProButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Prod. Leader </Text>   
                  </Button>
                )
              }else{
                data.push(
                  <Button key="askdmaswq12sjkd" style={styles.productsNotAccessButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Prod. Leader </Text>   
                  </Button>
                )
              }
            }
            if(featureUser[i].qc_masspro_qc_leader != null){
              if(featureUser[i].qc_masspro_qc_leader.view_permissions == true){
                data.push(
                  <Button key="asjnjqjwkn123" style={styles.massProButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> QC. Leader </Text>   
                  </Button>
                )
              }else{
                data.push(
                  <Button key="asjnjqjwkn123" style={styles.productsNotAccessButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> QC. Leader </Text>   
                  </Button> 
                )
              }
            }
            if(featureUser[i].qc_masspro_foreman != null){
              if(featureUser[i].qc_masspro_foreman.view_permissions == true){
                data.push(
                  <Button key="asjasdq2njqjwkn123" style={styles.massProButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Foreman </Text>   
                  </Button>
                )
              }else{
                data.push(
                  <Button key="asjasdq2njqjwkn123" style={styles.productsNotAccessButton} onPress={() => alert("Tidak Ada Planning, Harap Hubungi PPIC")} >
                    <Text> Foreman </Text>   
                  </Button>
                )
              }
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

  const headerContent = () => {
    return (
      <View style={styles.contentHeader}>
        <Text style={styles.fontPlanning}>({machine_number}) - {machine_name}</Text>
        {productName != null ? <Text style={styles.fontPlanning}>{productName}</Text> : <View style={styles.viewNoPlanning}><Text style={styles.fontNoPlanning}> - TIDAK ADA PLANNING - </Text></View>}
        <Text style={styles.fontPlanning}>Create Daily Inspection By Masspro Begin </Text>
      </View>
    )
  }

	return(
		<Container>
			<View style={styles.headerWithBorder}>
				<View style={styles.contentHeader}>
					<Image source={LogoSIP}/>
				</View>
        {loading ? headerContent() : null}
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