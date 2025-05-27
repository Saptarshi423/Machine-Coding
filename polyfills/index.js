//POLYFILL FOR CALL, APPLY AND BIND METHOD 
/** 
let person1 = {
    firstName: "Rahul",
    lastName: "Kumar",
    getName : function (city = "Delhi", state="UT"){
        return(this.firstName+" "+this.lastName+" "+"belongs from"+" "+city+" "+state);
    }
}

let person2 = {
    firstName: "David",
    lastName: "Kumar" 
}

Function.prototype.myCall = function (context, ...args){
    if(typeof this !== 'function'){
        throw new Error("this is not of type function");
                                                                
    }
    context.fnRef = this;
    let result = context.fnRef(...args);
    delete context.fnRef;

    return result;
}

Function.prototype.myApply = function (context, args){
    if(typeof this !== 'function'){
        throw new Error("this is not of type function");
    }

    context.fnRef = this;
    let result = context.fnRef(...args);
    delete context.fnRef;

    return result;
}


Function.prototype.myBind = function (context, ...args){
    if( typeof this !== 'function'){
        throw new Error("this is not of type function");
    }

    let callback = this;

    return function(){
        return callback.apply(context, args);
    }
}

let ret = person1.getName.myBind(person2);
console.log(ret())
**/



// // console.log(person1.getName.myCall(person2, "Kolkata"));
// console.log(person1.getName.myApply(person2, ["Kolkata", "Bengal"]));







//Polyfill for flatten an array.
// Array.prototype.myflatten = function(){
//     let output = [];
//     let arr = this;

//     const flat = (arr)=>{
//         for(let a=0;a<arr.length;a++){
//             if(Array.isArray(arr[a])) flat(arr[a]);
//             else output.push(arr[a]);
//         }
//     }

//     flat(arr);
//     return output;

// }


// let arr = [1, [2,[3],4, [5,[6,[7, [8]]],9]]]
// console.log(arr.myflatten());

// FLATTEN A NESTED OBJECT.
// Declare an object
let obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};

function debounce(delay=1000, func){

}