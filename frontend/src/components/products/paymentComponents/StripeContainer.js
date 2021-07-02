import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import { PUBLIC_KEY } from '../../config';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({close}) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm close={close}/>
        </Elements>
    )
}

export default StripeContainer