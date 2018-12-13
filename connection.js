const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hcAbtg0uguH4anrH",
  database: "naics"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = {con};
