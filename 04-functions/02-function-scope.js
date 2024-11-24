/*

JavaScript and Function Scope
------------------------------

- Global Scope: Variables declared outside a function are global and can be accessed and modified from any function.
- Local Scope: Variables declared within a JavaScript function are LOCAL to the function.




*/

let x = 10;

function myWindowHeight() {

    // y is function (local) scope
    const y = 100;

    // windo.innerHeight is global scope variable, it was never declared in this function yet it can be accessed.
    console.log("The height of the window is: " + window.innerHeight);
    console.log("The value of x is: " + x);
    console.log("The value of y is: " + y);
}

myWindowHeight();
