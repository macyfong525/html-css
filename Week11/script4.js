
let arr1 = [5,6,7,33.4,"Apple", "Orange"];
let arr2=['a','b','c','d'];

console.log(arr1[3]);
console.log(arr1);
console.log(arr2);

let para1 = document.getElementById("demo1");

// para1.innerHTML = arr1;

for(let i=0;i<arr1.length;i++){
// para1.innerHTML += arr1[i] + "<br>";
para1.innerHTML += `${arr1[i]} <br>`;
}

//for of loop
let para2 = document.getElementById("demo2");
for(let ele of arr1){
para2.innerHTML += `${ele} <br>`
}

//push or unshift
//push - adds a new element in the end
//unshift - adds a new element at the beinning
console.log('try push and unshift')
arr1.push("Strawberry");
arr1.unshift("Blueberry");
console.log(arr1)

//remove elements
//pop - end
//shift - beginning

let removedElement1 = arr1.pop();
let removedElement2 = arr1.shift();

console.log(arr1)

//Splice method
let arrMod= arr1.splice(4,1,"new1","new2");
console.log(arr1)
console.log(arrMod)

//slice - it does not change the original array
 let sliceArr = arr1.slice(2,6);
 console.log(sliceArr);

 //reverse
 arr2.reverse();
 console.log(arr2);
 arr2.sort();
 console.log(arr2);

 arr3=[22,3,1,12,56,5]
 arr3.sort(function(a,b){
    return a-b;
 });
 console.log(arr3);
