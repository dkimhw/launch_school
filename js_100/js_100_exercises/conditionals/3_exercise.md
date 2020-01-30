

### Yes? No? Part 2

Question: Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.


Answer:

```javascript
let randomNumber = Math.round(Math.random());

randomNumber ? console.log('Yes!') : console.log('No!');

// Even better - so that you don't have to use console.log twice
console.log(randomNumber ? 'Yes!' : 'No.');
```