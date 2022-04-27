const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

//  let testArr = [
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2]
//    ]


function countCats(arr) {
  let cat = '^^';
  let result = 0;
  arr.flat().forEach(elem => {
    if (elem === cat) ++result;
  })
  return result
}

// countCats(testArr)

module.exports = {
  countCats
};
