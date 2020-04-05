
## Small Code Challenge Problems

* 20 - 45 minutes
* Typical solutions: 10-40 LOC
* Used extensively in technical interviews for a reason (A senior programmer will be watching you as you work through the problem)
  - mastery on a language
  - logic / reasoning
    * How are you breaking down the problem
  - communications
    * Do you ask questions?
    * Do you explain your logic as you are writing?
    * How are you structuring your answer? Do you go to code straightaway?
* Not a skill that you "acquire and file away", but needs a lot of practice
  * You need a lot of practice and work - you need to keep working at solving problems

## Understand the Problem

* **Don't code right away.**
* Spend the time to fully understand the problem

If you don't do this you are more than likely to take the wrong direction in your program. It's also easy to miss out on one or two critical logic pieces.

Having a list of requirements also makes programming easier like having an outline for an essay makes it easy to start and write the essay

### Steps to Understand the Problem

Requirements are explicit (you are given strict outline of what they are looking for). Some test cases are provided.

**Worst thing you can do is to code straightaway without fully understanding the requirements and taking notes**

1. Take notes on specific requirements
  * Using examples provided to better understand the requirements
  * But you cannot only use the examples - you have to make sure to read through the requirements again to make sure the examples you have cover the entire requirements given to you
2. Take note of inputs
  * What is coming in? One to many words in a string
  * What is it separated by? Single spaces
  * What are the characters in the string?
  * Do we need to handle failure?
3. Take notes on output
  * What should the output be?
  * What are the requirements? i.e. Odd words are reversed. Separated by space. Terminated by a dot
4. Ask yourself if there are other edge cases / gotchas that need to be considered?
5. Think about examples and test cases
  * Why test cases?
    * Helps you understand the problems
    * Allows you to verify your solutions 


The more you communicate the better. The more you clarify the problem with the interviewer - the better.

#### Example - print diamond (requirements not so explicit)

Write a function that takes an integer number as input, and prints out a diamond with the "*" character whose width is the number n

Given n = 3:
 
 *
***
 *

Given n = 5:

  *
 ***
*****
 ***
  *


Understanding the problem

* Input: integer
  * What happens when the number is 0?
  * What happens when number is an even number? (Questions to ask interviewer)
* Output:
  * Returns a string with new line char "\n" delimeters
  * prints on the screen
* Model the problem:
  * Given an odd number n, for example, 5
  * Output n strings
    * 1, 3, 5, 3, 1
    * prepend number of spaces: 2, 1, 0, 1, 2
    * Join together with \n, or lopp and print
* Data Structures:
  * Number
* Algorithm:
  * From an odd number - 2a + 1
    * generate an array [1, 3, ... 2a+1, ..., 3, 1]
    * generate an array [a, a-1, ...., 1, 0, 1, a]
  * Loop through the two arrays at the same time.
    * For each iteration, print out x of number * prepended by y
    * y * " " + x * "*"

Test Cases:

score('a') => 1
score('cabbage') => 14
score('Cabbage') => 14

#### Example - Century

Write a function that takes an integer year as input and returns the century. The return values should be a string that begins with the century number, and ends with st, nd, rd, or th as appropriate for that number.

New centuries being in years that end with 01. So, the years 1901-2000 comprise the 20th century.


**Understanding the problem:**

* Input:
  * Integer number
  * Need to validate?
* Output:
  * String
  * Begins with the century number
  * Ends with st, nd, rd, or th
* Rules:
  * New centuries begin in years that end with 01
  * Century string number into a string:
    * 1: st
    * 2: nd
    * 3: rd
    * 4-20: th
    * 21: st
    * 22: nd
    * 23: rd
    * 24-30: th
  * Generalize:
    * Century number % 10
      * 1, 2, 3: st, nd, rd
      * 0, 4-9: th
    * except for 11, 12, 13: th
* Data Structures:
  * input: number
  * rules: as data or logic/code?
* Algorithms:
  * Century number = (year - 1) / 100
  * Century string = century number to string, then apply suffix rules


Examples / Test Cases:

century(1); // 1st
century(100); // 1st
century(133); // 2nd
century(1052); // 11th
century(1152); // 12th
century(1252); // 12th
century(2000); // 20th
century(2012); // 21st
century(22512); // 226th

#### Example - Score a word

Write a program that, given a word, copmutes the scrabble score for that word.

Letter Values

Letter

A, E, I, O, U, L, N, R, S, T  => 1
D, G                          => 2
B, C, M, P                    => 3
F, H, V, W, Y                 => 4
K                             => 5
J, X                          => 8
Q, Z                          => 10

