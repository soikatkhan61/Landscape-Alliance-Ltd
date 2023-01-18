const  jwt = require('jsonwebtoken')
const  config = require('config')
const db = require("../config/dbm1")


exports.bindUserWithRequest = () =>{
    
    return async (req,res,next) =>{
        
        if(!req.session.isLoggedIn){
            return next()
        }

        try{
            let user
            jwt.verify(req.session.token, 'hsjidhgfsad', function(err, decoded) {
                db.query("select * from users where id=?",[decoded.id],(e,data)=>{
                    if(e){
                        next()
                    }
                    else if(data.length > 0){
                        user = data[0]
                        req.user = user
                        next()
                    }
                })
            });
           
        }catch(e){
            console.log(e)
            next(e)
        }

    }
}


exports.isAuthenticated = (req,res,next) =>{
    
    if(!req.session.isLoggedIn){
        return res.redirect('/auth/login')
    }
    next()
}


exports.isUnAuthenticated = (req,res,next) => {
    if(req.session.isLoggedIn){
        return res.redirect('/')
    }

    next()
}