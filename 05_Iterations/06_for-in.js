// for-in loop

// 1)
const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
} 

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`); 
}


// 2)
const programming = ["js", "py", "java", "rb", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


// 3)
const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America') 
map.set('FR', 'France') 

for (const key in map) {
    // console.log(key);
}

// Note: Map is not a iterable object, so for in loop will never work on that. Though it will not give the error