const express = require('express');
const router = new express.Router()
const stripe = require('stripe')("sk_test_51HscgAHbmlANNp9nAXqMZGzMbxSYJeCMqYUytQZX4rhSVr0NzNDIUQJtDesZFMtd2qEcji78KzgVzCfZH68FV9H200bBeMqptT")

router.post('/payment', async(req, res, next) => {
    let {amount, id} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount, 
            currency: "USD",
            description: "Signature Meal",
            payment_method: id,
            confirm: true
        })
        console.log("payments", payment)
        return res.json({
            message: "Payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        return res.json({
            message: "Payment failed",
            success: false
        })
    }
})

// router.post('/checkout', async (req, res, next) => {
//     try{
//     const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//         {
//         price_data: {
//             currency: 'usd',
//             product_data: {
//             name: 'T-shirt',
//             },
//             unit_amount: 2000,
//         },
//         quantity: 1,
//         },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:5000/',
//     cancel_url: 'http://localhost:5000/access/error',
//     });

//     res.json({ id: session.id });
// }catch(e){
//     return next(e)
// }});

// router.get('/secret', async (req, res, next) => {
//     try{
//     const intent = await stripe.paymentIntents.create({
//         amount: 1099,
//         currency: 'usd',
//         // Verify your integration in this guide by including this parameter
//         metadata: {integration_check: 'accept_a_payment'},
//     });
//     res.json({client_secret: intent.client_secret});
// }catch(e){
//     return next(e)
// }});

module.exports = router