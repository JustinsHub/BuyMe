const express = require('express')
const router = new express.Router()
const Address = require('../models/addressModel')

router.get('/all', async(req, res, next) => {
    try{
    const results = await Address.getAllAddress()
    return res.json(results)
    }catch(e){
        return next(e)
    }
})

module.exports = router