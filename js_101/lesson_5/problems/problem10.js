

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];


let newArr = arr.map(a => {
    if (typeof a[0] === 'string') {
        return a.sort().reverse();
    } else {
        return a.sort((a, b) => b - a);
    }
});

console.log(newArr);


arr.map(subArr => {
    return subArr.slice().sort((a, b) => {
      if (typeof a === 'number') {
        return b - a;
      }
  
      if (a < b) {
        return 1
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  });