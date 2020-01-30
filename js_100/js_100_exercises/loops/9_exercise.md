

### Finding Nemo

Question: Loop over the elements of the array fish, logging each one, and terminate the loop as soon as you encounter the string 'Nemo'.

Answer:

```javascript
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

fish.forEach((i) => {
  if (i === 'Nemo') {
    break;
  } else {
    console.log(i);
  }
});

for (let i = 0; i < fish.length; i += 1) {
  if (fish[i] === 'Nemo') {
    break;
  } else {
    console.log(fish[i]);
  } 
}
```