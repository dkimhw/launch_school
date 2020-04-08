

## Understand the Problem

* Stack and register programming language
    * A register is not part of the stack. An operation that requires two values pops the topmost item from the stack 
    * Operate on the two values and store the results back in register

* Example:
    * Stack: `[3, 6, 4]` - `4` is the topmost item in the stack.
    * Register value: `7`.
    * `MUL` - the `4` is removed and multiplied with `7`. You get `28` in register. Another `MULT` will leave the stack: `[3]` and value `168`.

* Write a function that implements a miniature stack-and-register based programming language:
    * `n`: place a value, `n`, in the register. Do not modify the stack.
    * `PUSH`: push the register value onto the stack. Leave the value in the register.
    * `ADD`: Pop a value from the stack and add it to the register value, storing the result in the register.
    * `SUB`: Pop a value from the stack and subtract it from the register value, storing the result in the register.
    * `MULT`: Pop a value from the stack and multiply it by the register value, storing the result in the register.
    * `DIV` : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register valu

* Test Cases


* Data Structure

* Algorithms