const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrOfDig = n.toString().split('');
  console.log(arrOfDig);
  let newArr = [];
  arrOfDig.forEach((el, i) => {
    let startArr = arrOfDig.slice(0, i);
    let endArr = arrOfDig.slice(i+1);
    newArr.push(parseInt(startArr.concat(endArr).join('')))    
  })
  // console.log(newArr)
  let max = Math.max.apply(null, newArr)
  // console.log(max)
  return max
}

let test = 15246;
deleteDigit(test)

module.exports = {
  deleteDigit
};
