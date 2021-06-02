import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Products from './foodApi'

const SignatureMeal = ({user}) => {
    const [randomMeal, setRandomMeal] = useState(null)

    const getRandomMeal = async() => {
        const res = await Products.getRandomMeal()
        const {image} = res.data.recipes[0]
        setRandomMeal(image)
        console.log(res.data)
    }

    //setLogin error when redirected if not logged in...
    //useState change if theres added to cart
    //We can request the API HERE and users can either continue with purchase or wait till next time. (Have a second random pick?)

    // if(!user) {
    //     return <Redirect to='/error/must-login-or-signup'/>
    // }
    
    return (
        <div className="global-mt">
        <button onClick={getRandomMeal}>Get Random Meal</button>
        <img src={randomMeal} alt="Signature Meal"/>
        </div>
    )
}

export default SignatureMeal