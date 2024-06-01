let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER A:",a);
}

// console.log("OUTER A:",a);
// console.log(b); 

// Note: For var variable, there is no any scopes
// i.e. It can print the value which is inside the block of code from the outside 



// NESTED SCOPE

function one(){
    const username = "Deep"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two() 
}
// one() 

if (true) {
    const username = "Deep"

    if (username === "Deep") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); 
}
// console.log(username);


// ************************** Interesting *****************************

function addOne(num){
    return num + 1
}
addOne(5) 


const addTwo = function(num){
    return num + 2
}
addTwo(5) 
