import React from 'react'
import {useHistory} from 'react-router-dom'
import useFormData from '../custom-hooks/useFormData'
import useError from '../custom-hooks/useError'

const Login = ({login}) => {
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const history = useHistory()
    const [formData, setFormData, handleChange] = useFormData(INITIAL_STATE)
    const [loginError, setLoginError] = useError([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await login(formData)
        console.log(res)
        return (res.Login) ? history.push('/profile'): setLoginError(res)
    }

    return (
        <div>
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