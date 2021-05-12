const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");

// 1. setup express
let app = express();

// 2. setup the view engine
app.set("view engine", "hbs")

// 2b. setup static files
app.use(express.static("public"));

// 2c. setup wax-on (for template inheritance)
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts")

// ROUTES
app.get("/", function(req,res){ // "/" is the root URL, by default browser adds a "/" behind your URL if it doesn't have one
    res.render("index.hbs")
})

app.get("/hello/:name",function(req,res){
    let name = req.params.name; //.name here because the parameters is called :name, can use acc to parameters set
    let luckyNumber = Math.floor(Math.random()* 100)
    res.render("greetings.hbs", {
        "name":name,
        "lucky": luckyNumber
    })
})


// 3. Run server (always run this last)
app.listen(3000, ()=> {
    console.log("Server started")
})