
### That's Odd

Question: Write a while loop that logs all odd natural numbers between 1 and 40.

Answer:

```javascript
let counter = 0;

while (counter <= 40) {
  if (counter % 2 === 1) {
    console.log(counter);
  }
  counter += 1;
}
```

Alternate Answer:

Loops less amount so more ideal from that perspective but less readable in terms of intent in my opinion.

```javascript
let num = 1;

while (num < 40) {
  console.log(num);
  num += 2;
}
```