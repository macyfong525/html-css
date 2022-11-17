//Changing the CSS of existing elements

//let para = document.querySelector("p");
let paras = document.querySelectorAll("p");
let para = paras[1]; //selects the second paragraph
function myFunc(){
   /*  para.style.backgroundColor = "yellow";
    para.style.border = "5px solid black";*/
    // para.style.cssText = "background-color: cyan; font-style:italic";
    let myStyles = {
        backgroundColor: "cyan",
        fontStyle: "italic",
        color:"purple",
        fontSize: "2em"}
    Object.assign(para.style, myStyles);}

