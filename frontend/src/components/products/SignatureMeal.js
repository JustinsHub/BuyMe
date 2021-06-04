import React, {useState} from 'react'
import parse from 'html-react-parser'
import {useHistory} from 'react-router-dom'
import Products from './foodApi'
import '../styles/SignatureMeal.css'

const SignatureMeal = ({user}) => {
    const history = useHistory()
    const [randomMeal, setRandomMeal] = useState(null)
    const [mealTitle, setMealTitle] = useState(null)
    const [mealSummary, setMealSummary] = useState("")

    //look for payment api
    //move on to requesting our api when purchased
    //make user only be able to pick one random meal a day
    //css

    const getRandomMeal = async() => {
        const res = await Products.getRandomMeal()
        const {image, title, summary} = res.data.recipes[0]
        setMealTitle(title)
        setRandomMeal(image)
        setMealSummary(summary)
        console.log(res.data)
    }

    //setLogin error when redirected if not logged in...
    //useState change if theres added to cart
    //We can request the API HERE and users can either continue with purchase or wait till next time. (Have a second random pick?)
    
    // if(!user) {
    //     history.push("/error/must-login-or-signup")
    // }

    return (
        <div className="global-mt">
            <div class="container">
                <h1>{mealTitle}</h1>
            <div class="row">
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                    {/* change this to some rules or something on how it works */}
                {!randomMeal ? <p>Our Signature Meal</p> : <img className="Signature-Meal-i" src={randomMeal} alt="Signature Meal"/>}
                </div>
                <div class="col-md-4">
                </div>
            </div>
            <p>{parse(mealSummary)}</p>
            </div>
            <button className="Signature-Meal-btn btn btn-default" style={{color: "white"}} onClick={getRandomMeal}>Get Random Meal</button>
        </div>
        
    )
}

export default SignatureMeal