

## Understand the Problem

### Inputs
    * String with number words like "one", "two", "three"

### Outputs
    * Returns the string but replaces all the number words with actual words
    * So: "five" replaced with "5"

### Example
    * Input: 'Please call me at five five five one two three four. Thanks.'
    * Output: "Please call me at 5 5 5 1 2 3 4. Thanks."

### Data Structure
    * Array
    * Mapping or function that can replace "zero" for 0

### Algorithms
    * Split the input string to array
    * Loop through each and check against the map whether it's a number word
    * If it is then replace it with number

