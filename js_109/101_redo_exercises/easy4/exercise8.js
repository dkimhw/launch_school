
/*


Write a function that takes a string consisting of zero or more space separated words, and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.


Understand the Problem

* Input: String of words
* Output:
  - Object/Dict
  - key: word size
  - value: frequency of the word size
* Words are separated by single space
* Non-alphabet characters are part of the word size so "seven." is actually word size of 6.

Test Cases:

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}


Algorithm:

Step 1: Separate the string into words.

Step 2: For every word, calculate the length of the word.

Step 3: For every word: If the key doesn't exist, add to the object, add to the object and set value = 1. Increment the value of the key if key matches the length of the word. 


*/

let wordSizes = (str) => {
  let wordSizeCounter = {};

  if (str === '') {
    return wordSizeCounter;
  }

  let words = str.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let key = words[i].length;

    if (wordSizeCounter.hasOwnProperty(key)) {
      wordSizeCounter[key] += 1;
    } else {
      wordSizeCounter[key] = 1;
    }
  }

  return wordSizeCounter;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
