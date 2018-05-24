var express=require("express");
var app=express();

app.listen(3000,function(){
console.log("server running properly...");
});

var parser = require("body-parser");

//.....ALL USE CODES......
app.use(parser());
app.use(express.static(__dirname+"/public"));
app.use(require("./controller/default"));



//.....ALL SET CODES......

app.set("view engine" , "ejs");
app.set("views", "viewejs");	//viewejs is foldername where all ejs files held





var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
