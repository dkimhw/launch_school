

### Question #11

Question:

We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.


Answer:

```javascript
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
let originalLength = groceryList.length;

for (let i = 0; i < originalLength; i += 1) {
    console.log(groceryList.shift());
}

groceryList;
```

Alternate - Better Method:

```javascript
while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}
```