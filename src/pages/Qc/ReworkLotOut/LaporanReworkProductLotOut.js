import {Image, View, ScrollView, ActivityIndicator, RefreshControl} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import LogoSIP from '../../../assets/logo-sip370x50.png';
import AsyncStorage from "@react-native-community/async-storage";
import { Container, Text, Button } from 'native-base';
import styles from '../../../components/styles/Styling';
import app_version from '../../app_version/index';

const Rework = ({route, navigation}) => {
  const {machine_id, sys_plant_id, machine_number, machine_name, eng_product_id, product_name, internal_part_id, color, model, customer_part_number, customer_name, date} = route.params
  const [featureUser, setFeature] = useState([])
  const [app_pms_access, setPmsAccess] = useState(null)
  const [department_name, setDeptName] = useState(null)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false);
	useEffect(() => {
    session()
		setTimeout(() => {
			setLoading(true)
		}, 1000);
	}, [])
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false)
    }, 1500);
  }, []);

  const session = async () => {
    try {
      const feature           = await AsyncStorage.getItem('feature')
      const app_pms_access    = await AsyncStorage.getItem('app_pms_access')
      const department_name    = await AsyncStorage.getItem('department_name')
			setFeature(JSON.parse(feature))
			setPmsAccess(JSON.parse(app_pms_access))
			setDeptName(department_name)
    } catch (error) {
      console.log('Multi Get Error: ', error.message)
    }
	}

  const loopFeature = () => {
    var dataFeature = []
    var dataProdLeaderIpQc = []
    if(featureUser.length > 0){
      for(i = 0; i < 4; i++){
        var session_sys = featureUser[i] != null ? featureUser[i].sys_plant_id : null
				if(sys_plant_id == session_sys){
          if(eng_product_id != null){
            if(featureUser[i].qc_inprocess_lot_out != null){
              if(featureUser[i].qc_inprocess_lot_out.view_permissions == true){
                if(department_name == 'INJ. PRODUCTION' || department_name == 'IT'){
                  dataProdLeaderIpQc.push(
                    <Button key={"pl",i+2} style={styles.listNGProducts} onPress={() => navigation.navigate('ReworkProdLeader', {
                      app_pms_access: app_pms_access,
                      machine_id: machine_id,
                      machine_number: machine_number,
                      machine_name: machine_name,
                      sys_plant_id: sys_plant_id,
                      eng_product_id: eng_product_id,
                      product_name: product_name,
                      internal_part_id: internal_part_id,
                      color: color,
                      model: model,
                      customer_part_number: customer_part_number,
                      customer_name: customer_name,
                      date: date
                    })} >
                      <Text> Production Leader </Text> 
                    </Button>
                  )
                }else{
                  dataProdLeaderIpQc.push(
                    <Button key={"pl"} style={styles.listFormReworkLotOutNotAccess} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Produksi Leader")} >
                      <Text> Production Leader </Text> 
                    </Button>
                  )
                }
                if(department_name == 'Inj. QC' || department_name == 'IT'){
                  dataProdLeaderIpQc.push(
                    <Button key={"ipqc",i+3} style={styles.listNGProducts} onPress={() => navigation.navigate('ReworkQCLeader', {
                      app_pms_access: app_pms_access,
                      machine_id: machine_id,
                      machine_number: machine_number,
                      machine_name: machine_name,
                      sys_plant_id: sys_plant_id,
                      eng_product_id: eng_product_id,
                      product_name: product_name,
                      internal_part_id: internal_part_id,
                      color: color,
                      model: model,
                      customer_part_number: customer_part_number,
                      customer_name: customer_name,
                      date: date
                    })} >
                      <Text> IP QC </Text> 
                    </Button>
                  )
                }else{
                  dataProdLeaderIpQc.push(
                    <Button key={"ipqc"} style={styles.listFormReworkLotOutNotAccess} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses QC Inspection")} >
                      <Text> IP QC </Text> 
                    </Button>
                  )
                }
              }
            }
            if(app_pms_access == true){
              dataFeature.push(
                <View key={"op"} styles={styles.contentHeader}>
                  <Button key={"op", i+1} style={styles.listNGProducts} onPress={() => navigation.navigate('ReworkOperator', {
                    app_pms_access: app_pms_access,
                    machine_id: machine_id,
                    machine_number: machine_number,
                    machine_name: machine_name,
                    sys_plant_id: sys_plant_id,
                    eng_product_id: eng_product_id,
                    product_name: product_name,
                    internal_part_id: internal_part_id,
                    color: color,
                    model: model,
                    customer_part_number: customer_part_number,
                    customer_name: customer_name,
                    date: date
                  })} >
                    <Text> Operator Rework </Text> 
                  </Button>
                  {dataProdLeaderIpQc.length > 0 ? dataProdLeaderIpQc : null }
                </View>
              )
            }else{
              dataFeature.push(
                <View key={"op"} styles={styles.contentHeader}>
                  <Button key={"op", i+1} style={styles.listFormReworkLotOutNotAccess} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Operator")} >
                    <Text> Operator Rework </Text> 
                  </Button>
                  {dataProdLeaderIpQc.length > 0 ? dataProdLeaderIpQc : null }
                </View>
              )
            }
          }
        }
      }
    }else{
      if(app_pms_access == true){
        dataFeature.push(
          <View key={"op"} styles={styles.contentHeader}>
            <Button style={styles.listNGProducts} onPress={() => navigation.navigate('ReworkOperator', {
              app_pms_access: app_pms_access,
              machine_id: machine_id,
              machine_number: machine_number,
              machine_name: machine_name,
              sys_plant_id: sys_plant_id,
              eng_product_id: eng_product_id,
              product_name: product_name,
              internal_part_id: internal_part_id,
              color: color,
              model: model,
              customer_part_number: customer_part_number,
              customer_name: customer_name,
              date: date
            })} >
              <Text> Operator Rework </Text> 
            </Button>
            <Button style={styles.listFormReworkLotOutNotAccess} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Produksi Leader")} >
              <Text> Production Leader </Text> 
            </Button>
            <Button style={styles.listFormReworkLotOutNotAccess} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses IP QC")} >
              <Text> IP QC </Text> 
            </Button>
          </View>
        )
      }else{
        dataFeature.push(
          <View key={"op"} styles={styles.contentHeader}>
            <Button style={styles.listFormReworkLotOutNotAccess} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Operator (:app_pms_access != true)")} >
              <Text> Operator Rework </Text> 
            </Button>
            <Button style={styles.listFormReworkLotOutNotAccess} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses Produksi Leader")} >
              <Text> Production Leader </Text> 
            </Button>
            <Button style={styles.listFormReworkLotOutNotAccess} onPress={() => alert("Maaf Anda Tidak Memiliki Hak Akses IP QC")} >
              <Text> IP QC </Text> 
            </Button>
          </View>
        )
      }
    }
    return dataFeature
  }
// abcd

  const headerContent = () => {
    return (
      <View style={styles.contentHeader}>
        <Text style={styles.fontReworkProduct}>({machine_number}) - {machine_name} | {date}</Text>
        <Text style={styles.fontReworkProductChild}>Laporan Rework Product Lot Out </Text>
        <Text style={styles.fontReworkProductChild}>{product_name} </Text>
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
				<ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} >
          {loading ? loopFeature() : <View style={{justifyContent: 'center'}}><ActivityIndicator size="large" color="#0000ff"/></View>}
				</ScrollView>
			</View>
		</Container>
	)
}

export default Rework;