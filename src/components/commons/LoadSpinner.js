import React from 'react'
import '../styles/loading.css'

const LoadSpinner =()=> {
    //add css to give it a little flare (loading icon) // fix loading icon

    return (
        <div className="Loading spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default LoadSpinner