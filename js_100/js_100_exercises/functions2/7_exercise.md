
### Calculate Cat Age

Question:

Implement a function `catAge` that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

* The first human year corresponds to 15 cat years.
* The second human year corresponds to 9 cat years.
* Every subsequent human year corresponds to 4 cat years.


Answer:

```javascript
function catAge(age) {
    let humanAge = 0;

    for (let i = 1; i <= age; i += 1) {
        if (i === 1) {
            humanAge += 15;
        } else if (i === 2) {
            humanAge += 9;
        } else {
            humanAge += 4;
        }
    }

    return humanAge;
}

catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
```

Alternate Answer (much better):

```javascript
function catAge(humanYears) {
  switch(humanYears) {
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}
```