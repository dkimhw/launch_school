function isUppercase(str) {
    return str.toUpperCase() === str;
}

function isLowercase(str) {
    return str.toLowerCase() === str;
}

function swapCase(str) {
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i += 1) {
        if (isUppercase(str[i])) {
            strArr[i] = str[i].toLowerCase();
        } else if (isLowercase(str[i])) {
            strArr[i] = str[i].toUpperCase();
        }
    }

    return strArr.join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"


function swapCaseAlt(str) {
    return str.split("").map(char => {
        if (/[a-z]/.test(char)) {
            return char.toUpperCase();
        } else if (/[A-Z]/.test(char)) {
            return char.toLowerCase();
        } else {
            return char;
        }
    }).join('');
}


console.log(swapCaseAlt('CamelCase'));              // "cAMELcASE"
console.log(swapCaseAlt('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
