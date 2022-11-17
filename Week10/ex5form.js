/* function generateEmail(){

} */

//function expression
let generateEmail = function(form){
/*  let inputs = document.querySelectorAll("input");
 console.log(inputs);
 let firstname = inputs[0].value;
 let lastname = inputs[1].value; */

/*  let forms = document.getElementsByTagName("form");
 console.log(forms);
 let form = forms[0] */

 console.log(form);

 let firstname =form.elements["fname"].value;
//  let lastname =form["lname"];
 let lastname =form[1].value;

 console.log(firstname,lastname)
 let email = firstname + "." + lastname + "@gmail.com";

 let para = document.querySelector("p");
 console.log(para);
 para.innerText += "  " + email;

 form.reset();
 form["fname"].focus();
 
}

let restrictEmail = function(form){
form["lname"].disabled = false;
}