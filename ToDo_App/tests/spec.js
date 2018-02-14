var request = require('supertest');
var express = require('express');
// var app = exports.app = express();
var path = require('path');
var underscore = require('underscore');


var server = require(path.join(__dirname, '..', 'server.js'));



//first test for our basic home route
describe('GET /', function(){

    //beforeEach(function(){
        //something
    //}

    it('should return a 200 status code and html', function(done){
        request(server)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });
});

//2nd test for GET /todos route
// Successful get of all ToDos (happy path).

describe('Tests /todos GET routes', function(){
    it('Should return a 200 status code and JSON body', function(done){
        request(server)
            .get('/todos')
            .expect('Content-Type', /json/ )
            .expect(/grocery/, done)
            .expect(200)
    });

//3rd test for GET /todos/1 route, returns with a JSON object
    // Successful get of one ToDo (happy).

    it('Should return a 200 with a single JSON object', function(done){
        request(server)
            .get('/todos/1')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(/Go grocery shopping/, done)

    });

    //     Not found error if you ask for a non existent id (unhappy).
    it('Should return an error if you ask for a non-existent id', function (done) {
        request(server)
            .get('/todos/8')
            .expect('Content-Type', /json/)
            .expect(function (res, err) {
                if(res.body.id = "8" ) {
                    throw err;
                }
            })
            .expect(200, done)
    });


//Successful creation (happy path).
});
describe('POST /todos', function() {
    it('should return a 200 status code and JSON body with new object', function (done) {
        request(server)
            .post('/todos')
            .set('Accept', 'application/json')
            .send({description: "new todo", completed: false})
            .expect(200, done);
    });

    //Insertion of leading and trailing spaces (unhappy).
    it('should return a 200 status code and trimmed description', function (done) {
        request(server)
            .post('/todos')
            .set('Accept', 'application/json')
            .send({description: "        new todo        ", completed: false})
            .expect(200, done)
            .expect(function (res) {
                if(res.body.description.length != 8) {
                    throw new Error('Description length is wrong')
                }

            })

    });

    //Insertion of ToDo attributes that don't exist in the schema (design) (unhappy).

    it('should return a 200 status code and a filtered version of the item', function(done){
        request(server)
            .post('/todos')
            .set('Accept', 'application/json')
            .send({description: "new item", completed: true, time: "2pm"})
            .expect(200, done)
            .expect(function (res) {
                if((underscore.keys(res.body)) == ["description", "completed", "time"]) {
                    throw new Error('You have too many Keys!')
                }
            })

    });



    //     Incomplete ToDo attributes inserted (unhappy).
    it('Should return error if attributes are incomplete', function(done){
        request(server)
            .post('/todos')
            .set('Accept', 'application/json')
            .send({description: "new todo"})
            .expect(404, done)
            .expect(function(err) {
                if(err) {
                    throw err;
                }
            })

    });

    //     Blank description inserted in a ToDo (unhappy).
    it('Should return error if description is left blank', function(done){
       request(server)
           .post('/todos')
           .set('Accept', 'application/json')
           .send({description: " ", completed: false})
           .expect(404, done)
           .expect(function (err) {
               if(err) {
                   throw err;
               }
           })

    });
});

//Toggle Status
//     Successful toggle from completed to not completed.
describe('PUT / todos/:id', function () {
   it('Should return 200 status code and change completed status', function(done){
       request(server)
           .put('/todos/1')
           .set('Accept', 'application/json')
           .send({id: 1})
           .expect(200, done)
           .expect(function(res){
              if(res.body.completed == false) {
                  res.body.completed = true;
              }
           })

   });

    //     Successful reverse toggle.
    it('Should return 200 status code and change completed status back', function(done){
        request(server)
            .put('/todos/1')
            .set('Accept', 'application/json')
            .send({id: 1})
            .expect(200, done)
            .expect(function(res){
                if(res.body.completed == true) {
                    res.body.completed = false;
                }
            })

    });

    //     Not found error if you ask for a non existent id.
    it('Should return 400 status and Error if id does not exist', function(done){
        request(server)
            .put('/todos/67')
            .set('Accept', 'application/json')
            .send({id: 67})
            .expect(400, done)
            .expect(function(res, err){
                if(res.body.id = undefined) {
                    throw err;
                }
            })

    });


});

// Delete:

describe('DELETE /todos', function () {
    //     Running delete without passing an id doesn't delete all todos.
    it('Should return 404 status and Error if no id is sent', function (done) {
       request(server)
           .delete('/todos/')
           .set('Accept', 'application/json')
           .send({ })
           .expect(404, done)
           .expect(function(err){
               if (err) {
                   throw err;
               }
           })

    });

    //     Running delete with non existent id returns not found error.
    it('Should return 400 status and Error if nonexistent id is sent', function (done) {
        request(server)
            .delete('/todos/15')
            .set('Accept', 'application/json')
            .send({id: 15 })
            .expect(400, done)
            .expect(function(err){
                if (err) {
                    throw err;
                }
            })

    });

    //     Running delete with valid id, returns success code.
    it('Should return 200 status and remove corresponding To Do', function (done) {
        request(server)
            .delete('/todos/1')
            .set('Accept', 'application/json')
            .send({id: 1 })
            .expect(200, done)
    });
});

module.exports = server;