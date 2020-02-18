
function isOdd(num) {
  // ternary operator that uses moduluo operator to check whether it is evenly divided or not
  return (num % 2 !== 0 ? true : false);
}

for (let i = 0; i <= 99; i += 1) {
  if (isOdd(i)) {
    console.log(i);
  }
}
