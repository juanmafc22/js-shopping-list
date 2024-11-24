/*

Object Nesting and Spread Operator
----------------------------------

- Nesting objects is a common practice in JavaScript. We can have objects inside objects.
    
    Example:
    let person = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            state: "NY"
        }
    };

    In the above example, the address property is an object itself, the address property is nested inside the person object.

- Spread operator is a new feature in ES6 that allows us to spread the elements of an array or object.

    Example:
    let person = {
        name: "John",
        age: 30
    };

    let workInfo = {
        job: "Developer",
        salary: 100000
    };

    let newPerson = {
        ...person,
        ...workInfo,
        email: "email@gmail.com"
    }

- Objects methods
    
*/

let x;

let person = {
    name: "Juan Manuel",
    age: 51,
}

let workInfo = {
    job: "Developer",
    languages: ["JavaScript", "PHP", "Python"]
}

let totalPersonInfo = {
    ...person,
    ...workInfo,
    email: "email@gmail.com"
}

x = totalPersonInfo;

console.log(x);
