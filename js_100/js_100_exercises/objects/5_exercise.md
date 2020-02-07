
### Dot Notation vs Bracket Notation

Before running any code, determine what difference there will be in the output of the two code snippets below (if any).


Answer:

```javascript
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // { prefix: Pacific}

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // { Indian: 'Pacific'}
```

* One important difference between bracket notation and dot notation is that bracket notation accepts expressions including variables. 