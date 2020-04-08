

function rotateRightmostDigits(num, rotateNum) {
    numberArr = String(num).split('');
    len = numberArr.length;
    indexToRotate = len - rotateNum;
    numToRotate = numberArr[indexToRotate];
    delete numberArr[indexToRotate] ; // remove the element that we need to place at the end
    
    return Number(numberArr.concat(numToRotate).join(''));
}

function maxRotation(num) {
    let digits = String(num).length;
    for (let i = digits; i >= 2; i--) {
        num = rotateRightmostDigits(num, i);
    }

    return num;
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845