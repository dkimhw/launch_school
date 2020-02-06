

### Question 6

Write code that checks whether the string byteSequence contains the character x.


Answer:

```javascript
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

function hasX(str) {
    return str.includes('x');
}

console.log(hasX(byteSequence));
```

