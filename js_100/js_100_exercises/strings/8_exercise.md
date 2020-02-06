

### Question 8

Question: 

Change your isBlank function from the previous exercise to return true if the string contains only whitespaces. For example:

Answer:

```javascript
let isBlank = (str) => {
    if (str.length === 0 || str.includes(' ')) {
        return true;
    } else {
        return false;
    }
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
```

Alternate Answer

```javascript
function isBlank(str) {
    return string.trim().length === 0;
}
```