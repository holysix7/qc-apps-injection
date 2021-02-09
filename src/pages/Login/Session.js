import AsyncStorage from '@react-native-community/async-storage';

const Session = async(data) => {
    // console.log(data.feature.plant_1)
    try {
        await AsyncStorage.multiSet([
            ['id', JSON.stringify(data.id)],
            ['user', data.user],
            ['name', data.name],
            ['department_name', data.department_name],
            ['sys_plant_id', JSON.stringify(data.sys_plant_id)],
            ['duty_plant_option_select', JSON.stringify(data.duty_plant_option_select)],
            ['feature', JSON.stringify(data.feature)]
        ])
    } catch (error) {
        console.log(error)
    }
}

export default Session;