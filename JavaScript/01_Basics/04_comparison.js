console.log(2 > 1)
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// don't compare two different datatype -> error in typescript
console.log("2" > 1)
console.log("02" > 1) 
// typescript give some rules for this as comapare to javascript

console.log(null > 0) // false
console.log(null == 0) // false when NaN convert or true when 0 convert
console.log(null >= 0) // true

// The reason is that an equality check == and comparisions > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0
// That's why (3) null >=0 is true and (1) null > 0 is false 

console.log(undefined == 0)  // false
console.log(undefined > 0)  // false
console.log(undefined < 0) // false

// === strick check => check value as well as datatype

console.log("2" === 2); // false
