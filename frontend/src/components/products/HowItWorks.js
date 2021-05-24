import React from 'react'
import Lottie from 'react-lottie'

const HowItWorks = () => {
    //add animation from Lottie/Lordicon?

    const randomFoodScroll = {
        loop: true,
        autoplay: true,
        animationData: require('../styles/logos/randomFoodScroll.json'), // the path to the animation json
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const clientChoice = {
        loop: true,
        autoplay: true,
        animationData: require('../styles/logos/clientChoice.json'), // the path to the animation json
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const deliveryDriver = {
        loop: true,
        autoplay: true,
        animationData: require('../styles/logos/deliveryDriver.json'), // the path to the animation json
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    //food background
    return (
        <div>
        <div class="container">
            <div>
                <h1>How it works</h1>
            </div>
            <div class="row">
                <div class="col-md">
                    <Lottie options={randomFoodScroll} width={250} height={210}></Lottie>
                    <h4>We choose a meal for you</h4>
                    <p>So you don't have to stress</p>
                </div>
                <div class="col-md">
                    <Lottie options={clientChoice} width={310} height={210}></Lottie>
                    <h4>You make your own choice of how you want it</h4>
                    <p>You have the option to have the ingredients delivered to be a chef for the day or we can cook it for you!</p>
                </div>
                <div class="col-md">
                    <Lottie options={deliveryDriver} width={250} height={210}></Lottie>
                    <h4>Delivery at your door!</h4>
                    <p>Have it ready to be enjoyed!</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks