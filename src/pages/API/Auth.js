import Axios from 'axios';
import DeviceStorage from '../Login/DeviceStorage';
import Session from '../Login/Session';


const Auth = async(data, navigation) => {
	try {
		Axios.post('https://api.tri-saudara.com/signin', data)
		.then(res => {
			DeviceStorage(res.data.data.token)
			Session(res.data.data)
			console.log("Login Success!")
			navigation.replace('Qc')
			alert("Login Success!")
		}).catch((err) => {
			console.log("Login: ", err)
			alert("Login Failed!")
		})
	} catch (error) {
		// setLoading(true)
		console.log("Login: ", error)
		alert("Login Failed! Network Error")
	}
}

export default Auth;