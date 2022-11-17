// home change animation
let images = [];

//Array of images
images[0] = 'images/gym.jpeg';
images[1] = 'images/gym2.jpeg';
images[2] = 'images/gym3.jpeg';
images[3] = 'images/gym4.jpeg';

//create a function to animate images

currImage = 0;
//set interval to repeatedely execute animateImages() Function
let animateImages = setInterval(() => {
    let gymImage = document.querySelector("img")
    if (currImage == 4) {
        currImage = 0;
    }
    gymImage.src = images[currImage];
    currImage++;

}, 2000);