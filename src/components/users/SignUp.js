import React from 'react'
import {useHistory, Redirect} from 'react-router-dom'
import useFormData from '../custom-hooks/useFormData'
import useError from '../custom-hooks/useError'
import '../styles/global.css'

const SignUp = ({register, user}) => {
    const INITIAL_STATE = {
        username: "",
        password: "",
        email: ""
    }
    const history = useHistory()
    const [formData, handleChange] = useFormData(INITIAL_STATE)  //custom hook has to be in order of return even if not in use.
    const [registerError, setRegisterError] = useError([])

    //requests register when submitted
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await register(formData)
        return (res.status === 201) ? history.push('/') : setRegisterError(res) //map through errors with css?
    }
    //intentional access to this component will result to redirect
    if(user){
        return <Redirect to="/access/error"/>
    }
    return (
        <main className="global-form card rounded mx-auto d-block">
        <div className="text-center">
            <div>
                {/* //change UI error */}
            {registerError && <h1>{registerError}</h1>} 
            <form onSubmit={handleSubmit}>
                <h1 className="global-create-account h2 mb-2 fw-normal">Create Account</h1>

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
            </form>
        </div>
    </div>
    </main>
    )
}



export default SignUp