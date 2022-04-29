const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let arrS1 = s1.split('');
  let arrS2 = s2.split('');
  let objS1 = {};
  let objS2 = {};
  let shorterObj = arrS1.length>arrS2.length ? objS2 : objS1;
  let longerObj = arrS1.length>arrS2.length ? objS1 : objS2;
  arrS1.forEach((el, i) => {
    objS1[el] ? objS1[el] += 1 : objS1[el] = 1;
  })
  arrS2.forEach((el, i) => {
    objS2[el] ? objS2[el] += 1 : objS2[el] = 1;
  })
  // console.log(arrS1, arrS2);
  // console.log(objS1, objS2, shorterObj)
  for (key in shorterObj) {
    if (longerObj[key]) {
      let l = longerObj[key];
      let s = shorterObj[key];
      l>s ? result += s : result += l;
      // console.log(l, s, result);
    }
  }
  return result
}

s1 = "aabcc"
s2 = "adcaa"

getCommonCharacterCount(s1, s2)



module.exports = {
  getCommonCharacterCount
};
