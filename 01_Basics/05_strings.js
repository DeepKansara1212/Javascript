const name = "Deep"
const repoCount = 50    

// console.log(name + repoCount + " value");

// String Interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Deep-Kansara-1212")
// console.log(gameName[0]); 
// console.log(gameName.__proto__); 


// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("K"));

const newString = gameName.substring(0, 7)  
// console.log(newString);

const anotherString = gameName.slice(-6, 5) 
// console.log(anotherString);

const newStringOne = "   Deep     "
// console.log(newStringOne);
// console.log(newStringOne.trim()); 

const url = "https://deep.com/deep%20kansara"
// console.log(url.replace('%20', '-'));
// console.log(url.includes('deep'));

console.log(gameName.split('-'));