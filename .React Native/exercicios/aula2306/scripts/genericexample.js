"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK
// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error
console.log(myNumArr, myStrArr);
