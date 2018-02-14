//put background images into array

var imageArray = ["images/background1.jpg", "images/background2.jpg", "images/background3.jpg"];
var arrayLen = imageArray.length;
var i = 0;



//functon to grab background image and loop through array

function moveImage() {
    document.getElementById("main").style.background = "url("+imageArray[i]+")";
    i++;
    if (i >= arrayLen) {
        i=0;
    }
}
//interval to switch image
setInterval(moveImage,3000);



















