var express = require('express');
var app = express();
app.get('/fruit/:user', function (req, res) {
    res.send('So, I take it your favorite fruit is ' + req.params.user + '?');
});
app.get('/bankaccount/:username/:money', function (req, res) {
    if (req.params.money >= 50) {
        res.send('So, ' + req.params.username + ', I understand you have $' + req.params.money + ' in your bank account. Can you loan me some money?');
    }
    else {
        res.send('' + req.params.username + ' do you enjoy living life dangerously on the edge?');
    }
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});