import axios from 'axios'

const BASE_URL = 'http://localhost:5001'


class User {

static async register (userInfo) {
    try{
    const res = await axios.post(`${BASE_URL}/auth/register`,
    userInfo
    )
    if(res) return {Registered: true}
    }catch(e){
        return e.response.data.error.message
    }
}

static async login (loginInfo) {
    try{
    const res = await axios.post(`${BASE_URL}/auth/login`,
    loginInfo
    )
    if(res) return {Login: true}
    }catch(e){
        return e.response.data.error.message // change
    }
}
}

export default User