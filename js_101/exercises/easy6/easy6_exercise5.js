

function negative(int) {
    return (int >= 0 ? -int : int);
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0


/*

Using Math.abs:

function negative(number) {
  return Math.abs(number) * -1;
}

*/