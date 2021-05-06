import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import AppContext from '../AppContext'
import useFormData from '../custom-hooks/useFormData'
import User from '../api'
import useError from '../custom-hooks/useError'
import '../styles/SignUp.css'

const ProfileEdit = () => {
    const {currentUser, deleteUser} = useContext(AppContext)
    const history = useHistory()
    const INITIAL_STATE = {
        first_name: currentUser.data.first_name || "",
        last_name: currentUser.data.last_name || "",
        email: currentUser.data.email || "",
        address: currentUser.data.address || ""
    }
    const [editData, handleChange] = useFormData(INITIAL_STATE)
    const [editError, setEditError] = useError([])
    const [dataWarning, setDataWarning] = useState("")

    //handleSubmit request API to update user
    const handleSubmit = async(e) => {
        e.preventDefault()
        //adding user data info as second parameter to save edited version
        const res = await User.editUser(currentUser.data.id, editData) //object/editData must match API data names.
        return (res.status === 201) ? history.push('/profile') : setEditError('An error has occured.') // change to correct error
    }

    //apply asks for password in order to delete // gives onclick warning
    const handleDelete = async (e) => {
        e.preventDefault()
        setDataWarning("WARNING: If you continue, your account will be deleted forever!") //place this somewhere in the JSX
        const res = await deleteUser(currentUser.data.id)
        return (res.status === 200) ? history.push('/') : console.log("error") //message successfully deleted
    }
    return (
        <main className="SignUp-form card">
        <div className="text-center">
        <p>{editError}</p>
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
                <button className="w-100 btn btn-warning" type="submit">Update</button> 
                </div>
                <div className="mt-3">

                {/* opens up modal warning */}
                <button type="button" className="w-100 btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Delete Profile
                </button>

                {/* Modal  TODO:CSS center warning text and red*/}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title text-center" id="exampleModalLabel">Warning!</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        This action cannot be undone. Once you delete your profile, it is gone forever!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Profile</button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; BuyMe</p>
            </form>
        </div>
    </div>
    </main>
    )
}

export default ProfileEdit