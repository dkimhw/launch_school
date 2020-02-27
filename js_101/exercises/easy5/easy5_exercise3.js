
/*

Inputs: Array
Outputs: Array that contains two element - both arrays
Other Considerations
-- How to handle empty arrays? Create two empty arrays
-- Validation of inputs? Not necessary
-- What about odd length arrays? Place middle element in the first half array

Example Case:

halvsies([1, 2, 3, 4]); => [[1, 2], [3, 4]]

*/

const halvsies = (arr) => {
    let arrLength = arr.length;
    let arrHalf = Math.floor(arr.length / 2);
    let newArr = [];
    if (arrLength % 2 === 0) {
        firstHalf = arr.slice(0, arrHalf);
        secondHalf = arr.slice(arrHalf);
        newArr.push(firstHalf, secondHalf);
    } else {
        firstHalf = arr.slice(0, arrHalf + 1);
        secondHalf = arr.slice(arrHalf + 1);
        newArr.push(firstHalf, secondHalf);        
    }

    console.log(newArr);
}


// Test Cases:
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]


/*
function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

By using ceiling it cust the if statement out - I get it now. 
Also interesting that you can do a return statement like that
*/