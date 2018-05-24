var express = require("express");
var app = express();
// update by james
var parser = require("body-parser");

app.set("view engine","ejs")
app.set("views","views");

app.use(parser());

app.listen(4000,function(){
	console.log("running!!!!!");
});

//GET CODES..........
app.get("/",function(req,res){
	res.render("index");
});


var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
//POST CODES.............
app.post("/",function(req,res){


mongo.connect(url,function(err,client){
	if(err)
	{
		console.log("connection error",err);
		return;
	}

var database = client.db("dummydb");

database.collection("signup").insert(req.body,function(err,result){
	if(err)
	{
		console.log("query error", err);
		return;
	}
console.log("...........",result.ops[0]);
// var pagedata = {data:result.ops[0]};
// res.render("table",pagedata);
	res.redirect("/table");
});

});

});


app.get('/table', function(req, res){
	mongo.connect(url,function(err,client){
		if(err)
		{
			console.log("connection error",err);
			return;
		}

	var database = client.db("dummydb");

	database.collection("signup").find().toArray(function(err,result){
		if(err)
		{
			console.log("query error", err);
			return;
		}
	
	var pagedata = {data:result};
	// res.render("table",pagedata);
		// res.redirect("/table");
		res.render('table', pagedata);
	});

	});
});