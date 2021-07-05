import React, {useState} from 'react'
import {Modal} from 'react-bootstrap';
import StripeContainer from './StripeContainer';

const CheckoutModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //TODO:
    //Stripe backend find out how it works and find out how to add on other products (wine) DONE
    // - //add a payment API along and pairMeal API route on backend for CheckoutForm
    //when finished purchase remove from items from localStorage

    //take out cancel order when successfully paid useState.
    //Redirect the successful purchase instead.
    //Purchase API. Registers the purchases on handleSubmit/StripePayment based on product thats added to cart. 
    //Redirect to successful payment? or alert and redirect somewhere else
    //Fix authorization on checkout
    //Questions sections
    //Policy and Terms and conditions?
    //launch Netlify

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