const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'localhost',
  user: 'root',
  password: '',
  database: 'landscape',
  waitForConnections: true,
  multipleStatements:true
});

connection.getConnection((err) => {
   if(err){
    console.log(err)
   }else{
    console.log("database connected")
   }
});

module.exports = connection;