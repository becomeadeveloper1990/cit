const mysql = require('mysql');

var port = 8080;
var con = mysql.createConnection({
  host: "35.226.34.58",
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_NAME
});

if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
  con.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}:${process.env.SQL_NAME}`;
}

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = {con};
