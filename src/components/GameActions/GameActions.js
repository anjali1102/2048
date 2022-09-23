//all function definitions here
// getting invoked from GameContainer

export const emptyBoard = () => [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const valueAvailable = (grid, value) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === value) {
        return true;
      }
    }
  }
  return false;
};

export const checkIfFull = (grid) => {
  // console.log("!valueAvailable(grid, 0)", !valueAvailable(grid, 0));
  return !valueAvailable(grid, 0);
};

const randomPosition = () => {
  //
  const rowPosition = Math.floor(Math.random() * 4);
  const columnPosition = Math.floor(Math.random() * 4);
  return [rowPosition, columnPosition];
};

export const randomGenerator = (grid) => {
  //
  if (checkIfFull(grid)) {
    return grid;
  }
  let [row, column] = randomPosition();
  while (grid[row][column] !== 0) {
    [row, column] = randomPosition();
  }

  grid[row][column] = 2;

  return grid;
};

const transposeMatrix = (grid) => {
  const newGrid = emptyBoard();
  for (let i = 0; i < grid.length; i++) {
    let columnIndex = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0) {
        newGrid[i][columnIndex] = grid[i][j];
        columnIndex++;
      }
    }
  }
  return newGrid;
};

const Mergevalues = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length - 1; j++) {
      if (grid[i][j] !== 0 && grid[i][j] === grid[i][j + 1]) {
        grid[i][j] = grid[i][j] * 2;
        grid[i][j + 1] = 0;
        console.log("score", (grid[i][j] += grid[i][j]));
        // score += grid[i][j];
        // console.log("score=>", score);
      }
    }
  }
  return grid;
};

export const moveLeft = (grid) => {
  const newGrid1 = transposeMatrix(grid);
  // console.log("newGrid1", newGrid1, newGrid1.size);

  const newGrid2 = Mergevalues(newGrid1);
  // console.log("newGrid2", newGrid2, newGrid2.size);
  return transposeMatrix(newGrid2);
};

const reverse = (grid) => {
  const reversedGrid = emptyBoard();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      reversedGrid[i][j] = grid[i][grid[i].length - 1 - j];
    }
  }
  return reversedGrid;
};

export const moveRight = (grid) => {
  const reversedGrid = reverse(grid);
  const newGrid = moveLeft(reversedGrid);
  return reverse(newGrid);
};

const rotateLeft = (grid) => {
  const rotateGrid = emptyBoard();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      rotateGrid[i][j] = grid[j][grid[i].length - 1 - i];
    }
  }
  return rotateGrid;
};

const rotateRight = (grid) => {
  const rotateGrid = emptyBoard();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      rotateGrid[i][j] = grid[grid[i].length - 1 - j][i];
    }
  }
  return rotateGrid;
};

export const moveUp = (grid) => {
  const rotateGrid = rotateLeft(grid);
  const newGrid = moveLeft(rotateGrid);
  return rotateRight(newGrid);
};

export const moveDown = (grid) => {
  const rotateGrid = rotateRight(grid);
  const newGrid = moveLeft(rotateGrid);
  return rotateLeft(newGrid);
};

export const checkWin = (grid) => {
  return valueAvailable(grid, 2048);
};

const hasDiff = (grid, updatedGrid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== updatedGrid[i][j]) {
        return true;
      }
    }
  }
  return false;
};

export const isOver = (grid) => {
  if (hasDiff(grid, moveLeft(grid))) {
    return false;
  }
  if (hasDiff(grid, moveRight(grid))) {
    return false;
  }
  if (hasDiff(grid, moveUp(grid))) {
    return false;
  }
  if (hasDiff(grid, moveDown(grid))) {
    return false;
  }
  return false;
};