Understanding the problem

* Input: string
  * lower case/upper case?
* Output: integer (scrabble score)
* Rule:
  * The score is the sum of scores of each letter in the string
  * The letter value table is used to look up letter scores
* Edgecases to test?
* Data Structures
  * Input - working in array probably the easiest since we need to loop through each character in the string
  * Hash/Object to create a mapping for letters and score
* Algorithms
  * Split the input into array of chars
  * Map to lower cased chars
  * Map each char into its scrabble score, referencing the look up table
  * Sum up the values or reduce with summing up the values (reduce function)

Now you can code up the function pretty quickly since you have a complete outline to reference from.

**Understanding the problem:**

#### How to Build Test Cases

Create test cases that can help your code be tested against the requirements.

Test cases serve two purposes:

1. Help you understand the problem
  * What are the inputs and outputs?
  * What is happy path? Combination of reqs and obvious results
  * What are the edge cases that you need to test against?
    * Emptiness?
    * Repetition / duplication
    * Data types
      * Can I expect only integers? Or do I need to account for this?
    * Upper case / lower case
    * Input validation?
  * Do we need to handle failures / bad inputs
    * Raise exceptions? Report errors
    * Return a special value on failure? Like `[]`
2. Allow you to verify your solution
3. Ask questions as you build out test cases and verify your understanding


## Data Structure, Algorithms

### Data Structures

1. After understanding the problem, you need to figure out the data structures you need to solve the problem
2. First look at what input data you are getting and how you should modifying it (or keeping it the same) based on the requirements that you gathered. Match the data structure that helps you solve the problem.
  * For example - choosing between string versus arrays:
    * Arrays have natural advantages - it can easily work with each characters through a variety of methods - iteration, map, reduce, filter
    * String have easy to use methods (concat, strip, reverse) for working with strings including regex
  * Other data structures to consider:
    * Hash / Object
      * When you need to lookup table / dictionary
      * Partition data for more efficient access downstream
      * Digest
    * Number
      * Math operations
      * Number as string may have advantage over numbers
3. Are there rules and requirements you need as data like mapping?
  * Most likely hash / object. Like the scrabble scoring problem.


#### Data Structures Example (word problem to number operations)

Write a program that takes a word problem and returns the answer as an integer.

What is 5 plus 13? => 18
What is 7 minus 5? => 2
What is 33 divided by -3? => -11
What is -3 multiplied by 25? => -75

Data Structures:

* Input: string (so we can use regexp)
* Rules:
  * plus: `+`
  * minus: `-`
  * multiplied by: `*`
  * divided by: `/`

Algorithms:

* Strip the string from anything else other than numbers and the key phrases
* Loop up key phrases
* apply arithmetic operations based on key phrases

### Algorithm
  * Algorithms have to be described in the language of chosen data structure! This is why the data structure is so important. The types of functions/methods that you can use varies
    * "then solve it" doesn't count
  * Have to be really fluent with
    * String / Regex (Regex is a must - practice with javascript)
    * Array
      * JavaScript: Higher Order Functions
      * Knowning major functions like: `map`, `filter`, `split`
      * These methods allow you to simplify the code you have to right
        * If you didn't know the `split` function you will have to say I will need to loop thorugh each character in the string which can take you longer.
    * Hash / Object
      * Creation (default values)
      * Access (default values)
      * Iteration
  * Verify your algorithm with your examples / test cases

### Abstraction
  * Very important, rely on language built in abstractions: String/Regex, Array, Hash/Object
  * Avoid solving big problems!
    * Always, always, break bigger problems into smaller problems
    * Don't try to walk through a wall - you want to step back and think about breaking the problem down piece by piece. One framework is to take the big logic break it and build out helper functions for these smaller logic pieces
  * Lay out the general steps of an algorithm, without having to go into details (not sure if I agree with this - I think understand the problem step is the right process to follow first)
    * Try to solve a problem in 1-2 sentences!!!
    * If you can't, raise your abstraction
      * Create helper methods/functions
      * Push detailed steps to methods/functions

Interview Tips
  * Communicative
  * Getting to a working solution >> no solution (there is no need to use fancy tricks). Keep it simple and get to a working solution even if it's not the most optimal problem
  * De-risking (the worst part is going in the wrong direction or not understanding the problem correctly and getting to a completely wrong solution)
    * Check your building blocks
      * Run code often --> as you break down the problem - you can test the individual helper functions
      * Debug locally
  * Manage your energy
    * Tackle the hardest part by understanding the problem and understanding the algorithm to write to solve that hard part
    * Then you can use the outline to code up quickly