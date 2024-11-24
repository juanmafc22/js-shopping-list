/*

Object Literals in JavaScript
-----------------------------

- Object literals are a way to create objects in JavaScript.
- Object literals are defined using curly braces {}.
- Object literals are comma-separated key-value pairs.

    Example:
    let person = {
        name: "John",
        age: 30,
        isMarried: false
    };  

    In the above example, name, age, and isMarried are keys.
    In the above example, John, 30, and false are values.

- I can also create objects with constructors.

    Example:
    let person = new Object();

    person.name = "John";

- We can have objects inside objects.

    Example:
    let person = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            state: "NY"
        }
    };

- We can also have arrays inside objects.

    Example:
    let person = {
        name: "John",
        age: 30,
        hobbies: ["reading", "traveling"],
        address: {
            city: "New York",
            state: "NY"
        }
    };

- We can access object properties using dot notation.

    Example:
    console.log(person.name); // John
    console.log(person.age); // 30

- I can update the information of the object using dot notation.

    Example:
    person.name = "Jane";

- I can add a new property to an object using dot notation.

    Example:
    person.email = "juanmanuel.fc@gmail.com";

- I can delete a property from an object using the delete keyword.

    Example:
    delete person.age;

- We can also add functions to objects.

    Example:
    let person = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            state: "NY"
        },
        hobbies: ["reading", "traveling"],
        greet: function() {
            console.log("Hello!");
        }
    };


- Using the .this keyword, we can access the object's properties inside the object.

    Example:

    let person = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            state: "NY"
        },
        hobbies: ["reading", "traveling"],
        greet: function() {
            console.log("Hello! My name is " + this.name + " and I am " + this.age + " years old.");
        }
    };

*/

let x;

let person = {
    name: "Juan Manuel Fernandez",
    age: 51,
    isMarried: true,
    address: {
        street: "Armenia",
        number: 2474,
        appt: "5",
        CP: 1425
    },
    hobbies: ["rugby", "bjj", "coding"],
    greeting: function() {
        console.log("Hello my name is " + this.name);
    }
}

// I print out the name
x = person.name;

// I print out the street where I live
x = person.address.street;

// I add a property to the person
person.phoneNumber = 1163076625;

// I print out the phone number
x = person.phoneNumber;

// I delete the phone number
delete person.phoneNumber;

// Now I try to print out the phone number
x = person.phoneNumber;

// I use the function inside the object
x = person.greeting();



console.log(x);