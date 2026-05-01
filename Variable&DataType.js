// Basic console output
console.log("Welcome to JavaScript");
console.log("I love JS!");

// -------- Variables --------
let name = "Md Ahad";
console.log(name);

let age = 24;

// null and undefined
let x = null;        // null is treated as an object type (historical JS behavior)
let y = undefined;   // undefined means no value assigned

console.log(x);
console.log(y);
console.log(age);

// Boolean type
let isFollow = false;
console.log(isFollow);

/* JavaScript is a dynamically typed language
 "=" is an assignment operator
  Variable names are case-sensitive ("a" and "A" are different) */

// -------- Variable Types --------

// var -> old system (can be redeclared, not recommended)
var oldAge = 24;
var oldAge = 65; // allowed (but bad practice)

// let, const -> modern JavaScript (cannot redeclare same variable)

// const -> cannot be updated or redeclared
let message = "Welcome to USA";
let ages = 100;
console.log(message);

const ag = 24;
// ag = 30; //  Not allowed
console.log(ag);

const PI = 3.1416;
console.log(PI);

//its not correct
const P;
p=3.1416;



// If declared without value → undefined
let X;
console.log(X);

// Block scope example
{
    let z = 5;
    console.log(z);
}

// -------- Data Types --------
/*
Primitive data types (7 types):
- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol

Non-primitive:
- Object (includes Arrays, Functions, etc.)
*/

// Number
let price = 50.5;

// BigInt
let m = BigInt("1234");

// -------- Object --------
const student = {
    fullName: "Md Ahad",
    age: 22,
    cgpa: 3.50,
    isPass: true
};

// Access object properties
console.log(student.age);
console.log(student["cgpa"]);