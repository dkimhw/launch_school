

/*

Input: two arrays (same length)
Output: Returns a new array that contains the product of each pair of numbers

*/


function multiplyList(arr1, arr2) {
    let newArr = [];
    for(let i = 0; i < arr1.length; i += 1) {
        newArrElement = arr1[i] * arr2[i];
        newArr.push(newArrElement);
    }

    return newArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
