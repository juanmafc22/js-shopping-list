/*

JavaScript and Nested Scope
----------------------------

- Nested Scope: A function can be nested within another function.
- The inner function (nested function) has access to the variables and scope of the outer function.
- The child function can access the variables of the parent
- The parent function can NOT access the variables of the child function

*/

function first() {
    let num1 = 10;
    console.log(num1);
}

function second() {
    let num2 = 20;

    // The code below gives me a ReferenceErroe 'cause I can't access num 3 (inside a child (nested) function)
    // console.log(num2 + num3);

    function third() {
        let num3 = 30;
        // Because third() is a child of second() I have access to its variables
        console.log(num2 + num3);
    }

    third();
}



first();
second();