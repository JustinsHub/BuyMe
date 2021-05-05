import React from 'react'
import {useHistory} from 'react-router-dom'
import useFormData from '../custom-hooks/useFormData'
import useError from '../custom-hooks/useError'

const Login = ({login, user}) => {
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const history = useHistory()
    
    const [formData, handleChange] = useFormData(INITIAL_STATE)
    const [loginError, setLoginError] = useError([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await login(formData)
        return (res.status === 201) ? history.push('/profile'): setLoginError(res)
    }
    //if a user is logged in, they will be redirected if they try to access this component
    if(user){
        history.push('/access/error') 
    }

    return (
        <div>
            {/* change UI errors warning */}
        {loginError && <h1>{loginError}</h1>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            placeholder="Username"
            onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            />
            <button>Login</button>
        </form>
        </div>
    )
}

export default Login