import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Products from './foodApi'

const SignatureMeal = ({user}) => {
    const history = useHistory()
    const [randomMeal, setRandomMeal] = useState(null)

    //do wine pair and signature meal pair
    //look for payment api
    //move on to requesting our api when purchased
    //make user only be able to pick one random meal a day
    //css

    const getRandomMeal = async() => {
        const res = await Products.getRandomMeal()
        const {image} = res.data.recipes[0]
        setRandomMeal(image)
        console.log(res.data)
    }

    //setLogin error when redirected if not logged in...
    //useState change if theres added to cart
    //We can request the API HERE and users can either continue with purchase or wait till next time. (Have a second random pick?)
    
    if(!user) {
        history.push("/error/must-login-or-signup")
    }

    return (
        <div className="global-mt">
        <button onClick={getRandomMeal}>Get Random Meal</button>
        <img src={randomMeal} alt="Signature Meal"/>
        </div>
    )
}

export default SignatureMeal