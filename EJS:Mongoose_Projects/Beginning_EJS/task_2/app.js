var express = require('express');
var app = express();

var messages = [
    {name: 'Jim', message: 'I am a cartoonist.'},
    {name: 'Jane', message: 'How about steak for dinner?'},
    {name: 'Gary', message: 'I like my steak a bit rare.'}
];

app.get('/messages', function(req, res) {
    res.render('messages', {messages: messages});
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// 'Hi my name is ' + messages.name + messages.message