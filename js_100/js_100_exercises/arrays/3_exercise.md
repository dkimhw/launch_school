

### Add + Delete

Question:

We are given the following array of energy sources. Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

Answer:

```javascript
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift(); // Or energy = energy.slice(1);
energy.push('geothermal');

energy;
```