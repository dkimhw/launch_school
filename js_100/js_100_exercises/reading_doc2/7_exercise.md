

### Argument Signatures

Question: How many arguments does the `Array.prototype.join()` method expect? What happens if you call it with less or more arguments?

Answer:

* `join` expects an optional argument. Only takes one argument
* If no argument is passed, the default value is: `','`
* Works only on array objects


```javascript
let names = ['David', 'Patricia']

// Default
names.join(); // 'David,Patricia'

// One argument
names.join(', '); // 'David, Patricia'

// Excess arguments are ignored
names.join(' and ', 'also'); // 'David and Patricia '

```