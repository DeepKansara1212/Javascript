// for-each loop

const coding = ["js", "python", "cpp", "ruby", "java"]

// 1)
coding.forEach( function (item) {
    // console.log(item);
} ) 


// 2)
coding.forEach( (item) => {
    // console.log(item);
})


// 3)
function printMe(item) {
    // console.log(item);
}

// coding.forEach(printMe) 


// 4)
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )



// 5) IMP

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} ) 