//using parentElement and parentNode

console.log("Parent element of html",document.documentElement.parentElement);
console.log("Parent node of html",document.documentElement.parentNode);

console.log("Parent element of body",document.body.parentElement);
console.log("Parent node of body",document.body.parentNode);

//accessing the child

let taskList = document.getElementsByClassName("list-group")[0];
console.log(taskList);
console.log("Children elements",taskList.children);
console.log("child nodes",taskList.childNodes);
console.log("length of Children elements",taskList.children.length);
console.log("length of child nodes",taskList.childNodes.length);


//first element, first node, lastelementchild, lastnode
console.log("First Child element",taskList.firstElementChild);
console.log("First child node",taskList.firstChild);

//next sibling and previous sibling
let main = document.getElementById("main");
console.log("Next element sibling",main.prev);
console.log("Next sibling",main.nextSibling);


//create a new element

let heading2 = document.createElement("h2");

//adding text - first method
let text = document.createTextNode("I am a new heading");

heading2.appendChild(text);
console.log(heading2);
heading2.id="new";
heading2.className = "newClass";

//clone the element

let headingclone1 = heading2.cloneNode(true);

//appending the heading to the body

document.body.appendChild(heading2);

main.insertBefore(headingclone1, taskList);

//create a new div

let newdiv = document.createElement("div");

//adding text - second method

newdiv.innerHTML = `<p>Paragraph</p><br><p><span>paragraph2</span></p>`;
newdiv.style.backgroundColor = "lightgreen";

document.body.appendChild(newdiv);

let addTask = ()=>{
    let newtask = document.getElementById("newtask").value;
    document.getElementById("newtask").value = "";

    let li = document.createElement("li");

    li.innerHTML = newtask;

    taskList.appendChild(li);
}