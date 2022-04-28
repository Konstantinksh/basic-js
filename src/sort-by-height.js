const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let memory = [];
  let serviceArr = [];
  arr.forEach((e, i) => {
    if (e === -1) {
      memory.push(i);
    } else {
      serviceArr.push(e)
    }
    console.log(memory, serviceArr)
  })
  serviceArr.sort(function(a, b) {
    return a - b;
  })
  // console.log(memory, serviceArr)
  memory.forEach(e => {
    serviceArr.splice(e, 0, -1)
    // console.log(e, serviceArr)
  })
  return serviceArr;
}

// arr = [4, 2, 9, 11, 2, 16]
// console.log(sortByHeight(arr))

module.exports = {
  sortByHeight
};
