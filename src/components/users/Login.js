import React from 'react'
import useFormData from './custom-hooks/useFormData'

const Login = () => {
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const [formData, setFormData, handleChange] = useFormData(INITIAL_STATE)

    return (
        <div>
        <form>
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