

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

// Undefined variables - Those variables which have been initialized but currently do not hold any value
// Undeclared variables - Varialse not even initialized


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

const result3 = fun4()(5,7);     // It does what above two commands do in two statements in one statement only
console.log(result3);
 // The function which is the return value of fun4 is returned when we execute fun4(), then when we again execute it 
 // either by executing the variable or currying the function, we execute the returned value which is another function,
 // so then this function gets executed and it o/p's the result.



// Anonymous functions - 
// Functions that do not have a name in their declaration are called as anonymous functions
(function () {
    // Content inside it 
    console.log("Anonymous function");
    // const abc = "abc"
});
// If we don't enclose the anonymous function with brackets, then it will throw an error
// () makes the anonymous function an expression that returns a function object.
// Above function won't get executed as there is no way to reference to it to execute it
// An anonymous function is not accessible after its initial creation.

// If we place () after the above function object , it will get executed as soon as it is 
// reached, this is called IIFE - Immeadiately Invoked Function Expression

(function (){
    console.log("I am an IIFE");
})();

// Assigning anonymous functions to variables
let anonFunc1 = function (){
    console.log("Anonymous function assigned to a variable");
}

anonFunc1();

// Anonymous function as arguments
setTimeout(function(){
    console.log("Anonymous function passed as argument")
},1000)

// Arrow functions - Different way of declaring functions in JS
const arrow1 = () => {
    console.log('Arrow function');
}
// 'function' keyword is omitted, after parenthesis => is used.


/////////////////////////////////////////////////////

// Datatypes - 

// Primitive and Reference types

// Primitive -
// 1. String - holds any set of characters
// Strings are immutable, This means that it cannot be modified once created
let str1 = "abc"

// 2. number - 
let num1 = 10;

// NaN - Not a number => special numeric value denoting invalid number, ex: dividing by 0
// Big int is also there, denoted number larger than normal number

// 3. boolean - true or false (holds either true or false)
let bool1 = true;
// All other data types can be converted into boolean in JS
// Null, undefined, 0 or Nan, empty string = All these are falsy and all others are truthy in JS


// 4. Null - has only one value i.e null
// null is an assignment value. It can be assigned to a variable as a representation of no value
let null1 = null;
console.log(typeof null1); // returns object

// 5. Undefined - has only 1 value i.e undefined for it
// undefined means a variable has been declared but has not yet been assigned a value
let undef1;     // Value of this variable is undefined
typeof undef1 // Also undefined

// When a variable is defined by us but not given any value, it is assigned undefined by JS, whereas if there
// is some variable whose value we want to be remain empty, we put its value as null.

// 6. Symbol - Special type 
// The Symbol function creates a new unique value every time you call it.
let sym1 = Symbol();
// A unique value will be assigned to sym1, this value will be unique in its entirety


// Reference Types - 
// Objects - All reference types in JS are object types
let obj1 = {};      

let obj2 = {
    fName: 'abc',
    lName: 'xyz',
    age: 25
}

// In objects , we can add everything including any primitive datatype, arrays, another object , functions etc

// To access any property of an object
console.log(obj2.fName);    // Dot notation

console.log(obj2['lName']); // Array-like notation

// Adding new key-value pairs to object
obj2.place = "Delhi";

console.log(obj2);

// Functions are also an object, A function object includes a string which holds the actual code -- 
// the function body -- of the function. The code is literally just a string
