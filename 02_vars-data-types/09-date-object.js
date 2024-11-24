/*

JavaScript and the Date Object

JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

- Date objects are created with the new Date() constructor.
- Months are zero-based. January is 0, February is 1, and so on.

- toString() method converts a Date object to a string.
explanation: The toDateString() method converts the date (not the time) of a Date object into a readable string.
example: var d = new Date();
d.toDateString();
output: "Sun May 30 2021"

- now() method returns the number of milliseconds since 1 January 1970 UTC.



*/

let d;

let x;

d = Date.now();



console.log(d);