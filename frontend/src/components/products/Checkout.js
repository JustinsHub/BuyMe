import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'

const Checkout = ({user, address}) => {
    //after 24 hour use of local storage, remove item.
    const [localSignatureMeal, setLocalSignatureMeal] = useState(JSON.parse(localStorage.getItem('signature-meal')))
    //user address for delivery. 
    //if no user address then notify user to update their profile for address.
    const {first_name, last_name, email} = user.data
    const {street_address, address_number, city, state, zip_code, country} = address.data
    
    return (
        //use effect the address here so when a user restarts it auto requests it
        //put this in a card
        //have the product in the middle?
        //problem with the changing the address and going back to checkout (put random meal in localStorage when going back to checkout?)
        //create a cart on navbar for user to go back (css when theres something on the cart?)
        //conditional on picking a meal when it's already picked revert back to checkout for finalization. (24 hour timer)
        <div className="global-mt">
            {street_address === null || "" ? 
            <div className="card">
                <div className="card-body">
                    <h3>You current don't have a shipping address on your profile. Please <Link className="global-link" to="/profile/edit">update</Link> your address in order to continue checkout.</h3>
                </div>
            </div>
            : 
            <div class="container">
                <h1 className="global-font global-link text-center">Review Your Order</h1>
                <div className="card">
                <div class="row">
                    <div class="col-md-4">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Shipping address</h6>
                                {/* modal change on address? */}
                                <div>
                                    <p className="global-ct card-text">{first_name} {last_name}</p>
                                    <p className="global-ct card-text">{street_address} {address_number}</p>
                                    <p className="global-ct card-text">{city}, {state} {zip_code}</p>
                                    <p className="global-ct card-text">{country}</p>
                                </div>

                                <div className="mt-5">
                                <h6 className="card-subtitle mb-2 text-muted">Email address</h6>
                                <p className="global-ct">{email}</p>
                            </div>
                            </div>
                    </div>
                        <div className="mt-2 col-md-4 text-center">
                            <h6 className="card-subtitle text-muted text-center">Items on your cart</h6>
                            {!localSignatureMeal ?
                            <p><b>Your cart is currently empty</b></p> :
                            <div>
                                <div>
                                    <b>{localSignatureMeal.mealTitle}</b>
                                </div>
                                <div>
                                    <img className="col-9 rounded" src={localSignatureMeal.mealImage} alt="signature-meal"></img>
                                </div>
                            </div>
                            }
                        </div>
                    <div class="col-md-4 mt-2">
                        <div className="card-body">
                            <div className="card"> 
                                <div className="container mt-4 mb-4">
                                    <div className="row">
                                        <div className="col-md-6"> 
                                            <div className="d-flex justify-content-start">                            
                                            <p className="card-subtitle text-muted">Item(s) total</p> 
                                            </div>
                                            
                                            <div className="d-flex justify-content-start">
                                            <p className="card-subtitle text-muted">Shipping</p> 
                                            </div>

                                            <div className="d-flex justify-content-start">
                                            <p className="card-subtitle text-muted">Sales tax</p>
                                            </div>
                                        </div>
                                    
                                        <div className="col-md-6"> 
                                            <div className="d-flex justify-content-end">
                                                    {!localSignatureMeal ?
                                                    <p className="card-subtitle text-muted">$0.00</p> :
                                                    <p className="card-subtitle text-muted">${localSignatureMeal.mealPrice}</p> 
                                                    }
                                                </div>      
                                                <div className="d-flex justify-content-end">
                                                    <p className="card-subtitle" style={{color: "green"}}>FREE</p>
                                                </div> 
                                                <div className="d-flex justify-content-end">   
                                                    <p className="card-subtitle text-muted">$0.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="card-subtitle"><b>Order total</b></p> 
                                            </div>

                                            <div className="col-md-6 d-flex justify-content-end">
                                            {!localSignatureMeal ?
                                                    <p className="card-subtitle text-muted"><b>$0.00</b></p> :
                                                    <p className="card-subtitle text-muted"><b>${localSignatureMeal.mealPrice}</b></p> 
                                            }
                                            </div>
                                        <div>
                                            {/* if someone tries to make an order either disable or modal your cart is empty */}
                                            <button className="w-100 btn btn-default mt-3" style={{color: "white"}}>Place your order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <p>Terms and conditions</p>
                    </div>
                </div>
                </div>
                </div>
            }
        </div>
    )
}

export default Checkout