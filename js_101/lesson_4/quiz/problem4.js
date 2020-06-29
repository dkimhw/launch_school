

let obj = {
    'x': 'blah'
}

console.log(obj.hasOwnProperty('x'));
console.log(obj.x);
console.log(Object.keys(obj).includes('x'));
console.log(obj['x']);
