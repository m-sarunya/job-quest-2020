function fizzBuzz(number) {
    let check = ''
    switch (number % 3) {
        case 0:
            check = 'Fizz'
            break;
        default:
            check;
    }
    switch (number % 5) {
        case 0:
            check = check + 'Buzz'
            break;
        default:
            check;
    }
    return check
}

console.log(fizzBuzz(21));
console.log(fizzBuzz(25));
console.log(fizzBuzz(45));