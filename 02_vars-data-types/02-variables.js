/*
JavaScript Variables
- Var
- Let
- Const

Var
- Declared using the var keyword
- Can be re-declared and updated
- Function scoped

Let
- Declared using the let keyword
- Can be updated but not re-declared
- Block scoped

Const
- Declared using the const keyword
- Cannot be updated or re-declared
- Block scoped

Variable Naming Rules
- Variable names can only contain letters, numbers, $, and _
- Variable names cannot start with a number
- Variable names are case-sensitive
- Variable names cannot be reserved keywords
- Use camelCase for variable names

Variable Initialization vs Declaration
- Declaration: var x;
- Initialization: x = 5;
*/

// Example of variable declaration 
let name;

// Example of variable initialization
name = "John";
console.log("Name has a value of: ", name);

// Const cannt be declaread without initialization
const age = 30;
console.log("Age is a CONST and has a value of: ", age);
