# Resources



## Structure

* Two small coding problems
* ~45 minutes; no warm up time - come prepared to code right away



## What is Covered?

* Working with simple data structures like arrays and objects
* Manipulating arrays and objects. For example, an exercise might be "reverse an array without using the built-in `Arrays.prototype.reverse` method" or "select the element out of the array if its index is a Fibonacci number," or "write a function to determine if a word is a palindrome, without using the `Arrays.prototype.reverse` method."
  * Gotta build up the muscles again 



## Communication

* You are going to be assessed on your ability to communicate clearly. You should speak in a clear tone and explain concepts with precision using the correct vocabulary.
* **If you have not done this before, you should practice before the interview**
  * Many students find it helpful to practice by recording themselves solving exercises and verbalizing their thoughts using QuickTime or another recording tool.



## Expectations

* Overprepare because in an interview setting you will not be at your peak coding skills so practice, practice, practice
* Treat this like your first job interview
* No JavaScript documentations can be used



## Other Tips

* https://medium.com/launch-school/preparing-for-the-js109-interview-assessment-870a12ede9ea
  * Use light-pedac - break down the problem
  * Test stuff out: It's one thing to know how to use a specific method when you are relaxed and practicing for fun at home. It can be quite different getting it to work. If you can't remember how `splice` works then test it in the console
  * When things are not working or you encounter unexpected results, don't hack and slash. Go back to the original algorithm and review it. In most cases, the unexpected results will point out some flaw in your logic
  * For preparation:
    * Using intentionally vague prompts like: "Make a string into a different version of itself". The answer to this prompt isn't strictly defined and requires brainstorming on the general things you can do when transforming a string.
    * What worked well for me when using these more general prompts was to invent several problems on the spot to convince myself that I knew a lot about transforming strings, which I could then solve using the mini-PEDAC process. For example:
      - Swap the capitalization of every “nth” letter of a string
      - Shift all the vowels in a string N letters later in the alphabet
      - Remove all non-letter characters from a string
      - Reverse a string using only the `reduce` method
  * Attend study sessions, set up 1-on-1 coding sessions with your peers to practice live coding
    * The goal is to first get used to talking, thinking, and typing at the same time.
  * Have a rough script to follow
    * Break the problem down and document the algorithm using the mini-PEDAC process
    * Write the code for your algorithm, testing extensively along the way
    * Circle back around to the algorithm and revise it until your solution works the way it needs to
  * While going through this process, get used to saying things like:
    - “I’m going to start by breaking this problem down into its inputs and outputs.”
    - “Just thinking at a high level, to solve this problem I would ….”
    - “Before I use this method, let me test it out and see if it works the way I think it does.”
    - “That isn’t the result I expected, let’s go back and review the algorithm to see if we need to make any changes there first before revising the code.”
* Solve codewars - should be able to do difficult 6-kyu
* https://medium.com/launch-school/my-complete-study-guide-for-the-javascript-109-written-interview-assessment-9d95e0340da1
  * Test your solution regularly as you solve the problem. 
  * ***Try listing different possible solution options to the problem.\*** Don’t write out the steps to the solution right away. Just write down the approach you’ll take with each option. Explain it in plain English. Example: “Use a for loop and an object to get the count of each occurrence”.
    - Maybe the first solution that comes to your mind is a “brute force” type of solution that takes a while to solve and uses basic methods. Write it down so you can think about other options.
    - Don’t just jump right into the first solution/option that comes to your mind and start coding. Give yourself 1–2 minutes to think about other ways you can solve the problem that’s cleaner and faster. It’ll save you time in the long run.
    - Think (and speak out loud) about the pros and cons of using each solution option. And choose the option that you’re most comfortable with.



## How Should I Review?

