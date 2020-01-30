
### Method Chaining

Give the following:

```javascript
let tweet = 'Starting to get the hang of it... #javascript #launchschool';
```

What will the following statements evaluate to?

```javascript
tweet.split(' '); // ['Starting', 'to', 'get', 'the', 'hang'...]
tweet.split(' ').reverse(); // ['#launchschool', '#javascript', 'it...', 'of', 'hang'...]
tweet.split(' ').reverse().join(' '); // '#launchschool #javascript it... of hang the get to Starting'
```

* Looking at documentation we know `split()` returns an array and `reverse()` is invoked on that returned array. `reverse()` also returns an array which is then used by `join()`.