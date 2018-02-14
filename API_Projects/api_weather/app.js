var express = require('express');
var app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/searchresults', function(req, res) {

    var state = req.query['state'];
    var city = req.query['city'];

    var request = require('request');
    request('http://api.wunderground.com/api/12280b3a1e2f2372/conditions/q/' + state + '/' + city + '.json?', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(body);
            var data = JSON.parse(body);

            var temp = data.current_observation.temp_f;
            var outlook = data.current_observation.weather;
            var humidity = data.current_observation.relative_humidity;
            res.render('searchresults', {
                city: city,
                temp: temp,
                outlook: outlook,
                humidity: humidity
            });
        }


    });


});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});