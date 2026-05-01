# JavaScript Basics (Beginner-Friendly Notes)

This document provides a clear and simple introduction to fundamental JavaScript concepts. It is designed for beginners to quickly understand how JavaScript works with examples.

---
##  Console Output
JavaScript uses `console.log()` to display output in the browser console.
It is mainly used for debugging and testing code.
```javascript
console.log("Welcome to JavaScript");
```
---
##  Variables
Variables are used to store data values. JavaScript is a **dynamically typed language**, meaning you don’t need to declare the data type explicitly.
```javascript
let name = "Md Ahad";
let age = 24;
```
### Types of Variable Declarations:

* `let` → Can be updated, but cannot be redeclared in the same scope
* `const` → Cannot be updated or redeclared
* `var` → Old method, can be redeclared (not recommended)
---

##  Data Types
###  Primitive Data Types:

These store single values:

* **String** → Text (`"Hello"`)
* **Number** → Numeric values (`10`, `50.5`)
* **Boolean** → `true` / `false`
* **Undefined** → Variable declared but no value assigned
* **Null** → Intentional empty value
* **BigInt** → Large integers
* **Symbol** → Unique identifiers
---

##  Block Scope

Variables declared with `let` and `const` are limited to the block `{}` in which they are defined.

```javascript
{
  let z = 5;
  console.log(z);
}
```
 Outside the block, `z` cannot be accessed.
---

##  Constants

Constants are variables whose values cannot be changed after assignment.

```javascript
const PI = 3.1416;
```
 Attempting to update a constant will cause an error.
---
##  Objects

Objects are non-primitive data types used to store multiple values in key-value pairs.

```javascript
const student = {
  fullName: "Md Ahad",
  age: 22,
  cgpa: 3.50,
  isPass: true
};
```
### Accessing Object Values:

```javascript
console.log(student.age);        // Dot notation
console.log(student["cgpa"]);    // Bracket notation
```
---
##  Key Notes

* JavaScript is **case-sensitive** (`name` and `Name` are different)
* Use `let` and `const` instead of `var`
* Always declare variables before using them
* Use meaningful variable names for better readability

---

