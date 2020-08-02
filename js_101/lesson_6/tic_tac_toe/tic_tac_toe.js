
/*

Step 1: Decompose the problem

1. Display initial empty 3x3 board
2. Ask the user to mark a square
3. Computer marks a square
4. Display the updated board state
5. If it's a winning board, display the winner
6. If the board is full, display tie
7. If neither player won and the board is not full, go to #2
8. Play again?
9. If yes, go to #1

Step 2:

Start from the high-level pseudocode from above instead of formal pseudocode. We want to be focused at higher-level.

Then you can start to write more detailed pseudo-code for each step.


Start Coding:

Part 1 (Display board):

You can see from step 1 that we will be displaying the board over and over throughout the game - a good candidate for a helper function.

Next is to figure out how to represent the backend data for the state of the board. JS object might be the best option since there are 9 squares.


Part 2 (Create new board):

We require a function now that will return an empty board - if user wants to play again we need a new board.

Part 3 (Player turn):

Use readline-sync to prompt user for input.


Part 4 (Handling bad player inputs):

As it stands: If the player enters something other than a number between 1 and 9, it adds an unnecessary key to the board object. However, it doesn't complain about the incorrect input.

It also does not account for: If a square has already been chosen, the function doesn't prevent the player from choosing that square again.

Part 5 (Addressing readability):

The ' ' doesn't really indicate that these mean "unused" squares. We cannot tell very quickly the meaning behind this empty space. 

To make your code more readable - use symbolic constants. Symbolic constants with well-chosen names remove the magical element and reveal the purpose of each value.

Part 6 (Computer turn):

We will let the computer choose a random square from among those that are available.

Part 7 (Loop Main Game):

The next step is to develop a loop that calls these functions repeatedly until the board is full or we have a winner.

We need to determine the condition under which are:
1. There are no more empty squares
2. We have a winner

Part 8 (Determine winner):

Need to write code that will determine the winner.

The rules of the game:

1. All three squares within any row are marked with the player's marker
2. All three squares within any column are marked with the player's marker
3. All three diagonal squares in either direction are marked with the player's marker

Part 9 (Keep Score):

There are couple flows for keeping track of scores:

1. Variable to hold user and computer scores
2. Update the score after determining winner for the appropriate winner in the variable from #1
3. Display the score to user

Part 10 (AI Defense):

Right now - the AI only chooses randomly.

We want to make it so that:

1. Address immediate threats - meaning if the player has two squares in a row with 3rd square unoccupied
    * If the player has more than 1 way to win - just pick a random one
2. If no immediate threat - pick random square

I think we can address it in couple ways:

We look through all winning lines that meet the condition above
* 2 of the spots are marked by the player and one of the spot is blank


### Specification: Allow user to choose who moves first - the user or computer

1. Prompt at the beginning of the game choice to user
2. The second thing here is that we need functionality in the back to take the answer given by the user and set the game to begin as that user

Valid options are: player, computer, choose

*/
const INITIAL_MARKER = ' '; // denotes unused square space in the game
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = '0';
const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7] // diagonals
]
const FIRST_MOVE = 'choose';

let readline = require('readline-sync');

function displayBoard(board) {
    console.clear();

    console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

    console.log('');
    console.log('     |     |');
    console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
    console.log('     |     |');
    console.log('');
}

function initializeBoard() {
    console.clear();
    console.log('');

    let board = {};

    for (let square = 1; square <= 9; square++) {
        board[String(square)] = INITIAL_MARKER;
    }

    return board;
}

function askFirstMover() {
    let firstMover;

    while (true) {
        prompt(`Please choose who will move first ${joinOr(['player', 'computer'])}`);
        firstMover = readline.question();

        if (firstMover === 'player' || firstMover === 'computer') {
            break;
        } 

        prompt(`Please enter a valid choice.`);
    }
    return firstMover;
}

function gameStart(board) {
    let firstMover;
    let currentPlayer;

    // control for choose
    if (FIRST_MOVE === 'choose') {
        firstMover = askFirstMover();
    } else {
        firstMover = FIRST_MOVE;
    }

    if (firstMover === 'player') {
        currentPlayer = 'player';
    } else {
        currentPlayer = 'computer';
    }

    while (true) {       
        prompt(`Player goes first.`);

        displayBoard(board);
        chooseSquare(board, currentPlayer);
        currentPlayer = alternatePlayer(currentPlayer);
        if (someoneWon(board) || boardFull(board)) break;

        /*
        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
        
        computerChoosesSquare(board);    
        if (someoneWon(board) || boardFull(board)) break;
        */
    }
}

function chooseSquare(board, currentPlayer) {
    if (currentPlayer === 'player') {
        playerChoosesSquare(board);
    } else {
        computerChoosesSquare(board);
    }
}

function alternatePlayer(currentPlayer) {
    if (currentPlayer  === 'player') {
        return 'computer';
    } else {
        return 'player';
    }
}

function prompt(msg) {
    console.log(`=> ${msg}`);
}

