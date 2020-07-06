
const obj = { a: 'able', b: 'baker', c: 'charley' };
let result = Object.values(obj).map(value => value.toUpperCase());
// => [ 'ABLE', 'BAKER', 'CHARLEY' ]

console.log(result);