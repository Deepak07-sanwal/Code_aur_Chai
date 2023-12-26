// The way we add data in memory is define what type of data it is
// Primitive data types or non-primitive data types(reference data types)

// Primitive data types
// 7 types of primitive data types
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol -> to make unique identifier
// 7. BigInt -> to store large number

// JavaScript is a dynamically typed language 
// (data types are automatically assigned to variables)
// but in typescript we can assign data type to variable

const score = 100; // number
const scroeValue = 100.3; // number

const isCool = true; // boolean
const isCoolValue = null; // null
let userEmail; // undefined

const id = Symbol("123"); // symbol
const anotherId = Symbol("123"); // symbol

console.log(id === anotherId); // false

const bigNumber = 1234567890123456789012345678901234567890n; // bigint

const name = "Sagar"; // string

// Non-primitive data types (reference data types)
// 1. Array
// 2. Object
// 3. Function

const heros = ["superman", "batman", "ironman"]; // array
let obj = {
    name: "Deepak",
    age: 22,
} // object
// object is a collection of key value pair
// key is always string
// value can be any data type

const myFunction = function () {
    console.log("This is my function");
} // function

console.log(typeof heros);
// typeof is a operator which return type of variable
// undefined -> undefined
// null -> object
// array -> object
// function -> function
// object -> object
// symbol -> symbol
// number -> number
// string -> string
// boolean -> boolean
// bigint -> bigint

// usually data type of non-primitive data type is object

// https://262.ecma-international.org/5.1/#sec-8.6.2

