//window object - global

window.alert("Hello World!!");

alert("Enter two numbers");

let num1 = prompt("Enter first number",2);
num1 = parseInt(num1);
let num2 = prompt("Enter second number",2);
num2 = parseInt(num2);

alert("The sum is: " + (num1+num2));

//confirm returns a boolean value
let result = confirm("Are you sure you want to quit?");
console.log(result);


