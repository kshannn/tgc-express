// import in express package (can only import after you install package using "yarn add express")
// a nodeJS/express application contain package.json and node_modules
const express = require("express");


// create a variable to store the express application
const app = express();


// define a new route 
// route is a URL on your server that the browser can access
app.get("/",function(req,res){
    // req -> request (i.e. what the browser send to the server)
    // res -> response (i.e. what your server will send back)
    res.send("<h1>Hello from the other side(installed nodess)</h1>")
})


// expose the server for other browsers to connect to
// the 3000 is the port number
app.listen(3000,function(){
    console.log("Server started")
})