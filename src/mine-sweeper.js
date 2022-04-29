const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  console.log(Array.isArray(matrix))
  let rows = matrix.length;
  let columns = matrix[0].length;
  let row = 0;
  let column = 0;
  let result = [];
  matrix.forEach(e => result.push(e.slice()))
  result.forEach((e, row) => e.forEach((e, column) => {
    result[row][column] = 0;
  }))
  console.log(result)
  // угловые ячейки
  if (matrix[0][0]) {
    ++result[0][1];
    ++result[1][1];
    ++result[1][0];
  }
  if (matrix[0][columns - 1]) {
    ++result[0][columns - 2];
    ++result[1][columns - 1];
    ++result[1][columns - 2];
  }
  if (matrix[rows - 1][columns - 1]) {
    ++result[rows - 1][columns - 2];
    ++result[rows - 2][columns - 1];
    ++result[rows - 2][columns - 2];
  }  
  if (matrix[rows - 1][0]) {
    ++result[rows - 1][1];
    ++result[rows - 2][0];
    ++result[rows - 2][1];
  }
  // первую и последнюю строку
  for (let i = 1; i < (columns -1); ++i) {    
    if (matrix[0][i]) {
    ++result[1][i - 1];
    ++result[1][i];
    ++result[1][i + 1];
    }
    if (matrix[rows-1][i]) {    
    ++result[rows-2][i - 1];
    ++result[rows-2][i];
    ++result[rows-2][i + 1];
    }
  }
  // первую и последнгнюю колонки
  for (let i = 1; i < (columns -1); ++i) {    
    if (matrix[i][0]) {
    ++result[i - 1][1];
    ++result[i][1];
    ++result[i + 1][1];
    }
    if (matrix[i][columns-1]) {
      ++result[i - 1][columns-2];
      ++result[i][columns-2];
      ++result[i + 1][columns-2];
    }
  }
  //мясо  
  for (let c = 1; c < (columns -1); ++c) {    
    for (let r = 1; r < (rows -1); ++r) {
      if (matrix[r][c]) {
      ++result[r][c - 1];
      ++result[r][c + 1];
      ++result[r + 1][c];
      ++result[r - 1][c];      
      ++result[r + 1][c + 1];
      ++result[r - 1][c + 1];            
      ++result[r - 1][c - 1];
      ++result[r + 1][c - 1];
      }
    }
  }
  
  
  return result
  // console.log(result)
}

matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
   ]
minesweeper(matrix)

module.exports = {
  minesweeper
};
