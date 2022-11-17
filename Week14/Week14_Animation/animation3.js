let images = [];

//Array of images
images[0] = 'Images/image0.jpg';
images[1] = 'Images/image1.jpg';
images[2] = 'Images/image2.jpg';
images[3] = 'Images/image3.jpg';
images[4] = 'Images/image4.jpg';
images[5] = 'Images/image5.jpg';

//create a function to animate images

currImage = 0;
//set interval to repeatedely execute animateImages() Function
let animateImages = () => {
    let carbon = document.querySelector("img")
    if (currImage == 6) {
        currImage = 0;
    }
    carbon.src = images[currImage];
    currImage++;

}



let animate;
let startBtn = document.getElementById("start")
startBtn.onclick = function () {
    clearInterval(animate)
    animate = setInterval(animateImages, 1000);
}

// startBtn.addEventListener("click", ()=>{
//     animate = setInterval(animateImages, 1);
// })


let stopBtn = document.getElementById("stop")
stopBtn.addEventListener("click", () => {
    clearInterval(animate)
})