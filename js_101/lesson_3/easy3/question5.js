

function isColorValid(color) {
    if (color === "blue" || color === "green") {
      return true;
    } else {
      return false;
    }
}


// Solution 1
function isColorValid1(color) {
    return (color === "blue" || color === "green");
}


// Solution 2
function isColorValid2(color) {
    return ["blue", "green"].includes(color);
}