const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const d3plus = require('d3plus');
const fs = require('fs');
require('dotenv').config();

var {con} = require('./connection');

var app = express();
app.use(express.static(__dirname + '/views'));
app.use('/views', express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.render("query.ejs")
});

app.get('/results', (req, res) => {
  var naics = req.query.query;
  var queryString = "select * from mytable where NAICS = " + naics + "";

    con.query(queryString, (err, rows, fields) => {
      for (i in rows) {
        var sales2011 = rows[i].Sales_2011
        var sales2012 = rows[i].Sales_2012
        var sales2013 = rows[i].Sales_2013
        var sales2014 = rows[i].Sales_2014
        var data = {
          name: rows[i].NAICS,
          industry: rows[i].Industry,
          jobs11: rows[i].Jobs_2011,
          jobs12: rows[i].Jobs_2012,
          jobs13: rows[i].Jobs_2013,
          jobs14: rows[i].Jobs_2014,
          sales11: sales2011.replace(/\D/g, ""),
          sales12: sales2012.replace(/\D/g, ""),
          sales13: sales2013.replace(/\D/g, ""),
          sales14: sales2014.replace(/\D/g, "")
        }
        res.render('results.ejs', data)
      }
  });
});



// Start the server
const server = app.listen(8080, "172.217.13.116", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
