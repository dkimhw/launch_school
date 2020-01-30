

### Do While

Question: What is the difference between the following two code snippets? Check the MDN documentation on while and do...while.

Code 1:

```javascript
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
```


Code 2:

```javascript
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
```


Answer:

* The difference between these two types of loops is that `do-while` loops are guaranteed to run at least once like in the code above. `while` loops however are not guaranteed to run - as you can see in the code above - it will not run because the condition to run is checked before executing the block - since that condition is false, it will not run.