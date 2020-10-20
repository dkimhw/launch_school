
let greeting = 'hey';

function x(a) {
  a = 'blah';
  greeting = 'blah';
}

x(greeting);
console.log(greeting);


function y(a) {
  console.log(a);
}

y();