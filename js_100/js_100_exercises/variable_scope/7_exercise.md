

### What's my value? part 7

Question:

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
```


Answer:

* Prints 1; any inner scope can access variables in the outer scope.