

function isDoubleNumber(int) {
  // divide a number evenly
  let strNum = String(int);

  if (strNum.length % 2 === 0) {
    let midPoint = strNum.length / 2;
    let strNum1 = strNum.slice(0, midPoint);
    let strNum2 = strNum.slice(midPoint);

    if (strNum1 === strNum2) {
      return true;
    }
  } else {
    return false;
  }
}


function twice(int) {
  if (isDoubleNumber(int)) {
    console.log(int);
  } else {
    console.log(int * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676


/*

Alternate Solution:

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

*/
