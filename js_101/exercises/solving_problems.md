
### Small Code Challenge Problems

* 20 - 45 minutes
* typical solutions: 10-40 LOC
* used extensively in interviews for a reason
  - mastery on a language
  - logic / reasoning
  - communications
    * Do you ask questions?
    * Do you explain your logic as you are writing?
    * How are you structuring your answer? Do you go to code straightaway?
* not a skill that you "acquire and file away", but needs a lot of practice
  * You need a lot of practice and work

### Understand the Problem

* **Don't code right away.**
* Spend the time to fully understand the problem
* Types of problems:
  * Requirements are explicit (you are given strict outline of what they are looking for). Some test cases are provided
    * Step 1: Take notes on specific requirements
    * Step 2: Take note of inputs
      * What is coming in? One to many words in a string
      * What is it separated by? Single spaces
      * What are the characters in the string?
      * Do we need to handle failure?
    * Step 3: Take notes on output
      * What should the output be? i.e. Odd words are reversed. Separated by space
    * Step 4: Think about examples and test cases
      * Why test cases?
        * Helps you understand the problems
        * Allows you to verify your solutions
      * 
  * Requirements are not explicit and need to be written down and thought about



Examples / Test Cases
  - Input / Output
  - Test cases serve two purposes:
    - help you understand the problem
    - allow you to verify your solution
  - happy paths
    - combination of requirements; the "obvious" result
  - Edge cases
    - focus on input
    - emptiness (nil/null, "", [], {})
    - boundary conditions
    - repetition / duplication
    - data types
  - Failures / Bad Input
    - raise exceptions / report errors
    - return a special value (nil/null, 0, "", [] etc)
  - ask questions to verify your understanding!

Data Structure
  - input data
  - rules/requirements as data
    - hash / object

  - string, array, hash/object, number
    - string
      - concact, strip, reverse, etc
      - Regular Expression! split, replace, match...
    - array
      - need to walk through it (iteration)
      - index
      - abstractions!!
        - map
        - reduce
        - select/filter
        - all
        - ...
    - hash/object
      - lookup table / dictionary
      - partition data for more efficient access downstream
      - digest
    - number
      - math operations
      - number as string may have advantage over numbers
  - compound data structures
    - array of arrays
    - hash with array/object values, etc

Algorithm
  - Algorithms have to be described in the language of chosen data structure!
    - "then solve it" doesn't count
  - Have to be really fluent with
    - String / Regex
    - Array
      - Ruby: Enumerable
      - JavaScript: Higher Order Functions
    - Hash / Object
      - Creation (default values)
      - Access (default values)
      - Iteration
  - verify your algorithm with your examples / test cases

Abstraction
  - Very important, rely on language built in abstractions: String/Regex, Array, Hash/Object
  - Avoid solving big problems!
    - Always, always, break bigger problems into smaller problems
    - Don't try to walk through a wall
  - lay out the general steps of an algorithm, without having to go to details
    - Try to solve a problem in 1-2 sentences!!!
    - If you can't, raise your abstraction
      - create helper methods/functions
      - push detailed steps to methods/functions

Interview Tips
  - Communicative
  - Getting to a working solution >> no solution
  - De-risking
    - Check your building blocks
      - run code often
      - debug locally
  - Manage your energy
