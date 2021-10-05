import axios from "axios"

export async function handleRegisterUser (params){
    const apiURL = 'http://localhost:5000/user'
    const response  = await axios.post(apiURL, params)
    return response;
}

export async function handleLogin (params){
    const apiURL = 'http://localhost:5000/token'
    const response  = await axios.post(apiURL, params)
    return response;
}