//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Score = require('./model/scores');
var Game = require('./model/games');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;
//db config
mongoose.connect('mongodb://artorrey:Boomstick22@ds059938.mlab.com:59938/mlc');
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = require('bluebird');
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
res.json({ message: 'API Initialized!'});
});

router.route('/standings')
//retrieve all comments from the database
    .get(function(req, res) {
        //looks at our Comment Schema
        Score.find(function(err, scores) {
            if (err)
                res.send(err);
            //responds with a json object of our database comments.
            scores.sort(function(a, b){
                return b.score-a.score
            })
            res.json(scores)
        });
    })

    //post new comment to the database
    .post(function(req, res) {
        const score = new Score();
        //body parser lets us use the req.body
        score.player = req.body.player;
        score.score = req.body.score;

        score.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Player successfully added!' });
        });
    });

router.route('/standings/:pid')
    .put(function(req, res) {
        const pId = req.params.pid;
        Score.findById(pId, function(err, score) {
            if (err)
                res.send(err);
            (req.body.player) ? score.player = req.body.player : null;
            score.score = score.score + 1;
            score.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Score has been updated' });
            });
        });

    });

router.route('/standings/:p1id/:p2id')
    .put(function(req, res) {
        const p1Id = req.params.p1id;
        const p2Id = req.params.p2id;
        Score.findById(p1Id, function(err, score) {

        })
    })

router.route('/resetstandings/:pid')
    .put(function(req, res) {
        const pId = req.params.pid;
        Score.findById(pId, function(err, score) {
            if (err)
                res.send(err);
            (req.body.player) ? score.player = req.body.player : null;
            score.score = 0;
            score.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Score has been reset' });
            });
        });

    });

router.route('/resetgames/:gid')
    .put(function(req, res) {
        const gId = req.params.gid;
        Game.findById(gId, function (err, game) {
            if (err)
                res.send(err);
            game.winner = "";
            game.save(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'Game has been reset'});
            });
        });
    })

            .delete(function(req, res) {
    //selects the comment by its ID, then removes it.
    Game.remove({_id: req.params.gid}, function (err, game) {
        if (err)
            res.send(err);
        res.json({message: 'game has been deleted'})
    })


    });

router.route('/games/:gid')
    .put(function(req, res) {
        const gId = req.params.gid;
        Game.findById(gId, function(err, game) {
            if (err)
                res.send(err);
            game.winner = req.body.winner;
            game.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Game has been won' });
            });
        });

    });


router.route('/games')
//retrieve all comments from the database
    .get(function(req, res) {
        //looks at our Comment Schema
        Game.find(function(err, games) {
            if (err)
                res.send(err);
            //responds with a json object of our database comments.

            res.json(games)
        });
    })

    //post new comment to the database
    .post(function(req, res) {
        const game = new Game();
        //body parser lets us use the req.body
        game.game = req.body.game;
        game.match = req.body.match;


        game.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Game successfully saved!' });
        });
    });
//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});