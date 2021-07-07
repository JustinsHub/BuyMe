import React, {useState} from 'react';
import { useHistory } from 'react-router';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import Payment from './paymentApi'
import '../../styles/StripePayments.css'

//CSS prop add on for CardElement
const CARD_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aaaaaa",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CheckoutForm = ({meal, pair}) => {
  const history = useHistory()

  const [ifPairMeal] = useState(localStorage.getItem('pair-meal'))
  const [success, setSuccess] = useState(false)

  const stripe = useStripe();
  const elements = useElements();
  
  const redirectSuccess = () => {
    return history.push('/successful-payment')
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
      })


      if(!error){
        const {id} = paymentMethod

        //checks if there is wine added to cart (localStorage)
        if(!ifPairMeal) { 
          const signatureMealPayment = await Payment.signatureStripePayment(id)
          meal()//our POST method for purchases when purchasing signature-meal passed down by a prop
          setSuccess(true)
          return signatureMealPayment
        } else {
          const pairMealPayment = await Payment.pairStripePayment(id)
          pair()
          setSuccess(true)
          return pairMealPayment
        }
      } else {
        console.log(error.message)
      }
  }

  return (
    <div>
      {!success ?
      <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup col-12 spectrum-background">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS}/>
          </div>
          </fieldset>
          <div className="text-center mt-3">
            <button className="Stripe-Payment-Button btn btn-default" style={{color: "white"}}>Place your order</button>
          </div>
      </form>
      : 
      <div>
        {redirectSuccess()}
      </div>
      }
    </div>
  )
}

export default CheckoutForm
