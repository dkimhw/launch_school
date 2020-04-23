

let cache = {}
function fibonacci(n) {
    let result;

    if (cache[n]) {
        return cache[n] ;
    } else {
        if (n <= 2) {
            return 1;
        }
        
        result = fibonacci(n - 1) + fibonacci(n - 2);
        cache[n] = result ;
        return result ;
    }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(3));
