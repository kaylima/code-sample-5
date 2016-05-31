var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

require('./server/config/mongoose.js');
var route_setter = require('./server/config/routes.js');
route_setter(app);

app.listen(8000, function(){
	console.log("server running on port 8000");
});
