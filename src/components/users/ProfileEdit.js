import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AppContext from '../AppContext'
import useFormData from '../custom-hooks/useFormData'
import User from '../api'
import '../styles/SignUp.css'

const ProfileEdit = ({editUser}) => {
    const {currentUser} = useContext(AppContext)
    const history = useHistory()
    const INITIAL_STATE = {
        first_name: "",
        last_name: "",
        email: currentUser.data.email,
        address: ""
    }
    const [editData, handleChange] = useFormData(INITIAL_STATE)

    //handleSubmit request API to update user
    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await User.editUser(currentUser.data.id, editData) //object info added on api request
        return (res.status === 200) ? res : console.log("nope, error.")
    }

    return (
        <main className="SignUp-form card">
        <div className="text-center">
            <div>
            <form onSubmit={handleSubmit}>
                <h1 className="SignUp-create-account h2 mb-2 fw-normal">Manage Account</h1>

                <div>
                <label htmlFor="firstName"/>
                <input
                    id="firstName"
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={editData.first_name}
                    onChange={handleChange}
                    />
                </div>
                <div>
                <label htmlFor="lastName"/>
                <input
                    id="lastName"
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={editData.last_name}
                    onChange={handleChange}
                    />
                </div>

                <div>
                <label htmlFor="emailEdit"/>
                <input    
                    id="emailEdit"
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                    />
                </div>

                <div>
                <label htmlFor="addressEdit"/>
                <input    
                    id="addressEdit"
                    className="form-control"
                    type="text"
                    placeholder="Shipping Address"
                    name="address"
                    value={editData.address}
                    onChange={handleChange}
                    />
                </div>

                <div className="mt-3">
                <button className="w-100 btn btn-lg btn-warning" type="submit">Update</button> 
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; BuyMe</p>
            </form>
        </div>
    </div>
    </main>
    )
}

export default ProfileEdit