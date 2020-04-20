const express = require("express");
const bodyParse = require("body-parser");

const app = express();

app.use(bodyParse.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of adding " + num1 + " and " + num2 + " is " + result);
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var result = Math.floor(weight / (height * height));

  res.send(
    "Your BMI with a height of " + height + " and a weight of " + weight + " is " + result);
});

app.listen(3000, function () {
  console.log("Server started in port 3000");
});
