import AsyncStorage from '@react-native-community/async-storage';

const Session = async(data) => {
    const oke = JSON.stringify(data.app_pms_access)
    try {
        await AsyncStorage.multiSet([
            ['id', JSON.stringify(data.id)],
            ['user', data.user],
            ['name', data.name],
            ['department_name', data.department_name],
            ['current_version_iqc', data.current_version_iqc],
            ['sys_plant_id', JSON.stringify(data.sys_plant_id)],
            ['duty_plant_option_select', JSON.stringify(data.duty_plant_option_select)],
            ['feature', JSON.stringify(data.feature)],
            ['app_pms_access', oke],
            ['employee_image_base64', data.employee_image_base64]
        ])
    } catch (error) {
        console.log(error)
    }
}

export default Session;