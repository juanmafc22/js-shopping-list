let dogs = [
    {
        name: "Rufiana",
        breed: "Mestizo",
        age: 1,
        weight: 10,
    },
    {
        name: "Salvia",
        breed: "Mestizo",
        age: 2,
        weight: 20,
    },
    {
        name: "Batman",
        breed: "Frech Bulldog",
        age: 3,
        weight: 30,
    },
    {
        name: "Momo",
        breed: "French Bulldog",
        age: 4,
        weight: 40,
    },
    {
        name: "Tobias",
        breed: "Mestizo",
        age: 5,
        weight: 50,
    },
];


/*
for (let key in dogs) {
    if (dogs[key].weight <= 10) {
        totalOver5++;
    }
}
*/


/*
dogs.forEach(dog => {

    if (dog.age == 4) {
        total++;
    }
    
});
*/

// console.log(total)

let heavyDogs = dogs.filter{( dog =>
    if (dog.weight > 20) {
        return dog;
    }
    
)};