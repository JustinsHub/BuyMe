import React, {useState} from 'react'

const SignUp = () => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        email: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(state => ({...state, [name]:value}))
    }
    return (
        <div>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                id="username"
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                id="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                id="email"
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