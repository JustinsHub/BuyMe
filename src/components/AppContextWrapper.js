import React, {useState, useEffect} from 'react'
import AppContext from './AppContext'
import User from './api'
import useLocalStorage from './custom-hooks/useLocalStorage'
import jwt from 'jsonwebtoken'

const AppContextWrapper = ({children}) => {
    const localStorageKey = "token"

    const [currentUser, setCurrentUser] = useState(null)
    const [token, setToken] = useLocalStorage(localStorageKey) 

    //TODO: apply token on useEffect. Check to see if the user is logged in (currentUser)
    //Apply private routes if(!currentUser)
    //Change navbar when currentUser/logout button
    //Update profile route for user info and edit/delete feature(API Requests)
    //Look for API on what to build on the website.

    useEffect(()=> {
        const getCurrentUser = async()=> {
            //getting the current user using the token we stored in localStorage
            //if token, get current user by decoding the token object
        if(token){
            try{
            const {id} = jwt.decode(token)
            const user = await User.getUserId(id)
            delete user.data.password
            setCurrentUser(user)

        }catch(e){
            return e
        }
        //setLoading later
        }}
        getCurrentUser()
    }, [token])

    const register = async(userInfo) => {
        const res = await User.register(userInfo)
        if(res.data){
            setToken(res.data.token) //store token on localStorage when registered
        }
        return res
    }

    const login = async(loginInfo) => {
        const res = await User.login(loginInfo)
        if(res.data){   
            setToken(res.data.token) //store token on localStorage when logged in
        }
        return res 
    }

    const logout = () => {
        setCurrentUser(null)
    }
    
    return (
        <div>
            <AppContext.Provider value={{currentUser, register, login, logout, token}}>
            {children}
            </AppContext.Provider>
        </div>
    )
}

export default AppContextWrapper