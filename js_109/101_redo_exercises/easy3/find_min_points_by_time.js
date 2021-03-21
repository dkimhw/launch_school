
let createMatrix = (nRow, nCol) => {
  let matrix = [];
  for (let i = 0; i <= nRow; i++) {
    matrix[i] = [];
    for (let j = 0; j <= nCol; j++) {
        matrix[i][j] = 0;
    }
  }

  return matrix;
}
  
let find_min_points = (p, t, n, target) => {
  INT_MAX = Infinity;
  let dp = createMatrix(target, n);

  for (let i = 0; i <= target; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = 0;
      } else if (j == 0) {
        dp[i][j] = INT_MAX
      } else {
        let excl = dp[i][j-1];
        let incl = t[j-1];
        
        // p = [2, 6, 5, 4, 7]
        if (i > p[j-1]) {
          if (dp[i - p[j-1]][j-1] === INT_MAX) {
            incl = INT_MAX;
          } else {
            incl += dp[i - p[j-1]][j-1];
          }
        }

        dp[i][j] = Math.min(incl, excl);
      }
    }
  }

  console.log(dp[target][n]);

  return dp;
}


n = 5
p = [2, 6, 5, 4, 7]
t = [8, 11, 9, 10, 12]
target = 10

console.log(find_min_points(p, t, n, target));