import React from 'react'
import {Link} from 'react-router-dom'

const ErrorRedirect = () => {
    //css on this for better font/color
    return (
        <div className="global-mt">
            <h1>
            You must <Link to="/login">login</Link> to in order to continue.
            </h1>
            <p>
            Don't have an account? You can <Link to="/signup">sign up</Link> here.
            </p> 
        </div>
    )
}

export default ErrorRedirect