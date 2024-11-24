/*

- Create a random number between 1 and 100
- Create a random number between 1 and 50

- Create variables for the
    - sum
    - diff
    - product
    - quotient
    - remainder

- show rand num 1
- show rand num 2
- show results

*/

let randNum1 = Math.floor( (Math.random() * 100) + 1);
let randNum2 = Math.floor( (Math.random() * 50) + 1);

let sum = randNum1 + randNum2;
let diff = randNum1 - randNum2;
let product = randNum1 * randNum2;
let quotient = randNum1 / randNum2;
let remainder = randNum1 % randNum2;



console.log("Rand num 1: " + randNum1);
console.log("Rand num 2: " + randNum2);
console.log("");
console.log(randNum1 + " + " + randNum2 + " = " + sum);
console.log(randNum1 + " - " + randNum2 + " = " + diff);
console.log(randNum1 + " * " + randNum2 + " = " + product);
console.log(randNum1 + " / " + randNum2 + " = " + quotient);
console.log(randNum1 + " % " + randNum2 + " = " + remainder);