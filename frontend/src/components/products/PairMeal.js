import React, {useState} from 'react'
import Products from './foodApi'

const PairMeal = ({user}) => {
    const [pairMeal, setPairMeal] = useState(null) 

    const getPairMeal = async() => {
        const res = await Products.getPairWine()
        console.log(res.data)
    }

    return (
        <div className="global-mt">
            <button onClick={getPairMeal}>Get Pair Meal</button>
            <img src={pairMeal} alt="Pair Meal"/>
        </div>
    )
}

export default PairMeal