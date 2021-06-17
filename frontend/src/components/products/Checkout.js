import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Product from './foodApi'

const Checkout = ({user, address}) => {
    //user address for delivery. 
    //if no user address then notify user to update their profile for address.
    const {first_name, last_name, email} = user.data
    const {street_address, address_number, city, state, zip_code, country} = address.data
    const getSignatureMeal = localStorage.getItem('signature-meal')
    console.log(getSignatureMeal)
    
    // console.log(address.data)
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
                <div className="card">
                <div class="row">
                    <div class="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Shipping address</h6>
                                {/* modal change on address? */}
                                    <p>{first_name} {last_name}</p>
                                    <p className="card-text">{street_address} {address_number}</p>
                                    <p className="card-text">{city}, {state} {zip_code}</p>
                                    <p className="card-text">{country}</p>
                                <div>
                                <h6 className="card-subtitle mb-2 text-muted">Email address</h6>
                                <p>{email}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                        <div class="col-md-4 text-center">
                            Column
                        </div>
                    <div class="col-md-4">
                        <div className="card">
                            <p>Item(s) total</p>
                            <p>Shipping</p>
                            <p>Sales tax</p>
                            <hr></hr>
                            <p>Order total</p>
                            <div className="card-body">
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