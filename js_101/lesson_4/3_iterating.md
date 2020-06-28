

## Iterating with for and while loops

Looping needs four primary elements. A looping construct (`for`), a counter (control variable), a way to retrieve a current value, and a way to exit the loop.

### while loop example

```javascript
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}
```

### Iterating over Collections

The for loop is the preferred approach of the two when it comes to iterating over collections - because there is a finite end to a collections where as `while` loops are great when you need to loop until you hit an event or condition.

```javascript
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

for (let counter = 0; counter < alphabet.length; counter++) {
  console.log(alphabet[counter]);
}
```

Iterate over arrays:

```javascript
let colors = ['green', 'blue', 'purple', 'orange'];

for (let counter = 0; counter < colors.length; counter += 1) {
  console.log(`I'm the color ${colors[counter]}!`);
}
```

Arrays can contain any JS values regardless of values.

Iterating over objects a bit more difficult - this is one way:

```javascript
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length)  {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}
```

Similar to Python and enhanced loop in Java:

```javascript
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}
```

`break` is critical for controlling the loops (you may want to break once you hit a certain condition or event without needing to go through the entire collection):

```javascript
let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let index = 0;

while (index < names.length) {
  if (names[index][0] === 'E') {
    break;
  }

  console.log(names[index]);
  index += 1;
}
```

### guard clause

A guard clause is a conditional statement that protects the body of a loop or function from having to deal with values it doesn't need to handle.

In the following case, we don't want to handle odd numbers so we add a guard clause at the top of the loop to end the current iteration of the loop and resume with the next if the number is odd. This function only wants the event numbers:

```javascript
let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) continue;

  let square = numbers[index] * numbers[index];
  console.log(square);
}
```

`continue` only ends the current iteration and starts the next. Does not end it.