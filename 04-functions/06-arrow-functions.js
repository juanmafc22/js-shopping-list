/*

JavaScript and Arrow Functions
-------------------------------

- Part of the ES6 update to JavaScript

- Regular function expressions can be replaced with arrow functions

    Function expression example:
    let total = function (num1, num2) {
        return num1 + num2;
    };

    Arrow function example:
    let total = (num1, num2) => {
        return num1 + num2;
    };  

    The arrow function is shorter and easier to read
    function (num1, num2) {} vs (num1, num2) => {}

- I can even remove the curly braces and return keyword if I have a single line of code

    Example:
    let total = (num1, num2) => num1 + num2;

- When I have a single prameter I can even remove the parentheses

    Example:
    let total = num => num + 10;

*/

console.log('Arrow Functions');

let num1 = 10;
let num2 = 0;

let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

function printResult(operation, num1, num2) {

    switch (operation) {
        case "add":
            console.log(num1 + " + " + num2 + " = " + add(num1, num2) );
            break;
        case "subtract":
            console.log( num1 + " - " + num2 + " = " +subtract(num1, num2) );
            break;
        case "multiply":
            console.log(num1 + " * " + num2 + " = " + multiply(num1, num2) );
            break;
        case "divide":
            if (num2 == 0) {
                console.log("No se puede dividir por cero");
            } else {
                console.log(num1 + " / " + num2 + " = " + divide(num1, num2) );
                break;
            }
    
        default:
            break;
    }
}

printResult("add", num1, num2);
printResult("subtract", num1, num2);
printResult("multiply", num1, num2);
printResult("divide", num1, num2);