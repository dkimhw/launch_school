/*

1. Create an empty 'rows' array to contain all of the rows
  * Creation of row done through createRow()
2. **Create a 'row' array and add it to the overall 'rows' array**
3. Repeat step 2 until all the necessary rows have been created
   1. How do we know all the necessary rows have been created
   2. If the length of the "rows" array is equal to the input integer that has been passed
4. Next, sum the final row
5. Return the sum

Feel free to step out of the coding to reorganize the algorithm steps

*/
function sumEvenNumberRow(rowNumber) {
  const rows = []; // step 1
  let currentRow = 1;
  let currentInteger = 2;

  // step 2 & 3
  while (rows.length < rowNumber) {
    let row = createRow(currentInteger, currentRow);
    rows.push(row);

    currentRow++;
    currentInteger = row[row.length - 1] + 2;
  }

  // step 4 & 5
  return rows[rowNumber - 1].reduce( (acc, el) => acc + el, 0);
}


/*
1. Create an empty array to contain the integers
2. Add the starting integer to the empty array
3. Increment the starting integery by 2 and add it to the array in step 1
4. Repeat step 3 until the array has reached the correct length
5. Return the array
*/

// Start the loop
// - Add start integer to the row array
// - Increment the start integer by 2
// - Break out of the loop if length of the row array equals rowLength
//    - because it is an "event" while loop is better
function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;
  // steps 2-4
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }

  return row;
}

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

console.log(createRow(2, 1)); // [2]
console.log(createRow(4, 2)); // [4, 6]
console.log(createRow(8, 3)); // [8, 10, 12]
console.log(createRow(14, 4)); // [8, 10, 12]

