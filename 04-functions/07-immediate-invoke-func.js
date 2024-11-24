/*

IIFE (Immediately Invoked Function Expression)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:


*/

let nombre = "Juan";

( function (name) {

    console.log("Your name is " + name)

})(nombre);

