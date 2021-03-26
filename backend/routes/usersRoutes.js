const express = require('express')
const router = new express.Router()

router.get('/', (req, res)=> {
    res.json('This is a route')
})

module.exports = router