const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let repeatTimes = options.repeatTimes;
  let separator = getSeparator(options.separator);
  let fullAddition = getFullAddition(options.addition, options.additionSeparator, options.additionRepeatTimes)
  
  let result = str + fullAddition;

  if (Number.isInteger(repeatTimes) && repeatTimes>1) {
    for (let i=0; i<repeatTimes-1; ++i) {
      result += `${separator}${str}${fullAddition}`;    
    }
  }
  console.log(result);
  return result;
}

function getFullAddition(addition = '', additionSeparator = '|', additionRepeatTimes) {
  let fullAdd = `${addition}`;
  if (Number.isInteger(additionRepeatTimes) && additionRepeatTimes>1) {
    for (let i=0; i<additionRepeatTimes-1; ++i) {
      fullAdd += `${additionSeparator}${addition}`;      
    }
  }
  console.log(fullAdd);
  return fullAdd;
}

function getSeparator(separator = '+') {
  separator = String(separator);
  return separator    
}

repeater('STRING', { repeatTimes: 3, addition: 'PLUS', additionRepeatTimes: 2, })
// => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

module.exports = {
  repeater
};
