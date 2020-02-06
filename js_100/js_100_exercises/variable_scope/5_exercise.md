### What's my value? part 5

Question:

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
```

Answer:

* Prints: 1 and 2
* The first `console.log` JavaScript checks block scope then looks to the outer scope to check if `a` exists. So prints 1
* `let a = 2` is defined so `console.log` will print 2. Checks current scope always first.


Above is wrong:

* Real Answer: `ReferenceError`
* The scope of `a` created in the `if` block is for the entire block. JavaScript does hoist the variables defined by `let` but when it does it creates a temp dead zone in which the variables exist but doesn't have a value - not even `undefined`. 
* `a` inside `if` block shadows `a` in scope block.