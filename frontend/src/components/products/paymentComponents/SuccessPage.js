import React, {useState} from 'react'

const SuccessPage = () => {
    const ourMeal = localStorage.getItem('signature-meal') //put this in env or store it somewhere for the future
    const ourWinePair = localStorage.getItem('pair-meal') 

    const [purchasedMeal] = useState(JSON.parse(ourMeal))
    const [purchasedWine] = useState(JSON.parse(ourWinePair))
    //localStorage clear after purchase
    //conditional meal and wine whatever they purchased

    return (
        <div className="text-center global-mt">
            {!purchasedWine ?
            <p>You have successfully purchased {purchasedMeal.mealTitle}</p>
            :
            <p>Thank you using Pickout's service! You have successfully purchased {purchasedMeal.mealTitle} paired with { purchasedWine.wineTitle}
            will arrive shortly!
            </p>
            }
        </div>
    )
}

export default SuccessPage