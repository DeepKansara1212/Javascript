# Javascript Execution Context

=> Three Types:
    1) Global Execution Context
    2) Functional Execution Context
    3) Eval Execution Context

=> JS code will run into two phases:
    1) Memory Creation Phase -> Only allocate the memory to the functions, variables, etc
    2) Execution Phase -> Execute the functions, variables, etc which are created in the first phase

=> Let's learn all this with the help of example:

let val1 = 10
let val2 = 5
function addTwo(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

=> Explanation:
    1) Entire code will run through Global Execution Context & 
       Allocate into the "this" keyword

    2) Memory Phase:
        Take all the variables & put them into the memory as the value of undefined
        For Example: 
            val1 -> undefined
            val2 -> undefined
            addNum -> definition of function (from line 16 to 19) 
            result1 -> undefined
            result2 -> undefined

    3) Execution Phase:
        val1 <- 10
        val2 <- 5

        Now, at line 20, addNum is executed. But addNum is function. 
        So for that 
            1) addNum will create its own execution context (let's say it make a sandbox)
            2) Whenever this functions are executed, each & every time a box will created called "new executional context (NEC)" 
            3) This "NEC" will created two things:
                I. new variable environment
                II. execution thread

            Now, for this sandbox again two phases will be run:
                I. Memory Phase: (From line 16)
                    val1 -> undefined
                    val2 -> undefined
                    total -> undefined
                
                II. Execution Phase:
                    num1 <- 10
                    num2 <- 5
                    total <- 15
                    And this total variable is return to the global executional context

            4) Now, after performing these sandbox will be deleted 
        
        result1 <- 15

        Now, at line 21, addNum is again executed & this whole process is repeated.