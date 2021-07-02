import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import StripeContainer from './StripeContainer';

const CheckoutModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
    <span onClick={handleShow}>
        Proceed to checkout
    </span>

    <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header className="d-flex justify-content-center global-font" style={{fontSize: "23px"}}>
            Enter your debit or credit card
        </Modal.Header>
        <Modal.Body>
            <StripeContainer />
            <p className="global-remove-cart text-center mt-2" onClick={handleClose}>Cancel order</p>
        </Modal.Body>
    </Modal>
    </>
    )
}


export default CheckoutModal