

### What's my value? part 9

Question:

What will the following code log to the console and why? Don't run it until you have tried to answer.

```javascript
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
```

Answer:

* Cannot reassign values to a constant variable. 
* Passing `a` as an argument to `myFunction` on line 7 has no effect, as the function does not declare any parameters. It is ignored.