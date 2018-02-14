


// prompt for users name
// write name to webpage
function greeting() {
    var name = prompt("Tell me your name.");
    if (name) {
        document.getElementById("wonderful").innerHTML = "You are going to have a wonderful day " + name + ".";
        document.getElementById("wonderful").style.fontSize = "96px";
    }
}


//prompt for two numbers
// add provided numbers and write sum to webpage

function add() {
    var numOne = prompt("Give me a number.");
    var numTwo = prompt("Give me another number.");
    var sum = (Number(numOne) + Number(numTwo));
    if (sum != NaN) {
        document.getElementById("added").innerHTML = "By the way, the sum of your numbers is " + sum + ".";
        document.getElementById("added").style.fontSize = "96px";
    }
}

window.onload = function() {
    greeting();
    add();
};









