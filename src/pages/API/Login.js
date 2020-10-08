import React, {Component, useEffect, useState} from 'react';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        const data = {
            username,
            password
        }
        console.log('Data Before Login: ', data)
    }
}

export default Login;