var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});

var app_users = mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    favorite_pizza: String,
});

app_users.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var user_model = mongoose.model('user', app_users);

var nancy = new user_model( 
                        {   _id: 1001,
                            name: 'Nancy', 
                            age:  22,
                            favorite_pizza: 'pepperoni'});

nancy.save(function (err, nancy) {
  if (err) return console.error(err);
  nancy.speak();
});




