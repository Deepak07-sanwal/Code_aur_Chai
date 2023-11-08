let score = "33"

// in backend if we get a value then it not garrenty that it is same what we are seeing
// so we find type of it

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number

let score2 = "33abc" 
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN (Not a Number)

let score3 = null 
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3); // 0

score3 = true 
valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3); // 1

score3 = "deepak" 
valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3); // NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) ;

isLoggedIn = ""

booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) ; // false

isLoggedIn = "Deepak"

booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) ; // true

// 1 => true ; 0 => false
// "" => false
// "deepak" => true

let someNumber = 33 

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


