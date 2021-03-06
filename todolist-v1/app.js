const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");
app.use(bodyParser.urlencoded({ extenden: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function (req, res) {

  const day = date.getDate();

  res.render("list", { listTitle: day, newItems: items });
});

app.post("/", function (req, res) {
  const item = req.body.upNext;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work Day", newItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
