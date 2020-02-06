

### Question 7

Question:

Write a function that checks whether a string is empty or not. 


Answer:

```javascript
let isBlank = (str) => {
    return (str === "" ? true : false);
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
```

Alternate Answer:

```javascript
function isBlank(string) {
    return string.length === 0;
}
```