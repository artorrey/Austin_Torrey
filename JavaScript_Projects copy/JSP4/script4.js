var background = document.getElementById ("back");

var imageArray = ["images/background1.jpg","images/background2.jpg","images/background3.jpg"];

var imageIndex = 0;

function changeImage(){
    background.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length){
        imageIndex = 0;
    }
}

setInterval(changeImage,3s);