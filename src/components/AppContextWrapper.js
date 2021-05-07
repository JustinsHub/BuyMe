import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import AppContext from './AppContext'
import User from './api'
import useLocalStorage from './custom-hooks/useLocalStorage'
import jwt from 'jsonwebtoken'
import LoadSpinner from './commons/LoadSpinner'

const AppContextWrapper = ({children}) => {
    const localStorageKey = "token"

    const [currentUser, setCurrentUser] = useState(null)
    const [token, setToken] = useLocalStorage(localStorageKey) 
    const [loading, setLoading] = useState(false)

    const history = useHistory()

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
            delete user.data.password //deletes hashed password to not show on data
            setCurrentUser(user)
        }catch(e){
            return e
        }
        }
    }
        setLoading(true)
        getCurrentUser()
    }, [token])

    //requests to register // creates jwt // sets token token to local storage
    const register = async(userInfo) => {
        const res = await User.register(userInfo)
        if(res.data){
            setToken(res.data.token) //store token on localStorage when registered
        }
        return res
    }

    //requests to login // checks jwt // sets token token to local storage
    const login = async(loginInfo) => {
        const res = await User.login(loginInfo)
        if(res.data){   
            setToken(res.data.token) //store token on localStorage when logged in
        }
        return res 
    }

    //redirects after setting the currentUser to null when executed
    const logout = () => {
        setCurrentUser(null)
        localStorage.clear()
        history.push('/login') 
    }

    //requests to delete user and set the currentUser to back to null
    const deleteUser = async(id) => {
        const res = await User.deleteUser(id)
        setCurrentUser(null)
        return res 
    }
    
    if(!loading) return <LoadSpinner/> //if anything is not loaded on the page, render this component

    return (
        <div>
            <AppContext.Provider value={{currentUser, register, login, logout, token, deleteUser}}>
            {children}
            </AppContext.Provider>
        </div>
    )
}

export default AppContextWrapper