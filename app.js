const http = require('http');
const port = process.env.PORT || 3000
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/registration", function(req, res){
    res.render("registration.ejs")
})

// const server = http.createServer((req, res) => {
//     res.render("index.ejs");
//   });
  
app.listen(port,() => {
    console.log(`Server running at port `+port);
  });
