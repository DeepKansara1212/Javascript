const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); 
// console.log(marvel_heroes[3]); 
// console.log(marvel_heroes[3][2]); 

// const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);

// Spread
const new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(new_heroes);

const another_arr = [1, 2, 3, [4, 5], 6, 7, [6, 7, [4, 5]]]

const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);


console.log(Array.isArray("Deep"))
console.log(Array.from("Deep"))
console.log(Array.from({name: "Deep"}))             // Interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  