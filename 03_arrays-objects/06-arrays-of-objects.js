/*

- Arrays of Objects

- You can store objects in arrays just like any other value.

    Example:
    let people = [
        {id: 001, name: "John", age: 30},
        {id: 002, name: "Jane", age: 25},
        {id: 003, name: "Jim", age: 35}
    ];



*/

let x;

let planes = [
    {
        manufacturar: "Boeing",
        type: "737-800",
        capacity: 160,
        range: 5600
    },
    {
        manufacturar: "Boeing",
        type: "787-800",
        capacity: 160,
        range: 13800
    },
    {
        manufacturar: "Airbus",
        type: "330-800 Neo",
        capacity: 290,
        range: 15700
    },
    {
        manufacturar: "Embraer",
        type: "E175",
        capacity: 60,
        range: 4500 

    }
]

x = typeof(planes);

x = planes[0];

// I print out all the plane individually
for (const element of planes) {
    console.log(element);
}

// I print out all the plane names
for (const element of planes) {
    console.log(element.manufacturar);
    console.log(element.type);
    console.log("");
}

// I only print out the Embraer aircraft

for (const element of planes) {
    if (element.manufacturar === "Embraer") {
        console.log(element);
    }
}


console.log(x);
