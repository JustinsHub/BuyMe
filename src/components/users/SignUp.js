import React from 'react'
import {useHistory} from 'react-router-dom'
import useFormData from '../custom-hooks/useFormData'
import useError from '../custom-hooks/useError'
import User from '../api'

const SignUp = ({addUser}) => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        email: ""
    }
    const history = useHistory()
    const [formData, setFormData, handleChange] = useFormData(INITIAL_STATE) 
    const [registerError, setRegisterError] = useError([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await User.register(formData)
        return (res.status === 201) ? history.push('/') : setRegisterError(res) //map through errors with css?
    }

    return (
        <div>
            {registerError && <h1>{registerError}</h1>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                id="username"
                type="text"
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                id="password"
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                id="email"
                type="text"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp