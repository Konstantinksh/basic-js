const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n.toString();
  let sum = 0;
  result = result.split('')
  result.forEach(elem => {
    sum += parseInt(elem);
    // console.log(elem, sum)
  })
  if (sum > 9) {
    // console.log(true)
    sum = getSumOfDigits(sum);
  }
  return sum
}


// let test = 10021;
console.log(getSumOfDigits(91))


module.exports = {
  getSumOfDigits
};
