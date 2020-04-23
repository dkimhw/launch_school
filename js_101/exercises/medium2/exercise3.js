
/*

Understand the problem

Inputs:
Three angle degrees

Output:
Returns one of the following

right, actue, obtuse, or invalid

Logic:

invalid: all three angle has to be greater than 0; sum of all three angles > 180
right: one angle is exactly 90 degrees
actue: all three angles < 90 degrees
obtuse: one angle is > 90

Don't worry about floating point - integer values


Data structures:
integer

Algorithms:
identify if it is invalid
else if check if it's right, obtuse
else it is actue 

*/

const validTriangle = (angle1, angle2, angle3) => {
    let anglesGreaterThanZero = (angle1 > 0 && angle2 > 0 && angle3 > 0);
    let exactly180 = ((angle1 + angle2 + angle3) === 180);

    if (anglesGreaterThanZero && exactly180) {
        return 1;
    } else {
        return 0;
    }
}

const triangle = (angle1, angle2, angle3) => {
    if (validTriangle(angle1, angle2, angle3)) {
        if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
            return 'right';
        } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
            return 'obtuse';
        } else {
            return 'actue';
        }
    } else {
        return 'invalid';
    }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"



/*

Cool use cases of some and every:

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  let totalAngle = angles.reduce((total, angle) => total + angle);

  let allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

*/