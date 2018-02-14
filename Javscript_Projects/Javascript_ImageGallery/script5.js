// image array
var galleryArray = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg"];
var i=0;
var imageLength = galleryArray.length -1;


function moveImage(num) {
    i=i+num;
    if (i>imageLength) {
        i=0;
    }
    if (i<0) {
        i=imageLength;
    }
    document.getElementById("galleryimg").src = galleryArray[i];

}

    


// }
//
// // //function to move to next image
// function nextImage() {
//     document.getElementById("gallery").style.backgroundImage = "url("+ galleryArray[i] +")";
//     i++;
//     if (i >= arrayLen) {
//         i = 0;
//     }
// }
//
//
//
// //function to move to previous image
// function prevImage() {
//     document.getElementById("gallery").style.backgroundImage = "url("+ galleryArray[i] +")";
//     i+n;
//     if (i < 0) {
//         i = 5;
//     }
// }