const people = [
    {
        name: { firstName: "Alice", lastName: "Johnson" },
        age: 34,
        address: { number: 123, street: "Maple St", city: "Springfield" },
        phone: { areaCode: 123, number: "456-7890" },
        email: "alice.johnson@gmail.com",
        isMarried: true,
        dateOfBirth: { year: 2001, month: 2, day: 15 }
    },
    {
        name: { firstName: "Bob", lastName: "Smith" },
        age: 42,
        address: { number: 456, street: "Oak St", city: "Rosario" },
        phone: { areaCode: 987, number: "654-3210" },
        email: "bob.smith@hotmail.com",
        isMarried: false,
        dateOfBirth: { year: 1981, month: 11, day: 23 }
    },
    {
        name: { firstName: "Carol", lastName: "Williams" },
        age: 28,
        address: { number: 789, street: "Pine St", city: "Rosario" },
        phone: { areaCode: 555, number: "123-4567" },
        email: "carol.williams@gmail.com",
        isMarried: true,
        dateOfBirth: { year: 2002, month: 7, day: 10 }
    },
    {
        name: { firstName: "David", lastName: "Brown" },
        age: 31,
        address: { number: 101, street: "Elm St", city: "Rosario" },
        phone: { areaCode: 333, number: "222-1111" },
        email: "david.brown@hotmail.com",
        isMarried: false,
        dateOfBirth: { year: 2008, month: 3, day: 30 }
    },
    {
        name: { firstName: "Emma", lastName: "Davis" },
        age: 25,
        address: { number: 202, street: "Cedar St", city: "Springfield" },
        phone: { areaCode: 444, number: "555-6666" },
        email: "emma.davis@gmail.com",
        isMarried: true,
        dateOfBirth: { year: 1998, month: 8, day: 22 }
    },
    {
        name: { firstName: "Frank", lastName: "Miller" },
        age: 37,
        address: { number: 303, street: "Birch St", city: "Springfield" },
        phone: { areaCode: 666, number: "777-8888" },
        email: "frank.miller@hotmail.com",
        isMarried: false,
        dateOfBirth: { year: 1986, month: 4, day: 18 }
    },
    {
        name: { firstName: "Grace", lastName: "Wilson" },
        age: 29,
        address: { number: 404, street: "Walnut St", city: "Villa Maria" },
        phone: { areaCode: 777, number: "888-9999" },
        email: "grace.wilson@reuters.com",
        isMarried: true,
        dateOfBirth: { year: 1994, month: 9, day: 7 }
    },
    {
        name: { firstName: "Henry", lastName: "Moore" },
        age: 41,
        address: { number: 505, street: "Fir St", city: "Villa Maria" },
        phone: { areaCode: 888, number: "999-0000" },
        email: "henry.moore@lanacion.com.ar",
        isMarried: false,
        dateOfBirth: { year: 1982, month: 5, day: 12 }
    },
    {
        name: { firstName: "Isabella", lastName: "Taylor" },
        age: 27,
        address: { number: 606, street: "Poplar St", city: "Springfield" },
        phone: { areaCode: 222, number: "333-4444" },
        email: "isabella.taylor@gmail.com",
        isMarried: true,
        dateOfBirth: { year: 1996, month: 12, day: 1 }
    },
    {
        name: { firstName: "Jack", lastName: "Anderson" },
        age: 35,
        address: { number: 707, street: "Willow St", city: "Arroyito" },
        phone: { areaCode: 111, number: "222-3333" },
        email: "jack.anderson@gmail.com",
        isMarried: false,
        dateOfBirth: { year: 1988, month: 10, day: 25 }
    }
];

// num of people
let count = people.length;
console.log("The num of people: " + count)


let count2 = 0;

people.forEach( person => {
    count2++;
})

console.log("Count 2: " + count2);

let peopleFromRosario = people.filter( person => {
    return person.address.city == "Arroyito";
})

console.log(peopleFromRosario);

let peopleWithGmail = people.filter( person => {
    return 
})
