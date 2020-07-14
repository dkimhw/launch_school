
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

console.log(arr);

arr.sort((a, b) => {
    let sum1 = a.filter(odd => odd % 2 === 1).reduce((sum, i) => sum += i, 0);
    let sum2 = b.filter(odd => odd % 2 === 1).reduce((sum, i) => sum += i, 0);
    
    return sum1 - sum2;
});

console.log(arr);