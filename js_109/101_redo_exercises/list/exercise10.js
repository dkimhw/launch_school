
/*

Input:
- integer (transaction id)
- Array of objects

Output:
- boolean
- whether or not an inventory item is available.
- The function should return true only if the sum of the quantity values of the
  item's transactions is greater than zero.
  Notice that there is a movement property in each transaction object.
  A movement value of 'out' will decrease the item's quantity.

Example:

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

Algorithm:

Step 1: Loop over the array of objects starting from index 0 (`i`).

Step 2: For each `i`, check if `i["id"] === transactionID`.
  - If true, check `i["movement"] === in` increase `quantity` by 1
  - If true, check `i["movement"] === out` decrease `quantity` by 1

Step 3: if `quantity` > 0 then return true else false

*/


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

let isItemAvailable = (transactionID, transactions) => {
  let quantity = 0;
  for (let idx = 0; idx < transactions.length; idx += 1) {
    if (transactions[idx].id === transactionID) {
      if (transactions[idx].movement === 'in') {
        quantity += transactions[idx].quantity;
      } else {
        quantity -= transactions[idx].quantity;
      }
    }
  }

  return quantity > 0;
};


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
