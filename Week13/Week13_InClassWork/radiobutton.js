
let form = document.querySelector("form");
form.onchange = () => {

    let options = document.querySelectorAll("input");
    // let labels = document.querySelectorAll("label");
    label = ""
    pizza_value = "";
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            pizza_value = options[i].value;
            console.log(pizza_value)
            label = options[i].nextSibling.textContent
            // label = labels[i].innerText;
        }
    }


    let result = document.getElementById("result");
    result.innerHTML = "";
    result.innerHTML = `this ${label} price is ${pizza_value}`;

}


// form.addEventListener("change", ()=>{
// })