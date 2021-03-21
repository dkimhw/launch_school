
/*

Write a function that will take a short line of text, and write it to the console log within a box.


Understand the Problem:

* Input:
  - string - msg
* Output:
  - log to console the msg surround by a text box
  - returns undefined
* Is there wrapping? Yes for characters > 60

Test case:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+


Algorithm:

Part 1
* Create top and bottom part 
  * the beginning and end character +
  * print some amount of "-" characters to match the length of the characters
* Create the padding before the text
  * Beginning | + some amount of " " characters (+2) because space in front and back of message
* Message
  * Add | to front and back
  * Add " " to front and back after |

*/

/*
let logInBox = (msg) => {
  let msgLength = msg.length;

  let textMsg = `| ${msg} |`;
  let msgBoxTopBottom = '+' + '-'.repeat(msgLength + 2) + '+';
  let paddingTopBottom = '|' + ' '.repeat(msgLength + 2) + '|';

  console.log(msgBoxTopBottom);
  console.log(paddingTopBottom);
  console.log(textMsg);
  console.log(paddingTopBottom);
  console.log(msgBoxTopBottom);
}

logInBox('To boldly go where no one has gone before.');
*/

/*

As an improvement: Wrap messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript.


Algorithm:
1. Length of the msg
2. Divide length of msg by wrapLength - this will tell us how long the message will be


*/
let longMsg = 'To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before.'


let logInBoxWrap = (msg, wrapLength = 50) => {
  let msgLength = msg.length;
  let msgBoxTopBottom = '+' + '-'.repeat(wrapLength + 2) + '+';
  let paddingTopBottom = '|' + ' '.repeat(wrapLength + 2) + '|';

  console.log(msgBoxTopBottom);
  console.log(paddingTopBottom);

  for (let idx = 0; idx < msg.length; idx += wrapLength) {
    let newWrappedMsg = msg.substring(idx, idx + wrapLength);

    if (newWrappedMsg.length < wrapLength) {
      newWrappedMsg = newWrappedMsg + ' '.repeat(wrapLength - newWrappedMsg.length);
    }

    console.log(`| ${newWrappedMsg} |`);
  }

  console.log(paddingTopBottom);
  console.log(msgBoxTopBottom);
}

logInBoxWrap(longMsg, 100);
