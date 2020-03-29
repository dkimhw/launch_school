

function rotateRightmostDigits(num, rotateNum) {
    numberArr = String(num).split('');
    len = numberArr.length;
    indexToRotate = len - rotateNum;
    numToRotate = numberArr[indexToRotate];
    delete numberArr[indexToRotate] ; // remove the element that we need to place at the end
    
    return Number(numberArr.concat(numToRotate).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917