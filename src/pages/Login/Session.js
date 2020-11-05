import AsyncStorage from '@react-native-community/async-storage';

const Session = async(data) => {
    try {
        await AsyncStorage.multiSet([
            ['user', data.user],
            ['name', data.name],
            ['department_name', data.department_name],
            ['sys_plant_id', JSON.stringify(data.sys_plant_id)],
            ['duty_plant_option_select', JSON.stringify(data.duty_plant_option_select)]
        ])
    } catch (error) {
        console.log(error)
    }
}

export default Session;