const db = require('../config/db')

exports.homePageGetController = async(req,res,next) =>{
    let [rows,feilds] = await db.query("select * from projects limit 6")
    console.log(rows)
    res.render("pages",{projects:rows})
}

exports.aboutPageGetController = (req,res,next) =>{
    res.render("pages/about")
}