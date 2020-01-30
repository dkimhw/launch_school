
### What year is this?

The MDN page for Date lists two methods to get the year of a date.

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date]

```javascript
let today = new Date();

today.getYear();
today.getFullYear();
```

Answer:

* `getFullYear()` method returns the year of the specified date according to local time (i.e. 1969)
* `getYear()` returns the year in the specified date according to local time - does not return the full year (i.e. 69 for 1969)

```javascript
const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getFullYear()); // 1969
console.log(moonLanding.getYear()); // 69
```

* `getYear()` is deprecated - avoid using it.