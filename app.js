const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

var newitem = [];

app.get("/", function (req, res) {
	var today = new Date();
	var day = "";
	var options = {
		weekday: "long",
		month: "long",
		day: "numeric",
	};
	day = today.toLocaleDateString("en-US", options);
	res.render("list", { kindofday: day, newlistitem: newitem }); // Pass items to view
});

app.post("/", function (req, res) {
	var item = req.body.newitem;
	newitem.push(item);
	res.redirect("/");
});

app.listen(5000, function () {
	console.log("server is up and running");
});
