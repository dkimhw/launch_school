
// Without Regex
function doubleConsonants(str) {
    // Create an array not allowed values to dobule
    let vowels = ['a', 'e', 'i', 'o', 'u', ' ', '-', '!', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
    let newStr = '';

    for (let i = 0; i < str.length; i += 1) {
        if (vowels.includes(str[i])) {
            newStr += str[i];
        } else {
            newStr += str[i].repeat(2);
        }
    }

    console.log(newStr);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

// Better solution

function doubleConsonants2(str) {
    // Create an array not allowed values to dobule
    let pattern1 = /[aeiou]/gi
    let pattern2 = /[\W\d]/gi
    let newStr = '';

    for (let i = 0; i < str.length; i += 1) {
        let ch = str[i];
        if (pattern1.test(ch) || pattern2.test(ch)) {
            newStr += ch;
        } else {
            newStr += ch.repeat(2);
        }
    }

    console.log(newStr);
}


doubleConsonants2('String');          // "SSttrrinngg"
doubleConsonants2('Hello-World!');    // "HHellllo-WWorrlldd!"
// Doesn't work here --> why?
doubleConsonants2('July 4th');        // "JJullyy 4tthh"
doubleConsonants2('');                // ""