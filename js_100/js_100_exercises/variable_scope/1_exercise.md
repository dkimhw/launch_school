

### What's my value? part 1

Question:

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
console.log(greeting);

var greeting = 'Hello world!';
```


Answer:

All variables declared with `var` are hoisted - they are virtually moved to the beignning of the scope. 

Code snippet above behaves like the following:

```javascript
var greeting; // initalized to undefined

console.log(greeting); // prints undefined

greeting = 'Hello world!'
```