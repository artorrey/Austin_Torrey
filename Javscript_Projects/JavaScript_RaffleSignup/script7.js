function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email);
    if ((email.length <= 0) || (password.length <= 0)) {
        alert("Please check the fields and make sure they are not blank.");

    }
    charLength();

}
function charLength() {
    var email = document.getElementById("email").value;
    if (email.length < 8) {
        alert("Email must be at least 8 characters")
    }
}

