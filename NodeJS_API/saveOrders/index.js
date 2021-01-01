var express = require('express');
//var cors = require('cors');
var mysql = require("mysql");
var bodyParser = require('body-parser') ;
var moment = require("moment");
var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD');

var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cors());
app.post('/addData', function(request, response){

 var dataObj = {};
 dataObj = request.body;
 console.log(request.body);
console.log("data:",dataObj);
  connection.connect(function (err,res) {
    if (err) {
      console.log(err);
    }
    console.log('You are now connected with mysql database...');
    let itemNo;
    let itemName;
    let quantity;

    itemNo = request.body.record;
    itemName = request.body.name;
    quantity = request.body.quantity;

   

    let INSERTQuery =
                  "INSERT INTO ordereditems(itemNumber, itemName, quantity, date) VALUES ( "+'"'+
                  itemNo+'"' +
                  ","+'"' +
                  itemName+'"' +
                  ","+'"' +
                  quantity+'"' + ","
                  + "'"+mysqlTimestamp+"'"
                  
                  +")";
    console.log(INSERTQuery);
    connection.query(INSERTQuery, function (error, results) {
      if (error) throw error;

      
      dataObj = results;
      console.log(Object.values(results));
      response.send(dataObj);

    });
    
  });
  
     
});
app.listen(8080);
console.log("The server is now running on port 8080.");