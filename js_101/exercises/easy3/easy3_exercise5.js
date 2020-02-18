

function triangle(nRows) {
  for (let i = 1; i <= nRows; i += 1) {
    let row = '';
    row = ' '.repeat(nRows - i) + '*'.repeat(i);

    console.log(row);
  }
}

triangle(5);
triangle(9);
