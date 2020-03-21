

function staggeredCase(str) {
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i += 1) {
        if (i % 2 === 0) {
            strArr[i] = strArr[i].toUpperCase();
        } else {
            strArr[i] = strArr[i].toLowerCase();
        }
    }

    return strArr.join('');
}

// Test case
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"



/*

`index` value provided by the `Array.prototype.map` method. 
*/

function staggeredCaseAlt(string) {
    return string
      .split("")
      .map((char, index) => {
        if (index % 2 === 0) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("");
  }