import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Products from './foodApi'
import shuffleArray from '../commons/shuffleArray'

//User is able to pick this option that requests a random meal paired with a random recommended wine that works well together
const PairMeal = ({user}) => {
    const history = useHistory()
    const [randMeal, setRandMeal] = useState(null) 
    const [randWine, setRandWine] = useState(null)

    //load state in function? Until request is finished then load the screen. Put a nice loading on it.
    //look for description for both and combined it.
    //css
    const getPairMeal = async() => {
        const randMeal = await Products.getRandomMeal()
        const randWine = await Products.getRandomWine()
        //shuffles through the returned wine list and returns the first value of API array
        const ourWines = shuffleArray(randWine.data.recommendedWines)
        const {imageUrl} = ourWines
        const {image} = randMeal.data.recipes[0]
        setRandMeal(image)
        setRandWine(imageUrl)
        console.log(ourWines)
    }

    // if(!user) {
    //     history.push("/error/must-login-or-signup")
    // }

    return (
        <div className="global-mt">
            <button onClick={getPairMeal}>Get Pair Meal</button>
            <img src={randMeal} alt="Random Meal"/>
            <img src={randWine} alt="Random Meal"/>
        </div>
    )
}

export default PairMeal