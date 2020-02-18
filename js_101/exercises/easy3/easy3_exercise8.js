


function getGrade(grade1, grade2, grade3) {
  let avgGrade = (grade1 + grade2 + grade3) / 3;

  if (avgGrade >= 90) {
    console.log('A');
  } else if (avgGrade >= 80) {
    console.log('B');
  } else if (avgGrade >= 70) {
    console.log('C');
  } else if (avgGrade >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
