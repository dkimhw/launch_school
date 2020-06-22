


function factors(number) {
    // let divisor = number;
    let factors = [];
    for (let divisor = number; divisor > 0; divisor--) {
        if (number % divisor === 0) {
            factors.push(number / divisor);
        }
    }
    return factors;
}


console.log(factors(10));
console.log(factors(0));
console.log(factors(-1));


