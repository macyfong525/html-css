let dorm = document.getElementsByName("dorm")[0]
let demo = document.getElementById("demo")
let selectedOptions = [];


dorm.addEventListener("change", ()=>{

    selectedOptions = dorm.selectedOptions;
    console.log(selectedOptions)

    demo.innerHTML = "";
    for(let option of selectedOptions){
        demo.innerHTML += `${option.value} <br> `

    }

})