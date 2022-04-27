const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let result = isInputValid(date);
  if (result !== 'valid') return result;

  let month = date.getMonth();  
  result = determineSeason(month);  
  return result
}

function determineSeason(month) {
  if (month < 2 || month === 11) {
    return 'winter';
  } else if (month > 1 && month < 5) {
    return 'spring';  
  } else if (month >4 && month < 8) {
    return 'summer';
  } else {return 'fall'}
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function isInputValid(input) {
  if (!input) {
    return 'Unable to determine the time of year!'
  } else if (!(Object.prototype.toString.call(input) === '[object Date]') ||
    !(input instanceof Date) 

    ) {
    throw new ValidationError("Invalid date!");
  } else { return 'valid'}
}

let date = new Date(2350, 11, 22, 20, 38, 2, 848);
// let month = date.getMonth();
// let month = 5;
// console.log(determineSeason(month));
// console.log(month); // 11
// console.log(getSeason());
// console.log(typeof(date), date instanceof Date)
// for (let prop in Date) {console.log(prop)}
console.log(date.constructor)

module.exports = {
  getSeason
};
