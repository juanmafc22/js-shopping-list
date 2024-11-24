
// calculator(2, 3, '+');
// calculator(2, 3, '-');
// calculator(2, 3, '*');
// calculator(2, 3, '*');
// calculator(2, 0, '/');
calculator(2, 9, '(');





function calculator(num1, num2, operator) {

    switch (operator) {
        case '+':
            console.log(num1 + " + " + num2 + " = " + (num1 + num2));
            break;
        case '-':
            console.log(num1 + " - " + num2 + " = " + (num1 - num2));
            break;
        case '*':
            console.log(num1 + " * " + num2 + " = " + (num1 * num2));
            break;
        case '/':
            if (num2 != 0) {
                console.log(num1 + " / " + num2 + " = " + (num1 / num2));
            } else {
                console.log("Error")
            }
            break;
        default:
            console.log("Invalid operator")
    }




}