


### What's my value? part 8

Question:

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
```

Answer:

* Prints 2. Although the argument and outer scope variable share the same name, JavaScript on the background actually creates a local function scope variable `a` that is separate from `a` defined in the global scope.

* Review variable shadowing