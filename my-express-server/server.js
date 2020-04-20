const express = require("express");
const app = express();

app.get("/",function(req, res){
    res.send("<h1>Hello World!!</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at: contactme@email.com")
});

app.get("/about",function(req,res){
    res.send("<h1>Jerry Denzinger</h1>" + 
    "<p>My History blablalblalalIUSEDGBluisbduvLIBUVLBVLSBVLASBVLAVBAlirvbaLVBLAVBLARVB" +
    "bbÖIGRBÖUGBÖSTGLÖGTHÖTGLBAZERGUABERLBGABRGLIUBAREÖGÖB</p>" +
    "<ul> <li>Studies</li> <li>Achivments</li> <li>Hobbys</li> </ul>")
});

app.get("/test",function(req,res){
    res.send("Testing Nodamon")
});

app.listen(3000,function(){
    console.log("Server started in port 3000");
});