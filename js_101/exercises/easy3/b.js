function isDoubleNumber(int) {
  // divide a number evenly
  let strNum = String(int);

  if (strNum.length % 2 === 0) {
    let midPoint = strNum.length / 2;
    let strNum1 = strNum.slice(0, midPoint);
    let strNum2 = strNum.slice(midPoint);

    if (strNum1 === strNum2) {
      console.log(true);
    }
  } else {
    console.log(false);
  }
}

isDoubleNumber(44);
isDoubleNumber(333);
