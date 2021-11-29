import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000"
})

api.defaults.headers.common.AcceptEncoding = 'gzip';

export async function handleRegisterUser (params){
    const apiURL = 'http://localhost:5000/user'
    const response  = await axios.post(apiURL, params)
    return response;
}

export async function handleLogin (params){
    const apiURL = 'http://localhost:5000/token/json'
    const response  = await axios.post(apiURL, params)
    return response;
}

export async function hanldeCreateONG (params, token){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.post('/ong', params)
    return response;
}

export async function hanldeGetONG (token){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.get(`/ong/user`)
    return response.data;
}

export async function hanldeGetAllONG (token){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.get(`/ong/all`)
    return response.data;
}

export async function handleUpdateONG (token, id, params){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.put(`/ong/${id}`, params)
    return response.data;
}

export async function handleEditProfile (token, params){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.put(`/user`, params)
    return response.data;
}