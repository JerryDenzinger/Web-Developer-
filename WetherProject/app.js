const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    const appid = "3748e0b3f8374959856542de4d3bfcff";
    const query = req.body.cityName ;
    const units = req.body.units;
    var deegree = "";
    if(units === "metric"){
         deegree = "Celsius";
    }else{
        deegree = "Farenheit"
    }
    const url = "https://api.openweathermap.org/data/2.5/weather?"
                +"q="+ query
                +"&appid="+ appid 
                +"&units="+units;
     https.get(url,function(response){
         console.log(response.statusCode);

         response.on("data",function(data){
             const wetherData = JSON.parse(data);
             const temp = wetherData.main.temp;
             const feelsLike = wetherData.main.feels_like;
             const description =  wetherData.weather[0].description;
             const icon = wetherData.weather[0].icon;
             const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png"
             res.write("<h1>The wether is currently "+ description +"</h1>");
             res.write("<h1>The current Temperature in "+ query +" is " + temp + " degrees "+ deegree +" &#127777</h1>");
             res.write("<h2>The Temperatrure sensation is  "+ feelsLike + " degrees " + deegree +" &#127777</h2>");
             res.write("<img src=" + imageURL+">");
             res.send();
         });
     });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});
