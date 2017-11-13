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

app.listen(3000); //server รันอยู่ที่ พอดไหน
console.log('server is runing at http://localhost:3000');


/*app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;
    res.send(user_id + ' ' + token + ' ' + geo);
    });*/



/*function hello(req, res, next){
res.write('Hello\n');
next(); //มันจะเรียก ฟังชั่นอีกตัวนึงขึ้นมาทำงาน
}


function now(req, res, next){
   var now = new Date();
   console.log(now);
   res.write(now + '\n')
   next();


}
function goodbye(req, res){
   res.write('Goodbye\n');
   res.end();

}*/

/*app.get('/api/users', function(req, res){ //รันใน API บน browser
    var user_id = req.param('id');
    var user_name = req.param('name');

    res.send('\n id:'+user_id+ '\n name:'+user_name);

});*/

//app.get('/hello', hello, now, goodbye);



/*function home(request, response){
   

}

app.get('/', function(request, response){
    response.send("Hello, Express.js");


});  // root web

app.get('/now', function(request, response){ // /now คือ คำที่ต่อท้าย พอด 3000 เพื่อนให้ทีการส่งค่าวันที่เพราะเรากำหนดเป็น Date
    var now = new Date();
    response.send("Now :" + now);


});  

app.get('/json', function(request, response){ // ส่ง json จากที่เรากำหนดไว้
    var user ={id:111, name:"User111"};
    response.json(user);


});  */