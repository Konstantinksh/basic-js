const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((arr, r) => {
    arr.forEach((e, c) => {
      if (r === 0) {        
        sum += e;
      } else if (!(matrix[r-1][c] === 0)) {
        sum += e;
      }
      // console.log(sum)
    })
  })
  return sum
}


// matrix = [
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]
//    ]

// console.log(getMatrixElementsSum(matrix))

module.exports = {
  getMatrixElementsSum
};
