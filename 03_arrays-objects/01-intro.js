/*

Arrays and Objects data structures in JavaScript
------------------------------------------------

- Creating Arrays

- Creating an array literal
let arr = [1, 2, 3, 4, 5];

- Creating an using the array constructor
let array = new Array(1, 2, 3, 4, 5);

- They are zero-based index

- Accessing elements in an array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // 1

Useful array properties 

- length
explanation: returns the number of elements in an array
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

Usful array methods

- push()
explanation: adds an element to the end of an array
let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

- pop()
explanation: removes the last element from an array
let arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr); // [1, 2, 3, 4]

- unshift()
explanation: adds an element to the beginning of an array
let arr = [1, 2, 3, 4, 5];
arr.unshift(0);

- shift()
explanation: removes the first element from an array
let arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr); // [2, 3, 4, 5]

- includes()
explanation: checks if an array contains a certain element
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true

- indexOf()
explanation: returns the first index at which a given element can be found in the array, or -1 if it is not present
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // 2

- slice()
IT DOES NOT MUTATE THE ORIGINAL ARRAY
let fruits = ["apple", "banana", "orange", "kiwi"];
let citrus = fruits.slice(1, 3);
citrus contains ["banana", "orange"]

- splice()
IT MUTATES THE ORIGINAL ARRAY





*/

let x;

let numbers = [1, 2, 3, 4, 5];

let fruits = new Array("tangarine", "apple", "orange", "banana", "pineapple", "mango");

// adding an element to the end of the array
fruits.push("grape");

// removing the last element from the array
fruits.pop();

// adding an element to the beginning of the array
fruits.unshift("kiwi");

// removing the first element from the array
fruits.shift();

// checking if apple is included
let isApple = fruits.includes("apple");

// checking index of

// x = fruits.indexOf("banana");

// let citrus = fruits.slice(3, 4);
// console.log(citrus);

// x = fruits.splice(0, 1);

// x = fruits.reverse();

// x = fruits[0].charAt(0);


// console.log(numbers);
// console.log(fruits);
// console.log(`My favorite fruit is: ${fruits[0]}`)

// console.log(isApple);
// console.log(fruits);

console.log(x);