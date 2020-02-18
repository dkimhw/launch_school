
// Takes in msg and maxMsgLineWidth = the maximum number of characters allowed on each box line so that it can be wrapped to a new line
function logInBox(msg, maxMsgLineWidth) {
  let boxEdge = [];
  let boxSpace = [];

  for(let i = 0; i < msg.length + 4; i += 1) {
    if (i === 0 || i === msg.length + 3) {
      boxEdge.push("+");
      boxSpace.push("|");
    } else {
      boxEdge.push("-");
      boxSpace.push(" ");
    }
  }

  console.log(boxEdge.join(''));
  console.log(boxSpace.join(''));

  for(let i = 0; i < msg.length; i += maxMsgLineWidth) {
    let paddedMsg = '';
    if (msg.slice(i, i + maxMsgLineWidth).length < maxMsgLineWidth) {
      paddedMsg = msg.slice(i, i + maxMsgLineWidth) + " ".repeat(maxMsgLineWidth - msg.slice(i, i + maxMsgLineWidth).length);
    } else {
      paddedMsg = msg.slice(i, i + maxMsgLineWidth);
    }

    console.log(`| ${paddedMsg}` + " ".repeat(msg.length + 1 - maxMsgLineWidth) + "|");
  }
  console.log(boxSpace.join(''));
  console.log(boxEdge.join(''));
}

logInBox('To boldly go where no one has gone before.', 25);
logInBox('', 25);
