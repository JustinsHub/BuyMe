const express = require('express')
const router = new express.Router()
const Product = require('../models/productModels')

//add error handling
//id should be added on purchase API parameters

//GET signature Meal API
router.get('/signature-meal', async(req, res, next)=> {
    try{
        const results = await Product.getSignatureMeal()
        return res.json({signature_meal: results})
    }catch(e){
        return next(e)
    }
})

//GET pair meal API
router.get('/pair-meal', async(req, res, next)=> {
    try{
        const results = await Product.getPairMeal()
        return res.json({pair_meal: results})
    }catch(e){
        return next(e)
    }
})

//API to when purchasing signature meal(random meal)
router.post('/signature/:mealId/purchase/:userId/', async(req, res, next) => {
    try{
        const {userId, mealId} = req.params
        await Product.signatureMealPurchase(userId, mealId)
        return res.status(201).json({purchased: "Signature Meal"})
    }catch(e){
        return next(e)
    }
})

//API to when purchasing pair meal(random meal paired with wine)
router.post('/pair-meal/:pairId/purchase/:userId', async(req, res, next) => {
    try{
        const {userId, pairId} = req.params
        await Product.pairMealPurchase(userId, pairId)
        return res.status(201).json({purchased: "Pair Meal"})
    }catch(e){
        return next(e)
    }
})

module.exports = router