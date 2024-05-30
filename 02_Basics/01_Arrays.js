// Refer this documnet:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myHeroes = ["Shaktiman", "Thor"]

const myArr2 = new Array(0, 1, 2, 3, 4) 

const myArr = [0, 1, 2, 3, 4, 5] 
// console.log(myArr[3]);


// Array Methods
// All the methods are run acc. to the main array

// myArr.push(6)               // [0,1,2,3,4,5,6]
// myArr.push(7)               // [0,1,2,3,4,5,7]
// myArr.pop()                 // [0,1,2,3,4]

// unshift() => Add an element to the first index of an array
// myArr.unshift(0)               // [0,0,1,2,3,4,5]

// shift() => Remove an element from the first index of array
// myArr.shift()                  // [1,2,3,4,5]

// includes() => Returns boolean datatype
// console.log(myArr.includes(9));         // false

// console.log(myArr.indexOf(9));          // -1

// console.log(myArr);

// join() => adds all the elements of an array into string
const newArr = myArr.join() 
// console.log(newArr);
// console.log(typeof newArr);

// IMP for Interview
// slice() & splice()

console.log("A: ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B: ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C: ", myArr);