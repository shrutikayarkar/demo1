var express = require("express");
var router = express.Router(); //same as var app=x();

router.get("/", function(req,res){
var pagedata={title:"help page",pagename:"help/index",a:"022-66100100"};
res.render("layout", pagedata);
});

module.exports=router;