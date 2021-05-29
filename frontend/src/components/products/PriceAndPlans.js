import React from 'react'
import '../styles/Price&Plans.css'
import randomMeal from '../styles/images/randomMeal.jpeg'
import mealAndWine from '../styles/images/mealAndWine.jpeg'

const PriceAndPlans = () => {

    //food and wine pairing prices grid
    //add mock common questions?
        

    //put pricing on the each plan
    //when clicked api is called (have to create) on backend and add it on table 
    //when chosen shows which food/wine they're going to get (go to another page?)
    //card has shadow/ when hover on card shadow and transition
    //button pops when hovered
    return (
        <div className="PriceAndPlans">
            <div class="PriceAndPlans-c container">
                <div className="PriceAndPlans-content">
                <h1 className="PriceAndPlans-t">Plans and Pricing</h1>
                <div class="row">
                    <div class="col-md">
                        <div class="card" style={{width: "18rem;"}}>
                            <img src={randomMeal} class="card-img-top" alt="Alternative Text"/>
                            <div class="card-body">
                                <h5 class="card-title">Signature</h5>
                                <p class="card-text">The Signature let's us choose a random meal from a wide variety of choices.</p>
                                <button className="w-100 btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                    <div class="card" style={{width: "18rem;"}}>
                        <img src={mealAndWine} class="PriceAndPlans-m-w card-img-top" alt="Alternative Text"/>
                            <div class="card-body">
                                <h5 class="card-title">The Pair</h5>
                                <p class="card-text">The Pair! Receive a surprising meal along with our finest glass of wine that pairs well.</p>
                                <button className="w-100 btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div>
                Questions fix this piece of shit
            </div>
        </div>
    )
}

export default PriceAndPlans