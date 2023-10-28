// Write a JavaScript program to find the maximum number in an array. 
function maxNumOfArray(arr) {
    console.log(Math.max(...arr))
    return Math.max(...arr)
}

maxNumOfArray([1, 2, 3, 4, 4, 5, 6, 7, 8, 34, 43, 2, 1, 2])

function maxNum(arr) {
    arr.sort((a, b) => a - b)
    return arr[arr.length - 1]
}

console.log("sorting method", maxNum([1, 2, 3, 4, 4, 5, 6, 7, 8, 34, 43, 2, 1, 2]))

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(str) {
    console.log(str === str.split('').reverse().join(''))
    return str === str.split('').reverse().join('')
}

isPalindrome("mom")

// write a function to reverse a string 

function stringReverse(str) {
    return str.split('').reverse().join('')
}

function stringReverse2(str) {
    let reversedString = ""
    const arr = str.split('')
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedString += arr[i]
    }
    return reversedString
}


console.log("reversed", stringReverse2("ajithkumar"))

console.log(stringReverse("ajithkumar"))

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 


function evenNumArray(arr) {
    evenNums = []
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] % 2 == 0) {
            evenNums.push(arr[x])
        }
    }
    console.log(evenNums)
    return evenNums
}

evenNumArray([1, 2, 3, 4, 5, 5, 6, 7, 8, 12, 14, 12])

//  Write a JavaScript program to calculate the factorial of a given number. 

function factorial(a) {
    if (a <= 1) {
        return 1
    }
    const fact = a * factorial(a - 1)
    return fact
}

console.log(factorial(5))

// Write a JavaScript function to check if a given number is prime. 

function isPrimeNum(number) {
    if (number <= 1) {
        return "its is not a prime number"
    }
    for (let x = 2; x <= Math.sqrt(number); x++) {
        if (number % x === 0) {
            return "its not prime number"
        }
    }
    return "it is a prime number"
}

console.log(isPrimeNum(5)); // true
console.log(isPrimeNum(10)); // false
console.log(isPrimeNum(17));

//  Write a JavaScript program to find the largest element in a nested array. 
function findingLargestElementOfNestedArray(arr) {
    let largest = arr[0][0]
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr.length; y++) {
            if (arr[x][y] > largest) {
                largest = arr[x][y]
            }
        }
    }
    return largest

}

const nestedArray = [
    [1, 122, 3],
    [4, 5, 6],
    [75, 12, 3]
]
console.log("findingLargestElementOfNestedArray", findingLargestElementOfNestedArray(nestedArray))

// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

function FibonacciSeries(number) {
    if (number === 0) {
        return []
    }
    if (number === 1) {
        return [0]
    } else {
        series = [0, 1]
        for (let x = 2; x < number; x++) {
            series.push(series[x - 1] + series[x - 2])
        }
    }
    return series
}

console.log(FibonacciSeries(13))


function fibonacciSequence(numTerms) {

    if (numTerms <= 0) return [];

    if (numTerms === 1) return [0];



    let sequence = [0, 1];

    while (sequence.length < numTerms) {

        let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];

        sequence.push(nextNumber);

    }

    return sequence;

}

console.log(fibonacciSequence(13))

//  Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function titleCapital(str) {
    const array = str.split(" ")
    let titleStirng = ""
    for (let x = 0; x < array.length; x++) {
        const letters = array[x].split('')
        letters[0] = letters[0].toUpperCase()
        for (y = 1; y < letters.length; y++) {
            letters[y] = letters[y].toLowerCase()
        }
        const word = letters.join('')
        titleStirng += word + " "
    }
    titleStirng = titleStirng.trim();
    console.log(titleStirng)
}

titleCapital("HellO woRld")

function titleAnother(str) {
    return (str.replace(/\b\w/g, word => word.toUpperCase()))
}



console.log(titleAnother("ajith kumar"))

// Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 


function debounce(func, delay) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage:
const debouncedFunction = debounce(function() {
    console.log("Debounced function called");
}, 1000);

// Call the debounced function repeatedly within a short time frame
debouncedFunction();
debouncedFunction();
debouncedFunction();

// Only the last call will execute after the specified delay

// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

function sortedData(arr, key) {
    return arr.sort((a, b) => a[key] - b[key])
}

const data = [{
        name: "John",
        age: 30
    },
    {
        name: "Alice",
        age: 25
    },
    {
        name: "Bob",
        age: 35
    }
];

const sortedByAge = sortedData(data, "age");
console.log(sortedByAge);


const dubArr = [1, 2, 1, 2, 4, 5, 6, 7, 8]

function remoneDub(arr) {
    // let firstEl = arr[0]
    const DubRemoed = []
    for (let i = 0; i < arr.length; i++) {
        if (!DubRemoed.includes(arr[i])) {
            DubRemoed.push(arr[i])
        }
    }
    return DubRemoed;
}

function uniqueElements(arr) {
    return [...new Set(arr)];
}

console.log(remoneDub(dubArr))


// array to object

const arrToObj = ["a", "b", "c", "d", "e", "f"]

function arrayToObject(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i]
    }
    return obj
}

console.table(arrayToObject(arrToObj))

// anagram

function isAnagram(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('')
}

console.log("isAnagram", isAnagram("ajith", "jiAtha"))

// Implement a function that flattens a nested array in JavaScript, converting it into a single-level array. 


