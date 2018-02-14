var express = require('express');
var app = express();




app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});