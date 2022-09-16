const authRoute = require("./auth")
const mvc = require("./mvc")
const admin = require('./admin')
const projectRoute = require('./projectsRoute')
const messageRoute = require('./messageRoute')
const orderRoute = require('./orderRoute')


const routes = [

    {
        path: "/auth",
        handler: authRoute
    },
    {
        path: "/about",
        handler: (req,res)=>{
            res.render("pages/about")
        }
    },
    {
        path: "/project",
        handler: projectRoute
    },
    {
        path: "/message",
        handler: messageRoute
    },
    {
        path: "/order",
        handler: orderRoute
    },
    {
        path: "/admin",
        handler: admin
    },
    {
        path: "/",
        handler: (req,res)=>{
            res.render("pages/index")
        }
    }
]


module.exports = app =>{
    routes.forEach(r =>{
        if(r.path === '/'){
            app.get('/',r.handler)
        }else{
            app.use(r.path, r.handler)
        }
    })
}