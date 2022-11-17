//submit registeration form
let submitForm = (form) => {
    let x = document.querySelector('#oyes').checked;
    let y = document.querySelector('#ono').checked;
    if (x == true && y == false) {
        alert("You have covid in 14 days, cannot register now!")
    } else if (x == false && y == false || form.checkValidity() == false) {
        alert("Select required class information!")
    } else {
        form.submit();
        alert("Your registeration has been submitted!")
    }
};