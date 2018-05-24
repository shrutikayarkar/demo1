var x=require("express");
var app=x();
app.listen(7575,function () {
	console.log("hiiii!!!!!")
});
app.get("/", function (req,res) {
	res.sendFile(__dirname+"/home.html");
});