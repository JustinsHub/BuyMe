import React from 'react'
import {useHistory} from 'react-router-dom'
import useFormData from '../custom-hooks/useFormData'
import User from '../api'
import useError from '../custom-hooks/useError'

const Login = () => {
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const history = useHistory()
    const [formData, setFormData, handleChange] = useFormData(INITIAL_STATE)
    const [loginError, setLoginError] = useError([])

    const handleSubmit = async (e) => {
        try{
        e.preventDefault()
        const res = await User.login(formData)
        return (res === 201) ? history.push('/profile'): setLoginError(res)
        }catch(e){
            return e
        }
    }

    return (
        <div>
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