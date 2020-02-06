

### Remove Last Char

Question:

Create a function `removeLastChar` that takes a string as argument, and returns the string without the last character.


Answer:

```javascript
function removeLastChar(str) {
    return str.slice(0, str.length - 1);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
```