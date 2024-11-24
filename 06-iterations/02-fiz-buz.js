/*

multiple of 3 print Fizz
multiple of 5 print Buzz
multiple of 3 AND 5 print FizzBuzz

*/

for (let index = 1; index <= 100; index++) {

    if (index %3 == 0 && index %5 == 0) {
        console.log(index + " is FizzBuzz");
    } else if (index %3 == 0) {
        console.log(index + " is Fizz");
    } else if (index %5 == 0) {
        console.log(index + " is Buzz");
    } else {
        console.log(index);
    }
}

