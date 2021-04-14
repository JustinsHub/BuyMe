import React, {useState} from 'react'
import AppContext from './AppContext'
import User from './api'
import useLocalStorage from './custom-hooks/useLocalStorage'

const AppContextWrapper = ({children}) => {
    const localStorageValue = "local"

    const [currentUser, setCurrentUser] = useState(null)
    const [token, setToken] = useLocalStorage(localStorageValue) 

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
            setToken(res.data.token) //set token in localstorage. Create a hook to store it. 
        }
        return res 
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