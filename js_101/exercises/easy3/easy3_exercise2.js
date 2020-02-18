
// Input: string
// Output: console output boxed format (https://launchschool.com/exercises/09fda3fd)
// Assume the msg will fit on one line on the box
// five "lines" in the box

// Pseudo code
/*

for each i in str.legnth + 4:
  output "+" for first index
  output "-" for middle
  output "+" for last index

for each i in str.length + 4:
  output "|" for first and last index
  output " " for middle

print str with "| " in the beg and " |" at the end



*/

function logInBox(msg) {
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
  console.log(`| ${msg} |`);
  console.log(boxSpace.join(''));
  console.log(boxEdge.join(''));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');


/*
https://launchschool.com/exercises/09fda3fd

Alternate Answer (much better - using repeat)


function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

*/
