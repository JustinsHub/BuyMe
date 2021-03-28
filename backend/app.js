const express = require('express')
const morgan = require('morgan')
const usersRoutes = require('./routes/usersRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.use('/users', usersRoutes)

app.use((error, req, res, next)=> {
    let status = error.status || 500
    let message = error.message
    return res.status(status).json({
        error:{message, status}
    })
})

module.exports = app