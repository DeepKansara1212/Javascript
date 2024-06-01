// "this" keyword is referring to the current context.
const user = {
    username: "Deep",
    price: 999,

    welcomeMsg: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMsg()
// user.username = "Sam"
// user.welcomeMsg() 

console.log(this);

// Remember this:
    // 1) When we print the "this" keyword in the "node" environment it will print empty object => {}
    // 2) But when you print the "this" keyword inside a function then it will give the global object
    // 3) When we print the "this" keyword in the "windows" environment it will print window object 


function one(){
    let username = "Deep"
    // console.log(this);
    // console.log(this.username);       // undefined
}
one() 

// Note: "this" keyword is only work in the objects

// Other defition to define a function
const two = function () {
    let username = "Deep"
    // console.log(this.username);        // undefined
}


const chai = () => {
    let username = "Deep Kansara"
    console.log(this);                  // {}
    console.log(this.username);         // undefined
}
chai() 


// ******************************** Arrow Function *********************************

// Basic Arrow Function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4))

// Implicit Return
const multiplyTwo = (num1, num2) => (num1 * num2) 
console.log(multiplyTwo(4, 5)); 


// const myArray = [2, 4, 6, 8, 10] 
// myArray.forEach(function () => {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())
