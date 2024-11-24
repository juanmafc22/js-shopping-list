/*

JavaScript function declararion vs expression
----------------------------------------------

FUNCTION DECLARATION
- Function declarion is when you declare a function using the function keyword
- It is hoisted to the top of the file
- Hoisting is when JavaScript moves all the function declarations to the top of the file before executing the code
- Function declaration example:


function addValues(num1, num2) {
    return num1 + num2;
}

console.log(addValues(10, 30));

FUNCTION EXPRESSION
- Function expression is when you declare a function as a variable
- It is not hoisted to the top of the file
- Function expression example:
    - With function expressions I put a semi-colon (;) at the end of the curly braces

let total = function (num1, num2) {
    return num1 + num2;
};

console.log(total(100, 200));

*/

function multiply(num1, num2) {
    return num1 * num2;
}

// Should run 6
console.log( multiply(2, 3) );

let result = function add(num1, num2) {
    return num1 + num2;
}

// Should run 50
console.log( result(20, 30) );