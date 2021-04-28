import React from 'react'
import {useHistory} from 'react-router-dom'

const AccessError = () => {
    const history = useHistory()
    const goHome = () => {
        history.push('/')
    }

    return(
    <div>
        <h2>Must logout in order to Sign Up or Login.</h2>
        <div>
            <button className="btn btn-primary" onClick={goHome}>Go Home</button>
        </div>
    </div>
    )
}

export default AccessError