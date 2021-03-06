
## Twenty-One

### Step 1: Decompose the problem

1. Initialize a standard 52-card deck
    * 4 suits (Hearts, Diamonds, Clubs, Spades)
    * 13 values (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)

2. Deal two cards to `dealer` and `player`

3. Player `always` goes first. They can choose two actions: `hit` or `stay`. 
    * `hit` means players will be dealt another card
        * If player's hand value exceeds -> player `busts` or loses
    * `stay` means that you will not be dealt another card - and turn moves to dealer
    * `player` is able to see one of the two cards dealer has 

4. Dealer follows a strict rule:
    * `hit` until total is at least 17
    * If the `dealer` busts then the player wins

5. If no one `busts` - and both `player` and `dealer` `stays` - compare the value of the cards to see who has the highest value.

**Specific Card Values:**

2-10 --> face value meaning 2 is worth 2
J, Q, K --> all 10 points
Ace --> depending on the hand composition can be 1 or 11


### Step 2: Choose Data Structure

Objects can be a decent choice.

```javascript
let x = [
    {'2': 'H'}, 
    {'4': 'J'}


x.map(val => Object.values(val)[0])]
```

Lets's run with that.


### Step 3: High level pseudocode

1. Initializing and shuffling a `deck`:

There are four suits - an array of string (constant)
There are 13 values - an array (constant)

Loop over the suits and add to initial deck for each of the thirteen values.

To shuffle a deck - use provided code:

```javascript
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}
```

2. Deal two cards to `player` and `dealer`

* Create a simple "start" console UI method to introduce the game
* Then the method should deal cards to two players
* Display the current two cards that player got
* Note that dealer's first card is face up (display to user) and the second card dealt is not shown the user

3. Player turn (player always goes first)
    * Implement a while loop for player
        * Create conditionals to control for user's actions
        * Validation for user inputs
    * Implement a function to calcualte total of a hand (to check for bust)

4. Dealer turn
    * Implement a strict dealer rule function
        * Contionusly calls the hit method until at least 17
    * Check for bust on each hit to see if dealer busted
        * If dealer busts -> player wins

5. Comparison
    * If no one busts, compare the values and declare winner

6. Improvement - call `total()` less
    * We can cache (memoization) each player's total in a local variable within the main loop and refer to those local variables instead
    * Specifically in my program that means adjusting:
        * `startOneRoundOfGame`
        * `playerTurn`
        * `dealerTurn`
        * `isBust`


### Feedback

1. From a user experience perspective, it would be better if the cards had suits (FIXED):
    * `4s` or `Qd` as examples

2. Another improvement (FIXED):
    * Inputs should be case insensitive ("HIT" should be valid as well)
    * You could also allow one letter responses as well

3. Data structure improvements (FIXED) - much, much better:
    * Take a look at this code: `Object.keys(card)[0]);`
        * It requires me to know `0` represents the value of the card
    * Better:
        * `{suit: 'hearts', value: '3'}`
        * `card.value` --> much easier to read and interpret

4. Instead of comment `correct` for `aces` - extract this logic into a separte function (FIXED)

5. Instead of having two: `displayPlayerHand` and `displayDealerHand` - you could have just one function `displayHand`

6. `playerTurn` does too many things:
    * `displayDealerHand` function call doesn't really belong in `playerTurn` logic - so you should remove it.

```javascript
function playerTurn(deck, hand, playerTotal) {
  while (true) {
    displayPlayerHand(hand, playerTotal);
    if (isBust(playerTotal)) break;
    let answer = getHitStayAnswer();
    if (isHit(answer)) {
      dealPlayerACard(deck, hand);
      playerTotal = total(hand);
      displayDrawnCard(hand);
      if (isBust(playerTotal)) {
        displayBust(playerTotal);
        break;
      }
    } else {
      break;
    }
  }
}
```