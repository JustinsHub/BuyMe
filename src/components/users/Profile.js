import React from 'react'
import {useHistory} from 'react-router-dom'
import '../styles/SignUp.css'

const Profile = ({currentUser}) => {
    //TODO: 
    //how to make this render when updated? 
    //icons on page 
    //bootstrap for login component
    //api for our the website (payment/what are we selling
    const history = useHistory()

    const profileEdit = () => {
        history.push('/profile/edit')
    } 
    
    const {username, first_name, last_name, email, address} = currentUser.data

    if(!currentUser){
        history.push('/access/error')
    }

    //create a map through the 
    return (
        <main className="SignUp-form card">
        <div className="text-center">
            <div className="text-center">
                <h1 className="SignUp-create-account h2 mb-2 fw-normal">{username} Profile</h1>
                <p><b>First Name:</b> {first_name === null ? <i>First Name</i> : first_name}</p>
                <p><b>Last Name:</b> {last_name === null ? <i>Last Name</i> : last_name}</p>
                <p><b>Email:</b> {email === null ? <i>Email Address</i> : email}</p>
                <p><b>Address:</b> {address === null ? <i>Shipping Address</i> : address}</p>
                <div className="mt-3">
                <button className="w-100 btn btn-primary" type="submit" onClick={profileEdit}>Edit Profile</button>
                </div>
        </div>
    </div>
    </main>
    )
}

export default Profile