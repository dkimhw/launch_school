


function integerToString(num) {
  let numArray = [];

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    numArray.push(remainder);
  } while (num > 0)

  return numArray.reverse().join('');
}

function signedIntegerToString(num) {
  if (Math.sign(num) === -1) {
    num = -num;
    return "-" + integerToString(num);
  } else if (Math.sign(num) === 1) {
    return "+" + integerToString(num);
  } else {
    return integerToString(num);
  }
}

console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
