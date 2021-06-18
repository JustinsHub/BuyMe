import React, {useState} from 'react'
import parse from 'html-react-parser'
import {useHistory, Link} from 'react-router-dom'
import Products from './foodApi'
import LoadSpinner from '../commons/LoadSpinner'
import useLocalStorage from '../custom-hooks/useLocalStorage'
import '../styles/SignatureMeal.css'

//get a single random meal by requesting from API and render image and description
const SignatureMeal = ({user}) => {
    const signatureMealStorage = "signature-meal"
    const history = useHistory()
    const [mealTitle, setMealTitle] = useState(null)
    const [mealImage, setMealImage] = useState(null)
    const [mealPrice, setMealPrice] = useState(null)
    const [mealSummary, setMealSummary] = useState("")
    const [isRequesting, setIsRequesting] = useState(false)
    const [signatureMeal, setSignatureMeal] = useLocalStorage(signatureMealStorage)

    //look for payment api
    //move on to requesting our api when purchased
    //make user only be able to pick one random meal a day
    //have a countdown timer when clicked 24hour
    //css

    //requests random meal timed for loading to show animation (stores in localStorage and must run through as json to store multiple)
    const getRandomMeal = async() => {
        const res = await Products.getRandomMeal()
        const mealResults = await Products.getSignatureMeal()
        const mealPrice = mealResults.data[0].price
        const {image, title, summary} = res.data.recipes[0]
        setTimeout(() => {
            setMealTitle(title)
            setMealImage(image)
            setMealSummary(summary)
            setMealPrice(mealPrice)
        }, 4000)
        setIsRequesting(true)
    }

    //adds requested API info to localStorage to be able to pass info to Checkout component
    const addToCart = async () =>{ 
        await setSignatureMeal(JSON.stringify({mealTitle, mealImage, mealPrice}))
        setTimeout(()=> {
            history.push('/checkout')
        }, 500)
    }

    //setLogin error when redirected if not logged in...
    //useState change if theres added to cart
    //We can request the API HERE and users can either continue with purchase or wait till next time. (Have a second random pick?)
    
    // if(!user) {
    //     history.push("/error/must-login-or-signup")
    // }

    return (
        <div className="Signature-Meal-m global-t-a">
            {/* if the request has been filled then render the API(food) */}
            {mealImage ? 
                <div className="Signature-Meal-c card">
                    <div className="card-body">
                        <h1 className="Signature-Meal-f card-title">{mealTitle}</h1>
                        <div className="container">   
                        <div className="row">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6">
                            <img className="Signature-Meal-i" src={mealImage} alt="Signature Meal"/>
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>
                            <p>{parse(mealSummary)}</p>
                        </div>
                        <button className="btn btn-default mt-2" style={{color: "white"}} onClick={addToCart}>Add to Cart</button>
                    </div>
                    <p className="Signature-Meal-policy">Not satisfied with this choice? Check out our meal <Link style={{textDecoration: "none"}} to="/policy">policy</Link>.</p>
                </div>
                :   
                // add a conditional inside to render loading statement when requesting
            <div className="Signature-Meal-e" style={{width: "30rem"}}>
                {!isRequesting ?  
                <div className="Signature-Meal-e-c card">
                <div className="card-body">
                <div className="row">
                    <h1 className="Signature-Meal-f mb-4">The way it works</h1>
                    <div className="col-md-0">
                    </div> 
                    <p className="Signature-Meal-p-f col-md-12">
                            When you're ready, you <b>click the button</b>, we have a system that randomly chooses a meal for you from our wide variety of choices. Foods from all over the world.
                            The meal is one serving, for one person, at one sitting - <b>just heat and eat.</b>
                    </p>     
                    <div className="col-md-0">
                    </div>
                    
                    <div>
                    <button className="Signature-Meal-b btn btn-default w-25" style={{color: "white"}} onClick={getRandomMeal}>Get Meal</button>
                    </div>
                </div>
                </div>
                </div>
                : <div>
                    <LoadSpinner/> 
                    <p className="Signature-Meal-p-f m-4">Please wait while we retrieve your food!</p>
                </div>
                }
                {/* Not satisfied? make a quick policy and make it a modal about 24 hour rule */}
            </div>
        }

        </div>
    )
}


export default SignatureMeal
