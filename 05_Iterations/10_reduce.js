// Reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// 1)
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) 

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);

// Whatever we written after the function is the value of accumulator.\
// Here it is 0


// 2)

const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 9999
    },
    {
        itemName: "data science course",
        price: 12299
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) 
console.log(priceToPay);