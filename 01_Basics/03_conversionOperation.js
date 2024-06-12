let score = "32"
let password = "32abc"
// let password = true      => Value: 1
// let temp = null          => Value: 0
// let age = undefined      => Value: NaN 

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) 
// console.log(typeof valueInNumber);

let valueInNo = Number(password)
// console.log(typeof valueInNo);
// console.log("Value of password: ",valueInNo);


// Simple Conversion
/*
    "33" => 33
    "33abc" => NaN
    true => 1; false => 0
*/


let isLoggedIn = 1
// let isLoggedIn = ""
// let isLoggedIn = "Deep"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// Advanced Conversion
/*
    1 => true; 0 => false
    "" => false
    "Deep" => true
*/


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ********************************** Operations ***********************************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "Hello "
let str2 = "Deep"
let str3 = str1 + str2
// console.log(str3); 

// console.log(1 + "2");             // 12
// console.log("1" + 2);             // 12
// console.log("1" + 2 + 2);         // 122
// console.log(1 + 2 + "2");         // 32

// Tricky Conversion
// console.log(true);                // true
// console.log(+true);               // 1
// console.log(+"");                 // 0


let num1, num2, num3 
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
// console.log(gameCounter);

// Link of Prefix & Postfix:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment