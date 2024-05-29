const accountId = 144553
let accountEmail = "deep@gmail.com"
var accountPassword = "123445"
accountCity = "Dakor"
let accountState

// accountId = 525  => const variable can't be changed
console.log(accountId);

accountEmail = "dk@dk.com"
// console.log(accountEmail);

accountPassword = "djd1212"
// console.log(accountPassword);

accountCity = "Mumbai"
// console.log(accountCity); 

// Instead of printing log statement repeatedly for every variable, we can do this:

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  


/*
    Prefer not to use var
    Because of issue in block scope & functional scope
*/