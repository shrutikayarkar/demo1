var express = require("express");
var router = express.Router();  //same as var app=x();

router.get("/", function(req,res){
var pagedata={title:"signup page",pagename:"signup/index"}
res.render("layout",pagedata);
});





router.post("/",function(req,res){

var obj = req.body
mongo.connect(url,function(err,client){
	if(err)
	{
		console.log("connection error",err);
		return;
	}

var database = client.db("dummydb");

database.collection("signup").insert(obj,function(err,result){
	if(err)
	{
		console.log("query error", err);
		return;
	}
console.log("...........",result);
// res.redirect("/");
});

});

});

module.exports=router;