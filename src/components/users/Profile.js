import React, {useContext} from 'react'
import AppContext from '../AppContext'
import {Redirect} from 'react-router-dom'

const Profile = () => {
    const {currentUser} = useContext(AppContext)
    // if(!currentUser){
    //     <Redirect to="/login"/>
    // }
    //only currentUser can access this page.
    //currentUser in order to access this page. Create API request from backend
    //add api how to edit
    //how to delete user as well.
    return (
        <div>
            Profile Page
        </div>
    )
}

export default Profile