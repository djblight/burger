var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1@Dra2@Aus3',
  database:'burgers_db'
});

module.exports=connection;