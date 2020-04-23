


/*


Understand the problem

Input:
Integer

Output:
Next featured number greater than the given integer

Logic:
* Must be odd
* Must be divisible by 7
* Must not repeat digits

Other Logic to take care of:
* What to do if the passed in number is a featured number? Then show the next largest one
* If it's no longer possible --> "There is no possible number that fulfills those requirements"

Data structures:
Number & array 
* Number for odd and divisibility
* Array for check duplicate digits

Algorithm:
* Create a function that checks if a number is featured
* Loop until you find the next
* Set a maximum limit so that it doesn't loop forever

    let uniqueArray = x.filter((el, index) => {
        x.indexOf(el) === index
    });    


*/

function isUnique(num) {
    let digitArray = String(num).split('');
    let uniqueArray = digitArray.filter((el, index) =>
        digitArray.indexOf(el) === index
    );    

    return uniqueArray.length === digitArray.length;
}

function featured(num) {
    num++;
    while (num % 2 === 0 || num % 7 !== 0) {
        num++;
    }

    // Instead of looping one number at a time - loop by multiple of 14
    while (true) {
        if (num > 9876543201) {
            return "Ther is no possible number that fulfills those requirements";
        } else if (isUnique(num)) {
            return num;
        }

        num += 14;
    }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."