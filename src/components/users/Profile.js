import React, {useContext} from 'react'
import AppContext from '../AppContext'

const Profile = () => {
    const {currentUser} = useContext(AppContext)
    //currentUser in order to access this page. Create API request from backend
    //add api how to edit
    //how to delete user as well.

    
    const {username, first_name, last_name, email, address} = currentUser.data
        
    return (
        <main className="SignUp-form card">
        <div className="text-center">
            {console.log(currentUser)}
            <div>
            <form>
                <h1 className="SignUp-create-account h2 mb-2 fw-normal">{username} Profile</h1>
                <p>First Name: {first_name === null ? <i>First Name</i> : first_name}</p>
                <p>Last Name: {last_name === null ? <i>Last Name</i> : last_name}</p>
                <p>Email: {email === null ? <i>Email Address</i> : email}</p>
                <p>Address: {address === null ? <i>Address</i> : address}</p>
                <p></p>
                <div className="mt-3">
                <button className="w-100 btn btn-lg btn-primary" type="submit">Edit Profile</button>
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; BuyMe</p>
            </form>
        </div>
    </div>
    </main>
    )
}

export default Profile