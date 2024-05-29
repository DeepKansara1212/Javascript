// DATATYPES SUMMARY

// JavaScript is a dynamic language, which means that it does not require explicit type definitions for variables. 

// Primitive Datatype (Call By Value)
    // String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId);

const bigNumber = 31547324124567986n
console.log(typeof bigNumber);

// Non-Primtive Datatypes (Call By Reference)
    // Arrays, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name: "Deep",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

// Refer this document for types of datatype:
// https://262.ecma-international.org/5.1/#sec-11.4.3