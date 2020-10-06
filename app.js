const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("index.ejs");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});


