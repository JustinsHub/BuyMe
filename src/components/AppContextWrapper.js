import React, {useState} from 'react'
import AppContext from './AppContext'
import User from './api'

const AppContextWrapper = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [token, setToken] = useState(false)

    const register = async(userInfo) => {
        const res = await User.register(userInfo)
        setToken(res.token)
        return res
    }

    const login= async(loginInfo) => {
        const res = await User.login(loginInfo)
        setToken(res.token) //console token to see if it prints
        return res
    }
    //add values here
    return (
        <div>
            <AppContext.Provider value={{currentUser, register, login}}>
            {children}
            </AppContext.Provider>
        </div>
    )
}

export default AppContextWrapper