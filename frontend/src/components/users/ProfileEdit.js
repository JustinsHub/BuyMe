import React, {useState, useEffect, useContext, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import AppContext from '../AppContext'
import useFormData from '../custom-hooks/useFormData'
import useError from '../custom-hooks/useError'
import {Modal, Button} from 'react-bootstrap'
import '../styles/global.css'

//Profile Edit component gets currentUsers profile initial value and update the value based on form input
const ProfileEdit = ({currentUser}) => {
    const {updateUser, deleteUser} = useContext(AppContext)
    const INITIAL_STATE = {
        first_name: currentUser.data.first_name || "",
        last_name: currentUser.data.last_name || "",
        email: currentUser.data.email || "",
        address: currentUser.data.address || "",
    }

    const [editData, handleChange] = useFormData(INITIAL_STATE)
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
        const res = await updateUser(currentUser.data.id, editData) //object/editData must match API data names to be able to update
        return (res.status === 201) ? history.push('/profile') : setEditError('An error has occured.') // change to correct error
    }
    
    //handleDelete request API to delete the user permanently
    const handleDelete = async (e) => {
        e.preventDefault()
        const res = await deleteUser(currentUser.data.id) 
        return (res.status === 200) ? history.push('/') : setEditError('Something went wrong.') //set message successfully deleted on redirect page
    }

    return (
        <main className="global-form card rounded mx-auto d-block" style={{height: "30rem"}}>
        <div className="text-center">
        <p>{editError}</p>
            <div>
            <form onSubmit={handleSubmit}>
                <h1 className="global-create-account h2 mb-2 fw-normal">Manage Account</h1>

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
                <button className="btn btn-warning" type="submit" disabled={disableUpdate}>Update</button> 
                </div>
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