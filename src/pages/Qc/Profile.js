import {View, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import { Container, Text, Button} from 'native-base';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import styles from '../../components/styles/Styling';
import AsyncStorage from "@react-native-community/async-storage";

const Profile = ({route, navigation}) => {
	const {name, deptName, dutyId} = route.params
	const handleGoTo = (screen) => {
		navigation.replace(screen)
	}
	const buttLogout = async () => {
    try {
			AsyncStorage.getAllKeys()
			.then(keys => AsyncStorage.multiRemove(keys))
			.then(() => {
				console.log("Berhasil Logout")
				handleGoTo('Login')
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
				<ScrollView>
					<View style={{paddingTop: 10, flexDirection: 'row', paddingLeft: 12}}>
						<View style={{width: "20%"}}>
							<Text style={{fontSize: 20}}>User</Text>
						</View>
						<View style={{width: "6%"}}>
							<Text style={{fontSize: 20}}>:</Text>
						</View>
						<View>
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
						<View>
							<TouchableOpacity>
								<Text style={{fontSize: 20}}>{dataDuty}</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.buttonLogin}>
						<View>
							<TouchableOpacity onPress={() => buttLogout()}>
								<Text style={{fontSize: 20}}>Logout</Text>
							</TouchableOpacity>
						</View>
					</View>

				</ScrollView>
      </View>
      <View style={{height: 60, backgroundColor: '#F5F5DC', flexDirection: 'row', borderWidth: 0.3}}>
        <Button style={{height: 63, backgroundColor: '#F5F5DC', justifyContent: 'center', alignItems: 'center', flex: 1}} onPress={() => {
          navigation.navigate('Qc', {
            name: name,
            deptName: deptName,
            dutyId: dutyId,
          })
        }}>
          <Text style={{color: 'black'}}>Machines</Text>
        </Button>
        <Button style = {{height: 63, backgroundColor: '#F5F5DC', justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={{color: 'black'}}>Profile</Text>
        </Button>
      </View>
    </Container>
  )
}

export default Profile