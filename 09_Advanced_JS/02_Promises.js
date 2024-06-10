// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// 1)
// Creation of Promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
        // DB Calls, Cryptography, Network

    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

// Consumption of Promise
promiseOne.then(function(){
    console.log("Promise Consumed");
})



// 2)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Consumed");
}) 



// 3)
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Deep", email: "deep@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})


// 4)
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "ABC", password: "abc"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected!!!")) 



// 5)
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000) 
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive() 


// Fetch Api using async await function

/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
} 
getAllUsers() 
*/

// Fetch Api using .then().catch().finally()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)) 


// Refer this:
    // https://developer.mozilla.org/en-US/docs/Web/API/fetch