
### Debugging


#### Temperament

* You need patience and logical mind
* If you are walking to the bus stop and the bus leaves right before you get there - what is your reaction?
    * Someone who has the programmer temperament should figure out:
        1. When the next one comes?
        2. Or if there is an alternative path of transfers?
        3. Or other alternatives of transportation
    * If your reaction is a sinking feeling and frustration - you need to learn to deal with that

#### Reading Error Msg

* It's crucial to learn to read the stack trace. The trick here is to train your eye to look for the relevant parts of the stack trace, and over time, you will be able to spot the error faster and faster.
* Every language and library has a specific pattern to their stack trace. The more you work with a language or library, the easier it becomes to understand the trace. Study it carefully whenever errors pop up.

#### Online Resources

1. Search Engine
    * You can search for the error
    * Use the entire error message minus your program specific keywords or phrases
    * Preface it with JavaScript so that you get relevant results
2. Stack Overflow
    * Has answers to common problems
3. Documentation
    * Consult MDN documentation

#### Steps to Debugging

1. Reproduce the Error

The first step in debugging is reproducing the problem. Programmers need a deterministic way to reproduce the problem consistently, and only then can they start to isolate the root cause. Reproducing the exact error is often more than half the battle in many tricky situations.

2. Determine the Boundaries of the Error

Then the next step is to modify the data or code to get an idea of the scope of the error an ddetermine the boundaries of the problem. This approach leads to a deeper understanding of the problem, and help us implement a better solution. 

Most problems can be solved in many ways - a deeper understanding of the problem leads to more holistic solutions.

3. Trace the Code

Once you understand the boundaries, it's time to trace the code. 

Example:

```javascript
function car(newCar) {
  let make = getMake(newCar);
  let model = getModel(newCar);
  return [make, model];
}

function getMake(newCar) {
  return newCar.split(' ')[0];
}

function getModel(newCar) {
  return newCar.split(' ')[2];
}

let [make, model] = car('Ford Mustang');
console.log(make === 'Ford');   // => true
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined
```

* This code is an example of array destructing (`let [make, model] = car('Ford Mustang');`). When an array gets assigned to two or more variables wrapped in opening and closing brackets, the first element gets assigned to the first variable, the second element gets assigned to the second variable, and so on.
* The first step is to reproduce the problem:

```javascript
[make, model] = car('Mitsubishi Mirage');
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined

[make, model] = car('Chevy Malibu');
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined

[make, model] = car('Toyota Corolla');
console.log(model[0] === 'M');  // => TypeError: Cannot read property '0' of undefined
```

* Once it can be reproduced consistently. You can see the boundaries. It's consistently failing no matter if it is correct or false. It also seems to be `undefined` in every case.
* Now trace the code:

When you call car, a string gets passed in as an argument. The string represented by the local variable newCar gets passed to the two helper functions, getMake and getModel. Inside each helper, we try to split newCar into two new strings: 'Ford' and 'Mustang'. The getMake function should return Ford and getModel function should return Mustang. In this case, getMake returns the correct value, but getModel does not; in fact, it returns undefined. Based on these observations, we know that the bug in this code originates in the **getModel** function. Identifying the area where an error originates is called trapping the error.

4. Understand the Problem Well

After we narrow the source of the bug to `getModel` - it's time to analyze the code. The issue we can see is due to array index. Since the array only has two elements, its largest index is 1. 

```javascript
function getModel(newCar) {
  return newCar.split(' ')[1]; // => "Mustang"
}
```

5. Implement a Fix

Sometimes depending on whether you can fix the underlying code (maybe you are using a library that you cannot modify) - the best you can do might be to make it fail gracefully:

```javascript
try {
  return model[0] === 'M';
} catch {
  return false;
}
```

Try to fix one problem at a time. If you don't do that you can end up introducing more complexity.

6. Test the Fix

QA the code to make sure it works.


#### Techniques for Debugging

1. Line by Line

Your best debugging tool is your patience, which is why we mentioned temperament first in this article. Most bugs in your code come from overlooking a detail, rather than a complete misunderstanding of a concept. Being careful, patient and developing a habit of reading code line-by-line, word-by-word, character-by-character is your most useful programming skill. 

2. Rubber Duck

The process centers around using some object, like a rubber duck, as a sounding board when faced with a hard problem. The idea is that when you explain the problem to a rubber duck, you force yourself to articulate the problem, detail by detail. That often leads to discovering the root of the problem. 

3. Inspecting with a Debugger

Pretty awkward tool apparently. Easier to strategically add console.log

4. Walking away from the problem (doing something different)