import React from 'react'
import useFormData from './custom-hooks/useFormData'

const SignUp = () => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        email: ""
    }
    const [formData, setFormData, handleChange] = useFormData(INITIAL_STATE)

    return (
        <div>
            <form>
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