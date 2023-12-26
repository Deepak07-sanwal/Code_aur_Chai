// Date object in javascript start from 1 jan 1970 and represent in miliseconds

let myDate = new Date();
console.log(myDate); //2023-12-26T11:41:18.172Z
console.log(myDate.toString()); // Tue Dec 26 2023 17:12:19 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Tue Dec 26 2023
console.log(myDate.toTimeString()); // 17:12:19 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 12/26/2023, 5:12:19 PM
console.log(myDate.toLocaleDateString()); // 12/26/2023
console.log(myDate.toLocaleTimeString()); // 5:12:19 PM
console.log(myDate.getFullYear()); // 2023
console.log(myDate.getMonth()); // 11
console.log(myDate.getDate()); // 26
console.log(myDate.getDay()); // 2
console.log(myDate.getHours()); // 17
console.log(myDate.getMinutes()); // 12
console.log(myDate.getSeconds()); // 19
console.log(myDate.getMilliseconds()); // 172
console.log(myDate.getTime()); // 1700000000000

console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toString()); // Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toString()); // Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)

let myCreatedDate3 = new Date("2023-01-23"); // yyyy-mm-dd
console.log(myCreatedDate3.toString()); // Mon Jan 23 2023 05:30:00 GMT+0530 (India Standard Time)

let myCreatedDate4 = new Date("01/23/2023"); // mm/dd/yyyy

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1639990039172   miliseconds values
console.log(myCreatedDate4.getTime()); // 1700000000000
console.log(Math.floor(Date.now() / 1000)); // 1639990039   seconds values

let newDate = new Date();
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

console.log(newDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour12: true, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }));
// Tuesday, December 28, 2021, 5:35:39 PM