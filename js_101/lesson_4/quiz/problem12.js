

let x = [1, 2, 3, 4, 5];

x.length = 2;

console.log(x);

x.length = 5;

console.log(x);

console.log(Object.keys(x));
console.log(Object.keys(x).length === x.length)


let y = [undefined, null];

console.log(y.length);

//y.length = -3;
//console.log(y);