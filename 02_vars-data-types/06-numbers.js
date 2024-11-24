/*

JavaScript and numbers
----------------------

Useful number methods

- toString()
description: toString() returns a number as a string.
example: (123).toString() returns "123".

- toFixed()
description: toFixed() formats a number using fixed-point notation.
example: (9.656).toFixed(0) returns "10".

- toExponential()
description: toExponential() formats a number using exponential notation.
example: (9.656).toExponential(2) returns "9.66e+0".

- Numbre.MAX_VALUE; Number.MIN_VALUE
description: Number.MAX_VALUE returns the largest number possible in JavaScript.
description: Number.MIN_VALUE returns the smallest number possible in JavaScript.
examples: Number.MAX_VALUE returns 1.7976931348623157e+308.


*/


let x;
let number;

number = 123;

x = number.toString();
x = number;

let number2 = 12.23345566;

// modifying the decimal places
x = number2.toFixed(4);

let numbers = [1, 2, 3, 4, -8, 6, 7, 8, 9, 10];

let min = Number.MAX_VALUE;

for (let i=0; i<numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("The min is: ", min)


console.log(x);

// console.log(typeof(x));