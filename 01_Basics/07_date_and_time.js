let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);       // object


// Different ways to declare dates
// let myCreatedDate = new Date(2024, 0, 23)
// let myCreatedDate = new Date(2024, 0, 23, 5, 3)
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2024")

// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());      // Will give date in ms
// console.log(Math.floor(Date.now()/1000));     // converted in sec




let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());


newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "UTC+5:30"
}) 