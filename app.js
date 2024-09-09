require('newrelic');
var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname + '/views/';
const PORT = 80;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/sharks",function(req,res){
  res.sendFile(path + "sharks.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})