

/*

Understand the problem - bubble sort:

Pass through 1:
[5, 3]

5 > 3 --> so swap

Pass through 2:
[3, 5]

3 not greater than 5 --> so no swap - stop sort here


Input:
Array


Output:
Sorted array:


Data structures:
Array


Algorithm:
* Something to keep track of swaps on each walk through
* Helper function to help check two elements and swap
* Looping mechanism to keep looping until there is nothign to loop anymore

*/

// [5, 3]

function bubbleSort(arr) {
    // Initial algorithm
    // How to keep the loop going until swap is done
    while (true) {
        let swapCount = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let swapValue = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = swapValue;

                swapCount += 1;
            }
        }

        if (swapCount === 0) {
            break;
        }
    }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]