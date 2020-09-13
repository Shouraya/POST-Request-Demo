var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var friends = ["Tony", "Justin", "Trump", "Modi"];

app.set("view engine", "ejs")

app.get("/", function(req,res){
	res.render("home");
})

app.get("/friends", function(req,res){	
	res.render("friends", {friends :  friends});
});

app.post("/addfriend", function(req,res){
	
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect("/friends");
})
// made calculator extra... the below two are for that only
app.get("/calculator", function(req,res){
	res.render("calculator")
})
	
app.post("/output", function(req,res){
	var val1 = req.body.val1;
	var val2 = req.body.val2;
	res.render("output", {val1 : val1, val2 : val2});
});	

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server has Started!!");
});