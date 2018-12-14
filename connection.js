const mysql = require('mysql');

var con = mysql.createConnection({
  host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "d56v50k1rt7gaqxf",
  port: 3306,
  password: "molx3uajbokigj3k",
  database: "mjmy75cwqsv9nnyw"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = {con};
