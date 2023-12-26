const name = "Sagar";
const repoCount = 100;

console.log(name + repoCount); // outdated syntax
console.log(`${name} has ${repoCount} repositories`); // template literals
// string interpolation

const gameName = new String("PUBG Mobile Game"); // another way to create string
// this is string object

console.log(gameName[0]); // P
console.log(gameName.__proto__); // String

console.log(gameName.length); // 4
console.log(gameName.toUpperCase()); // PUBG MOBILE GAME
console.log(gameName.toLowerCase()); // pubg mobile game
// original string is not changed because string is immutable stored in stack

console.log(gameName.charAt(3)); // G
console.log(gameName.indexOf("U")); // 1

const newString = gameName.substring(0, 2);
console.log(newString); // PU

const anotherString = gameName.slice(-15, 4);
console.log(anotherString);
// slice is same as substring but it can take negative value

const newGameName = gameName.split(" ");
console.log(newGameName); // ["PUBG", "Mobile", "Game"]
// make array of string

const newGameName2 = gameName.replace("PUBG", "Free Fire");

const newStringOne = "   Hello World   ";
console.log(newStringOne.trim()); // Hello World
// trim is used to remove extra spaces from string
// trim is for white space characters (space, tab, no-break space, etc.) and line terminators (LF, CR, etc.)
// two more methods trimStart() and trimEnd()

const url = "https://www.google.com/abc%20xyz";
console.log(url.replace("%20", "-")); // https://www.google.com/abc-xyz

console.log(url.includes("google")); // true
