var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to the Fruit home page');
});
app.get('/banana', function (req, res) {
  res.send("I'm going bananas!");
});
app.get('/kiwi', function (req, res) {
  res.send("Kiwis are great. But I don’t like how hairy they are.");
});
app.get('/strawberry', function (req, res) {
  res.send("Strawberries are nature's perfect fruit.");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});