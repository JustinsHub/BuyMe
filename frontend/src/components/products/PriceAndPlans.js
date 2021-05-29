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
        <section className="PriceAndPlans">
            <div className="PriceAndPlans-c container">
                <div className="PriceAndPlans-content">
                <div>
                    <h1 className="PriceAndPlans-t">Plans and Pricing
                    <p className="PriceAndPlans-sub mt-1">The meals are chosen for your conveniency!</p>
                    </h1>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className="card" >
                            <img src={randomMeal} className="card-img-top" alt="Alternative Text"/>
                            <div className="card-body">
                                <h5 className="card-title">Signature</h5>
                                <p className="card-text">The Signature let's us choose a random meal from a wide variety of choices.</p>
                                <p></p>
                                <button className="w-100 btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                    <div className="card">
                        <img src={mealAndWine} class="card-img-top" alt="Alternative Text"/>
                            <div className="card-body">
                                <h5 className="card-title">The Pair</h5>
                                <p className="card-text">The Pair! Receive a surprising meal along with our finest glass of wine that pairs well.</p>
                                <button className="w-100 btn btn-primary">Select</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                </div>
            </div>
        <section className="PriceAndPlans-q">
            Question section
        </section>
        </section>
    )
}

export default PriceAndPlans