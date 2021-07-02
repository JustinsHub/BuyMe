import React, {useState} from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios'
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
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CheckoutForm = ({close}) => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe();
  const elements = useElements();


  const handleSubmit = async (e) => { //try to pass this in modal to see
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
    <div className="d-flex justify-content-center">
      {!success ?
      <form onSubmit={handleSubmit}> 
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS}/>
          </div>
          </fieldset> 
          <div className="text-center mt-3">
            <button className="btn btn-default" style={{color: "white"}}>Place your order</button>
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
