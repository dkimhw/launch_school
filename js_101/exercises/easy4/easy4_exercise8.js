/*

Letter counter

Input: String (multiple words, spaces, non-alphanumeric characters)
Output: Returns how many different words of different sizes are there

Considerations:
- Words consist of any sequence of non-space characters
- So What's --> 6 characters
- '' -> {}

Example: 
wordSizes('Four score and seven.');  => { "3": 1, "4": 1, "5": 1, "6": 1 }

*/

function wordSizes(str) {
    let strArray = str.split(' '); // words are non-space characters
    let strLengthArray = strArray.map(i => i.length);
    let wordDict = {};

    for ( let i = 0; i < strLengthArray.length; i += 1) {
        let dictKey = strLengthArray[i]
        // if there were no characters don't do anything and move forward with the loop
        if (dictKey === 0) {
            continue;
        } 
        else if (dictKey in wordDict) {
            wordDict[dictKey] += 1;
        } else {
            wordDict[dictKey] = 1;
        }

        /* 
            Alternate:
                if (!count[wordSize]) {
                count[wordSize] = 0;
                }
                count[wordSize] += 1;
        */
    }

    return wordDict;
} 


// Test Cases
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}