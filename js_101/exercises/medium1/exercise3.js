

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
}