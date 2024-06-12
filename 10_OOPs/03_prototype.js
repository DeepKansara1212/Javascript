// let myname = "Deep    "
// console.log(myname.trueLength());


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower:  function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.deep = function(){
    console.log(`Deep is present in all objects`);
}

Array.prototype.heyDeep = function(){
    console.log(`Deep says hello!!!`);
}

// heroPower.deep() 
// myHeroes.deep()

// myHeroes.heyDeep()
// heroPower.heyDeep()



// Inheritance

// Old Syntax
const User = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TaSupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User    


// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher) 


// 
let anotherUsername = "DeepKansara         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength() 
"Deep".trueLength()
"Coffe.com".trueLength()