// Created by Erik & Austin 11/22/2016

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var underscore = require('underscore');
var path = require('path');
var cors = require('cors');

app.use(express.static("public"));

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(cors());
// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,accept,authorization');
    res.setHeader("Content-Type", "application/json");
    // Pass to next layer of middleware
    next();
});


// app.get('/', function(req, res) {
//     res.render('home.ejs', {
//     });
// });


// var mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost/todos');
// var db = mongoose.connection;

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

// ToDo = require('./todos');

var todoArray = [
    {
        "description": "Go grocery shopping",
        "completed": false,
        "id": 1
    },
    {
        "description": "Wash the car",
        "completed": false,
        "id": 2
    },
    {
        "description": "Do the dishes",
        "completed": false,
        "id": 3
    },
    {
        "description": "Call Grandma",
        "completed": false,
        "id": 4
    }
];

var nextId = 5;

app.use(bodyParser.json());

console.log(todoArray);



app.get('/', function (req, res) {
    try {
        res.send('The ToDo API is running. To access it go to /todos')
    }
    catch (e) {
        console.log("error: ",e)
    }
});

app.get('/todos', function(req, res){
    // res.sendFile(path.join(__dirname, 'views/index.html'));
    // res.render ('index', {
    //     todoArray: todoArray
    // });
    //
    res.json(todoArray);
});

app.get('/todos/:id', cors(), function (req, res, next) {
    // res.send('This is number ' + req.params.id + ' on the list.')
    var findId = Number(req.params.id);
    var item = underscore.findWhere(todoArray, {id: findId });

    // res.render ('index', )
    res.json(item);
});

app.post('/todos', function(req, res){
    var body = underscore.pick(req.body, 'description', 'completed');

    if(underscore.isBoolean(body.completed) && underscore.isString(body.description) &&
        body.description.trim().length > 0 ){

        //apply the next ID
        body.id = nextId++;
        body.description = body.description.trim();

        console.log("body: ",body);

        //add the new to do to the array
        todoArray.push(body);

        console.log("todoArray: ",todoArray);


        //return the newly created to do with the new id
        //res.json(body);
        res.json(todoArray);

    }

    else {
        res.status(404).send('Error 404. Something got all messed up!');
    }


});

app.put('/todos/:id', function(req, res){
    if(underscore.isFinite(req.params.id) && (req.params.id) > 0) {

        var findId = Number(req.params.id);
        var item = underscore.findWhere(todoArray, {id: findId});


        if (typeof item != 'undefined') {

            if (item.completed === true) {
                item.completed = false;
            }

            else {
                item.completed = true;
            }

            console.log("body: ",body);

            todoArray.push(body);

            console.log('todoArray: ', todoArray);

            res.json(item);

        }

        else {
            res.status(400).send('Id ' + findId + ' was not found');
        }

    }
    else {
        res.status(400).send('This id is invalid, cannot use ' + req.params.id);
    }
});

app.delete('/todos/:id', function(req, res){
    if(underscore.isFinite(req.params.id) && (req.params.id) >0 ) {

        var findId = Number(req.params.id);

        var item = underscore.findWhere(todoArray, {id: findId});

        if (typeof item != 'undefined') {
            var deleteItem = underscore.without(todoArray, item);

            res.json(deleteItem);

        } else {
            res.status(400).send('Id ' + findId + ' was not found');
        }
    }

    else {
            res.status(400).send('This id is invalid, cannot use ' + req.params.id);
        }

});


module.exports = app;

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('Node up on port ' + PORT);
});