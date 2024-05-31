
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

console.log(loginUserMsg("ABC"))
// console.log(loginUserMsg(""))
console.log(loginUserMsg()) 
