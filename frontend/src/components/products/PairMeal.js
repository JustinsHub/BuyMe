import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Products from './foodApi'
import useLocalStorage from '../custom-hooks/useLocalStorage'
import shuffleArray from '../commons/shuffleArray'

//User is able to pick this option that requests a random meal paired with a random recommended wine that works well together
const PairMeal = ({user}) => {
    const pairMealStorage = "pair-meal"

    const history = useHistory()
    const [randMealTitle, setRandMealTitle] = useState(null) 
    const [randMealImage, setRandMealImage] = useState(null)
    const [randWineTitle, setRandWineTitle] = useState(null)
    const [randWineSummary, setRandWineSummary] = useState(null)
    const [randWineImage, setRandWineImage] = useState(null)
    const [pairMeal, setPairMeal] = useLocalStorage(pairMealStorage)

    //make a it like SignatureMeal but combined. 
    //load state in function? Until request is finished then load the screen.
    //look for description for both and combined it.
    //css
    const getPairMeal = async() => {
        const randMeal = await Products.getRandomMeal()
        // const randWine = await Products.getRandomWine()
        // //shuffles through the returned wine list and returns the first value of API array
        // const ourWines = shuffleArray(randWine.data.recommendedWines)
        // const {title: wineTitle, description, imageUrl} = ourWines
        const {title: foodTitle, image} = randMeal.data.recipes[0]
        // sets object keys to the API values

        // setRandWine(randWine.title = wineTitle, randWine.description = description, randWine.imageUrl = imageUrl)
    }

    // if(!user) {
    //     history.push("/error/must-login-or-signup")
    // }

    return (
        <main className="global-mt">
            <div className="card">
            {/* <img src={randMeal} alt="Random Meal"/> */}
            {/* <img src={randWine} alt="Random Wine"/> */}
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Combination of description</p>
                    <button onClick={getPairMeal}>Get Pair Meal</button>
                </div>
            </div>

        </main>
    )
}

export default PairMeal