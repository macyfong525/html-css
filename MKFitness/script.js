let proteinForActive = 1.8;
let proteinForNonActive = 0.8;

let calculateProtein = () => {
    let weight = document.getElementById("kg").value
    let exerciseType = document.getElementsByName("proteinFactor");
    document.getElementById("protein").innerHTML = '';
    if (weight == "" || weight <= 0) {
        alert("Please enter your weight")
    } else if (!exerciseType[0].checked && !exerciseType[1].checked) {
        alert("Please select how often do you exercise")
    } else if (exerciseType[0].checked) {

        document.getElementById("protein").innerHTML = "The recommended amount of protein intake per day is"
        output = exerciseType[0].value * weight
        document.getElementById("protein").innerHTML += " " + output + " grams."
    } else {
        output = exerciseType[1].value * weight

        document.getElementById("protein").innerHTML += " " + output + " grams."
    }
}

//BMI
let calculateBMI = () => {
    let weight = document.getElementById("kg").value
    let height = document.getElementById("m").value
    if (weight == "" || weight <= 0 || height == "" || height <= 0 || height > 3) {
        alert("Please check your input for weight(kg) and height(m)")
    } else {
        let result = weight / (Math.pow(height, 2));

        if (result >= 40) {
            document.getElementById("BMI").innerHTML = "You are in Obesity Class III."


        } else if (result > 35 && result < 39.9) {
            document.getElementById("BMI").innerHTML = "You are in Obesity Class II."
        } else if (result > 30 && result < 34.9) {
            document.getElementById("BMI").innerHTML = "You are in Obesity Class I."
        } else if (result > 25 && result < 29.9) {
            document.getElementById("BMI").innerHTML = "You are in Overweight Class."
        } else if (result > 18.5 && result < 24.99) {
            document.getElementById("BMI").innerHTML = "You are in normal weight range."
        } else {
            document.getElementById("BMI").innerHTML = "You are in underweight."
        }

    }
}


//for image mouseover
let image = document.getElementById("food")
const rolloverEffect = function() {
    image.src = 'images/kickburger.jpg'
    image.width = 350;
}

//for mouserover to protein and BMI

const enlargeEffect = function(id) {
    let word = document.getElementById(id)
    word.style.fontSize = "2em"
}

const backNormal = function(id) {
    let word = document.getElementById(id)
    word.style.fontSize = "1em"
}

let shine = document.getElementsByClassName("link-deco");
console.log(shine)
for (let i = 0; i < shine.length; i++) {
    shine[i].addEventListener("mouseover", function(event) {
        event.target.style.color = "orange";
        setTimeout(function() {
            event.target.style.color = "blue";
        }, 600);
    }, false);
}