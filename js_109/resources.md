
## Resources

### Dedication

Take it seriously:

*  To do that, I spent **4 hours per day** of studying and waking up at 7AM to practice with a regular student and attended weekly 109 study groups held by Elizabeth (advanced student) or Dalton(TA). **I rewrote notes, practiced explaining code with words and articulating code out loud.** I also did some practice on Codewars (7 kyu- 6 kyu) as a supplemental exercises before taking the test.



Written Test Notes

* 20 questions (3 hours) - you need to pace yourself - track your time
  * Have two timers
  * 3 hour time
  * One that loops 8 minutes
* Over prepare - not easy
  * It requires detailed and precise language
  * Precisely explain why the code does what it does - what does it output. What does it do on this line?
    * You don't have to explain all of the lines of code
    * Just the relevant lines
* Examples
* Common mistakes 
  * Generally the problem is with the precision of language (no pseudocode)
* Practice #1:
  * What does this output? What does it return?
    * `[[1, 2], [3, 4]]`
    * [undefined, undefined]
    * Returns a new array 
  * What data structure is it?
    * Nested array
    * Uses map function
      * Calls a callback function for each element from the array
* Practice #2:
  * What does this code return and why?
    * Returns a new array: [undefined, bear]
      * `map` returns the same length of the array
    * For every element the call back function checks if the string's length is greater than 3
      * Where does the callback function come in?
        * You pass the element to the call back function (if (elem.length > 3)) {return elem;}
    * The callback function only returns string's length that is greater than element
    * `undefined` gets returned because nothing was returned - returns the `elem`
  * Accepts the callback function as an argument
    * Transforms the element based on the callback function
    * **Look this up**
  * Got to be more detailed.

* Practice #3 with `filter`
  * **Not based on return valule - based on whether the callback function evaluates to true**
    * Really really look up what filter does
    * Really understand what it's doing
  * Accepts a callback function as an argument
* Practice #4 
  * You cannot know what the code will print until line 11
    * It will not log anything unless you call it
    * You have analyze where the function is called
      * `undefined` - absence of value
  * The order in which you explain the code matters
  * It's variable scope
    * Global variable scope
    * `animal` in function -  is a parameter - local variable of the function `speak()`
    * `animal` === undefined because no arguments were passed
  * Variable shadowing
    * You need to explain why `animal` in line 1 is not the same as `animal` in line 3 & 4
    * Why is `animal` as a parameter `undefined` - we didn't pass in any value
    * You don't need to explain the `else` part

* Practice #5
  * We initalize the variable `greeting` with "Hello"
  * Order matters in explaning
    * Line #1 we initialize `greeting`
    * Until you invoke the function you don't have to explain anything. Pass in undefined the whole thing fails 
    * So start from line 9
      * You don't need to explain any of this
        * We invoke `test` and pass in variable `greeting`
        * We don't save the `.concat` - it does not mutate (can't mutate primitives)
        * We don't save it anywhere
        * We return the lowercase
    * In line 10
      * greeting will stay "Hello"
      * You don't save save the returned string anywhere so the greeting is still "Hello"
      * It doesn't mutate because it's a primitive (cannot be mutated)
      * It remains unchanged
  * A lot of people make this mistake
    * We are calling `concat` method on `str` but we are not mutating `str` as strings are primitive values.
      * We are calling `concat` method on the string assigned to `str` variable but we are not mutating that string as strings are primitive values
    * We cannot call methods on variables but on Objects. We are calling methods on the values that are assigned to the variables.
* Practice #6
  * Start with initalize variable
  * Start at line #8 test(greeting)
    * We pass in greeting to test
    * arr now references greeting
      * with objects - Javascript is pass by reference
    * Variables cannot point to other variables
      * It points to the same object that `greeting` is pointed to `["Hello"]`
    * **We reassign the Object which `greeting` and `arr` were pointing to with `arr.concat("World!")`** - reword this
      * `arr` , we are reassigning with a new object `arr.concat("World!")`
      * .concat is a non-mutating method





Interview Notes

* Two problems (40 to 50 minutes)
  * Live with interviewer
  * You are writing pseudocode and using pedac process
    * It helps to formulate your thoughts
    * Highly encourage to do lite PEDAC so that you can do better
  * Not all requirements are explicit - you have to ask the questions
    * Ask question for the interviewer - clarify
    * Some requirements are implicit - you need to have clear test cases to make sure you are solving for the right problem
  * **Talk out loud while coding**
    * **You have to communicate your thoughts**
  * Meet other students to practice
