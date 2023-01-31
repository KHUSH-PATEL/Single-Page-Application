var i = 0;
var images = [];
var slideTime = 3000; // 4 seconds

images[0] = "./assets/images/banner.png";
images[1] = './assets/images/banner2.png';
images[2] = './assets/images/banner3.png';
images[3] = './assets/images/banner6.jpg';

function changePicture() {
    document.getElementById("welcome").style.backgroundImage = "url(" + images[i] + ")";
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}
window.onload = changePicture;

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("p").style.color = "#00fff3;";
 }