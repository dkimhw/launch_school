## PEDAC



### Understand the Problem (P)

1. Establish the rules / requirements - you must first assess all available information.
   1. Restate Explicit requirements
      1. Clearly stated requirements in the problem descriptions
   2. Implicit requirements
      1. Not stated but can be implied through our test cases & problem analysis
2. Spend enough time here - do not rush this step.



#### Example

Given a string - produce a new string with every other word removed

* Explicit requirements:
  * Input: string
  * Output: new string
  * Remove every other word from input string
* Questions:
  * What do we mean by every other word? All odd indexed or even indexed words?
  * How do we define what "word" is in this context? Are words delimited by spaces



#### Summing Even Number Rows Example

Summing even number rows:

* Imagine a sequence of consecutive even integers starting with 2.
* The integers are group in rows, with first row containing one integer, the second row two integers, the third row three integers, and so on.
* Given an integer representing the number of a particular row - return an integer representing the sum of all the integers in that row.



Understand this problem:

* Explicit Requirements
  * Sequence of even integers
  * Sequence begins with two
  * Integers are consecutive
  * Sequence is grouped into rows
  * Each row is incrementally larger
  * Row number equals the number of elements in the row
    * Row 1 has 1 element
    * Row 2 has 2 elements and so on
  * Input: a single integer
    * Identifies a 'row' which is a subset of a sequence of integers
  * Output: a single integer
    * The sum of the integers in the row identified by the input integer
* Understand it visually for tough problems like this for clarity
  * Squence:
    * 2, 4, 6, 8, 10, 12, 14, 16, 18, ...
      * 1st row: 2
      * 2nd row: 4, 6
      * 3rd row: 8, 10, 12
      * 4th row: 14, 16, 18, 20
  * If the input is 3 for example, you need to sum up the 3rd row



The big question is how do we not create this sequence row structure. We can't hardcode this so we need to create this structure as we need it based on the input number. 



### Examples and Test Cases

1. Can confirm or refute assumptions
2. They can help answer questions about implicit requirements
3. Act as assertions which help to codify the rules and boundaries



Row number: 1 --> sum of integers in row: 2

Row number: 2 --> sum of integers in row: 10

Row number: 4 --> sum of integers in row: 68

2 --> 2

4, 6 --> 10

14, 16, 18, 20 --> 68





### Data Structures

1. Help reason with data logically 
2. Help interact with data at implementation level
3. Thinking in terms of data structures is part of problem solving
4. Data structures are closely related to algorithms
   1. Set of steps from input to output
   2. Involves structuring data in a certain way
5. Data structures determine efficency of your code



**Back to our example:**

* Overall structure representing sequence as a whole
* Individual rows within overall structure
* Individual rows in a set order in context of sequence
* Individual rows contain integers
* Can assume that integers are in a set order in the context of the sequence



Nested arrays

[

​	[2],

​	[4, 6],

​	[8, 10, 12],

​	...

]



### Algorithms

* Logical sequence of steps for accomplishing a task or objective
  * Closely linked to data structures
  * Series of steps to structure data to produce the requirements
* Stay abstract/high-level
  * Avoid implementation detail
  * Don't worry too much about efficiency for now



**Example:**

1. Create an empty 'rows' array to contain all of the rows
2. **Create a 'row' array and add it to the overall 'rows' array**
3. Repeat step 2 until all the necessary rows have been created
   1. How do we know all the necessary rows have been created
   2. If the length of the "row" array is equal to the input integer that has been passed
4. Next, sum the final row
5. Return the sum



We know that steps 2 & 3 are the most complicated part of this algorithm. We can either create substeps under 2 or create a "mini" problem for step 2 and solve it in isolation of the entire problem.



**Mini Problem - create a row requirements**  

1. Rules:
   1. Row is an array
   2. Arrays contain even consecutive integers
   3. Integers in each row form part of an overall larger sequence
   4. Rows are of different lengths 
   5. Input: the information needed to create the output
      1. The starting integer
      2. Length of the row
   6. Output: the row itself: `[4, 6]`
2. Examples:
   1. start: 2, length: 1 --> [2]
   2. start: 4, length: 2 --> [4, 6]
   3. start: 8, length: 3 --> [8, 10, 12]
3. Data structures:
   1. An array of integers
4. Algorithm:
   1. Create an empty array to contain the integers
   2. Add the starting integer to the empty array
   3. Increment the starting integery by 2 and add it to the array in step 1
   4. Repeat step 3 until the array has reached the correct length
   5. Return the array



### Implementing a Solution in Code

**Approach:**

* Translating solution algorithm to code
* Think about algorithm in context of the programming language we are using
  * Language features / constraints
  * Characteristics of data structure
  * Built-in functions / methods available for use
  * Syntax / coding patterns
* We also need to create test cases
* All of this will allow us to code with intent

