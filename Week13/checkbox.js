
function popularSports() {

    let options = document.getElementsByName("sports")
    console.log(options);

    let selectOptions = [];

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectOptions.push(options[i].value);
        }
    }
    console.log(selectOptions);

    let result = document.getElementById("result");
    result.innerHTML = "";

    for (let i = 0; i < selectOptions.length; i++) {
        result.innerHTML += `${selectOptions[i]} <br>`
    }


}