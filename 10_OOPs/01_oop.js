const user = {
    username: "Deep",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);   


function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
} 
const userOne = new User("Deep", 12, true) 
const userTwo = new User("Jay", 12, false) 
console.log(userOne.constructor);
// console.log(userTwo);


// Whenever we use new keyword:
    // 1. New object has been created
    // 2. Call the constructor function because of new keyword
    // 3. Inject this keyword
    // 4. Return 