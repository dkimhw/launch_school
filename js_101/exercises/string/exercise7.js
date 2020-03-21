

function staggeredCase(str) {
    let strArr = str.split('');
    let trueIndex = 0; // only advances when an alphabet character is processed to be uppercased and lowercased
    for(let i = 0; i < strArr.length; i += 1) {
        let isAlphabet = /[a-z]/i.test(strArr[i]);
        if (isAlphabet) {
            if (trueIndex % 2 === 0) {
                strArr[i] = strArr[i].toUpperCase();
            } else if (trueIndex % 2 === 1)  {
                strArr[i] = strArr[i].toLowerCase();
            }      
            trueIndex += 1;
        }
    }

    return strArr.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

// Much smarter way than I did this
// We need a variable that will tell us when to lowercase or uppercase
// I came up with this idea of only advanced an index variable if it was character
// Not a bad solution but you can also think of it as a switch. On = uppercase; off = lowercase

function staggeredCaseAlt(str) {
    let needUpper = true; // the first alphabet gets uppercase first so the starting value is uppercase

    return str.split('').map(function(char) {
        if (/[a-z]/i.test(char)) {
            let newChar; // need to intialize a new variable
            // if we return immediately like return char.toUpperCase(); there is unreachable code

            if (needUpper) {
                newChar = char.toUpperCase();
            } else {
                newChar = char.toLowerCase();
            }

            // need to "flip" the switch back
            // if it was true we did an uppercase
            // now it needs to flip back so that the next alphabet gets lowercase
            needUpper = !needUpper;
            return newChar; // to make sure the above code runs first
        } else {
            return char
        }
    }).join('');
}

console.log("\n");

console.log(staggeredCaseAlt("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCaseAlt("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCaseAlt("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
