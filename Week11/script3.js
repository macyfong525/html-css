//using loops

//initialization  Loop control variable LCV
//condition 
// updation

//while loop

let i=0;

while(i<10){
    console.log(i);
    // i=i+2;
    // i++;
    // ++i;
    i += 2; // i = i+1
}

// division and modulus

let a=5, b=3,c;
c=a/b
c=a%b //remainder
console.log(c);

//do while

let j=10;
do{
    console.log("j: " + j);
    j -=1;
}while(j>0);

//for loop

for(let k=2;k<10;k+=2){
console.log("k: "+k);
}

//swapping two numbers

let num1=10,num2=20;
console.log("Before swapping: ", num1, num2);

//swap

let temp;

temp = num1;
num1=num2;
num2=temp;

console.log("After swapping: ", num1, num2);

//calcualte the factorial of a number

let number =4;
let result=1;

for(let i=1;i<=number;i++){
    result *= i;
}
console.log("The factorial of " + number + " is: " + result);