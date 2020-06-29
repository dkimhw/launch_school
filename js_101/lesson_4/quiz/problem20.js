
let result = [1, 2, 3, 4, 5].forEach(num => num + 1);
console.log(result); // undefined

let result2 = [1, 2, 3, 4, 5].filter(num => num + 1);
console.log(result2); // [1, 2, 3, 4, 5]

let result3 = [1, 2, 3, 4, 5].map(num => num + 1);
console.log(result3); // [2, 3, 4, 5, 6]