

### Yes? No? Part 1

Question: The code provided below will randomly initialize randomNumber to either 0 or 1 each time it is executed. Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.


Answer:

```javascript
let randomNumber = Math.round(Math.random());

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No.');
}
```

* Since 0 is falsy and 1 is truthy in JavaScript - you can just put `randomNumber` instead of combining with conditionals like: `randomNumber === 1`.