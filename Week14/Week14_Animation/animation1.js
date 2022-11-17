let animate = setTimeout(() => {
    alert("hello");
    console.log("i am executed after 1 second")
}, 1000);

clearTimeout(animate);

//set interval and clear interval

let animate1 = setInterval(() => {
    console.log("excuted")
}, 2000);