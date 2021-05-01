import axios from 'axios'

const BASE_URL = 'http://localhost:5001'


class User {

static async register (userInfo) {
    try{
        const res = await axios.post(`${BASE_URL}/auth/register`,
        userInfo
    )
    return res
    }catch(e){
        return e.response.data.error.message
    }
}

static async login (loginInfo) {
    try{
        const res = await axios.post(`${BASE_URL}/auth/login`,
        loginInfo
    )
    return res
    }catch(e){
        return e.response.data.error.message
    }
}

static async getUserId(id){
    try{
        const res = await axios.get(`${BASE_URL}/users/${id}`)
        return res
    }catch(e){
        return e.response.data.error.message
    }
}

static async editUser(id){
    try{
    const res = await axios.get(`${BASE_URL}/update/${id}`)
    return res
    }catch(e){
        return e.response.data.error.message
    }
}
}

export default User