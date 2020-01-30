

### Looping over Array Elements

Question: Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.

Answer:

```javascript
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1; // increment on each loop
}
```

* If the array was empty. `array.length` here is 0 so 0 is not less than 0. If you need the loop at least loop once, `do while` is an option.