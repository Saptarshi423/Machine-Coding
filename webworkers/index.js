let calculate_btn = document.getElementById("myButton1");
let changeColor_btn = document.getElementById("myButton2");
let worker = new Worker("worker.js");

calculate_btn.addEventListener("click", () => {
    worker.postMessage(40000000);
});

worker.onmessage = (e) => {
    const { data } = e; 
    console.log(data);
}


changeColor_btn.addEventListener("click", () => {
    if(document.body.style.backgroundColor === "red") {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "red";
    }
});