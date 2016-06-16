var express = require('express');
var utils = require("./users.js");
var app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/rest/people', function (req, res) {
  res.json(utils.getUsers());
});

app.listen(8091, function () {
  console.log('running node');
});