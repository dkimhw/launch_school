

### Question 9

Question:

Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.


Answer:

```javascript
function capitalize(str) {
    capitalArray = []

    str.split(' ').forEach((word) => {
        capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalArray.push(capitalizedWord);
    })

    return capitalArray.join(' ');
}

capitalize('launch school tech & talk');
```