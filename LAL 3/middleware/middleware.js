const express = require("express")
const morgan = require("morgan")
const session = require('express-session')
const flash = require('connect-flash');
const setLocals = require('./setLocals')
const cors = require('cors')

//import our middleware
const {bindUserWithRequest} = require('./authMiddleware');


const middleware = [
    cors(),
    express.static('public'),
    morgan('dev'),
    express.urlencoded({ extended: true }),
    express.json(),
    session({
        secret: "This is secret message",
        resave: false,
        saveUninitialized: false
    }),
    flash(),
    bindUserWithRequest(),
    setLocals()
]


module.exports = app => {
    middleware.forEach(m => {
        app.use(m)
    })
}