import React, {useState} from 'react'
import { useHistory } from 'react-router'

const SuccessPage = ({user}) => {
    const history = useHistory()

    const ourMeal = localStorage.getItem('signature-meal') //put this in env or store it somewhere for the future for no repetition
    const ourWinePair = localStorage.getItem('pair-meal') 

    const [purchasedMeal] = useState(JSON.parse(ourMeal))
    const [purchasedWine] = useState(JSON.parse(ourWinePair))
    //localStorage clear wine and meal after purchase
    //no checkout without address
    //clean className and all other errors/alerts
    //apply alerts when successfully doing something (ex:logging out, payment, changed address)

    if(!user) {
            history.push("/error/must-login-or-signup")   
    }

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