function emptySquares(board) {
    // Valid square choices are those `board` keys whose values are spaces
    // These are the squares that has not been chosen yet
    return Object.keys(board).filter(key => {
        return board[key] === INITIAL_MARKER;
    });
}

function playerChoosesSquare(board) {
    let square; // set here so we can access outside of the for loop

    // Loops until player enters a valid choice
    while (true) {
        // Shows to users which squares are available to choose
        prompt(`Choose a square ${joinOr(emptySquares(board))}:`);
        square = readline.question().trim();

        if (emptySquares(board).includes(square)) {
            break; // break if it's a valid square
        } else {
            prompt("Sorry, that is not a valid choice.");
        }
    }

    // Note that we don't need to convert the input to a number since the keys in JavaScript objects are always strings, and readline.question returns a string value.
    board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
    // offense
    let square = bestComputerMove(board, COMPUTER_MARKER);

    // offense
    if (!square) {
        square = bestComputerMove(board, HUMAN_MARKER); 
    }

    // pick 5 if available
    if (board['5'] === INITIAL_MARKER) square = '5';

    // random
    if (!square) {
        square = chooseRandomSquare(board);
    }

    board[square] = COMPUTER_MARKER;
}

function bestComputerMove(board, marker) {
    let square;
   
    for (let index = 0; index < WINNING_LINES.length; index++) {
        let line = WINNING_LINES[index];
        square = findAtRiskSquare(line, board, marker);
        if (square) {
            return square;
        }
    }
  
    return null;
}

function chooseRandomSquare(board) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    return emptySquares(board)[randomIndex];
}

function findAtRiskSquare(line, board, marker) {
    // Returns an array of values that the board object has for the numbers in the given line
    // If given [1, 2, 3] -> transforms to something like [' ', 'X', 'X']
    let markersInLine = line.map(square => board[square]);
    
    if (markersInLine.filter(val => val === marker).length === 2) {
        let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
        if (unusedSquare !== undefined) {
            return unusedSquare
        }
    }

    return null;
}

function boardFull(board) {
    // Remember that empty arrays have length of 0
    return emptySquares(board).length === 0;
}

// Returns a string (truthy value) or 
function detectWinner(board) {
    // Can't use forEach because forEach does not allow you to break from the loop using return
    for (let line = 0; line < WINNING_LINES.length; line++) {
        let [sq1, sq2, sq3] = WINNING_LINES[line];

        if (
            board[sq1] === HUMAN_MARKER &&
            board[sq2] === HUMAN_MARKER &&
            board[sq3] === HUMAN_MARKER
        ) {
            return 'Player';
        } else if (
            board[sq1] === COMPUTER_MARKER &&
            board[sq2] === COMPUTER_MARKER &&
            board[sq3] === COMPUTER_MARKER
        ) {
            return 'Computer';
        }
    }

    return null;
}

function someoneWon(board) {
    // We want to make it clear in our code that we are using the detectWinner function to return a boolean value
    // We want to be explicit. We can do an if/else statement but we can use two "!" operator.
    return !!detectWinner(board);

    // The !! operator converts truthy values like "abc" to "true" and converts a falsy value like "undefined" or "null" to "false"
}

function joinOr(arr, delimiter = ', ', word = 'or') {
    switch (arr.length) {
        case 0:
            return '';
        case 1:
            return `${arr[0]}`;
        case 2:
            return arr.join(` ${word} `);
        default:
            return arr.slice(0, arr.length - 1).join(delimiter) + `${delimiter}${word} ${arr[arr.length - 1]}`;
    }
}

/*
console.log(joinOr([1, 2]));
console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));
*/

function initializeScore() {
    return {
        'Player': 0,
        'Computer': 0
    }
}

function updateScore(score, winner) {
    score[winner] += 1;
}

function displayScore(score) {
    prompt(`Current match score is: \n Player: ${score['Player']} \n Computer: ${score['Computer']}`);
}

function playAgain() {
    let validAnswers = ['y', 'n'];

    while (true) {
        prompt('Play again? (y or n)');
        let answer = readline.question().toLowerCase();

        if (validAnswers.includes(answer)) {
            if (answer === 'y') {
                return true;
            } else {
                return false;
            }
        } else {
            prompt(`Please enter a valid input (y or n).`);
        }
    }
}



// Actual Gameplay //
let score = initializeScore();

while (true) {
    let board = initializeBoard();    

    /*
    while (true) {
        displayBoard(board);
    
        // Check winner after each turn
        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
    
    
        computerChoosesSquare(board);    
        if (someoneWon(board) || boardFull(board)) break;
    }
    */

    gameStart(board);
    displayBoard(board);

    let winner = detectWinner(board);
    if (someoneWon(board)) {
        prompt(`${winner} won!`);
        updateScore(score, winner);
    } else {
        prompt("It's a tie!");
    }

    displayScore(score);

    if (!playAgain()) {
        break;
    }
}

prompt('Thanks for playing Tic Tac Toe!');




