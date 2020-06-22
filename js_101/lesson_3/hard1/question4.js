function isAnIpNumber(str) {
    if (!/^\d+$/.test(str)) return false;
  
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

function isDotSeparatedIpAddress(inputString) {
    let dotSeparatedWords = inputString.split(".");

    if (dotSeparatedWords.length !== 4) {
        return false;
    }

    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
  
    return true;
  }


// Test Cases
console.log("Expect true: " + isDotSeparatedIpAddress("10.4.5.11"));
console.log("Expect false: " + isDotSeparatedIpAddress("4.5.5"));
console.log("Expect false: " + isDotSeparatedIpAddress("10.4.dd.11"));