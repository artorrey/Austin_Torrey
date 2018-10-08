'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var Timesheet = require('./models/timesheet');
var LineItem = require('./models/lineitems');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://artorrey:Fil15tein22@ds163402.mlab.com:63402/timesheets', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', function (req, res) {
    res.json({message: 'API Initialized!'});
});

//GET all timesheets
router.get('/timesheets', function (req, res) {
    Timesheet.find(function (err, timesheets) {
        if (err) {
            res.send(err);
        } else {
            res.json(timesheets);
        }
    });
});
// POST new blank timesheet
router.post('/timesheets', function (req, res) {
    const timesheet = new Timesheet();

    timesheet.description = '';
    timesheet.rate = '';
    timesheet.totalCost = 0,

    timesheet.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json(timesheet);
        }
    });
});
//PUT to update timesheet
router.put('/timesheet/:id', function (req, res) {
    const tSiD = req.params.id;
    Timesheet.findById(tSiD, function (err, timesheet) {
        if (err) {
            res.send(err);
        } else {
            timesheet.description = req.body.description;
            timesheet.rate = req.body.rate;
            timesheet.totalCost = req.body.totalCost;
            timesheet.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(timesheet);
                }
            });
        }
    });
});
//GET all line items for selected timesheet
router.get('/timesheet/:id/line_items/', function (req, res) {
    const tSiD = req.params.id;
    const query = {'timesheet': tSiD};
    LineItem.find(query, function (err, lineitems) {
        if (err) {
            res.send(err);
        } else {
            res.json(lineitems);
        }
    });
});
//POST new line item for selected timesheet
router.post('/timesheet/:id/line_item', function (req, res) {
    const tSiD = req.params.id;
    const lineItem = new LineItem();

    lineItem.workdate = req.body.workdate;
    lineItem.minutes = req.body.minutes;
    lineItem.timesheet = tSiD;

    lineItem.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json(lineItem);
        }
    });
});





app.use('/api', router);

app.listen(port, function () {
    console.log(`api running on port ${port}`);
});
