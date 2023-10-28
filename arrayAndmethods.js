
// at method
// The at() method returns the same as [].

const arrAt = ["ajith","ram","kumar","kavi"]

console.log(arrAt.at(3))

// The concat() method concatenates (joins) two or more arrays.

// The concat() method returns a new array, containing the joined arrays.

// The concat() method does not change the existing arrays.

const ArrConcat1 = ["a","b","c","d"]
const ArrConcat2 = ["e","f","g","h"]
const ArrConcat3 = ["i","j","k","l"]

const joinedArray = ArrConcat1.concat(ArrConcat2,ArrConcat3)

console.log("joinedArray",joinedArray)

const joinedArray2 = [...ArrConcat1,...ArrConcat2,...ArrConcat3]

console.log("joinedArray2",joinedArray2)

const joinedArray3 = ArrConcat1.concat(ArrConcat2,ArrConcat2)

console.log("joinedArray3",joinedArray3)

// The constructor property returns the function that created the Array prototype.

// For JavaScript arrays the constructor property returns:

// function Array() { [native code] }
console.log("cons",joinedArray3.constructor)


// array.copyWithin(target, start, end) and it changes teh exsiting array

// The copyWithin() method copies array elements to another position in the array.

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

const forCopyWithIn = ["ajith","kumar","raja","ragu"]

forCopyWithIn.copyWithin(2)

console.log("forCopyWithIn",forCopyWithIn)

// entries 

// The entries() method returns an Array Iterator object with key/value pairs:

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// The entries() method does not change the original array.


const entryArray = ["reading","writting","coding"]

const e = entryArray.entries()

for (let x of e){
    console.log("entries",x)
}


// every
// The every() method executes a function for each array element.

// returns true if the function returns true for all elements.

// returns false if the function returns false for one element.

// does not execute the function for empty elements.

// does not change the original array

