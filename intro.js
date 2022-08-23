
// Variables - Variables are of dynamic typed in JS, can be re-assigned to different type
// datatype
// var
console.log(a)  // var variables gets hoisted as undefined
var a = 5;
var b = 10;
console.log(a,b)
var a = "abc"
console.log(a)  // a has "abc" as its value

// var variables can be re-declared, re-assigned
a = "new value"
console.log(a)
var var1;   // can be initilized as undefined

// Has function scope = Variables defined inside a function will have its scope limited to it
// but if defined anywhere else, its scope will be global


// let 
// console.log(c)  - let variables can't be accessed before declaration as even though
// they are hoisted, they are present in temporal dead zone (TDZ)
let c = 5;
c = "c"     // can be re-assigned but not re-declared
// let c = "new value"  - will produce error as c is already defined
let e;  // // can be initilized as undefined


// const
const d = 5;
// can neither be re-assigned or re-declared
// const f;     will produce error as f has no value and is undefined , since const 
// can't be re-assigned, it will remain undefined

// Both let and const have block scope, hence accessible inside the blocks in which they are defined