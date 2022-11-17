
//using innerHTML, outerHTML, innerText, textContent

let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
console.log(para1);
console.log(para2);
console.log(para1.innerHTML);
console.log(para1.outerHTML);
console.log(para1.innerText);
console.log(para1.textContent);

function myFunc(){
 para1.innerHTML = "<b>Hello World!!</b>"
 //para1.innerText = "Hello World!!"
 para2.outerHTML = "<h4>I am learning JavaScript<h4>"
//  para2 = document.getElementById("para2");
 para2.innerHTML = "<em>I am learning JavaScript<em>"
}