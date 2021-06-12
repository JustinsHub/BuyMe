import React from 'react'

const Checkout = ({user}) => {
    //user address for delivery. 
    //if no user address then notify user to update their profile for address.
    console.log(user)
    const {address} = user.data
    return (
        //address needs to be in another db table? reference it on the user table?
        <div className="global-mt">
            {address === null ? 
            <p>You currently don't have an address on file. Please update your address on your profile.</p> 
            : 
            <p>{address}</p>}
        </div>
    )
}

export default Checkout