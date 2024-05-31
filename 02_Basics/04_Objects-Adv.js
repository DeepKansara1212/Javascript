
// const tinderUser = new Object()      // Singleton Object

const tinderUser = {}            // Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    full_name: {
        user_full_name: {
            first_name: "Deep",
            last_name: "Kansara"
        }
    }
}

// console.log(regularUser.full_name.user_full_name.first_name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// Refer this:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// const obj3 = Object.assign({}, obj1, obj2) \

const obj3 = {...obj1, ...obj2} 
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 2,
        email: "f@gmail.com"
    },
    {
        id: 3,
        email: "g@gmail.com"
    },
] 

users[1].email
// console.log(tinderUser);


// Interesting
// console.log(Object.keys(tinderUser));               // type: Array
// console.log(Object.values(tinderUser));             // type: Array
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object Destructuring

const course = {
    courseName: "Javascript",
    coursePrice: 9999,
    courseInstructor: "ABC"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);



// JSON API

/*
=> APIs are available in arrays & objects both

1) In Object
{
    "name": "Deep",
    "courseName": "Python",
    "price": "free"
}

2) In Array
[
    {},
    {}
]

*/