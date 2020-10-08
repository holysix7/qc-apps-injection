import AsyncStorage from '@react-native-community/async-storage';
import TOKEN from '../../Key';

const Session = async(data) => {
// const Session = async(data) => {
	// console.log("Uye Edan Gada Obat: ", data)
	// const items = [['k1','val1'], ['k2','val2'], ['k3','val3'], ['k4','val4'], ['k5','k5']]
    // try {
    //     await AsyncStorage.multiSet(items, () => {[
    //         ["id", data.id],
    //         ["user", data.user],
    //         ["name", data.name],
    //         ["department_name", data.department_name]
    //     ]});
    // } catch (error) {
    //     console.log('AsyncStorage Error: ' + error.message);
    // }
    // const id = await AsyncStorage.setItem('id', data.id)
    // const id = data.id
    // const user = data.user
    // const name = data.name
    // const department_name = data.department_name
    const id = ["@key1", data.id]
    const user = ["@key2", data.user]
    const name = ["@key3", data.name]
    const department_name = ["@key4", data.department_name]
    try {
        await AsyncStorage.multiSet([id, user, name, department_name])
    } catch (error) {
        console.log(error)
 }
}

export default Session;