
### Equality

Question: In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.

```javascript
'8' == 8; // true
'8' === 8; // false
```

* `==` comparison forces a the string '8' to number 8 and compares it against the right side. Basically attempts to convert its two operators to the same type
* `===` there is no type forcing. Compares the elements as they are. Always returns false if the two operators are different types. 