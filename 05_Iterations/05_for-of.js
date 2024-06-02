// for-of loop

// 1)
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
} 


// 2)
const greeting = "Hello World!"

for (const greet of greeting) {
    if (greet == " ") {
        continue
    }
    // console.log(`Each char is ${greet}`);
} 


// 3)
// Maps => stores unique values & maintain the order

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America') 
map.set('FR', 'France') 

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key}: ${value}`);
} 


// 4)
const myObj = {
    'game1': 'NFS',
    'game2': 'GTA vice city',
    'game3': 'Prince of Persia'
}

// for (const [key, value] of myObj) {
//     console.log(`${key}: ${value}`);         => Error
// }                                            => myObj is not iterable 