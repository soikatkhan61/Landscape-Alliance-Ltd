const express = require("express")
const moment = require("moment")


//import code
const {homePageGetController} = require("./controllers/myController")

//import middleware
const setMiddleware = require("./middleware/middleware")
//import route
const setRoutes = require("./routes/routes")



const app = express()
var shortDateFormat = "ddd @ h:mmA"; 
app.locals.moment = moment; 
app.locals.moment = time => moment(time).fromNow()

//setup view engine
app.set('view engine' ,'ejs')
app.set('views','views')

//set the middleware from middleware directory
setMiddleware(app)

//set the routes from routes directory
setRoutes(app)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("app listen on port 3000")
})