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
    let resultDepth = 0; 
    let currentDepth = 0;
    goDown(arr, currentDepth, resultDepth);
    
    // return currentDepth
  }  
}


function goDown(arr, currentDepth, resultDepth) { 
  arr.forEach((element, index) => {
    console.log(element)
    if (isNotEmptyArray(element)){
      ++currentDepth;
      goDown(element, currentDepth, resultDepth)
    } else if (Array.isArray(element)) {
      ++currentDepth;
    } else if (index === arr.length - 1) {
      if (currentDepth > resultDepth) resultDepth = currentDepth;
      return resultDepth
    }
    console.log('M ' + currentDepth + resultDepth)
  });
  // console.log([currentDepth, resultDepth])
  }

function isNotEmptyArray(arr) {
  return (Array.isArray(arr) && arr.length > 0)
}

let test = [1, 2, 3, [1, 2, 3], 5, [1, 2, 3]]
let dC = new DepthCalculator()
console.log(dC.calculateDepth(test))

module.exports = {
  DepthCalculator
};
