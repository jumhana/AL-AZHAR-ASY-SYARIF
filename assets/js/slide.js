var i = 0;
var images = [];
var slideTime = 30000; // 3 seconds

// images[0] = 'https://via.placeholder.com/150/300AAA';
// images[1] = 'https://via.placeholder.com/150/000300';
// images[2] = 'https://via.placeholder.com/150/AAA300';


images[0] = './assets/img/image7.jpg';
images[1] = './assets/img/image8.jpg';
images[2] = './assets/img/image6.jpg';
images[1] = './assets/img/image4.jpg';
// images[2] = './assets/img/image4.jpg';

function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;