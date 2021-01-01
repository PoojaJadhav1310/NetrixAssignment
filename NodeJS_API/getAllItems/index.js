var express = require('express');
//var cors = require('cors');
var mysql = require("mysql");

var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
});
//app.use(cors());
app.get('/myroute', function(req, response){

 var dataObj = [];

  connection.connect(function (err,res) {
    if (err) {
      console.log(err);
    }
    console.log('You are now connected with mysql database...');
    let selectQuery = 'select * from shoppingitems';
    console.log(selectQuery);
    connection.query(selectQuery, function (error, results) {
      if (error) throw error;

      
      dataObj = results;
      console.log(Object.values(results));
      response.send(dataObj);

    });
    
  });
  
     
});
app.listen(3000);
console.log("The server is now running on port 3000.");