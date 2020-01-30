
### Property vs Method

Question: What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

```javascript
let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1]; // line 3
trees.pop();
trees[trees.length - 1]; // line 5
```

Answer:

* Line three will return 'palm tree'. The length property contains the count of the elements in an array ([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length]). In this case, that's four but since array is zero indexed - we need to subtract this by one to access the last element in an array
  * Properties don't need the parentheses
* According to the `pop()` documentation - it permanently removes the last element in an array. So the code in line 5 will return 'sequoia' 
  * When calling a function the parentheses is required