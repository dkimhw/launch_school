
// Procedural Fibonnacci Function

function fibonacci(nth) {
    let fibTwoNumbers = [1, 1];

    for (let i = 3; i <= nth; i++) {
        fibTwoNumbers = [fibTwoNumbers[1], fibTwoNumbers[0] + fibTwoNumbers[1]];
    }

    if (nth === 0) {
        return 0
    } else {
        return fibTwoNumbers[1];
    }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
