

### Syntax Error

Question: Following code produces `SyntaxError: Unexpected token &&`. Read about the error and fix it.

```javascript
let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
```

Answer:

* Why does it produce this error? Due to missing parantheses.
* The actual error from MDN: "a specific language construct was expected but something else was provided".

```javascript
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && (currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
```