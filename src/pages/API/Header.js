import AsyncStorage from "@react-native-community/async-storage"
import { useState } from "react"

const Header = () => {
  const [kirimToken, setToken] = useState(null)
  const last = async() => {
    const token = await AsyncStorage.getItem("key")
    const header = {
      'Authorization': token
    }
    setToken(header)
    return header
  }
  console.log(kirimToken)
}

export default Header