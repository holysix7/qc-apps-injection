import {View, Image,} from 'react-native';
import { useEffect } from "react";
import { Button } from 'native-base';
import styles from '../../components/styles/Styling'
import Home from '../../assets/FixHomeWhite.png'
import Profile from '../../assets/FixProfileWhite.png'
import Cog from '../../assets/FixCogWhite.png'
import AsyncStorage from "@react-native-community/async-storage";

const BottomNavbar = () => {
  useEffect(() => {
    session()
  }, [])
  const [userNik, setUserNik]       = useState(null);
  const [name, setCekName]          = useState("");
  const [deptName, setCekDeptName]  = useState("");
  const [dutyId, setDutyId]         = useState([]);
  const session = async () => {
    try {
      const sys_plant_id = await AsyncStorage.getItem('sys_plant_id')
      const duty = await AsyncStorage.getItem('duty_plant_option_select')
      const deptName    = await AsyncStorage.getItem('department_name')
      const name    = await AsyncStorage.getItem('name')
      const user    = await AsyncStorage.getItem('user')
      setDutyId(JSON.parse(duty))
      setCekId(sys_plant_id)
      setUserNik(user)
      setCekDeptName(deptName)
      setCekName(name)
    } catch (error) {
      console.log('Multi Get Error: ', error.message)
    }
  }
  const bottom = () => {
    if(userNik == 32008107 || userNik == 21410012){
      return (
        <View style={styles.bottomNavbar}>
          <Button style={styles.buttonNavbar}>
            <Image source={Home} style={styles.homeButton}/>
          </Button>
      
          <Button style={styles.buttonNavbar} onPress={() => {
            navigation.navigate('OQC')
          }}>
            <Image source={Cog} style={styles.cogButton}/>
          </Button>
  
          <Button style={styles.buttonNavbar} onPress={() => {
            navigation.navigate('IQC')
          }}>
            <Image source={Cog} style={styles.cogButton}/>
          </Button>
        
          <Button style={styles.buttonNavbar} onPress={() => {
            navigation.navigate('Profile', {
              name: name,
              deptName: deptName,
              dutyId: dutyId,
              userNik: userNik
            })
          }}>
            <Image source={Profile} style={styles.profileButton}/>
          </Button>
        </View>
      )
    }else{
      return (
        <View style={styles.bottomNavbar}>
          <Button style={styles.buttonNavbar}>
            <Image source={Home} style={{width: 25, height: 25 }}/>
          </Button>
        
          <Button style={styles.buttonNavbar} onPress={() => {
            navigation.navigate('Profile', {
              name: name,
              deptName: deptName,
              dutyId: dutyId,
              userNik: userNik
            })
          }}>
            <Image source={Profile} style={{width: 30, height: 30 }}/>
          </Button>
        </View>
      )
    }
  }
  return(
    bottom()
  )
}
export default BottomNavbar;