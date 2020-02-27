

/*

Input: array of integers as input
Output: Multiples all the elements / number of elements

Output rounded to 3 decimal places
*/

function multiplicativeAverage(arr) {
    let avgMult = 1;
    arr.forEach(i => {
        avgMult *= i
    });

    return (avgMult / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"