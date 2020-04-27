const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extenden :true}));
app.set("view engine", "ejs");

var items = [];

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
      weekday:"long",
      day: "numeric",
      month: "long"
  };

  var day = today.toLocaleDateString("en-US" ,options);

  res.render("list", { kindOfDay: day, newItems: items });
});




app.post("/", function (req,res){
    item = req.body.upNext;
    items.push(item);

    res.redirect("/");
    
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});

