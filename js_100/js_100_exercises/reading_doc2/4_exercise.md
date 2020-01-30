
### Arithmetic Operator Precedence

Question: Find the MDN documentation on operator precedence, and use it to find out which result the expression 4 * 5 + 3 ** 2 / 10 evaluates to.

Answer:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence]

```javascript
console.log(4 * 5 + 3 ** 2 / 10);
```
* Exponent first so you get:
  * `4 * 5 + 9 / 10`
* Since `*` and `/` have equal precedence - we go from left to right:
  * `20 + .9`
* So you get: 20.9
* Using parantheses actually makes operations much easier to read and not require breakdowns like this