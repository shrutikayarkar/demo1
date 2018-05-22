var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.listen(3000,function () {
	console.log("server running......");
});

app.get("/",function(req,res){
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

mongo.connect(url,function(err,client){
	if(err)
	{
		console.log("connection error",err);
		return;
	}
var database = client.db("category");

database.collection("cat").find().toArray(function(err,result){
	if(err)
	{

		console.log("query error",err);
	}
	console.log(result);
	var pagedata = {data:result};
	res.render("index",pagedata);

});

});


});