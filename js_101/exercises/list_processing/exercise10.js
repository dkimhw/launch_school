
// https://launchschool.com/exercises/fa70703d

function transactionsFor(orderID, transactionList) {
    return transactionList.filter(i => i['id'] === orderID);
}

function totalItemsInStock(transactionList) {
    let sum = 0;
    transactionList.forEach(i => {
        if (i.movement === 'in') {
            sum += i.quantity;
        } else {
            sum -= i.quantity;
        }
    });

    return sum;
}

function isItemAvailable(orderId, transactionList) {
    let filteredItemList = transactionsFor(orderId, transactionList);
    let totalStock = totalItemsInStock(filteredItemList);
    return (totalStock < 0 ? false : true );
}

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

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true


function isItemAvailableAlt(orderID, transactionList) {
    let totalStock = transactionsFor(orderID, transactionList).reduce(
        (sum, transaction) => {
            if (transaction.movement === 'in') {
                return sum + transaction.quantity;
            } else {
                return sum - transaction.quantity;
            }
        }, 0);
        // Initializes sum to 0 because if it were not it would be implicitly set to the first
        // element, which is an object { id: 101, movement: 'in', quantity: 5 }
    return totalStock > 0;
}


console.log(isItemAvailableAlt(101, transactions));     // false
console.log(isItemAvailableAlt(103, transactions));     // false
console.log(isItemAvailableAlt(105, transactions));     // true




/*

function isItemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === "in") {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    },
    0
  );
  return quantity > 0;
}
*/