const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["batman", "superman", "wonderwoman"]

marvel_heros.push(dc_heros);

//console.log(marvel_heros); // it will add dc_heros array as a single element in marvel_heros array
// array inside array

//marvel_heros.push(...dc_heros); // it will add dc_heros array as a single element in marvel_heros array

const allHeros = marvel_heros.concat(dc_heros); // it will add dc_heros array as a single element in marvel_heros array
// concat returns a new array

// console.log(allHeros);

// spread operator
const allHero1 = [...marvel_heros, ...dc_heros];
// it will add dc_heros array as a single element in marvel_heros array

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]];

const real_anotherArr = anotherArr.flat(Infinity); // Infinity means it will go to the deepest level of array
// flat returns a new array
// flat does not change the original array
console.log(real_anotherArr); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9 ]

console.log(Array.isArray("Deepak")); // false

console.log(Array.from("Deepak")); // [ 'D', 'e', 'e', 'p', 'a', 'k' ]
// Array.from() method returns an Array object from any object with a length property or any iterable object.

console.log(Array.from({ name: "Deepak" })); // [] interesting
// we have to specify that should be with keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
// Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.