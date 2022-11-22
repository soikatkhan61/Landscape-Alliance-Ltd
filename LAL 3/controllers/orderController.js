const db = require("../config/db");
const { validationResult } = require("express-validator");
const errorFormatter = require("../utils/validationErrorFormatter");

exports.renderOrderController = async (req, res, next) => {
  try {
    const [rows, fields] = await db.query('select title from projects');
    console.log(rows);
    res.render("pages/orderPage",{title:'Book Now', values: '',
      error: '',location:rows});
  } catch (error) {
    next(error);
  }
};

exports.orderPostController = async (req, res, next) => {
  let { name, email, phone, project_name, area_pref } = req.body;
  console.log(req.body)
  try {
    let errors = validationResult(req).formatWith(errorFormatter);
    console.log("ami execute hoichi");
    if (!errors.isEmpty()) {
      return res.render("pages/orderPage", {
        title:'Book Now',
        values: {
          name,
          email,
          phone,
          project_name,
          area_pref,
        },
        error: errors.mapped(),
      });
    }

    const [rows, fields] = await db.query('insert into orders values(?,?,?,?,?,?,?,?,?)',[null,name,email,phone,project_name,area_pref,'0',null,null]);

    if(rows.insertId){
        res.render("pages/utils/thankyou",{title:`Thank you ${name}!`,name})
    }else{
        res.send('falied')
    }
  } catch (error) {
    next(error);
  }
};


exports.adminOrderGetController = async (req,res,next) => {
  let currentPage = parseInt(req.query.page) || 1
  let itemPerPage = 15

  let respond = req.query.respond
  let sql = ''
  if(respond == 'true'){
    sql = `select count(*) as count from orders;select * from orders where respond = '1' limit ${((itemPerPage * currentPage) - itemPerPage)}, ${itemPerPage}`
  }else{
    sql = `select count(*) as count from orders;select * from orders where respond = '0' limit ${((itemPerPage * currentPage) - itemPerPage)}, ${itemPerPage}`
  }
  try {
    const [rows, fields] = await db.query(sql);
    let totalOrder = rows[0]
    let totalPage = Math.ceil(totalOrder[0].count / itemPerPage)

    res.render("admin/pages/order/orders",{orders:rows[1],currentPage,itemPerPage,totalPage})
  } catch (error) {
    next(error)
  }
}

exports.respondController = async (req,res,next) => {
  let order_id = req.query.id
  try {
    const [rows, fields] = await db.query("update orders set respond = '1' where id = ?",[order_id]);
    if(rows.changedRows){
      res.redirect('/admin/orders?respond=false')
    }else{
      res.send('falied')
    }
  } catch (error) {
    next(error)
  }
}

exports.deleteOrdersController = async (req,res,next) => {
  let order_id = req.query.id
  try {
    const [rows, fields] = await db.query("delete from orders where id = ?",[order_id]);
      res.redirect('/admin/orders?respond=true')
  } catch (error) {
    next(error)
  }
}
