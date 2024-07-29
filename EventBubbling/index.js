const parent = document.querySelector("div");
const child = document.querySelector(".child");


parent.addEventListener("click", ()=>{
    console.log("Parent Clicked...")
},true);

child.addEventListener("click", (e)=>{
    //e.stopPropagation();
    console.log("Child Clicked...")
})