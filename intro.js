// 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


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


//////////////////////////////////////////////////////////

// Functions
// Default return value is undefined for a function
// A function execution stops as soon as a return statement is found
// function declaration - 
function add(a,b){
    console.log("Function Declaration")
    return a+b;
}
// Paramter - a,b in above function are parameters
// Arguments - 5,5 passed below are arguments
const ans1 = add(5,5)   
// Calling a function and assigning the returned value to a variable
console.log(ans1)

// function expression
const func1 = function (a,b){

    return a*b;
}

const ans2 = func1(2,3)
console.log(ans2)

// The argument object 
// Each function contains an object called arguments in it
// This object behaves as array (although not an array) as we can access it values using array notations
// arguments[0], arguments[1]

function addArg(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

const res1 = addArg(2,3,4,5,6)
console.log(res1)
// In above example , even though function definition itself has no parameters, we can still pass
// arguments while calling the function 

function addArg2(a,b){
    let summation = 0;
    for(let i=0;i<arguments.length;i++){
        summation += arguments[i];
    }
    return summation;
}

const res2 = addArg2(4,5,6,7,8);
console.log(res2 + " arguemnts with parameters")

// Function Hoisting
hoisted();

function hoisted(){
    console.log("I am a hoisted function")
}

// Above function is first hoisted to top by JS so even though it is defined after it is being called, it will
// still execute correctly

// Hoisting - JavaScript engine physically moves function declarations to the top of the code before executing them

// Functions - First class citizens
// In JS, functions are first-class citizens - stored in variables, passed as arguement to other functions, 
// return functions as value from other functions

// 1. Storing function as variable
function fun1(a,b){
    return a-b;
}

const fun2 = fun1;
// fun2 variables holds a reference of fun1 function 
const result1 = fun2(10,5)  
// Executing the second variable executes the original function
console.log(result1)

// 2. Passing function as an arguement 
 function fun3(a,b,fn){
    const res = fn(a,b)
    return res;
 }

 const result2 = fun3(100,50,fun1)
 // function fun1 is being passed as an argument to function fun3
 console.log(result2)

 console.log(typeof fun3) // O/p's function


 // 3. Returning a function as  return value of a function
 function fun4(){
    return function(a,b){
        return a*b;
    }
 }

//  const result3 = fun4()   // Function currying
//  const result4 = result3(5,7)

const result3 = fun4()(5,7)     // It does what above two commands do in two statements in one statement only
 console.log(result3)
 // The function which is the return value of fun4 is returned when we execute fun4(), then when we again execute it 
 // either by executing the variable or currying the function, we execute the returned value which is another function,
 // so then this function gets executed and it o/p's the result.

 


