

### What's my value? part 4

Question:

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
```

Answer:

Here since there is no `a` in the block scope JavaScript can go up and check if there is `a` at the function scope.
* Variables declared in an outer scope can be accessed in any scope. 

Prints: 1