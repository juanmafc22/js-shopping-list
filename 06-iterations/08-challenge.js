const numbers = [2, -30, 50, 20, -12, -9, 7];

let positiveSum = numbers
    .filter( num => num > 0)
    .reduce( (accu, num) => accu + num, 0);


console.log(positiveSum);