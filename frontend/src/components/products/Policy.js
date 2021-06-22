import React from 'react'
import StripeContainer from './paymentComponents/StripeContainer'

const Policy = () => {
    return (
        // <div className="global-mt text-center">
        //     We have policy that let's you select the option to pick a random meal once every 24 hours. 
        //     You can purchase both signature meals and pair meals together but only between 24 hours given you selected a meal.
        // </div>
        <div className="global-mt d-flex justify-content-center">
            <StripeContainer/>
        </div>
    )
}

export default Policy