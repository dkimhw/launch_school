

function buyFruit(list) {
    let groceryList = [];
    for (let i = 0; i < list.length; i += 1) {
        let fruitsArr = [];
        for (let j = 0; j < list[i][1]; j += 1) {
            fruitsArr.push(list[i][0]);
        }

        groceryList = groceryList.concat(fruitsArr);
    }

    return groceryList;
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


/*

Alternate using reduce:

function buyFruit(fruitsList) {
  return fruitsList
    .map(fruit => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}

*/