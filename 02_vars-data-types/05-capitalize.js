/*

Take a variable myString and capitalize the first lettr of the word using some of the methods seen so far

- substring()
description: substring() returns the part of a string between the start and end indexes, or to the end of the string. 
example: "Hello".substring(0, 4) returns "Hell".
example: "Hello".substring(2) returns "llo". 

*/

let myString = "juanma";

let firstLetter = myString.charAt(0).toUpperCase(); 

let restOfWord = myString.substring(1, myString.length);
// let restOfWord = myString.substring(1);

let result = firstLetter + restOfWord;

console.log(result);


