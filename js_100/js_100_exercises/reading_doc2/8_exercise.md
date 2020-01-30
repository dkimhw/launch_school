
### String Concatenation

Question: Find out how we can join two or more strings together.

Answer:
* `+` operator
* `.concat()`

```javascript
name1 = 'David';
name2 = 'Patri';

// can pass additional strings
console.log(name1.concat(' and ', name2, '!'));

// + operator
// This is the preferred method
console.log(name1 + " and " + name2);
```