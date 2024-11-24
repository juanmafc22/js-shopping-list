/*

JavaScript and Strings
----------------------

- String concatenation
    - The + operator can be used to concatenate strings
    example: "Hello" + " " + "World" returns "Hello World".
    
- Template strings
    - Backticks are used to create template strings
    - Template strings can contain placeholders
    - Placeholders are indicated by the dollar sign and curly braces (${expression})

- Useful string properties
    - length
    description: length returns the length of a string (number of characters).
    3xample: "Hello".length returns 5.

- Useful string methods
    - toUpperCase()
    description: toUpperCase() returns the value of the string converted to uppercase.
    example: "Hello".toUpperCase() returns "HELLO".

    - toLowerCase()
    description: toLowerCase() returns the value of the string converted to lowercase.
    example: "Hello".toLowerCase() returns "hello".

    - indexOf()
    description: indexOf() returns the index of the first occurrence of a specified value in a string.
    example: "Hello".indexOf("e") returns 1.

    - lastIndexOf()
    description: lastIndexOf() returns the index of the last occurrence of a specified value in a string.
    example: "Hello".lastIndexOf("l") returns 3.

    - charAt()
    description: charAt() returns the character at a specified index in a string.
    example: "Hello".charAt(1) returns "e".

    - substring()
    description: substring() returns the part of a string between the start and end indexes, or to the end of the string. 
    example: "Hello".substring(0, 4) returns "Hell".
    example: "Hello".substring(2) returns "llo". 

    - slice(): similar to substring, but can take negative values, we can start at the end
    description: slice() extracts a part of a string and returns it as a new string.
    example: "Hello".slice(0, 4) returns "Hell".

    - splice(): similar to slice, but it modifies the original string
    description: splice() adds/removes items to/from an array, and returns the removed item(s).
    example: "Hello".splice(1, 2) returns "el".

    - split(): splits a string into an array of substrings
    description: split() is a string method that splits a string into an array of substrings.
    example: "Hello, World".split(", ") returns ["Hello", "World"].
    example: "Hello, World".split("") returns ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"].

*/

let x;
const name = "John";
const age = 33;
let string = "Jello " + name + " you are " + age + " years old";


// String concatenation
x = string + "!";

// Template strings

/*
console.log(x.length)

if (x[0] === 'H') {
    console.log("The string starts with H")
} else {
    console.log("The string DOESNT start with H")

}
*/

x = string.substring(0, 5);

let equipos = "Barcelona, Real, Madrid Atletico de Madrid, Valencia";

let equiposArray = equipos.split(", ");

console.log(equiposArray);

equiposArray.forEach(element => {
   console.log(element);
});
