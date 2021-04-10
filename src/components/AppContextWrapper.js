import React, {useState} from 'react'
import AppContext from './AppContext'
import User from './api'

const AppContextWrapper = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [token, setToken] = useState("")

    const register = async(userInfo) => {
        const res = await User.register(userInfo)
        if(res.data){
            setToken(res.data.token)
        }
        return res
    }

    const login = async(loginInfo) => {
        const res = await User.login(loginInfo)
        if(res.data){
            setToken(res.data.token)
        }
        return res //set token to localstorage for useeffect?
    }
    //add values here
    return (
        <div>
            <AppContext.Provider value={{currentUser, register, login, token}}>
            {children}
            </AppContext.Provider>
        </div>
    )
}

export default AppContextWrapper