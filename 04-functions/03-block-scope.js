/*

Block Scope in JavaScript
--------------------------

- Generally speaking, a block is a chunk of code bounded by {}. A block lives in curly braces.

- Variables defined with let and const are block scoped, meaning they are only accessible in the block they were defined in.

- VAR vs LET vs CONST
    - VAR is function scoped., meaning you CAN NOT access it outside of the function.
    - LET and CONST are block scoped.
    - VAR IS NOT Recommended for use in modern JavaScript due to its behavior.



*/

if (true) {
    let x = 10;
    const y = 20;
    var z = 30;
}

// x is not accessible here
// y is not accessible here
// z is accessible here
// console.log(x);     // ReferenceError: x is not defined
// console.log(y);     // ReferenceError: x is not defined
console.log(z);     // ReferenceError: x is not defined
