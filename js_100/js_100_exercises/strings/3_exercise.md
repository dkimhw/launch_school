

### Repeat

Question: 

Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

Answer:

```javascript
function repeatClone(int, str) {
    let newStr = str;

    for (let i = 0; i < int - 1; i += 1) {
        newStr += str;
    }

    return newStr;
}

repeatClone(3, 'ha'); // 'hahaha'

```