const express = require("express")
const moment = require("moment")

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

app.use((req,res,next) =>{
    let error = new Error("404 page not found")
    error.status = 404

    next(error)
})

app.use((error,req,res,next) =>{
    if(error.status == 404){
        return res.render("pages/error/404" ,{title: "Page not found",flashMessage:""})
    }
    console.log(error)
    res.render("pages/error/500",{title: "Internel server errors found",flashMessage:"" })
})



const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("app listen on port 3000")
})