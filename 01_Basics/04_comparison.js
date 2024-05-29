// console.log(2 > 5);
// console.log(2 = 5);
// console.log(1 < 5);
// console.log(2 == 5);
// console.log(2 != 5);

console.log("2" > 1);
console.log("02" > 1);


// Avoid this type of comparison
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Comparisons convert null to number, treating as 0.
// That's why null >= 0 is true and null > 0 is false.

// Avoid this type of comparison
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// Strict check (===)

console.log("2" === 2);