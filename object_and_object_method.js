// In JavaScript, almost "everything" is an object.

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
// All JavaScript values, except primitives, are objects.


// A primitive value is a value that has no properties or methods.

// 3.14 is a primitive value

// A primitive data type is data that has a primitive value.
const ObjectInDetail = {
    description: "A JavaScript object is a collection of named values.",
    constructor_means:"The constructor property returns the function that created the Object prototype.",
    objectNameDotConstructor:"function Object() { [native code] }",
   }

const person = {
    firstName: "Ajithkumar",
    lastName: "R",
    age: 25,
    eyeColor: "blue",
    role: "Full Stack Developer",
    skills:"HTML,CSS,JS,NODEJS,REACTJS"
  };

  console.log(person.constructor)

  
  console.log(Object.keys(person)) //The Object.keys() method returns an Array Iterator object with the keys of an object. - does not change the original object.

function Developer(name,jobtitle,born,skills){
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
    this.skills = skills;
}

Developer.prototype.salary = 900000; // The prototype property allows you to add new properties and methods to objects
const backEnd = Object.create(Developer)
backEnd.skills = "python, nodejs"
const newDev = new Developer("ajith","full Stack Developer",1998,"HTML,CSS,JS")
const frontEnd  = Object.create(newDev)
frontEnd.name = "ajithkumar Rangappan"
console.log("prototye chain",frontEnd) //Developer {name: 'ajithkumar Rangappan'}
console.log("prototye chain",frontEnd.Skills) //undefined
console.log("by Object.create method",backEnd.skills) //python, nodejs
console.log(newDev) //Developer {name: 'ajith', jobtitle: 'full Stack Developer', born: 1998, skills: 'HTML,CSS,JS'}
console.log(newDev.salary) //900000
console.log("?.",newDev?.lastname) //The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

console.log(newDev.toString()) //[object Object]
console.log(Object.toString(newDev)) //function Object() { [native code] }

delete newDev.born // The delete operator deletes a property from an object:

console.log(newDev.born) //undefined


console.log("born" in newDev)  //The in operator returns true if a property is in an object.

const Skills = ["HTML", "CSS", "JS"];

// The instanceof operator returns true if an object is an instance of a specified object:

console.log(Skills instanceof Array )  // Returns true
console.log(Skills instanceof Object)  // Returns true
console.log(Skills instanceof String ) // Returns false
console.log(Skills instanceof Number) // Returns false
console.log(newDev instanceof Object) // true

/* The void operator evaluates an expression and returns undefined. 
This operator is often used to obtain the undefined primitive value, 
using "void(0)" (useful when evaluating an expression without using the return value). */

