const db = require('../config/db')

exports.homePageGetController = async(req,res,next) =>{
    let [rows,feilds] = await db.query("select * from projects limit 6;select count(id) as total from projects where status='Completed'")

    let [profiles,profilesFeilds] = await db.query("select slug,title from profiles;")
    let total = rows[1]
    console.log(total[0].total);
    
    res.render("pages",{projects:rows[0],completed:rows[1],profiles,title:'Home-Landacape Alliance Ltd'})
}

exports.aboutPageGetController = (req,res,next) =>{
    res.render("pages/about")
}

