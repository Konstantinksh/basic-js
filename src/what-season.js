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
    !(input instanceof Date) ||
    Object.getOwnPropertyNames(input).length > 0
    ) {
    throw new ValidationError("Invalid date!");
  } else { return 'valid'}
}

// const deeperFakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));


// console.log(deeperFakeDate.getFullYear())


// let date = new Date(2350, 11, 22, 20, 38, 2, 848);
// let date = deeperFakeDate
// let month = date.getMonth();
// // let month = 5;
// // console.log(determineSeason(month));
// // console.log(month); // 11
// // console.log(getSeason());
// // console.log(typeof(date), date instanceof Date)
// // for (let prop in Date) {console.log(prop)}
// console.log(Object.getOwnPropertyNames(date))

module.exports = {
  getSeason
};
