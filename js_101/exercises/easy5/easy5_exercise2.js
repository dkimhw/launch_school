
/*

Input: Two arrays
Output: One array containing unique elements from both arrays
Test cases:

union([1, 3, 5], [3, 6, 9]);  =>  [1, 3, 5, 6, 9] 
*/

function union(arr1, arr2) {
    for (i = 0; i < arr2.length; i += 1) {
        if (!arr1.includes(arr2[i])) {
            arr1.push(arr2[i]);
        }
    }

    return arr1;
}




console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])