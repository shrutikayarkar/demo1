var express = require("express");
var router = express.Router(); //same as var app=x();

router.get("/", function(req,res){
var pagedata = {title:"admin",pagename:"admin/index"};
res.render("adminlayout",pagedata);
});

module.exports=router;