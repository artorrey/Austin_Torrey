var express = require('express');
var app = express();

var pizza = 'I like my pizza with extra pineapple.';
var cappucino = 'I like my cappucino to be sweet';
var fries = 'I like my fries crispy with extra salt';

app.get('/', function (req, res) {
  res.render('index', {pizza: pizza});
});
app.get('/about', function (req, res) {
  res.render('about', {cappucino: cappucino});
});
app.get('/contact', function (req, res) {
  res.render('contact', {fries: fries});
});

app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/contact'));

app.set('view engine', 'ejs');
app.set('views', 'views');




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