* Watch Others Code Videos:
  * Part 1: 
    * https://ls-general-public.s3.amazonaws.com/watch_others_code_js/watch_others_code_final_js_1.mp4
      * Next Bigger Num - I made this more complicated than necessary. Should have opted for simpler solution even if it was more brute force
        * Watch the video again. Really helpful
        * This is the level of problems I will see so I really have to practice hard
  * Part 2:
    * https://ls-general-public.s3.amazonaws.com/watch_others_code_js/watch_others_code_2_js.mp4
      * repeatedSubstringPattern is really, really hard
        * I misunderstood the problem - that led me to a really wrong answer - stupid - need to be careful
        * I also didn't fully understand the logic behind this problem. It was only after I sat down and really thought about the problem
        * **Critical to understand the test cases fully before tackling the problem - this will be the part where I will most likely have the biggest issue** 
      * Wow - these problems are really humbling. I am really realizing that I don't have a good grasp of problem solving as I really thought. Need to keep practicing.
  * Part 3:
    * https://ls-general-public.s3.amazonaws.com/watch_others_code_js/watch_others_code_js_3.mp4
      * Review them again
  * Part 4:
    * https://ls-general-public.s3.amazonaws.com/watch_others_code_js/watch_others_code_js_4.mp4 
* **JS 101 Small Problems**
  * Finish the rest of the problems
    * You should be able to solve medium problems easily
    * Medium problems are no jokes so you need to practice and study a lot
  * Review from the start using PEDA
  * Exercises to keep an eye on:
    * Easy 1
      * Exercise 9
    * Easy 2
      * Exercise 7 - good to review the operator logic
      * Exercie 9
      * Exercise 10
        * Using helper functions to simplify
      * Exercise 11
        * Math.floor()
        * do while
        * Manipulation of digits using modulo
      * Exercise 12
        * Math.sign()
        * Using helper functions
    * Easy 3
      * Exercise 4
        * Fibonacci Function using do while
        * BigInt
      * Exercise 7
        * Comparing the two strings on left and right
      * Exercise 9
        * The use of clever if statements and logic (it pays to walk through problems to see if there are easier logical ways to solve this)
      * Exercise 10
        * Century problem - manipulating integers using modulo
    * Easy 4
      * Exercise 9
    * Easy 5
      * **Exercise 1**
      * Exercise 4 (Cool ways to use objects, use sort, use `find` )
      * Exercise 5
        * `toFixed`
        * Example of using reduce
      * **Exercise 11**
      * **Exercise 12**
* **Review PEDAC**
  * Make sure to review this concept again because you need to deconstruct the problem thoroughly before you can start coding
  * Don't do full PEDAC. Light PEDA. Under the algorithms, list out couple options before creating more detailed options.
    * Problem
      * Inputs, Outputs, Edge cases, specific rules that must be followed
    * Examples
    * Data structures
    * Algo
  * https://launchschool.com/lessons/60e10aa5/assignments/d70a34e0
* **Watch Others Code Web Series Again**
* **Practice on codewars and leetcode daily (in tandem with codewars)**
  * Practice coding aloud and explaining the concepts
* Attend study group
  * Live coding in front of TA and other students. Allows you to simulate the interview assessment.
* Cycle
  * Review JS 101 Problems
  * Practice on codewars & leetcode daily
  * Review "Watch Others Code" again
  * Review problems that you struggled with
    * Mark them clearly what needs to be reviewed
  * Methods to Review (find all the methods we need)
    * Array
      * `reverse`
      * `forEach`
      * `every`
      * `some`
      * `reduce`
      * `find`
      * `findIndex`
      * `includes`
      * `indexOf`
        * What does this do?
      * `map`
      * `push`
      * `pop`
      * `shift`
      * `splice`
      * `fill`
      * `filter`
      * `concat`
      * `sort`
    * Strings
      * `concat`
      * `endsWith`
      * `includes`
      * `indexOf`
        * What does it do?
      * `charAt`
      * `repeat`
      * `replace`
      * `split`
    * Objects
      * `hasOwnProperty`
      * `Object.assign()`
      * `Object.entries()`
      * `Object.keys()`
      * `Object.values()`



