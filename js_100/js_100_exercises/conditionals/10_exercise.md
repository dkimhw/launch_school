
### Are we moving?

Question: Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.

```javascript
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

// true && (false || true)
// true
let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); // logs true
```

Bonus Question: Do we need the parentheses in the boolean expression or could we also have written the following?

```javascript
// true && false || true
// there is order of precedence in operators - && operators have higher precedence so you will actually get:
// false || true
// true
// the final results didn't change but you have to be careful of order of precedence
let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
```

Yes matters