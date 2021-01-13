import {View, TouchableOpacity, ScrollView, FlatList, ActivityIndicator, Image} from 'react-native';
import React from 'react';
import { Container, Text, Button} from 'native-base';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import styles from '../../components/styles/Styling';
import Home from '../../assets/FixHome.png'
import ImageProfile from '../../assets/FixProfile.png'
import Cog from '../../assets/FixCog.png'
import AsyncStorage from "@react-native-community/async-storage";

const Profile = ({route, navigation}) => {
	const {name, deptName, dutyId, userNik} = route.params
	const buttLogout = async () => {
    try {
			AsyncStorage.getAllKeys()
			.then(keys => AsyncStorage.multiRemove(keys))
			.then(() => {
				navigation.replace('Login')
				console.log("Berhasil Logout")
				alert("Successfully Logout!")
			})
    } catch (error) {
      console.log('Gagal Logout: ', error);
    }
	}
	const dataDuty = []
  if(dutyId != null)
  {
    dutyId.map((element, key) => {
      dataDuty.push(
			<Text key={key} style={{fontSize: 20}}>{element.plant_name}</Text>
      )
    })
  }else{
    console.log("Duty Id = Kosong")
	}

	const buttonNavbar = () => {
    if(userNik == 32008107){
      return (
        <View style={styles.bottomNavbar}>
          <Button style={styles.buttonNavbar} onPress={() => {
						navigation.navigate('Qc', {
							name: name,
							deptName: deptName,
							dutyId: dutyId,
						})
					}}>
            <Image source={Home} style={{width: 40, height: 40 }}/>
          </Button>
      
          <Button style={styles.buttonNavbar} onPress={() => {
            navigation.navigate('OQC')
          }}>
            <Image source={Cog} style={{width: 40, height: 40 }}/>
          </Button>
        
          <Button style={styles.buttonNavbar}>
            <Image source={ImageProfile} style={{width: 50, height: 50 }}/>
          </Button>
        </View>
      )
    }else{
      return (
        <View style={styles.bottomNavbar}>
          <Button style={styles.buttonNavbar}>
            <Image source={Home} style={{width: 40, height: 40 }}/>
          </Button>
        
          <Button style={styles.buttonNavbar}>
            <Image source={ImageProfile} style={{width: 50, height: 50 }}/>
          </Button>
        </View>
      )
    }
	}

  return (
    <Container>
      <View>
        <GeneralStatusBarColor backgroundColor="#54c3f0" barStyle="light-content"/>
      </View>
      <View style={{height: 100, backgroundColor: '#F5F5DC'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{paddingTop: 10, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#F5F5DC'}}>
					<View style={{height: 500, margin: 15}}>
						<View style={{paddingTop: 10, flexDirection: 'row', paddingLeft: 12}}>
							<View style={{width: "20%"}}>
								<Text style={{fontSize: 20}}>User</Text>
							</View>
							<View style={{width: "6%"}}>
								<Text style={{fontSize: 20}}>:</Text>
							</View>
							<View style={{width: "60%"}}>
								<TouchableOpacity>
									<Text style={{fontSize: 20}}>{name}</Text>
								</TouchableOpacity>
							</View>
						</View>
						
						<View style={{paddingTop: 10, flexDirection: 'row', paddingLeft: 12}}>
							<View style={{width: "20%"}}>
								<Text style={{fontSize: 20}}>Dept.</Text>
							</View>
							<View style={{width: "6%"}}>
								<Text style={{fontSize: 20}}>:</Text>
							</View>
							<View>
								<TouchableOpacity>
									<Text style={{fontSize: 20}}>{deptName}</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View style={{paddingTop: 10, flexDirection: 'row', paddingLeft: 12}}>
							<View style={{width: "20%"}}>
								<Text style={{fontSize: 20}}>Access</Text>
							</View>
							<View style={{width: "6%"}}>
								<Text style={{fontSize: 20}}>:</Text>
							</View>
							<View style={{width: "56%"}}>
								<TouchableOpacity>
									<Text style={{fontSize: 20}}>{dataDuty}</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View style={{paddingTop: 10, flexDirection: 'row', paddingLeft: 12}}>
							<View style={styles.buttonLogin}>
								<View>
									<TouchableOpacity onPress={() => buttLogout()}>
										<Text style={{fontSize: 20}}>Logout</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
      </View>
			{buttonNavbar()}
    </Container>
  )
}

export default Profile