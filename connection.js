const mysql = require('mysql');

var con = mysql.createConnection({
  "host": "http://35.226.34.58",
  "GCLOUD_PROJECT": "cit-node",
  "DATA_BACKEND": "cloudsql",
  "MYSQL_USER": "root",
  "MYSQL_PASSWORD": "L00k4ugood!",
  "INSTANCE_CONNECTION_NAME": "cit-node:us-central1:cit-db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = {con};
