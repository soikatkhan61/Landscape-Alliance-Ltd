const express = require("express")
const morgan = require("morgan")

const middleware = [
    express.static('public'),
    morgan('dev'),
    express.json(),
    express.urlencoded({extended: true})
]


module.exports = app =>{
    middleware.forEach(m =>{
        app.use(m)
    })
}