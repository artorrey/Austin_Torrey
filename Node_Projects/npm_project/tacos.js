var readlineSync = require('readline-sync');
    
tacos = ['Spicy', 'Very Spicy', "So spicy, you won't be able to feel your face."];
index = readlineSync.keyInSelect(tacos, 'How spicy would you like your tacos?')
console.log('Ok, so you want your tacos to be ' + tacos[index] + '.');
if(readlineSync.keyInYN('Are you sure about this?')) {
    console.log('Ok, we will have your order right out');
} else {
    console.log("What's the matter? Can't handle the heat?")
}
