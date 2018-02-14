function greetings() {
    var Name = prompt("Please enter your name");
    var Snack = prompt("What is your favorite snack?");
    var Drink = prompt("What is your favorite drink?");
    if (Name != "") {
        if (Snack != "") {
            if (Drink != "") {
                document.getElementById("first").innerHTML = "Hi there " + Name + ", it seems that you enjoy eating " + Snack + " and drinking " + Drink + "!";
                document.getElementById("first").style.fontSize = "96px";
            }
        }
    }
}
window.onload = greetings;