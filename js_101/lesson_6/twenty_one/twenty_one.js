const SUITS = ['H', 'S', 'D', 'C'];
const CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const MAX_VALUE = 21;
const DEALER_MIN_VALUE = 17;
const BEST_OF = 5;

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
      card['suit'] = suit;
      card['value'] = val;

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
  let validInputs = ['hit', 'stay', 'h', 's'];
  prompt("Choose either to 'hit' or 'stay'\n");

  while (true) {
    let readline = require('readline-sync');
    let userInput = readline.question().toLowerCase();

    if (validInputs.includes(userInput)) {
      return userInput[0]; // take the first char only
    } else {
      prompt("Not a valid input - please choose from 'hit' or 'h' or 'stay' or 's'.");
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

let correctForAce = (hand, currentSum) => {
  let finalScore = currentSum;

  hand.filter(value => value === "A").forEach(_ => {
    if (finalScore > MAX_VALUE) finalScore -= 10;
  });

  return finalScore;
};

let total = (hand) => {
  let values = hand.map(card => card.value);

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

  return correctForAce(values, sum);
};

let isBust = (total) => {
  return total > MAX_VALUE;
};

let recommendationToPlayer = (total) => {
  if (total >= 16) {
    return 'stay';
  } else {
    return 'hit';
  }
};

let displayDealerHand = (hand) => {
  let displayCardsArr = [];

  for (let index = 0; index < hand.length; index++) {
    if (index === 1) {
      continue;
    } else {
      displayCardsArr.push(hand[index].value + hand[index].suit);
    }
  }

  prompt(`Dealer has: ${joinOr(displayCardsArr, ", ", "and")} and one unknown card.`);
};

let displayPlayerHand = (hand, total) => {
  let displayCardsArr = [];

  hand.forEach(el => {
    displayCardsArr.push(el.value + el.suit);
  });

  prompt(`You have: ${joinOr(displayCardsArr, ", ", "and")}`);
  subPrompt(`The toal value of your card is: ${total}`);
  subPrompt(`Our recommendation to the player is: ${recommendationToPlayer(total)}`);
};

let hit = (deck, hand) => {
  hand.push(dealCards(deck, 1)[0]);
};

let detectWinner = (playerFinalScore, dealerFinalScore) => {
  if (playerFinalScore > dealerFinalScore) {
    return 'Player';
  } else if (dealerFinalScore > playerFinalScore) {
    return 'Dealer';
  }

  return null;
};

let displayFinalResult = (playerFinalScore, dealerFinalScore) => {
  console.log(`\n===============================`);

  let winner = detectWinner(playerFinalScore, dealerFinalScore);
  if (winner === 'Player') {
    prompt(`Player wins! Player's hand: ${playerFinalScore}; Dealer's hand: ${dealerFinalScore}.`);
  } else if (winner === null) {
    prompt(`It's a tie! Player's hand: ${playerFinalScore}; Dealer's hand: ${dealerFinalScore}.`);
  } else {
    prompt(`Dealer wins! Player's hand: ${playerFinalScore}; Dealer's hand: ${dealerFinalScore}.`);
  }
};

let displayBust = (total, currentPlayer) => {
  if (currentPlayer === 'Player') {
    if (isBust(total)) {
      console.log(`\n===============================`);
      prompt("Dealer wins the game! Sorry - You busted.");
    } else {
      prompt("You chose to stay.\n");
    }
  } else if (currentPlayer === 'Dealer') {
    if (isBust(total)) {
      console.log(`\n===============================`);
      prompt("Player wins the game! Dealer Busted.");
    } else {
      prompt("Dealer has decided to stay.\n");
    }
  }
};

let displayDrawCard = (hand, currentPlayer, total) => {
  prompt(`${currentPlayer} drew ${hand[hand.length - 1].value + hand[hand.length - 1].suit} - total is now: ${total}`);
};

let isHit = (answer) => {
  return answer === 'h';
}

let playerTurn = (deck, playerHand, dealerHand, playerTotal) => {
  while (true) {
    displayPlayerHand(playerHand, playerTotal);
    if (isBust(playerTotal)) break;

    let userInput = userGameInput();
    if (isHit(userInput)) {
      hit(deck, playerHand);
      playerTotal = total(playerHand);

      displayDrawCard(playerHand, 'Player', playerTotal);
      if (isBust(playerTotal)) displayBust(playerTotal, 'Player');
      break;
    } else {
      break;
    }
  }
};

let dealerTurn = (deck, dealerHand, dealerTotal) => {
  while (true) {
    if (isBust(dealerTotal)) displayBust(dealerTotal, 'Dealer');

    if (dealerTotal < DEALER_MIN_VALUE) {
      hit(deck, dealerHand);
      dealerTotal = total(dealerHand); // update the total - new card added
      displayDrawCard(dealerHand, 'Dealer', dealerTotal);
    } else if (dealerTotal >= DEALER_MIN_VALUE) {
      break;
    }
  }
};

let displayWelcome = () => {
  console.log(`\n===============================`);
  console.log(`Welcome to a game of twenty-one!`);
  console.log(`You will play a best of ${BEST_OF} with the dealer`);
  console.log(`===============================\n`);
};

let initializeScore = () => {
  return {
    Dealer: 0,
    Player: 0
  };
};

let updateScore = (score, winner) => {
  if (winner) score[winner] += 1;
};

let startOneRoundOfGame = (deck, score) => {
  let playerHand = dealCards(deck, 2);
  let dealerHand = dealCards(deck, 2);

  let playerTotal = total(playerHand);
  let dealerTotal = total(dealerHand);

  displayDealerHand(dealerHand); // To see what the dealer has during player turn
  playerTurn(deck, playerHand, dealerHand, playerTotal);
  playerTotal = total(playerHand); // Update again before checking for bust

  if (isBust(playerTotal)) {
    updateScore(score, 'Dealer');
    return;
  } 

  dealerTurn(deck, dealerHand, dealerTotal);
  dealerTotal = total(dealerHand); // Update again before checking for bust

  if (isBust(dealerTotal)) {
    updateScore(score, 'Player');
  } else {
    displayFinalResult(playerTotal, dealerTotal);
    updateScore(score, detectWinner(playerTotal, dealerTotal));
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

let detectGameWinner = (score) => {
  if (score["Player"] === BEST_OF) {
    return 'Player';
  } else if (score["Dealer"] === BEST_OF) {
    return 'Dealer';
  }

  return null;
};

let displayGameWinner = (winner) => {
  console.log(`\n===============================`);
  prompt(`${winner} won the best of ${BEST_OF}`);
};

let displayScore = (score) => {
  Object.keys(score).forEach(el => {
    subPrompt(`${el}'s score is: ${score[el]}`);
  });

  if (detectGameWinner(score)) {
    console.log();
  } else {
    prompt(`Next round starts!\n`);
  }
};

let startGame = () => {
  let score = initializeScore();
  displayWelcome();

  while (true) {
    let deck = initializeDeck();

    shuffle(deck);
    startOneRoundOfGame(deck, score);
    displayScore(score);

    let roundWinner = detectGameWinner(score);
    if (roundWinner) {
      displayGameWinner(roundWinner);

      if (playAgain()) {
        console.clear();
        continue;
      } else {
        break;
      }
    }
  }
};


startGame();