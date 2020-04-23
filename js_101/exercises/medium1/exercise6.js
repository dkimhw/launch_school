

function fibonacci(num) {
    if (num === 1 || num === 2) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2)
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

/*

fibonacci(3) 
fibonacci(2) = 1
ibonacci(1) = 1

fibonacci(4)
fibonacci(3) + fibonacci(2) -> 1
fibonacci(3) = fibonacci(2) -> 1 + fibonacci(1) -> 1




*/