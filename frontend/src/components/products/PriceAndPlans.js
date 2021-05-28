import React from 'react'
import '../styles/Price&Plans.css'

const PriceAndPlans = () => {
    //food and wine pairing prices grid
    //add mock common questions?

    //put pricing on the each plan
    //when clicked api is called (have to create) on backend and add it on table 
    //when chosen shows which food/wine they're going to get (go to another page?)
    return (
        <div className="PriceAndPlans">
            <div class="PriceAndPlans-c container">
                <div className="PriceAndPlans-content">
                <h1>Plans and Pricing</h1>
                <div class="row">
                    <div class="col-md">
                    <button className="btn btn-danger">This choice</button>
                    </div>
                    <div class="col-md">
                    Column
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PriceAndPlans