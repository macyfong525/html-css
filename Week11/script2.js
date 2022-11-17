let findGreater = function(myForm) {
    console.log(myForm);
    let num1 = myForm[0].value;
    let num2 = myForm["num2"].value;
    let num3 = myForm["num3"].value;
    console.log(num1, num2, num3);

    // let para1 = document.getElementById("demo1");
    let para1 = document.querySelector("#demo1");
    console.log(para1)

    if (num1 > num2) {
        para1.innerHTML = num1 + " is greater than " + num2;
    } else {
        // para1.innerHTML = num2 + " is greater than " + num1;
        para1.innerHTML = `${num2}  is greater than  ${num1}`;
    }


    //finding the greatest of three numbers

    if (num1 > num2) {
        if (num1 > num3) {
            para1.innerHTML = `${num1} is the greatest`;
        } else {
            para1.innerHTML = `${num3} is the greatest`;
        }
    } else {
        if (num2 > num3) {
            para1.innerHTML = `${num2} is the greatest`;
        } else {
            para1.innerHTML = `${num3} is the greatest`;
        }
    }

    let para2 = document.getElementById("demo2");

    if (num1 > num2 && num1 > num3) {
        para2.innerHTML = `${num1} is the greatest`;
    } else if (num2 > num1 && num2 > num3) {
        para2.innerHTML = `${num2} is the greatest`;
    } else {
        para2.innerHTML = `${num3} is the greatest`;
    }

    //using Math.max function
    let para3 = document.getElementById("demo3");

    para3.innerHTML = `Using Math.max function, ${Math.max(num1,num2,num3)} is the greatest`;

}

//using swtich case
console.log("hi")
let grade = 'A';
// let para4 = document.getElementById("para4");
let para4 = document.querySelector("#para4");
console.log(para4);
switch (grade) {
    case 'A':
        para4.innerHTML = `Excellent`;
        break;
    case 'B':
        para4.innerHTML = `Good job!!`;
        break;
    case 'P':
        para4.innerHTML = `Pass`;
        break;
    case 'F':
        para4.innerHTML = `Fail`;
        break;
    default:
        para4.innerHTML = "Invalid grade";
}