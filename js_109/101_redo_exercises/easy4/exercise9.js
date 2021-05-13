

/*

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.


PEDA

Problem:
- Input: String
- Output: 
  - Object/Dict
  - key: word size
  - value: frequency of the word size
* Words are separated by single space
* Non-alphabet characters are part of the word size so "seven." is actually word size of 6.
* This time we want to remove non-letters

Examples: 

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}

*/

let cleanWord = (str) => {
  return str.replace(/\W/gi, '')
}

console.log(cleanWord('seven.'));

let wordSizes = (str) => {
  let wordSizeCounter = {};

  if (str === '') {
    return wordSizeCounter;
  }

  let words = str.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    let cleanStr = cleanWord(words[i]);
    let key = cleanStr.length;

    if (wordSizeCounter.hasOwnProperty(key)) {
      wordSizeCounter[key] += 1;
    } else {
      wordSizeCounter[key] = 1;
    }
  }

  return wordSizeCounter;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
