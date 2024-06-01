
function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
} 

// sayMyName  =>  This is the reference of the function
// sayMyName()         // Execution of the function

/*
function addTwoNumbers(num1, num2){
    num3 = num1 + num2
    console.log(num3);
}
addTwoNumbers(12, "a")
addTwoNumbers(12, null) 

const result = addTwoNumbers(3, 5)
console.log("Result:",result);   => Undefined
*/

function addTwoNumbers(num1, num2){

    // let num3 = num1 + num2
    // return num3

    return num1 + num2
}

const result = addTwoNumbers(3, 5)
// console.log("Result:",result);                  



function loginUserMsg(username = "Sam"){
    if(!username) {
        console.log("Please enter a username: ");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("ABC"))
// console.log(loginUserMsg(""))
// console.log(loginUserMsg()) 


function calculateCartPrice(val1, val2, ...num1){
    return `Value for val1: ${val1} \nValue for val2: ${val2} \nValue for num: ${num1}`
}

// console.log(calculateCartPrice(200)) 

// But when we pass more than one arguments then it will only print first parameter, because we only gave one parameter
// So for that we use ...num1 instead of num1 for the parameter 
// And it will return values in the Array
// ...num1 is known as REST operator  

// console.log(calculateCartPrice(200, 300, 400, 500, 600)) 



const user = {
    username: "Deep",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
} 

// handleObject(user) 

// Object pass in function
handleObject({
    username: "sam",
    price: 399
})

// Array pass in function
const myNewArr = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArr));