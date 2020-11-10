

/*

Understand the problem:

* Input: Array of string - only includes lowercase letters
* Output: Array of characters 
  * The array of characters contain chars that show up in all of the strings in the input array of strings
  * What does it mean by duplicates?
    * If a character occurs 3 times in all of the strings, you need to have three characters in the return array


Examples:

'ab' & 'bc'

So the character 'b' show up once in both strings

Algorithms:

Loop through the array of string
* Find all the characters that they share
* Create a set

Then loop through the list of shared characters

Maintain a hashmap

{'a': 1, 'b': 2, 'c': 1}

So any character with greater than 1 we can return but we also need to be careful with 
values like 3, this actually would mean we need to include two instances. 

Learning point: do more than one example (one easy and one more complex).

'aab' & 'bc'

{'a': 2, 'b': 2, 'c': 1}




Tests:

console.log( commonChars(['a', 'b']) ); // []
console.log( commonChars(['ab', 'bc']) ); // ['b']
console.log( commonChars(['aabb', 'bbc']) ); // ['b', 'b']
console.log( commonChars(['bella', 'label', 'roller']) ); // ['e', 'l', 'l']
console.log( commonChars(['cool', 'lock', 'cook']) ); // ['c', 'o']
console.log( commonChars(['hello', 'goodbye', 'booya', 'random']) ); // ['o']
console.log( commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']) ); // [']


*/

const commonChars = (strArr) => {
  // You didn't need a set
  // Just use the characters in the first string
  let uniqueChars = [...new Set(strArr.join(''))];
  let chars = [];
  let output = [];

  for (let i = 0; i < uniqueChars.length; i += 1) {
    let charInAllStr = strArr.every(str => str.includes(uniqueChars[i]));
    if(charInAllStr) {
      chars.push(uniqueChars[i]);
    }
  }

  // Identify the number of instances that these shared characters show up
  for (let i = 0; i < chars.length; i += 1) {
    let numInstances = [];
    let minInstance = 0;

    for (let j = 0; j < strArr.length; j += 1) {
      let count = 0;

      for (let y = 0; y < strArr[j].length; y += 1) {
        if (chars[i] === strArr[j][y]) {
          count += 1;
        }
      }

      numInstances.push(count);
    }
    
    minInstance = Math.min(...numInstances);
    for (let k = 0; k < minInstance; k += 1) {
      output.push(chars[i]);
    }
  }

  return output;
}

console.log( commonChars(['a', 'b']) ); // []
console.log( commonChars(['ab', 'bc']) ); // ['b']
console.log( commonChars(['aabb', 'bbc']) ); // ['b', 'b']
console.log( commonChars(['bella', 'label', 'roller']) ); // ['e', 'l', 'l']
console.log( commonChars(['cool', 'lock', 'cook']) ); // ['c', 'o']
console.log( commonChars(['hello', 'goodbye', 'booya', 'random']) ); // ['o']
console.log( commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']) ); // []



/* Second Solution Attemp */
// Try by commonBetweenTwoWords & commonChars