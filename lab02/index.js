const express = require("express");

let app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello!</h1>")
})

// :<placeholder> i.e name is used as a placeholder
app.get("/hello/:name",function(req,res){
    let name = req.params.name;
    res.send("Hello, " + name);
})

app.get("/hey/:nickname",function(req,res){
    let nickname = req.params.nickname;
    res.send("Hey, " + nickname);
})

app.listen(3000, function(){
    console.log("Server started")
})

