//using parentElement and parentNode

console.log("parent element of html", document.documentElement.parentElement);
console.log("parent node of html", document.documentElement.parentNode);

console.log("parent element of body", document.body.parentElement);
console.log("parent node of body", document.body.parentNode);

//accessing the child
let taskList = document.getElementsByClassName("list-group")[0]
console.log(taskList)
console.log("children element ", taskList.children);
console.log("children node ", taskList.childNodes);

console.log("First child element ", taskList.firstElementChild);
console.log("First child node ", taskList.firstChild);

console.log("Last child element ", taskList.lastElementChild);
console.log("Last child node ", taskList.lastChild);

let main = document.getElementById("main")
console.log("Next element sibling", main.nextElementSibling);
console.log("Next sibling", main.nextSibling);


//create a new element

let heading2 = document.createElement("h2");

//adding text - first method

let text = document.createTextNode("I am a new heading");

heading2.appendChild(text);
console.log(heading2)
heading2.id = "new"
heading2.className = "newClass"

//clone the element
let headingclone1 = heading2.cloneNode(true);

//appending the heading to the body

document.body.appendChild(heading2);

// main.appendChild(heading2)

main.insertBefore(headingclone1, taskList);

//create a new div
let newdiv = document.createElement("div");

newdiv.innerHTML = `<p>Paragraph</p><br><p><span>paragraph2</span></p>`;
newdiv.style.backgroundColor = 'lightgreen'

document.body.appendChild(newdiv);

toDoList = () => {
    let toDoText = document.getElementById("newtask").value
    let taskList = document.getElementsByClassName("list-group")[0]
    // console.log("children element ", taskList.children);
    taskList.children[0].innerHTML = toDoText
}