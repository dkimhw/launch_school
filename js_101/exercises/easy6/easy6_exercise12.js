


function isBalanced(str) {
    // get only paranthesis to work with
    let paran = str.replace(/[^(\(\))]+/gi, '');
    let paranArr = paran.split('');

    // Now what is the logic to check pairs?
    // (( = ))
    // ( ( ) ( ) )
    // ( - first
    // ( - second
    // ) - third (pair 1 achieved)
    // like a counter?
    // count "(" and count ")" and subt but ordering matters
    // as long as "(" count is not less than ")" in any point of the loop right?

    let countLeftParan = 0;
    let countRightParan = 0;
    for (let i = 0; i < paranArr.length; i += 1) {
        if (countLeftParan < countRightParan) {
            // logic to check that pairing has not been broken
            // if so return false  
            return false;
        } else if (paranArr[i] === "(") {
            countLeftParan += 1;
        } else if (paranArr[i] === ")") {
            countRightParan += 1;
        }
    }

    if (countLeftParan !== countRightParan) {
        return false;
    } else {
        return true;
    }
}

// Test Cases:
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


/*

Alternate method:

function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};
*/