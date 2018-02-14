var readlineSync = require('readline-sync');
 
// Wait for user's response. 
var userName = readlineSync.question('What is your name?');
var favFood = readlineSync.question('What is your favorite food?');
var favDrink = readlineSync.question('What is your favorite drink?');
console.log('Hi ' + userName + ', your favorite food is ' + favFood + ' and your favorite drink is ' + favDrink + '.');
