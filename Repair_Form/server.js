//server.js
'use strict'
//first we import our dependencies…
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//and create our instances
const app = express();
const router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
const port = process.env.API_PORT || 3001;
//db config
const promise = mongoose.connect('mongodb://artorrey:Fil15tein22@ds237735.mlab.com:37735/repairs', {
    useMongoClient: true,
    /* other options */
});
promise.then(function(db) {
    /* Use `db`, for instance `db.model()`
  });
  // Or, if you already have a connection
  connection.openUri('mongodb://localhost/myapp', { /* options */ });
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const Repair = require('./model/repair');
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

//adding the /comments route to our /api router
router.route('/repairs')
//retrieve all comments from the database
    .get(function(req, res) {
        //looks at our Comment Schema
        Repair.find(function(err, repairs) {
            if (err)
                res.send(err);
            //responds with a json object of our database comments.
            res.json(repairs)
        });
    })

    //post new comment to the database
    .post(function(req, res) {
        const repair = new Repair();
        //body parser lets us use the req.body
        repair.ra_number = req.body.ra_number;
        repair.date_rcvd = req.body.date_rcvd;
        repair.customer = req.body.customer;
        repair.contact_name = req.body.contact_name;
        repair.phone = req.body.phone;
        repair.email = req.body.email;
        repair.item = req.body.item;
        repair.serial_number = req.body.serial_number;
        repair.accessories = req.body.accessories;
        repair.international = req.body.international;
        repair.status = req.body.status;
        repair.previous_ra_inv = req.body.previous_ra_inv;
        repair.packaging = req.body.packaging;
        repair.condition = req.body.condition;
        repair.problem = req.body.problem;
        repair.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Repair successfully added!' });
        });
    });

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});