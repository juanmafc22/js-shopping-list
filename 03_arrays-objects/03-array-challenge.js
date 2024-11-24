/*

A
1. Create an array with nums 1 to 5
2. reverse it and add 0

B
Concat to arrays, the first from 1 to 5
the second from 5 to 10
get rid of the repeated 5

C

*/

let numbers1 = [1, 2, 3, 4, 5]

numbers1.unshift(0);

console.log("Challenge 1");
console.log(numbers1.reverse());

let nums1 = [1, 2, 3, 4, 5];
let nums2 = [5, 6, 7, 8, 9, 10];

console.log("");
console.log("Challenge 2");

nums2.splice(0, 1);

console.log(nums1.concat(nums2));
