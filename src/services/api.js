import axios from "axios"

const api = axios.create({
    baseURL: "http://cec8-2804-14d-4488-b4f-f8e1-de-75c9-3667.ngrok.io"
})

api.defaults.headers.common.AcceptEncoding = 'gzip';

export async function handleRegisterUser (params){
    const response  = await api.post('/user', params)
    return response;
}

export async function handleLogin (params){
    const response  = await api.post('/token/json', params)
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
    const response  = await api.post(`/ong/update/${id}`, params)
    return response.data;
}

export async function handleEditProfile (token, params, userID){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.post(`/user/update/${userID}`, params)
    return response.data;
}

export async function handleGetCasesInfo (token, ongID){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.get(`/ong/action/${ongID}`)
    return response.data;
}

export async function handleAddCases (token, params){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.post(`/action`, params)
    return response.data;
};

export async function handleGetUserInfo (token){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.get(`/user`)
    return response.data;
};

export async function handleDeleteCase (caseID, token){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.delete(`/action?id=${caseID}`)
    return response.data;
}

export async function handleUpdateCases (token, caseID, params){
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response  = await api.post(`/action/update/${caseID}`, params)
    return response.data;
}

