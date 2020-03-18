

function sum(num) {
    let total = 0;
    String(num).split('').forEach(i => total += Number(i));
    return total;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

// Using reudce
function sum_reduce(num) {
    return String(num).split('').reduce((accum, digit) => accum + Number(digit), 0);
}