
/*

PEDAC:

Understand the problem (p):

1. Explicit reqs
* Input
  * agent -> array of agent coordinates
  * n -> defines the size of the the vity that Bassi needs to hide in
    * n = 6 = 6x6 matrix 
    * n = 2 -> 2x2 matrix
    * [0, 0], [1, 0], [0, 1], [1, 1]

* Output
  * List of coordinates that are safest
  * "safest" -> highest value after doing manhanttan distance
  * What is manhattan distance 
    * |x_1 - x_2| + |y_1 - y_2| = manhattan distance

2. Edge cases

* Agent in every grid, return empty list
* If there are no agents - return all coordinates
* If n = 0, return an empty list
* If agent coordinates outside of the city map - don't consider
* There are no duplicate agents

Test Case / Example (E):

n = 6, agent = [[0, 0], [1, 5], [5, 1]]
output = [[2, 2], [3, 3], [4, 4], [5, 5]]

Data Structures (D):

Nested arrays

Algorithms (A):

1. Create variable called `cityGrid` = []
2. We want to use `n` to generate the "grid". Each grid will have the structure [0, 0]
  * n = 2 -> [[0, 0], [1, 0], [0, 1], [1, 1]] - 4 grids, and each element representing a grid with coordinates
3. Make the third element in each array inside `cityGrid` - manhattan distance (element index 2 is distance)
  * We want to loop over the cityGrid
    * for each element in `cityGrid` - we want to calculate manhattan distance for each element in the `agents` array
    * Then pick the min mahanttan score - why? though? 
    * Add to `manhattanScoreToGrid` and use the manhattanscore as the key

4. Find the key that has the highest score and return the nested array at that key


Mini algorithms for #2
    0      1
0  0, 0   1, 0

1  0, 1   1, 1

1. Create a for loop that loops until index < `n`:
  * For each loop, have inner for loop that loops till index < `n` 
    * Within this for loop, create a array [index, j] and append it to `cityGrid`

*/

function createCity(n) {
  let cityGrid = [];

  for(let index = 0; index < n; index++) {
    for (let j = 0; j < n; j++) {
      let grid = [index, j];
      cityGrid.push(grid);
    }
  }
  return cityGrid;
}

function advice(agent, n) {
  let cityGrid = createCity(n);
  let manhattanScoreToGrid = {}; // {[[]] , [[]]}

  // [[0, 0], [1, 5], [5, 1]]
  for (let index = 0; index < cityGrid.length; index++) {
    let manhattanScores = [];
    for (let a = 0; a < agent.length; a++) {
      let manhattanScore = Math.abs(cityGrid[index][0] - agent[a][0]) + Math.abs(cityGrid[index][1] - agent[a][1]);
      manhattanScores.push(manhattanScore);
    }

    console.log(manhattanScores);
    let minScore = Math.min(...manhattanScores);

    if (Object.keys(manhattanScoreToGrid).includes(String(minScore))) {
      manhattanScoreToGrid[minScore].push(cityGrid[index]);
    } else {
      manhattanScoreToGrid[minScore] = [];
      manhattanScoreToGrid[minScore].push(cityGrid[index]) // [[0, 0]]
    }
  }

  let maxKey = Math.max(...Object.keys(manhattanScoreToGrid).map(key => Number(key)));

  return manhattanScoreToGrid[maxKey];
}

console.log(advice([[0, 0], [1, 5], [5, 1]], 6)); // [[2, 2], [3, 3], [4, 4], [5, 5]]
