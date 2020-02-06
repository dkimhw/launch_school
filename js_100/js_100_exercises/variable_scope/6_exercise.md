### What's my value? part 6

Question:

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);
```

Answer:

* prints `false`. That's because `let b = true` creates a block `b` but doesn't actually replace the outer scope `b`. They just happen to share the same variable name - but they are separate variables.