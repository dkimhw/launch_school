
/*

Understand the Problem:

Input:
- integer, array of objects

Output:
- array of objects
- Only include the objects where the transaction id (integer) matches

Example:
console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

Algorithm:

Step 1: Loop through the array of objects starting from index 0 (`i`)

Step 2: For each index `i`, check if the id matches the input id,
if so add the object to `inventoryItems`

Step 3: Return `inventoryItems`


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

let transactionsFor = (transactionID, transactions) => {
  let inventoryItems = [];
  for (let idx = 0; idx < transactions.length; idx += 1) {
    if (transactionID === transactions[idx].id) {
      inventoryItems.push(transactions[idx]);
    }
  }

  return inventoryItems;
};

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
