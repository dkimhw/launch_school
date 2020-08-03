

const SUITS = ['H', 'S', 'D', 'C'];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

let prompt = (msg) => {
  console.log(`=> ${msg}`);
};

let subPrompt = (msg) => {
  console.log(`    ${msg}`);
};

let initializeDeck = () => {
  let deck = [];

  CARD_VALUES.forEach(val => {
    SUITS.forEach(suit => {
      let card = {};
      card[val] = suit;

      deck.push(card);
    });
  });

  return deck;
};

let shuffle = (array) => {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
};

let userGameInput = () => {
  let validInputs = ['hit', 'stay'];

  // validate user input
  while (true) {
    let readline = require('readline-sync');
    let userInput = readline.question();

    if (validInputs.includes(userInput)) {
      return userInput;
    } else {
      prompt("Not a valid input - please choose from 'hit' or 'stay'.");
    }
  }
};

let dealCards = (deck, numOfCards) => {
  let cardsArr = [];

  for (let num = 0; num < numOfCards; num++) {
    let cardToAdd = deck.shift();
    cardsArr.push(cardToAdd);
  }

  return cardsArr;
};

let joinOr = (arr, delimiter = ', ', word = 'or') => {
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
};

// Need to modify for objects
let total = (hand) => {
  let values = hand.map(card => Object.keys(card)[0]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for aces
  values.filter(value => value === "A").forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
};

let isBust = (hand) => {
  return total(hand) > 21;
};

// Make it more comprehensive
let recommendationToPlayer = (playerHand) => {
  if (total(playerHand) >= 16) {
    return 'stay';
  } else {
    return 'hit';
  }
};

let displayCurrentHand = (hand, currentPlayer) => {
  let displayCardsArr = [];

  if (currentPlayer === 'player') {
    hand.forEach(el => {
      displayCardsArr.push(Object.keys(el)[0]);
    });

    prompt(`You have: ${joinOr(displayCardsArr, ", ", "and")}`);
    subPrompt(`The toal value of your card is: ${total(hand)}`);
    subPrompt(`Our recommendation to the player is: ${recommendationToPlayer(hand)}`);
  } else if (currentPlayer === 'dealer') {
    for (let index = 0; index < hand.length; index++) {
      if (index === 1) {
        continue;
      } else {
        displayCardsArr.push(Object.keys(hand[index])[0]);
      }
    }

    prompt(`Dealer has: ${joinOr(displayCardsArr, ", ", "and")} and one unknown card.`);
  }
};

let hit = (deck, hand) => {
  hand.push(dealCards(deck, 1)[0]);
};

let displayfinalResult = (playerFinalScore, dealerFinalScore) => {
  // This should be a function
  console.log(`===============================`);

  if (playerFinalScore > dealerFinalScore) {
    prompt(`Player wins! Player's score: ${playerFinalScore}; Dealer's score: ${dealerFinalScore}.`);
  } else if (playerFinalScore === dealerFinalScore) {
    prompt(`It's a tie! Player's score: ${playerFinalScore}; Dealer's score: ${dealerFinalScore}.`);
  } else {
    prompt(`Dealer wins! Player's score: ${playerFinalScore}; Dealer's score: ${dealerFinalScore}.`);
  }
};

let playerTurn = (deck, playerHand, dealerHand) => {
  while (true) {
    displayCurrentHand(playerHand, 'player');
    displayCurrentHand(dealerHand, 'dealer');

    prompt("Choose either to 'hit' or 'stay'\n");
    let userInput = userGameInput();

    if (userInput === "stay" || isBust(playerHand)) {
      break;
    } else if (userInput === "hit") {
      hit(deck, playerHand);
      prompt(`Player drew ${Object.keys(playerHand[playerHand.length - 1])[0]} - total is now: ${total(playerHand)}`);

      if (isBust(playerHand)) break;
    }
  }

  if (isBust(playerHand)) {
    console.log(`===============================`);
    prompt("Dealer wins the game! Sorry - You busted.\n");

  } else {
    prompt("You chose to stay.\n");
  }
};

let dealerTurn = (deck, dealerHand) => {
  while (true) {
    let dealerHandTotal = total(dealerHand);

    if (dealerHandTotal < 17) {
      hit(deck, dealerHand);
      prompt(`Computer drew ${Object.keys(dealerHand[dealerHand.length - 1])[0]} - total is now: ${total(dealerHand)}.`);

      if (isBust(dealerHand)) break;
    } else if (dealerHandTotal >= 17) {
      break;
    }
  }

  if (isBust(dealerHand)) {
    console.log(`===============================`);
    prompt("Player wins the game! Dealer Busted.");

  } else {
    prompt("Dealer has decided to stay.\n");
  }
};

let startOneRoundOfGame = (deck) => {
  console.log(`\n===============================`);
  console.log(`Welcome to a game of twenty-one!`);
  console.log(`===============================\n`);

  let playerHand = dealCards(deck, 2);
  let dealerHand = dealCards(deck, 2);

  playerTurn(deck, playerHand, dealerHand);

  if (isBust(playerHand)) {
    return;
  } else {
    dealerTurn(deck, dealerHand);
  }

  if (isBust(dealerHand)) {
    return;
  } else {
    let playerFinalScore = total(playerHand);
    let dealerFinalScore = total(dealerHand);
    displayfinalResult(playerFinalScore, dealerFinalScore);
  }
};

let playAgain = () => {
  let validInputs = ['y', 'n'];

  console.log(`\n===============================`);
  prompt(`Do you want to play again? (y or n)`);

  while (true) {
    let readline = require('readline-sync');
    let answer = readline.question();

    if (validInputs.includes(answer)) {
      return answer.toLowerCase()[0] === 'y';
    } else {
      prompt(`Please enter in a valid input (y or n)`);
    }
  }
};

let startGame = () => {
  while (true) {
    let deck = initializeDeck();

    shuffle(deck);
    startOneRoundOfGame(deck);

    if (playAgain()) {
      continue;
    } else {
      break;
    }
  }
};


startGame();