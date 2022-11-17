let str1 = "todays forcast";

console.log("the length is: ", str1.length);

console.log("character at specific index:", str1.charAt(1));

console.log("character code at specific index,", str1.charCodeAt(3));

let str2 = "Today's \"Forecast\"";
console.log(str2)

let copyrightSymbol = '&copy';

console.log("The copyright symbol: ", copyrightSymbol)

console.log("The copyright symbol: ", String.fromCharCode(169));



let str4 = 'johnsmitchjohn@douglascollege.ca'

console.log("using indexof ", str4.indexOf("n"))
console.log("using indexof ", str4.indexOf("n", 5))

console.log("using lastindexof ", str4.lastIndexOf("n"))
console.log("using search ", str4.search("john"))

console.log("using match ", str4.match("abc"))

console.log("using replace ", str4.replace("john", "jane"))
console.log("using replaceAll ", str4.replaceAll("john", "jane"))


//using split
console.log("using split", str4.split('@'))
console.log("using split", str4.split(' '))


let person = {
    name: 'john', age: 21
};

let personString = "{\"name\": \"john\", \"age\": \"21\"}"

console.log("parsing", JSON.parse(personString))
console.log("Stringifying", JSON.stringify(person))


//for in loop=> OBJECTS
//iterate property of object
for (let i in person) {
    console.log(i, person[i])
}


