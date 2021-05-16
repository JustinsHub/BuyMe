import React from 'react'
import Lottie from 'react-lottie'
import '../styles/loading.css'

const LoadSpinner = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../logos/gearLoading.json'), // the path to the animation json
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="Loading">
            <Lottie options={defaultOptions} height={200} width={200}/>
            <p>Loading</p>
        </div>
    )
}

export default LoadSpinner