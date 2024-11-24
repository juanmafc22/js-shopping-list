/*

JavaScript data types

Primitive and Reference data types

Primitive data types
- Number: can be either integer or floating-point.
- String
- Boolean
- Undefined: a variable that has not been assigned a value. It was declared but not initialized.
- Null: a variable that has been explicitly assigned the value null.
- NAN: Not a Number.

Reference data types
- Object: an object is a collection of key-value pairs. The key is a string and the value can be any data type.
- Array: an array is a collection of elements. Each element can be of any data type.
- Function: a function is a block of code that can be called by name. All functions in JavaScript are objects.

typeof(variable) function: returns the data type of the variable.


*/

number = 11;
name = "juan";
nameIsMarried = true;
isThisNull = null;



console.log("The num var is a: ", typeof(number));                  // number
console.log("The name var is a: ", typeof(name));                   // string
console.log("The nameIsMarried var is a: ", typeof(nameIsMarried)); // boolean
console.log("The isThisNull var is a: ", typeof(isThisNull))        // should be null?
