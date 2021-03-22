import React, {useState} from 'react'

const Login = () => {
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange  = () => {
        const {name, value} = e.target
        setFormData(state => ({...state, [name]:value}))
    }
    return (
        <div>
        <form>
            <label htmlFor="username">Username:</label>
            <input
            id="username"
            name="username"
            value={formData.username}
            placeholder="Username"
            onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
            id="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            />
        </form>
        </div>
    )
}

export default Login