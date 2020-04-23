

/*

Understand the problem

Input:
Three numbers - lengths of the three sides of a triangle (float and integer)

Output:
Returns one of the following: equilateral, isosceles, scalene, invalid

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
Invalid: sum of the two sides must be greater than one side; all sides > 0

Data Structure:
Numbers

Algorithms:
1. Check for invalid
2. Check for equilateral
3. Check for isosceles
4. Check for scalene


The hard part was making sure invalid logic was solid
*/

function triangle(side1, side2, side3) {
    let validTriangle = (side1 > 0 && side2 > 0 && side3 > 0) && ((side1 + side2) > side3 && (side1 + side3) > side2
    && (side2 + side3) > side1);

    if (validTriangle) {
        if (side1 === side2 && side2 === side3) {
            return 'equilateral';
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            return 'isosceles'
        } else {
            return 'scalene'
        }
    } else {
        return 'invalid';
    }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"