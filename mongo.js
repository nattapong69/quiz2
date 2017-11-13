var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;

MongoClient.connect(url, function (err, database){
   if(err) throw err;
   db = database;
   console.log("Connected to" +url);


});

function findAll(req ,res){
    //Get data from mongoDB
        db.collection("users").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result);
        });

}

function search(req, res){
     var fname = req.query.fname;      
        var query = { first_name: fname };
        db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
            console.log(result);                       
            res.json(result);
    });      
};

function role(req, res){    
    var role = req.params.role;      
    var query = { role: role };
    db.collection("users").find(query).toArray(function (err, result) {
    if (err) throw err;
        console.log(result);                     
        res.json(result);
    });      
};

module.exports = {
    findAll: findAll,
    search:  search,
    role: role
    };

