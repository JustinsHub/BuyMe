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

// const login = async (username, password) => {
//     const res = await axios.post(`${BASE_URL}/auth/login`, 
//     )

// }
}

export default User