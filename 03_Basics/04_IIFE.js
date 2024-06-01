// IIFE => Immediately Invoked Function Expressions

(function chai() {
    // named IIFE, b'coz function has the name
    console.log("DB CONNECTED");
})();

// Here we use 2 parenthisis:
    // 1) First () used for the definition of the function
    // 2) Second () used for the function call
    // 3) (Impoertant) We need to end the IIFE of the function by put the ";" at the end of the function call

// IIFE is used for:    
    // 1) Immediately execute a function
    // 2) (Important) Sometimes global scope's variables are creating problems. So to avoid them we use IIFE

( (name) => {
    console.log(`DB CONNECTED for ${name}`);
} )("Deep");