* Be comfortable solving medium difficulty problems
  * This is because you are anxious and you don't do your best when you are relaxed
  * The problems are going to be easier than medium difficulty problems but again it's harder in an interview setting
* Go to codewars
  * Be comfortable with solving 5, 6, 7 kyu
* Practice, practice, practice
  * Practice on codewars while talking out loud
  * Practice pair coding







### Links

* [https://medium.com/launch-school/preparing-for-my-first-launch-school-assessment-d0ea9aa69208]
* How to Prepare [https://medium.com/launch-school/passing-launch-schools-first-assessments-rb109-4b2b047060dc]
* Study Habits: [https://medium.com/launch-school/a-beginners-guide-to-surviving-launch-school-101-c706553252cc]
* Tactics: [https://medium.com/launch-school/knowing-is-not-enough-you-need-tactics-too-how-to-be-prepared-for-launch-school-written-3f7b9c9cb08e]
* JS 109 Tactics: [https://medium.com/launch-school/my-complete-study-guide-for-the-javascript-109-written-interview-assessment-9d95e0340da1]



### Books

* https://launchschool.com/books/javascript - will be good to review to make sure if there are concepts covered there that I didn't cover and important to the written test
* 



### Tools

* Good markdown tool (more visually pleasing): [https://typora.io/]



### Confirm Format

* Are you going to be actually writing code in written assessment on are you explaining code in precise language?



### Content of the Written Exam

- assignments and comparison
  - Initial Draft Done (need follow-up)
- variable scope, especially how variables interact with function definitions and blocks
  - Initial Draft Done (refinement needed)
- primitive values, types and type conversions
  - Initial Draft Done (need follow-up)
  - I am not sure how much type conversions we need to know - worth reading through the JS101
- how passing an argument into a function may or may not permanently change the value that a variable contains or points to
  - Initial Draft Done (need follow-up)
- working with Strings, Arrays, and Objects. In particular, you should be thoroughly familiar with the basic Array iteration methods (`forEach`, `map`, `filter`, and `find`) and how to use Object methods to access the keys and values in an Object as an Array.
  - Initial Draft Done (refinement needed)
- understand that arrays are objects, and be able to determine whether you have an Array
  - Initial Draft Done (refinement needed)
- understand the concepts of *pass-by-reference* and *pass-by-value*
  - Initial Draft Done (need follow-up)
- [variables as pointers](https://launchschool.com/books/javascript/read/more_stuff#variablesaspointers)
  - Initial Draft Done (need follow-up)
- [console.log vs return](https://launchschool.com/books/javascript/read/basics#expressionsandreturnvalues)
  - Initial Draft Done (need refinement)
- truthiness: `false` and `true` vs. falsy and truthy
  - Initial Draft Done (need follow-up) - dig into more resources online
- function definition and function invocation
  - Initial Draft Done
  - Definitely needs follow-up
- function declarations, function expressions, and arrow functions
  - Initial Draft Done
  - Definitely needs follow-up
- implicit return value of function invocations
  - Initial Draft Done (need refinement)
- **first-class functions**
  - https://medium.com/predict/javascript-functions-vs-methods-and-other-helpful-tips-e58a621b1d27
- **[side-effects and pure functions](https://launchschool.com/books/javascript/read/functions#sideeffects)**
  - Initial Draft Done (quick review)
- **naming conventions (legal vs idiomatic)**



### Written Exam Plan

1. Focus on 1 to 2 hours every day. Show up everyday to study and do consistent, quality work in every day. Even on days you do not necessary want to
2. Attend Study Groups **(Completed)**
   1. Really understand what will be on the exam
   2. The format
   3. The level of depth you need to understand
   4. Ask for tips preparing
3. Centralize the Notes **(Completed)**
   1. Create an initial set of centralized notes that you can refer to when studying for the written exam
   2. Review that notes cover all the major topics
   3. Will also serve as a reference when you take the exam
4. Initial Start
   1. Build Starter Examples
      1. Review the quizzes
      2. Review the exercises in JS101
   2. Practice on codewars
   3. Review notes
5. Refine the Notes
   1. Before I can refine - I need to start practicing and reading the notes and seeing if the notes are good enough
   2. Go through each lesson and read through areas where I am not familar and we need to add
      1. Really synthesize the different concepts into a succinct description of the different topics listed there
   3. Add to areas where I am weak
6. Go through each lesson and read through areas where I am not familar or I need to add
7. On Repeat
   1. Practice CodeWars
      1. Precise language
   2. Practice Examples
      1. Precise language
   3. Review Notes









---


