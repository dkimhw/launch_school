
### What's my value? part 3

Question:

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
if (true) {
  let myValue = 20; // block scoped - var is not block scoped
}

console.log(myValue); // reference error (cannot access let declared in block scope)
```