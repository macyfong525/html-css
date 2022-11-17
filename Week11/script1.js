//accessing the image

//let image = document.querySelector("img");
let images = document.getElementsByTagName("img");
let image = images[0];
console.log(images, image)

/* function rolloverEffect(){

} */

const rolloverEffect = function(){
    image.src="yls.jpg";
    image.width=300;
    image.height=300;
}