import React, {useContext} from 'react'
import AppContext from '../AppContext'
import useFormData from '../custom-hooks/useFormData'

const ProfileEdit = () => {
    const INITIAL_STATE = {
        firstName: "",
        lastName: "",
        email: "",
        address: ""
    }
    const {currentUser} = useContext(AppContext)
    const [editData, handleChange] = useFormData(INITIAL_STATE)

    return (
        <main>
        <div className="text-center">
            <div>
            <form >
                <h1 className="SignUp-create-account h2 mb-2 fw-normal">Create Account</h1>

                <div>
                <label htmlFor="firstName"/>
                <input
                    id="firstName"
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={editData.firstName}
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
                    name="lastName"
                    value={editData.lastName}
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
                <button className="w-100 btn btn-lg btn-primary" type="submit">Update User</button>
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; BuyMe</p>
            </form>
        </div>
    </div>
    </main>
    )
}

export default ProfileEdit