// arr with integers between 0 and 19
// an array of words mapped to their index
let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


function wordSort(num1, num2) {
    if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {

    }
}

function alphabeticNumberSort(numericArr) {

}


/*
sort method is a higher order function that can be passed a sorting function as a callback.

In this solution, the callback function passed to sort is the wordSort function.

To perform the word lookups, wordSort uses the NUMBER_WORDS array defined at the top level. The function performs the comparison by comparing the word equivalent of each number (num1 and num2) accessed through their indices
*/