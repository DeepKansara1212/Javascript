// Refer this:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics


// Singleton

// Interview
// Whenever we declared an object like literals, then Singleton are not made
// But whenever we declared an object by using constructor, then Singleton are made

// Object using Constructor
// Object.create

// Object Literals

const mySym = Symbol("key1")       // INTERVIEW

const jsUser = {
    name: "Deep",
    "full name": "Deep Kansara",
    // mySym: "mykey1",      => if we declared symbol like this in object then type of this is string, not symbol
    [mySym]: "mykey1",     // INTERVIEW
    age: 22,
    location: "Dakor",
    email: "deep@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email) 
// console.log(jsUser["email"]) 

// console.log(jsUser.full name);  =>  Error, B'coz we defined the full name in string format
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]);


jsUser.email = "deep@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "deep@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS User!!!");
}

// console.log(jsUser.greeting);      // Gives only the reference of the function
// console.log(jsUser.greeting());


jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());