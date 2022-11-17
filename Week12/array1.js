let arr=[];

let add = function(){
    let element = document.getElementById("arrayElement").value;
    console.log(element);
if(element != ""){
    arr.push(element);
}
else{
    alert("It cant be empty");
}
    document.getElementById("arrayElement").value = "";
}

let display = function(){
    let para = document.querySelector("#para");
    para.innerHTML = "";
    console.log(para);
   // para.innerHTML = "Hi";
    for(let i = 0; i<arr.length;i++){
        para.innerHTML += `Element ${i} = ${arr[i]}  <br>`;
    }
}