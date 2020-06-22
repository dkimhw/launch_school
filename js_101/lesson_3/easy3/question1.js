

let numbers = [1, 2, 3, 4];

// method 1
// numbers = [];

// method 2
// numbers.splice(0, numbers.length);

// method 3
// numbers.length = 0;

// method 4
while (numbers.length) {
    numbers.pop();
}

console.log(numbers);

