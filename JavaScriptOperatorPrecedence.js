//https://www.w3schools.com/jsref/jsref_precedence.asp
let x =  10 * 4 / 2;
console.log(x) //20

let y  =  10 - 4 * 2;
console.log(y) //2

let z  =  (10 - 4) * 2; //12 () - When using parentheses, operations inside the parentheses are computed first:
console.log(z)

let a = 100 / 5 * 2 ;
console.log(a) //40 When operators have the same precedence (like + and -), they are computed from left to right:

let incVal = 5
console.log(incVal++) //5 Postfix Increment
console.log(incVal) // 6
console.log(++incVal) //7 prefix Increment

let decVal = 10
console.log(decVal--) //10 Postfix Decrement
console.log(decVal) // 9
console.log(--decVal) //8 prefix Deccrement