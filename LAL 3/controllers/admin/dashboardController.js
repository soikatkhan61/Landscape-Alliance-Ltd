const db = require('../../config/db')


exports.renderAdminDashboard = async(req, res)=>{
    let [rows,fields] =await db.query('select * from contact order by id desc limit 5;select * from orders order by id desc limit 5;')
    console.log(rows)
    res.render("admin",{totalMessage:rows[0],totalOrder:rows[1]});
}