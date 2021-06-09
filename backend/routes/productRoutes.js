const express = require('express')
const router = new express.Router()
const Product = require('../models/productModels')

//add error handling
router.post('/signature/:mealId/purchase/:userId/', async(req, res, next) => {
    try{
        const {userId, mealId} = req.params
        await Product.signatureMealPurchase(userId, mealId)
        return res.json({purchased: "Signature Meal"})
    }catch(e){
        return next(e)
    }
})

router.post('/pair-meal/:pairId/purchase/:userId', async(req, res, next) => {
    try{
        const {userId, pairId} = req.params
        await Product.pairMealPurchase(userId, pairId)
        return res.json({purchased: "Pair Meal"})
    }catch(e){
        return next(e)
    }
})

module.exports = router