const survey = [
    { name: "Steve",   answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter",   answer: "Yes"},
    { name: "Elaine",  answer: "No"}
  ];
  
   
  
  function isSameAnswer(el,index,arr) {
    // Return true for the first element
    if (index === 0){
      return true;
    }
    else {
    // Compare the value of the previous element
      return (el.answer === arr[index - 1].answer);
    }
  }

console.log("is all same answer",survey.every(isSameAnswer));

// The fill() method fills specified elements in an array with a value.

// The fill() method overwrites the original array.

// Start and end position can be specified. If not, all elements will be filled.


const fillArray = ["a","b","c","d","e","f","g","h","i","j"]

console.log("fill method console",fillArray.fill("ajith"))

const fill2Array = ["a","b","c","d","e","f","g","h","i","j"]

console.log("fill method console",fill2Array.fill("ajith", 4,6))

// array filter . this method return a new array by removing all the elements which the callback function returns a falsu val

const listnum = [1, 2, 3, 4, 5, 6];

const even = listnum.filter((item)=>{
    return item % 2 === 0
}) ;

console.log(even) ;


const people = [
   {name: 'ajith', age: 26} ,
   {name:'kumar', age: 18 } ,
   {name:'raj', age: 24 } ,
   {name:'ragu', age: 13 } ,
    
]
const adults = people.filter(person => person.age >= 18);
console.log(adults)

// removing dublicates

const dummyArray = [1,3,4,6,7,8,2,3,4,5,2,1,2,3,4,5,6,7,8]

const nonDummyArray = dummyArray.filter((item,index,array)=>{
    return array.indexOf(item) === index
})
console.log("nonDummyArray>>",nonDummyArray)

// find method 

//returns the value of the first element that passes a test.

//executes a function for each array element.

//returns undefined if no elements are found.

//does not execute the function for empty elements.

//does not change the original array.

const findArray = [14,15,16,17,23,25,26,21,19,18]

const above18 = findArray.find((item)=>{
    return item >18
})

console.log("above18",above18)

const newArrFind = findArray.reverse()

const above18last = newArrFind.find((item)=>{
    return item >18
})

console.log("above18 last val ",above18last)

// The findIndex() 

// method executes a function for each array element.

// returns the index (position) of the first element that passes a test.

// returns -1 if no match is found.

// does not execute the function for empty array elements.

// does not change the original array.

const findIndexArray = [1,2,3,4,5,6,7,8,9,0]

const positionof = findIndexArray.findIndex((item)=>{
    return item > 5
})

console.log("positionof",positionof)

// The flat() method concatenates sub-array elements.


const flatArray = [1,2,3,[1,6,[5,6,[7]]],4,5,5,[1,3,2,[4,5]]]

const flattedArray = flatArray.flat(3)

console.log("flattedArray",flattedArray)


function multiBy2(item) {
    return 2 * item;
}

const flatMapArray = flatArray.flatMap(multiBy2);

console.log("flat Map Array", flatMapArray);

const flattenAndMultiply = (arr)=>{
    return arr.reduce((acc,item) =>{
        if(Array.isArray(item)){
            acc.push(...flattenAndMultiply(item))
        }else{
            acc.push(item * 2)
        }
        return acc
    },[])
}

const flatMapArray2 = flattenAndMultiply(flatArray);

console.log("flat Map Array using reduce", flatMapArray2);


// forEach

const myArray = [1,2,3,44,5,3,2,8]

let sum = 0

myArray.forEach((item)=>{
    sum+=item
})

// getting sum of an array
console.log(sum)

myArray.forEach((item,index)=>{
    console.log("myArray["+index+"]=" +item)
})
// The Array.from() method returns an array from any object with a length property.

// returns an array from any iterable object.

const arrayFromarr = Array.from("ABCDEFGAA")
console.log(arrayFromarr)


// The includes() method returns true if an array contains a specified value.

// returns false if the value is not found.

// is case sensitive.

console.log("is includes A",arrayFromarr.includes("A"))


// The indexOf() method returns the first index (position) of a specified value.

// returns -1 if the value is not found.

// starts at a specified index and searches from left to right.

// By default the search starts at the first element and ends at the last.

// Negative start values counts from the last element (but still searches from left to right).

console.log("index of A",arrayFromarr.indexOf("A")) 
console.log("index of A",arrayFromarr.indexOf("A", 4)) // second param is optional . it find the index of the val from the second val
console.log("index of A",arrayFromarr.lastIndexOf("A")) // finds last index of a value 

// The isArray() method returns true if an object is an array, otherwise false.

const  arr = [1,2,3]

console.log("Array.isArray(arr)",Array.isArray(arr))

// The join() method returns an array as a string.

// The join() method does not change the original array.

const ArrayForJoin = ["ajith","kumar","ram"]

console.log("joined array",ArrayForJoin.join(" and "))

// The keys() method returns an Array Iterator object with the keys of an array.

// does not change the original array.
const keyval = ArrayForJoin.keys()

for (let x of keyval){
    console.log("keys",x)
}

// The length property sets or returns the number of elements in an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("length of an array",fruits.length)

fruits.length = 2;

console.log("array",fruits)

// map method the map function didnt changr the original array it will create a new array

// creates a new array from calling a function for every array element.

// does not execute the function for empty elements.

// does not change the original array.


const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(double);

function double (value, index, arr) {
return value * 2;
}
console. log (numbersDouble) ;

const indexMulVal = numbers.map((value,index,numbers) =>{
    return value * index
})

console. log (indexMulVal) ;

const products = [
    { 
        name: 'laptop', 
        price: 1000,
        count: 5
    }, 
    { 
       name: 'desktop', 
       price: 1500,
       count: 2
    },
    { 
       name: 'phone',
       price: 500,
       count: 10
    }
    ];

    const totalProducts = products.map((item) => {
        return {
            name: item.name,
            totalVal: item.count * item.price
        }
    });
    
    console.log(totalProducts);

    const str = ['1', '2','3','4'];
    const strMul = str.map((item)=>{
        return item * item
    });
    console.log(strMul)

const strToNum = str.map(Number);

console.log(strToNum)

// The shift() method removes the first item of an array.

//changes the original array.

//returns the shifted element.

const techStack = ["html","css","bootstrap","javascript", "reactjs", "nodejs", "nextjs","sql","python"];

console.log("shift of method",techStack.shift())

// The pop() method removes (pops) the last element of an array.

//changes the original array.

//returns the removed element.

console.log("pop of method",techStack.pop())

// the prototype consturctor allows you t add new props or methods to an array

Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };

techStack.myUcase()

console.log("prototype method",techStack)  


//The push() method adds new items to the end of an array.

//changes the length of the array.

//returns the new length.

console.log("push method",techStack.push("MONGODB")) // add an element to an array at last and return the length

// The shift() method removes the first item of an array.

// The shift() method changes the original array.

// The shift() method returns the shifted element.

console.log("unshift method",techStack.unshift("HTML")) // add an element to an array at first and return the length

// The shift() method returns the shifted element:

console.log("shift method",techStack.shift()); //removes first element 

// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

console.log(techStack.slice(2,5))

console.log(techStack.slice(-3, -1))

// array reduce method. it will return one value

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.


const ArrForReduce = [1,5,10,15,20]

const redSum  = ArrForReduce.reduce((a, item)=>{
    return a + item
},10)

console.log("redSum",redSum)

// The some() method checks if any array elements pass a test (provided as a callback function).

// executes the callback function once for each array element.

// returns true (and stops) if the function returns true for one of the array elements.

// returns false if the function returns false for all of the array elements.

// does not execute the function for empty array elements.

// does not change the original array.

const arrForSome = [18,13,21,14]


const check = arrForSome.some((item)=>{
    return item > 18
})

console.log("some method",check)

const intArray = [2,5,6,7,8,4,21,5]

// The sort() sorts the elements of an array.

// The sort() overwrites the original array.

// The sort() sorts the elements as strings in alphabetical and ascending order.

intArray.sort((a,b)=>{
return a-b
})

console.log("sorted array",intArray)


// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.


techStack.splice(-1,0,"MongoDB","Flask")

console.log(techStack)

// The toString() method returns a string with array values separated by commas.

// The toString() method does not change the original array.

console.log("i know",techStack.toString())



