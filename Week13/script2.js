// slice, substring, concat, trim

let str1 = "Hello World!!";

console.log("Slice: ", str1.slice(2, 5))
console.log("Slice: ", str1.slice(2))
console.log("Slice: ", str1.slice(5, 2))
console.log("Slice: ", str1.slice(-5, -2))

console.log("substring: ", str1.substring(2, 5))
console.log("substring: ", str1.substring(2))
console.log("substring: ", str1.substring(5, 2))
console.log("substring: ", str1.substring(-5, -2)) //does not work

let str2 = "CSIS";
let str3 = "-";
let str4 = 1280;

console.log("Concatenation", str2.concat(str3, str4));

let str5 = " Hello Javascript!!  "

console.log("Using trim", str5.trim())
console.log("Using trimStart", str5.trimStart())
console.log("Using trimEnd", str5.trimEnd());

let str6 = "John";
let str7 = "john";

console.log("Comparason", str6 < str7);

//using localecompare() -1 (before), 0 (same), 1 (after)

console.log("Comparason", str6.localeCompare(str7));
