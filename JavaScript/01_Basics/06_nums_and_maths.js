const score = 400; // it define automatically as number

const balance = new Number(1000); // we define number as object

console.log(balance.toString());
console.log(typeof balance); // object
console.log(number.toFixed(2)); // 1000.00

const otherNumber = 23.8966;
const otherNumber2 = 123.8966;
const otherNumber3 = 1123.8966;
console.log(otherNumber.toPrecision(3)); // 23.9
console.log(otherNumber2.toPrecision(3)); // 124
console.log(otherNumber3.toPrecision(3)); // 1.12e+3

const hundred = 1000000
console.log(hundred.toLocaleString()); // 1,000,000
console.log(hundred.toLocaleString("hi-IN")); // 10,00,000
console.log(hundred.toLocaleString("en-IN")); // 10,00,000

// Number.MAX_VALUE
// Number.MIN_VALUE
// Number.POSITIVE_INFINITY
// Number.NEGATIVE_INFINITY
// Number.MAX_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER
// Number.length

// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++
console.log(Math); // use in brower console to see all methods

console.log(Math.abs(-100)); // 100
console.log(Math.sqrt(100)); // 10
console.log(Math.pow(2, 3)); // 8
console.log(Math.floor(10.9)); // 10
console.log(Math.ceil(10.1)); // 11
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4)); // 10
console.log(Math.min(10, 20, 30, 40)); // 10
console.log(Math.max(10, 20, 30, 40)); // 40
console.log(Math.random()); // 0.123456789 always between 0 and 1
console.log(Math.floor((Math.random() * 10) + 1)); // 1 to 10
// add 1 because it may come as 0.0034 which is less than 1

const mini = 10;
const maxi = 20;

console.log(Math.floor(Math.random() * (maxi - mini + 1)) + mini); // 10 to 20