function flatteningArray(array) {
    const FlattedArray = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            FlattedArray.push(...array[i])
        } else {
            FlattedArray.push(array[i])
        }

    }
    return FlattedArray
}

console.log("flatted array", flatteningArray(nestedArray))

// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

function mergingArray(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b)
}

function mergingArray2(arr1, arr2) {
    const singleArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            singleArray.push(arr1[i]);
            i++;
        } else {
            singleArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1 (if any)
    while (i < arr1.length) {
        singleArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2 (if any)
    while (j < arr2.length) {
        singleArray.push(arr2[j]);
        j++;
    }

    return singleArray;
}
console.log("mergingArray", mergingArray([7, 8], [6, 7, 8, 9, 10, 12, 23]))

console.log("mergingArray2", mergingArray([7, 8], [6, 7, 8, 9, 10, 12, 23]))

const str = "abb_123svsasadad"

const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

console.log("cleanStr ", cleanStr)

//  Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

const maxAndMin = [2, 4, 5, 6, 8, 9, -1, 45]

function maxMin(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min, max]
}

console.log(maxMin(maxAndMin))

// Given a string, write a function to count the occurrences of each character in the string. 

function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

console.log(countCharacterOccurrences("ajitha"))

// Write a function that generates a random alphanumeric string of a given length. 

function randomStingGenerator(strLength) {
    let alphaNUm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let randomString = ""
    for (let i = 0; i <= strLength; i++) {
        let randomIndex = Math.floor(Math.random() * alphaNUm.length);
        randomString += alphaNUm.charAt(randomIndex)
    }
    return randomString
}

console.log("randomSting ", randomStingGenerator(10))

// explain callBack  fucntion in js

// In JavaScript, a callback function is a function that is passed as an argument to another function and is typically executed at some later point in time, often after an asynchronous operation has completed. Callbacks are a fundamental concept in JavaScript and are commonly used in scenarios like handling asynchronous operations, event handling, and more.

// example


function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Ajith", sayGoodbye);

// reverese each word in a sentecne

function reverseEachWordInSentence(sentence) {
    const reversedSentecne = sentence.split(" ").reverse().join(" ").split('').reverse().join("")
    return reversedSentecne

}

console.log(reverseEachWordInSentence("hello ajithkumar"))
console.log(reverseEachWordInSentence("Hello World"))

// how do find if an object is an array or not ? provide some code

let myArray = [1, 2, 3];
const myObject = {
    name: "John",
    age: 30
};

console.log(Array.isArray(myArray)); // true
console.log(Array.isArray(myObject)); // false

// how to empty an array in JS

myArray.length = 0;
console.log(myArray); // Output: []

myArray.splice(0, myArray.length);
console.log(myArray); // Output: []

myArray = [];
console.log(myArray); // Output: []

// how to check if an muner is an iteger or not?

const value1 = 42; // An integer
const value2 = 42.5; // Not an integer

console.log(Number.isInteger(value1)); // Output: true
console.log(Number.isInteger(value2)); // Output: false

function isInt(num) {
    return num % 1 === 0;
}

console.log(isInt(value1))
console.log(isInt(value1))


// duplicate([1,2,3,4,5,6]) : output [1,2,3,4,5,6,1,2,3,4,5,6]


function duplicate(arr) {
    return [...arr, ...arr]
}

console.log("duplicate([1,2,3,4,5,6])", duplicate([1, 2, 3, 4, 5, 6]))

// function mul((2)(3)(4))

function mul(x) {
    return function(y) {
        return function(z) {
            return x * y * z
        }
    }
}

console.log("mul", mul(2)(3)(4))

// array 

console.log("array",new Array(1,2,3,43,4,5))

// input [1,2,2,2,3,3,3,3,3,4,4,4,4,4,5]
// output [1,2,2,3,3,4,4,5]

function maxTwo(arr){
    const obj = {}
    const newArr = []
   arr.forEach((item)=>{
      obj[item] = (obj[item]|| 0) + 1 
      if (obj[item]<=2){
        newArr.push(item)
      }
   })
   return newArr       
    
}

console.log("max two",maxTwo([1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,6]))


// [ 5,7,9,11,13,15,19,21,23]

// opt 17

function findingMissing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] !== arr[i] + 2) {
        return arr[i] + 2;
      }
    }
  
    // If no missing number is found, you can return a specific value or handle it accordingly.
    return -1; // or throw an error, depending on your use case
  }
  
  const arr = [5, 7, 9, 11, 13, 15, 19, 21, 23];
  const missingNumber = findingMissing(arr);
  console.log("Missing number:", missingNumber);


  function reverseWordsinSentence(str) {
      const words = str.split(" ")
      let rev = ""
      for (let i = 0; i<words.length;i++){
        let revedword = words[i].split("").reverse().join("")
        rev+=revedword + " "
      }
      return rev.trim()
    
  }

  console.log("reverseWordsinSentence",reverseWordsinSentence("hello ajithkumar how are you"))

//   [2,7,11,4,-2]  opt: [20,15,11,18,24]
function sumOf(total, item){
    return total+item

}
function sumExceptCurrentIndex(arr) {
    const sumArr = []
    for (let i = 0; i<arr.length ; i++){
       let  sum= arr.reduce(sumOf,-arr[i])
       sumArr.push(sum)
    }
    // sum = 0
    return sumArr

}
  

console.log("sumExceptCurrentIndex",sumExceptCurrentIndex([2,7,11,4,-2] ))