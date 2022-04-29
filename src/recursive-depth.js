const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if(findArrays(arr).length != 0){
      let flatterArray = arr.flat()
      // console.log(flatterArray)
      return 1 + this.calculateDepth(flatterArray);
    } else {
      return 1;
    }
  }  
}

function findArrays(arr) {
  return arr.filter(i => Array.isArray(i))
}

// let test = [1, 2, 3, [1, 2, 3], 5, [1, 2, 3]]
let test = [1, [4, []], [5, [6, [7, [8]]]]]
let dC = new DepthCalculator()
console.log(dC.calculateDepth(test))

module.exports = {
  DepthCalculator
};
