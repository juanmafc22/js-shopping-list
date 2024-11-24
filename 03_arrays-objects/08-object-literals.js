/*

Object Challenge
----------------

Step 1.
Create an array of objects called library.
Add 3 objects to the array with the propiertes of author, title, and status.
The status should be another object with the properties of:
- own, set to true
- reading, set to false
- read, set to false
*/

let library = [
    {
        author: "JRR Tolkein",
        title: "The Lord Of The Rings",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        author: "Marcus Aurelius",
        title: "Meditations",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        author: "John Calvin",
        title: "The Institutes of Christian Religion",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
]

console.log("1st print of the object")
console.log(library);

library[0].status.read = true

console.log("2nd print of the object")
console.log(library);