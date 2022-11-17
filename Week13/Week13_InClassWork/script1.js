//getting the length of the string

let str1 = "Today's forecast";

console.log("The length is: ", str1.length);

//charAt() and charCodeAt()

console.log("Character at specific index:", str1.charAt(3));
console.log("Character Code at specific index:", str1.charCodeAt(3));

let str2 = "Today's \"Forecast\"";
console.log(str2);

let copyrightSymbol = '&copy';
console.log("The copyrigth symbol: ", copyrightSymbol) //it won't work
console.log("The copyright symbol: ", String.fromCharCode(169));

//searching and extracting substrings
//indexof, lastindexof, search, match

let str4 = "johnsmithjohn@douglascollege.ca";

//indexof - index of first occurence is returned

console.log("using indexof ", str4.indexOf("john")); 
//console.log("using indexof ", str4.indexOf("n", 5));

//console.log("using lastindexof ", str4.lastIndexOf("n"));
console.log("using search ", str4.search("john"));
console.log("using match ", str4.match("john"));

//using replace and replaceAll
console.log("using replace ", str4.replace("john", "jane"));
console.log("using replaceAll ", str4.replaceAll("john", "jane"));

//using split method
str5 = "Hello World !!"
console.log("Using split", str4.split("o","."));
console.log("Using split", str5.split(" "));

//JSON.parse() and JSON.strigify()

let person = { 
    name: 'john',  
age: 21};

//let personString = "{'name': 'john','age': '21'}";
let personString = '{"name": "john","age": "21"}';
console.log("Parsing", JSON.parse(personString));
console.log("Stringifying", JSON.stringify(person));

//for in loop => OBJECTS

for(let i in person){
    console.log(person[i]);
}