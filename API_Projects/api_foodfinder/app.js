var express = require('express');
var app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/searchresults', function (req, res) {
    var city = req.query['foodfind'];
    var Yelp = require('yelp');

    var yelp = new Yelp({
        consumer_key: 'dpC9hEMIniIlvHaAjl2HbQ',
        consumer_secret: 'UAY6umz4hjExe7T-DYiNMpAlnyY',
        token: 'Ws9hRx3Q_oAfOX-fIXqyxqzlTer5iV2W',
        token_secret: 'V1aZTpINMnTuEZNApdLXI0B5mxw',
    });

    yelp.search({ term: 'food', location: city  })
        .then(function (data) {
            // console.log(data);
            var infoString = JSON.stringify(data);
            var infoObj = JSON.parse(infoString).businesses;
            res.render('searchresults', {
                infoObj: infoObj
            });
        })
        .catch(function (err) {
            console.error(err);
        });


});





app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});