let findGreater = function(myForm) {
    // let num1Txt = myForm.numId1.value;
    // let num2Txt = myForm["numId2"].value;
    // let num3Txt = myForm[2].value;
    let numInputs = myForm.querySelectorAll("input#numId1, input#numId2, input#numId3");

    // !!! without parseInt, it is comparing two strings!!!
    // let num1 = parseInt(num1Txt);
    // let num2 = parseInt(num2Txt);
    // let num3 = parseInt(num3Txt);
    let nums = [];
    numInputs.forEach(numInput => {
        nums.push(parseInt(numInput.value));
    });

    // let para1 = document.querySelector("#demo1");
    let paras = document.querySelectorAll("#demo1, #demo2, #demo3");

    // check for non-number input
    // if (num[1] == NaN || num[2] == Nan || num3 == NaN) {
    //     para1.innerHTML = `${num1 == NaN ? num1Txt : num2 == NaN ? num2Txt : num3Txt} of Number ${num1 == NaN ? 1 : num2 == NaN ? 2 : 3} is not a number`;
    //     para1.color = "red";
    //     return;
    // }
    let hasNaN = false;
    for (let i = 0; i < nums.length; i++) {
        if (isNaN(nums[i])) {
            paras[i].innerHTML = `"${numInputs[i].value}" of Number ${i} is not a number!`;
            paras[i].style.color = "red";
            hasNaN = true;
        } else {
            paras[i].innerHTML = "";
            paras[i].style.color = "black";
        }
    }
    if (hasNaN) return; // enforce end if there is any input NaN

    if (nums[0] >= nums[1]) {
        if (nums[0] >= nums[2]) {
            paras[0].innerHTML = "Number 1 is the greatest";
        } else if (nums[2] >= nums[0]) {
            paras[0].innerHTML = "Number 3 is the greatest";
        }
    }
    else {
        if (nums[1] >= nums[2]) {
            paras[0].innerHTML = "Number 2 is the greatest";
        } else {
            paras[0].innerHTML = "Number 3 is the greatest";
        }
    }

    // paras[1].innerHTML = `Its value is ${Math.max(nums[0], nums[1], nums[2])}`;
    paras[1].innerHTML = `Its value is ${nums.reduce((acc, num) => acc > num ? acc : num)}`;
};