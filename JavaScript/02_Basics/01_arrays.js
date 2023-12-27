// arrays 

const myArr = [0, 1, 2, 3, 4, 5]; // can have different data types
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, and the last element is at the index equal to the value of the array's length property minus 1.
// Arrays are resizable
// arrays can not access using arbitrary string
// use like this only myArr[0] = 0;

// Arrays while copying always create shallow copy
// Shallow copy means that the array is copied by reference instead of by value.
// So if you make a change to a new array, the original array will be affected as well.
// To make a copy of an array by value instead of by reference, one way is to use the spread syntax operator (...)
// let myArr2 = [...myArr];
// myArr2[0] = 5;
// Deep copy means that the array is copied by value instead of by reference.

const myArr2 = new Array(1, 2, 3, 4, 5); // can have different data types
console.log(myArr2[0]); // 1

// Array Methods
console.log(myArr.length); // 6
console.log(Array.isArray(myArr)); // true
console.log(myArr.indexOf(2)); // 2
console.log(myArr.lastIndexOf(2)); // 2
console.log(myArr.indexOf(6)); // -1

console.log(myArr.includes(2)); // true
console.log(myArr.includes(6)); // false


myArr.push(6); // add element at the end of array
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6 ]
myArr.pop(); // remove element from the end of array
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(-1); // add element at the start of array
console.log(myArr); // [ -1, 0, 1, 2, 3, 4, 5 ]
// time complexity of unshift is O(n) because it has to shift all the elements to the right

myArr.shift(); // remove element from the start of array
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]


const newArr = myArr.join(); // convert array to string
console.log(newArr); // 0,1,2,3,4,5
console.log(typeof newArr); // string

console.log(myArr.slice(1, 3)); // [ 1, 2 ]
console.log(myArr.slice(-2)); // [ 4, 5 ]
console.log(myArr.slice(-3, -1)); // [ 3, 4 ]
console.log(myArr.slice(-3, 5)); // [ 3, 4 ]
// slice returns the selected elements in an array, as a new array object.
// slice does not change the original array
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

myArr.splice(1, 2); // remove 2 elements from index 1
// splice returns the removed elements
// splice changes the original array
console.log(myArr); // [ 0, 3, 4, 5 ]
