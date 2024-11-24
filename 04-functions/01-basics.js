/*

JavaScript Functions
---------------------
- What they do.
- How to create them.
- What are arguments and parameters.
- How to return values.
- How to use default parameters.


- A JavaScript FUNCTION is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).
- Values passed to a function are called ARGUMENTS
- Values uses inside a function are called PARAMETERS
- INVOKING a function is also known as CALLING a function, basically running the function.
- A function can RETURN a value back to the caller.

Example:

function myFunction(p1, p2) {
    return p1 * p2;
}

- DEFAULT PARAMETERS can be used in a function.
Example: function myFunction(p1, p2 = 10) {

- If OBJECTS are passed to the function, any of the properties can be used inside the parameters.
    - object literals
    - arrays


*/

// Example 1: Simple function


console.log( registerUser("Juan", 22) );


function registerUser(user = "Guest", age = 18) {
    return user + " is now registered, " + " age is " + age;
}


// Example 2: Using objects as parameters

let user = {
    name: "Juan",
    age: 22,
    email: "email@email.com",
    country: "Mexico",
    greeting: function() {
        console.log("Hello " + this.name + "!")
    },
    hoursCoded: [11, 11, 22, 11, 33, 11],

}

function whoIsWorking(user) {
    console.log("Who is working today? " + user.name + " who is " + user.age + " years old and is from " + user.country);
}


function calcHoursCoded(hours = [0]) {
    totalHours = 0;
    for (const element of hours) {
       totalHours += element; 
    }
    return totalHours;
}

hoursWorkedThisWeek = [7, 7, 7, 7, 7, 7, 7];

console.log("The total worked hours this week is: " + calcHoursCoded(hoursWorkedThisWeek));

whoIsWorking(user);
