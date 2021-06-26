import React, {useState} from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios'
import '../../styles/StripePayments.css'

//CSS prop add on
const CARD_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
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
      const {error, paymentMethod} = await stripe.paymentMethod({
        type: "card",
        elements: elements.getElement(CardElement)
      })

      if(!error){
        try{
          const {id} = paymentMethod
          const res = await axios.post(`http://localhost:5001/checkout`, {
                amount: 8990,
                id
                }
              )
              if(res.data.success){
                console.log("Successful payment")
                setSuccess(true)
              }
        }catch(e){
            console.log("Error", e)
        }
      } else {
        console.log(error.message)
      }
  }

  return (
    <div>
      {!success ?
      <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS}/>
          </div>
          </fieldset> 
          <button>Place your order</button>
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