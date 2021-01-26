import AsyncStorage from "@react-native-community/async-storage";
import { useEffect, useState } from "react";

const Token = () => {
  const [token, setToken] = useState(null)
  useEffect(() => {
    toks()
  }, [])
  const toks = async() => {
    const token = await AsyncStorage.getItem("key")
    setToken(token)
  }
  
  return token
}

export default Token