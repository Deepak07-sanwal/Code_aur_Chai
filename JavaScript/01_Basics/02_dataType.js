"use strict"; // treat  all JS code as newer version of JS standard after using it

// alert(3+3) // we are using node.js, not browser, so it will show error here

console.log(3
    +
    3)  // code readebility should be high

console.log("Deepak")  

// original javaScript documenttion (tc39.es)
// but we usally preffer mdn documentation which is by mogilla firefox

let name = "deepak"  // string
let age = 21 // number
let isLoggedIn = false // bool

// number => (2 to power 53) -1
// bigint
// string => ""
// boolean
// null (null is also standalone value)
// undefined 
// symbol => used for uniqueness

// object

//typeof
console.log(typeof name) ;
console.log(typeof(name)) ;
console.log(typeof undefined); //undefined
console.log(typeof null) ; // object