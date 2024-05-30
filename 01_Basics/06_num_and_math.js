const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber = 45.192167
// console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


// ********************************** Maths ****************************************

// console.log(Math);

// abs => convert -ve value to +ve value
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(50.7));
// console.log(Math.ceil(50.7));
// console.log(Math.floor(50.7));
// console.log(Math.min(40, 10, 45, 80));
// console.log(Math.max(40, 10, 45, 80));

// console.log(Math.random());

// Here we add extra +1, b'coz math.random can generate 0.012454613 like number also
// So by multiplying it with 10, we get 0.12454613
// But floor of it is 0
// So to avoid that we add +1

// console.log(Math.floor(Math.random()*10) + 1);



const min = 10
const max = 20

// console.log(Math.random() * (max - min + 1))      => Will give the float value
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 