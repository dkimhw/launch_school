
### What's my value? part 9

Question:

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
```

Answer:

Prints:

{
  firstName: 'Jane',
  lastName: 'Doe'
}

Can change the value within an object property - `a` cannot be reassigned but the values within it can be chagned. 