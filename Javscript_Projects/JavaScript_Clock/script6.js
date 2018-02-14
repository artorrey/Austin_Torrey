//function to set up running clock
function clock() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    if (hr > 12) {
        hr -= 12
    }
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec; //place clock text onto page
//    var time = setTimeout(clock, 100);
}
function checkTime(i) { //function to read as a 12 hour clock
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

//array background colors
var colorArray = ["#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD", "#01579B", "#9575CD", "#7E57C2", "#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593", "#1A237E", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"];
var colorLen = colorArray.length;
var i = 0;


//function to change and loop through colors
function changeColor() {
    document.getElementById("bgcolor").style.backgroundColor = colorArray[i];
    i++;
    if (i >= colorArray.length) {
        i=0;
    }
}
//set color change interval
setInterval(changeColor,1000);
setInterval(clock,1000);

window.onload = clock;
    





