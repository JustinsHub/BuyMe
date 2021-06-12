import React, {useState, useEffect, useContext, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import AppContext from '../AppContext'
import useFormData from '../custom-hooks/useFormData'
import useError from '../custom-hooks/useError'
import {Modal, Button} from 'react-bootstrap'
import '../styles/global.css'

//Profile Edit component gets currentUsers profile initial value and update the value based on form input
const ProfileEdit = ({currentUser, currentAddress}) => {
    const {updateUser, deleteUser} = useContext(AppContext)
    const INITIAL_STATE = {
        first_name: currentUser.data.first_name || "",
        last_name: currentUser.data.last_name || "",
        email: currentUser.data.email || "",
    }

    const INITIAL_ADDRESS = {
        street_address: currentAddress.street_name || "",
        address_number: currentAddress.address_number || "", 
        city: currentAddress.city || "",
        state: currentAddress.state || "",
        zip_code: currentAddress.zip_code || "",
        country: currentAddress.country || ""
    }
    
    const [editData, handleChange] = useFormData(INITIAL_STATE)
    const [editAddress, handleAddressChange] = useFormData(INITIAL_ADDRESS)
    const [editError, setEditError] = useError([])
    const [show, setShow] = useState(false);
    const [disableButton, setDisableButton] = useState(true)
    const [disableUpdate, setDisableUpdate] = useState(true)
    const [counter, setCounter] = useState(10)
    const history = useHistory()

    //the countdown for enabling delete button based on counter state initial value
    const disableTimer = useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if(counter === 0) {
            setDisableButton(false) 
            setCounter(null)
        }
        //useEffect clean up
        return () => clearInterval(timer);
    }, [counter]);

    //holds useEffect render; disabling update button at first load by useRef and enables when/on .current(editData) is executed
    const loaded = useRef(null);
        useEffect(() => {
            if (loaded.current) {
                setDisableUpdate(false)
            } else {
                loaded.current = true;
            }
}, [editData]);

    //toggles show component and resets button to initial value returning disableTimer is specifically for the delete button
    const handleShow = () => {
        setShow(show => !show)
        setCounter(counter => 10)
        setDisableButton(true)
        return disableTimer
    }

    //handleSubmit request API to update user
    const handleSubmit = async(e) => { // e.preventDefault() taken out for refresh for update? Find a better way
        e.preventDefault()
        //adding user data info as second parameter to save updated initial value
        const res = await updateUser(currentUser.data.id, editData, editAddress) //object/editData must match API data names to be able to update
        return (res.status === 201) ? history.push('/profile') : setEditError('An error has occured.') // change to correct error
    }
    
    //handleDelete request API to delete the user permanently
    const handleDelete = async (e) => {
        e.preventDefault()
        const res = await deleteUser(currentUser.data.id) 
        return (res.status === 200) ? history.push('/') : setEditError('Something went wrong.') //set message successfully deleted on redirect page
    }

    return (
        <main className="global-form card rounded mx-auto d-block">
        <div className="text-center">
        <p>{editError}</p>
            <div>
            <form onSubmit={handleSubmit}>
                <h1 className="global-create-account h2 mb-2 fw-normal">Manage Account</h1>

                {/* User Edit */}
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
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={editData.email}
                    onChange={handleChange}
                    />
                </div>

                {/* Address edit */}
                <div>
                    <label htmlFor="street-address"/>
                    <input
                    id="street-address"
                    type="text"
                    name="street_address"
                    value={editAddress.street_address}
                    className="form-control" 
                    placeholder="Street Address"
                    onChange={handleAddressChange}/>
                </div>

                <div>
                    <label htmlFor="address-number"/>
                    <input
                    id="address-number"
                    type="number"
                    name="address_number"
                    value={editAddress.address_number}
                    className="form-control" 
                    placeholder="Suite/Apartment Number"
                    onChange={handleAddressChange}/>
                </div>

                <div>
                    <label htmlFor="city"/>
                    <input
                    id="city"
                    type="text"
                    name="city"
                    value={editAddress.city}
                    className="form-control" 
                    placeholder="City"
                    onChange={handleAddressChange}/>
                </div>
                <div>
                    <label htmlFor="State"/>
                    <input
                    id="state"
                    type="text"
                    name="state"
                    value={editAddress.state}
                    className="form-control" 
                    placeholder="State"
                    onChange={handleAddressChange}/>
                </div>
                <div>
                    <label htmlFor="zip-code"/>
                    <input
                    id="zip-code"
                    type="text"
                    name="zip_code"
                    value={editAddress.zip_code}
                    className="form-control" 
                    placeholder="Zip Code"
                    onChange={handleAddressChange}/>
                </div>
                <div>
                    <label htmlFor="Country"/>
                    <input
                    id="country"
                    type="text"
                    name="country"
                    value={editAddress.country}
                    className="form-control" 
                    placeholder="Country"
                    onChange={handleAddressChange}/>
                </div>

                <div className="mt-3">
                <button className="btn btn-warning" type="submit" disabled={disableUpdate}>Update</button> 
                </div>

                {/* Delete button features has a model and timer */}
                <div>
                    <Button style={{fontSize: "12px", color:"#da4343", marginTop:"5rem"}} variant="none" onClick={handleShow}>
                            Delete Profile
                        </Button>
                        <Modal
                            show={show}
                            onHide={handleShow}
                            backdrop="static"
                            keyboard={false}
                            animation={false}
                        >
                            <Modal.Header>
                            </Modal.Header>
                            <Modal.Body className="text-center">
                            <div>
                                Hello <b>{currentUser.data.username}</b>! This action cannot be undone! Once you delete your user profile, it will be gone forever!
                            </div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleShow} >
                                Close
                            </Button> 
                            <Button variant="danger" onClick={handleDelete} disabled={disableButton}>Delete Profile {counter}</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
            </form>
        </div>
    </div>
    </main>
    )
}



export default ProfileEdit