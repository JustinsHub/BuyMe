import axios from 'axios'

const BASE_URL = 'http://localhost:5001'


class User {

static async register (userInfo) {
    try{
    return await axios.post(`${BASE_URL}/auth/register`,
    userInfo
    )
    }catch(e){
        return e.response.data.error.message
        
    }
}

static async login (loginInfo) {
    try{
    return await axios.post(`${BASE_URL}/auth/login`,
    loginInfo 
    ) //apply token?
    }catch(e){
        return e.error // change
    }
}
}

export default User