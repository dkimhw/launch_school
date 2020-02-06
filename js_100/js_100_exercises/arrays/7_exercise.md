
### Equality

Question:

Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

Answer:

```javascript
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // false because it checks whether they are the same object by checking the same memory location.
```

```javascript
let array1 = [2, 6, 4];
let array2 = array1;

console.log(array1 === array2); // true
```

