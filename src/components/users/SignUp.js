import React from 'react'
import {useHistory} from 'react-router-dom'
import useFormData from '../custom-hooks/useFormData'
import useError from '../custom-hooks/useError'
import '../styles/SignUp.css'

const SignUp = ({register, user}) => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        email: ""
    }
    const history = useHistory()
    const [formData, handleChange] = useFormData(INITIAL_STATE)  //custom hook has to be in order even if not in use.
    const [registerError, setRegisterError] = useError([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await register(formData)
        return (res.status === 201) ? history.push('/') : setRegisterError(res) //map through errors with css?
    }

    if(user){
        history.push('/access/error') //fix this
    }
    return (
        <main className="SignUp-form card">
        <div className="text-center">
            <div>
                {/* //change UI error */}
            {registerError && <h1>{registerError}</h1>} 
            <form onSubmit={handleSubmit}>
                <h1 className="SignUp-create-account h2 mb-2 fw-normal">Create Account</h1>

                <div>
                <label htmlFor="usernameInput"/>
                <input
                    id="usernameInput"
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    />
                </div>
                <div>
                <label htmlFor="passwordInput"/>
                <input
                    id="passwordInput"
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                <label htmlFor="passwordInput"></label>  
                </div>

                <div>
                <label htmlFor="emailInput"/>
                <input    
                    id="emailInput"
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="mt-3">
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; BuyMe</p>
            </form>
        </div>
    </div>
    </main>
    )
}



export default SignUp