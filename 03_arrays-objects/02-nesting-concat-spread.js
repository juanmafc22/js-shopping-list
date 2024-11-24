/*

NESTING - CONCAT - SPREAD

NESTING
- Arrays can be nested inside other arrays.
Example:
let arr = [[1, 2], [3, 4], [5, 6]];

CONCAT
- The concat() method is used to merge two or more arrays.
- In the same way I can concatenate strings, I can concatenate arrays.
Example:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]    

SPREAD
- The spread operator is used to expand an array into individual elements.
Example:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

- FLAT
- The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
Example:
let arr = [[1, 2], [3, 4], [5, 6]];
let flatArr = arr.flat();
console.log(flatArr); // [1, 2, 3, 4, 5, 6]

*/

let x;

// NESTING
let firstFruits = [["apple", "banana"], ["orange", "kiwi"]];
let fruits = ["apple", "banana", "orange", "kiwi"];
let berries = ["strawberry", "blueberry", "blackberry", "raspberry"];

// printing out banana
x = fruits[0][1];

// getting the first 3 chars from banana whithout changing the value of the nested array
x = fruits[0][1].slice(0,3);

// getting the num of chars of the fruit at 1,0, it's orange it should be 6
x = fruits[1][0].length;

x = fruits.concat(berries);

x = firstFruits.flat();

// Exercises
// 1. Create a nested array with 3 subarrays.
// 2. 
let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// 2. 

x = Array.isArray(nestedArray);


console.log(x);