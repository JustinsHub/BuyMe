const express = require('express')
const router = new express.Router()
const Product = require('../models/productModels')

router.post('/purchase/:userId/:mealId', async(req, res, next) => {
    try{
        const {userId, mealId} = req.params
        await Product.signatureMealPurchase(userId, mealId)
        return res.json({purchased: mealId})
    }catch(e){
        return next(e)
    }
})

module.exports = router