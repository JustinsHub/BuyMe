const express = require('express')
const router = new express.Router()
const User = require('../models/usersModel')
const ExpressError = require('../expressError')
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../config')

router.post('/register', async(req, res, next)=> {
    const {username, password, email} = req.body
    try{
    if(!username || !password || !email){
        throw new ExpressError('All Field Inputs are required.', 400)
    }
    const newUser = await User.register(username, password, email)
    const token = jwt.sign({id: newUser.id.id}, SECRET_KEY) //signing ID only (must be the same sign as login to have no conflict in login/register)
    return res.status(201).json({Registered: username, token})
    }catch(e){
        if(e.code === '23505'){
            return next(new ExpressError('Username is taken.', 400))
        }
        return next(e)
    }
})

router.post('/login', async(req, res, next)=>{
    const {username, password} = req.body
    try{
    const user = await User.login(username, password)
    const token = jwt.sign({id: user.id}, SECRET_KEY) //signing ID only (must be the same sign as register to have no conflict in login/register)
        return res.status(201).json({LoggedIn: username, token})
    }catch(e){
        return next(e)
    }
})

module.exports = router