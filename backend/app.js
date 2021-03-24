const express = require('express')

const app = express()

app.use((error, req, res, next)=> {
    let status = error.status || 500
    let message = error.message
    return res.status(status).json({
        error:{message, status}
    })
})

app.listen(3000, ()=> {
    console.log('Server on PORT 3000')
})