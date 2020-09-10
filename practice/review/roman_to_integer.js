/*

Learning Lessions:

1. I didn't pay attention to the test cases and I went completely the wrong way
2. I didn't flesh out the algorithms enough and having to make too many changes on the fly.
3. I didn't methodically go through control flow

*/



/*

PEDA:

Understand the Problem (P):

1. Input: String Roman Numeral
2. Output: Integer equivalent of roman numeral
3. Important definitions:

Symbols:
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Key logic:

I can be placed before V (5) and X (10) to make 4 and 9. So if you need a 4 - it's not IIII but IV
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Test Cases / Examples (E):

console.log( romanToInt("III") ); // 3
console.log( romanToInt("IV") ); // 4
console.log( romanToInt("IX") ); // 9
console.log( romanToInt("LVIII") ); // 58
console.log( romanToInt("MCMXCIV") ); // 1994


Data Structures (D):

1. hashmap for the symbols to value
3. Array of strings

Algorithms

1. Create hashmap for the symbols (Symbol : Integer Value)
2. Turn "romanNumeral" to Array - save it to "romanNumeralArr"
3. Create variable called "int"
4. Loop through romanNumeralArr
  * For each iteration, check the next value
    * If the current value is I and next value is V and X then (do the same for X & C)
    * Subtract I - V 
    * Add that to "int"
    * Advance index++ 
  * Else:
    * Add to int matching value from hashmap

I can be placed before V (5) and X (10) to make 4 and 9. So if you need a 4 - it's not IIII but IV
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/

function romanToInt(romanNumeral) {
    const symbolToValue = {
      'I' : 1,
      'V' : 5,
      'X' : 10,
      'L' : 50,
      'C' : 100,
      'D' : 500,
      'M' : 1000
    } 
    const numeralsToCheck = {
        'I': ['V', 'X'],
        'X': ['L', 'C'], 
        'C': ['D', 'M']
    };

    let romanNumeralArr = romanNumeral.split('');
    let int = 0;
    for (let index = 0; index < romanNumeralArr.length; index++) {
      let currRomanNumeral = romanNumeralArr[index];
      if (numeralsToCheck.hasOwnProperty(currRomanNumeral)) {
        let nextRomanNumeral = romanNumeralArr[index + 1];
        
        if (currRomanNumeral === 'I' && numeralsToCheck['I'].includes(nextRomanNumeral)) {
          int += symbolToValue[nextRomanNumeral] - 1;
          index++;
        } else if (currRomanNumeral === 'X' && numeralsToCheck['X'].includes(nextRomanNumeral)) {
          int += symbolToValue[nextRomanNumeral] - 10;
          index++;
        } else if (currRomanNumeral === 'C' && numeralsToCheck['C'].includes(nextRomanNumeral)) {
          int += symbolToValue[nextRomanNumeral] - 100;
          index++;
        } else {
          int += symbolToValue[currRomanNumeral];
        }
      } else {
        int += symbolToValue[currRomanNumeral];
      }

    }

    return int;
}

// console.log( romanToInt("III") ); // 3
// console.log( romanToInt("IV") ); // 4
// console.log( romanToInt("IX") ); // 9

console.log( romanToInt("LVIII") ); // 58
console.log( romanToInt("MCMXCIV") ); // 1994

