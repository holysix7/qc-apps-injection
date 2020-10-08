import { AsyncStorage } from 'react-native';
import TOKEN from '../../Key';

const DeviceStorage = async(data) => {
	// console.log(data)
	const value = data
		try {
			await AsyncStorage.setItem('key', value);
		} catch (error) {
			console.log('AsyncStorage Error: ' + error.message);
		}
}

export default DeviceStorage;