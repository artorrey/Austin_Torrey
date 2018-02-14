// prompts for three numbers
function threeAdds() {
var numOne = prompt("Give a number.");
var numTwo = prompt("Give another number.");
var numThree = prompt("Give a number again.");

//put integers into array

var sumArray = [(Number(numOne)), (Number(numTwo)), (Number(numThree))];
var arrayLen = sumArray.length;
var sum = 0;
    // for loop to add the numbers
    for (var i = 0; i < arrayLen; i++) {
        sum+=sumArray[i];
    }
    // display total on page
    if (sum) {
        document.getElementById("addedUp").innerHTML = "The sum of all your numbers is " + sum + ".";
        document.getElementById("addedUp").style.fontSize = "96px";
    }
}
window.onload = threeAdds;




