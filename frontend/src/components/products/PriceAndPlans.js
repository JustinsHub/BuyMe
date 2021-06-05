import React from 'react'
import {useHistory} from 'react-router-dom'
import '../styles/Price&Plans.css'
import randomMeal from '../styles/images/randomMeal.jpeg'
import mealAndWine from '../styles/images/mealAndWine.jpeg'
import useError from '../custom-hooks/useError'

const PriceAndPlans = ({user}) => {
    const history = useHistory()
    const [loginError, setLoginError] = useError(null)

    const signatureMealPath = () => user ? history.push('/signature-meal') : setLoginError('Must login in order to continue') //make alert popup/modal?
    
    const pairMealPath = () => user ? history.push('/pair-meal') : setLoginError('Must login in order to continue')
    

    //add mock common questions?
    //put pricing on the each plan
    //when clicked api is called (have to create) on backend and add it on table 
    //when chosen shows which food/wine they're going to get (go to another page?)
    //card has shadow/ when hover on card shadow and transition
    //button pops when hovered
    return (
        <section className="PriceAndPlans">
            <h1>{loginError}</h1>
            <div className="container">
                <div className="PriceAndPlans-content">
                <div>
                    <h1 className="PriceAndPlans-t">Plans and Pricing
                    <p className="PriceAndPlans-sub mt-1">The meals are chosen for your conveniency!</p>
                    </h1>
                </div>
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className="PriceAndPlans-c card" style={{border: "0px"}}>
                            <img src={randomMeal} className="card-img-top" alt="Alternative Text"/>
                            <div className="card-body">
                                <h5 className="card-title">Signature</h5>
                                <p className="card-text">The Signature let's us choose a random meal from a wide variety of choices.</p>
                                <p></p>
                                <button className="PriceAndPlans-btn w-100 btn btn-default" onClick={signatureMealPath} style={{color: "white"}} >Select</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                    <div className="PriceAndPlans-c card" style={{border: "0px"}}>
                        <img src={mealAndWine} class="card-img-top" alt="Alternative Text"/>
                            <div className="card-body">
                                <h5 className="card-title">The Pair</h5>
                                <p className="card-text">The Pair! Receive a surprising meal along with our finest glass of wine that pairs well.</p>
                                <button className="PriceAndPlans-btn btn btn-default w-100" onClick={pairMealPath} style={{color: "white"}}>Select</button>
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