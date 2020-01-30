

### Logical Conditions Part 3

Question: Without running the below code, determine what will be logged to the console.

Answer:

```javascript
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);
```

* Prints $3.99