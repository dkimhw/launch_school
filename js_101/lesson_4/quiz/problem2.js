let dog = 'fido';

//dog = dog[0].toUpperCase() + dog.substring(1)
//console.log(dog);


dog[0] = 'F'
console.log(dog); // won't work - strings are immutable


dog.replace('f', 'F'); // returns a new string - needs to be assigned back to dog again
console.log(dog);

let letters = dog.split('');
letters[0] = letters[0].toUpperCase();
dog = letters.join('');

console.log(dog);