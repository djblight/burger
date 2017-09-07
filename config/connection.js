var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_url) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1@Dra2@Aus3',
  database:'burgers_db'
});
};

connection.connect();
module.exports = connection;