//selecting all checkbox inputs

// let popularSports = ()=>{
    
//     let options = document.getElementsByName("sports");
    
//     console.log(options);
//     let selectedOptions = [];
    
//     for(let i=0;i<options.length;i++){
//             if(options[i].checked){
//                 selectedOptions.push(options[i].value);
//             }
//     }
//         console.log(selectedOptions);

//         let result = document.getElementById("result");
//         result.innerHTML = "";

//         for(let i=0;i<selectedOptions.length;i++){
//             //result.innerHTML = selectedOptions;
//             result.innerHTML += `${selectedOptions[i]} <br> `

//         }
// }


let form = document.querySelector("form");
console.log(form)
// add on change event to the form

form.onchange = function(){
    console.log("Hello")
    let sports = document.getElementsByName("sports");
    console.log(sports);
}
