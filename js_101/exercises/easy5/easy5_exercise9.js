

/*

Input: number of occurrences of each element in a given array. 
Output: print each element with the number of occurrences - case sensitive

*/

function countOccurrences(arr) {
    let count = {}
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] in count) {
            count[arr[i]] += 1;
        } else {
            count[arr[i]] = 1;
        }
    }

    for (let key in count) {
        console.log(`${key} => ${count[key]}`);
    }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/*
// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/