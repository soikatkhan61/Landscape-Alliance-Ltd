const db = require('../../config/db')


exports.renderAdminDashboard = async(req, res)=>{
    let [rows,fields] =await db.query('select * from contact;select * from orders;')
    console.log(rows)
    res.render("admin",{totalMessage:rows[0],totalOrder:rows[1]});
}