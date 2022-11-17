

let form = document.getElementsByTagName("form")[0]
console.log(form)
let tasklist = document.getElementById("tasks")


form.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();
    let task = document.getElementById("task").value
    let li = document.createElement("li")
    if (task == "") {
        alert("the task cannot be empty");
        return;
    }
    li.innerHTML = `${task} <button class="delete">X</button>`
    console.log(li)

    tasklist.appendChild(li)
    document.getElementById("task").value = ""
}




tasklist.addEventListener("click", removeTask)
function removeTask(event) {
    console.log(event)
    if (event.target.className == "delete") {
        if (confirm("are you sure you want to delete?")) {
            tasklist.removeChild(event.target.parentElement)
        }
    }
}