

let answer = [1, 2, 3].filter(num => 'hi');

console.log(answer);
// returns [1, 2, 3]

/*

Why?

Because it evaluates on "truthiness". "hi" is true. So on every iteration, it returns true

*/