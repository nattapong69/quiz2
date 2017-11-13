var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var customer = require('./mongo.js');


function logger(req, res, next){
    console.log(new Date(), req.method, req.url);
    next();
    }
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 
    app.use(express.static('www')); //การเรียกใช้ โฟนเดอ html
    app.use(logger);



app.get('/users', customer.findAll);
app.get('/users/search', customer.search);
app.get('/users/role/:role', customer.role); 
app.get('/users/expired/:expired', customer.expired); 

app.listen(3000); //server รันอยู่ที่ พอดไหน
console.log('server is runing at http://localhost:3000');


