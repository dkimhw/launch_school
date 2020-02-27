

/*

Letter Swap

Input: String of words separated by space (assume every word contains at least one word)
Output: Swaps the first and last letter

Considerations:
- no leading, trailing, or repeated spaces
- string contains nothing but words and spaces
- remember that string are immutable so you can't just replace it like this

*/

function swap(str) {
    let strArray = str.split(' ');
    let newArr = [];
    for (let i = 0; i < strArray.length; i += 1) {
        let word = strArray[i];
        let firstLetter = word.length === 1 ? "" : word[0];
        let secondLetter = word[word.length - 1];
        let body = word.slice(1, word.length - 1);
        let newWord = secondLetter + body + firstLetter;

        newArr.push(newWord);
    }

    console.log(newArr.join(" "));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"


/* 
Alternate Solution:

function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

*/