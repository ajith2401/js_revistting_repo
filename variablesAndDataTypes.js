

/* Data Types:
undefined, null, boolean, string, symbol, number, and object,bigint
short key : SNNUOBB
*/


// undefineds
let age 

console.log(age)  // undefined

// Numbers:
let heightInInch = 5.8;
console.log("height In Inch", heightInInch)

// Strings:
let name = "ajith kumar";
let lastName = "R";

console.log("full name", name + " " + lastName)

// Booleans
let x = true;
let y = false;
console.log("x , y", x,y )

// Object:
const person = {firstName:"ajithkumar", lastName:"r"};

console.log(person.firstName,person.lastName)

console.table(person)  // if you want to log the object like table

// Array object:
const details = ["ajith", "javascript", "fullStack"];

console.log(details)

// Date object:
const date = new Date("1998-08-06");

console.log("date",date)

/* JavaScript Variables can be declared in 4 ways:

Automatically
Using "var"
Using "let"
Using "const" */

// automatically

x = 5;
y = 6;
z = x + y;
console.log(z)

// You declare a JavaScript variable with the var or the let keyword:


var myName = "ajith"

myName = 123

// var 

let fullName = "ajithkumar"

// use "const" if the value should not be changed
// use "const" if the type should not be changed (Arrays and Objects)
const pi = 3.14

// pi  = 123

// console.log(pi) = Uncaught TypeError TypeError: Assignment to constant variable.
// You can declare many variables in one statement.

let Name = "ajithkumar", role = "Full Stack Developer", experience = "it is just a number when you have enoug knowledge and practice", actualWorkExpInYear = 1;






