var express = require("express");
var router = express.Router(); //same as var app=x();

router.get("/", function(req,res){
var pagedata = {title:"about",pagename:"about/index",cate:categ};
res.render("layout",pagedata);
});


var categ = require("../model/category");


module.exports=router;