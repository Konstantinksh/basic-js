const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrStr = str.split('');
  let result = [];
  let count = 0;

  arrStr.forEach((el, i) => {
    if (i === 0 && arrStr[i] !== arrStr[i+1]) {
      result.push(`${arrStr[i]}`)
    } else if (i === 0 && arrStr[i] === arrStr[i+1]) {
      ++count
    } else if (arrStr[i] === arrStr[i-1] && arrStr[i] === arrStr[i+1]) {
      ++count;      
    } else if (arrStr[i] === arrStr[i-1] && arrStr[i] !== arrStr[i+1]) {
      ++count
      result.push(`${count}${arrStr[i]}`)
    } else if (arrStr[i] !== arrStr[i-1] && arrStr[i] !== arrStr[i+1]) {
      result.push(`${arrStr[i]}`)
    } else if (arrStr[i] !== arrStr[i-1] && arrStr[i] === arrStr[i+1]) {
      count = 1
    } else if (i === arrStr.length-1 && arrStr[i] !== arrStr[i-1]) {
      result.push(`${arrStr[i]}`)
    } else if (i === arrStr.length-1 && arrStr[i] === arrStr[i-1]) {
      ++count
      result.push(`${count}${arrStr[i]}`)
    }
    // console.log(result, count, arrStr[i])
  })
  return result.join('')  
}

let str = 'abbbcaa';
encodeLine(str)

module.exports = {
  encodeLine
};
