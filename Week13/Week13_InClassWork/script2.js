//slice, substring, concat, trim

let str1 = "Hello World!!";

console.log("Slice: ", str1.slice(2,5))
console.log("Slice: ", str1.slice(2))
console.log("Slice: ", str1.slice(5,2))
console.log("Slice: ", str1.slice(-5,-2))


console.log("substring: ", str1.substring(2,5))
console.log("substring: ", str1.substring(2))
console.log("substring: ", str1.substring(5,2))
console.log("substring: ", str1.substring(-5,-2))

let str2 = "CSIS";
let str3 = "-";
let str4 = "1280";

console.log("Concatenation", str2.concat(" ", str3," ", str4));


let str5= "  Hello JavaScript!!   ";

console.log("Using trim", str5.trim());
console.log("Using trimStart", str5.trimStart());
console.log("Using trimEnd", str5.trimEnd());

let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");

para1.innerHTML = `<pre>${str5}</pre>`;
para2.innerHTML = `<pre>${str5.trim()}</pre>`;
para3.innerHTML = `<pre>${str5.trimStart()}</pre>`;

//comparison

let str6="A";
let str7="a";

console.log("Comparison", str6<str7);

//using localecompare() -1 (before), 0 (same), 1(after)