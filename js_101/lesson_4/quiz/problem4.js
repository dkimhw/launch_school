

let obj = {
    'x': undefined
}

console.log(obj.hasOwnProperty('x'));
console.log(Object.keys(obj).includes('x'));

console.log(obj.x); // returns undefined
console.log(obj['x']);

console.log(obj.y); // it returns undefined because it doesn't exist


// You can't really tell 100% of the time that the key exists
