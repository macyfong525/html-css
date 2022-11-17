let arrMovies = [
    "Aliens",
    "harry Potter",
    " SpiderMan",
    "Birds of Prey",
    "Ex Machina",
    "Gladiator",
    "Vengers",
];

let para = document.querySelector("#mMovies");

let displayMovies = () => {

    let random1, random2, random3;
    para.innerHTML = "";

    do{
        random1 = Math.floor(Math.random()*arrMovies.length);
        random2 = Math.floor(Math.random()*arrMovies.length);
        random3 = Math.floor(Math.random()*arrMovies.length);
    }while(random1 == random2 || random2 == random3 || random1 ==random3)
        console.log(random1, random2, random3);

        para.innerHTML += arrMovies[random1] + "<br>";
        para.innerHTML += arrMovies[random2] + "<br>";
        para.innerHTML += arrMovies[random3] + "<br>";

}

let displayAllMovies = ()=>{
para.innerHTML = "";
    for(let i=0;i<arrMovies.length;i++){
        para.innerHTML += arrMovies[i] + "<br>";
    }
}

let updateMovies = ()=>{
    let newMovie = document.getElementById("myMovie").value;

    if(newMovie !=''){
        arrMovies.push(newMovie);
    }
    document.getElementById("myMovie").value = "";
}

let resetValues = (form)=>{
    console.log(form);
    para.innerHTML="";
    form.reset();
  
}