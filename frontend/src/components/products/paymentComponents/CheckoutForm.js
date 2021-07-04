import React, {useState} from 'react';
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

const CheckoutForm = () => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit = async (e) => {
      e.preventDefault();
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
      })
      
      if(!error){
        const {id} = paymentMethod
        const res = await Payment.signatureStripePayment(id)
        setSuccess(true)
        return res
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
        <h3>Successfully purchased your meal!</h3>
      </div>
      }
    </div>
  )
}

export default CheckoutForm
