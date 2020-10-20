let b = 'Hello'
let name = ''

function changeName(a) {  
  name = 'bob'; // You are not accessing the outer scope in anotherFunction() - why?
  b = 'Boo';
  console.log(b);
}

function anotherFunction() {  
	let name = 'jim';  
	changeName(name); 
  console.log(name);
  
  function change(x) {
    name = 'bob'
  }

  change(name);
  console.log(name);
}

anotherFunction(); // prints bob
console.log(name);