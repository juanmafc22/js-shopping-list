/*

    break continue

*/

let total = 0;
let counter = 0;

let limit = 20;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let index = 0; index < numbers.length; index++) {

    if (total <= limit) {
        total += numbers[index];
        counter++;
        console.log(counter);
        console.log("");
        console.log(total);
        
    } else {
        break;
    }
    
}

console.log("Se llegó a " + limit + " en al vuelta " + counter);