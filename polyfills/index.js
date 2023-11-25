/**POLYFILL FOR CALL, APPLY AND BIND METHOD */


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
        throw new Error("this is not of type function")
    }

    context.fnRef = this;
    let result = context.fnRef(...args);
    delete context.fnRef;

    return result;
}

Function.prototype.myApply = function (context, args){
    if(typeof this !== 'function'){
        throw new Error("this is not of type function")
    }

    context.fnRef = this;
    let result = context.fnRef(...args);
    delete context.fnRef;

    return result;
}



// console.log(person1.getName.myCall(person2, "Kolkata"));
console.log(person1.getName.myApply(person2, ["Kolkata", "Bengal"]));