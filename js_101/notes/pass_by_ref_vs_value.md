
## Pass by Reference vs Pass by Value

With any new language, you need to understand how that language handles function arguments.

There are two main ways: pass by reference and pass by value.

### What does Pass by Value mean?

The concept of "pass by value". It means that when you pass a variable to a function call, the variable is not affected after the function gets executed no matter what the function does with it. In other words, the function gets a copy of what the variable holds, not the variable itself.

Think back to C right. Whenever `main()` calls a subroutine - it creates a copy of the arguments passed to a function. It never modifies the variables that were defined in `main()`.

This can lead you to believe that JavaScript is pass by value since re-assigning a parameter within a function doesn't affect variable outside the function.

Example:

```javascript
function changeName(name) {
  name = 'bob';      // does this reassignment change the variable outside the function?
}

function anotherFunction() {
  let name = 'jim';
  changeName(name);
  console.log(name);  // logs 'jim'
}

anotherFunction(); // jim
```

* The code above has two different `name` variables. One is in the scope of the `changeName` function while the other is in `anotherFunction`'s scope. These names don't shadow each other since the `name` variable in `anotherFunction` is not accessible to the `changeName` function.
* The big question here is - when `name` from `anotherFunction` is passed to `changeName`, are we passing it by reference or by value? Here it looks like we may be passing by value since re-assigning the variable does not affect the variable inside `anotherFunction`. Had the `name` variable in `anotherFunction` changed, we would say that JavaScript is pass by reference. Does that mean that JavaScript is pass by value?


### What does Pass by Reference mean?

If JavaScript were purely pass by value, there wouldn't be any way for the function to change the original object. However, you can easily do that in JavaScript:

```javascript
function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ['chris', 'kevin', 'naveed'];
capitalize(names);
console.log(names); // => ['Chris', 'Kevin', 'Naveed']

```

However, again, not all operations affect the original object. If we modify the above function a little - we get:

```javascript
function capitalize(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1));
}

let names = ['chris', 'kevin', 'naveed'];
capitalize(names); // returns ['Chris', 'Kevin', 'Naveed']
console.log(names); // => ['chris', 'kevin', 'naveed']
```

The passed in object is unchanged and looks like we are back in pass by value world again.

### What JavaScript does

1. When you pass primitive values to functions - you can treat JavaScript like pass by value. No operation performed on a primitive value can permanently alter the value. In other words, when you pass a primitive value to a function, no matter what that function does with that value, you will not be able to see the effects by inspecting the variable that you passed to the function