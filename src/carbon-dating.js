const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const rateConst = 0.693/HALF_LIFE_PERIOD;
  let SAMPLE_ACTIVITY = isInputValid(sampleActivity);
  return SAMPLE_ACTIVITY ? Math.ceil(Math.log(MODERN_ACTIVITY/SAMPLE_ACTIVITY)/rateConst) : false;
}

function isInputValid(data) {
  return (
    typeof(data) === 'string' &&
    parseFloat(data, 10) &&
    parseFloat(data, 10) <= 15 &&
    parseFloat(data, 10) > 0
    ? parseFloat(data, 10) : false
  )
}


let test = '3.142';
console.log (dateSample(test))
// console.log(isInputValid(test))
console.log(parseInt(test, 10))




module.exports = {
  dateSample
};
