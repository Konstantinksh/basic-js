const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

 class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function isInputValid(input) {
  if (!Array.isArray(input)) {
    throw new ValidationError("'arr' parameter must be an instance of the Array!");
  }
}

function transform(arr) {
  isInputValid(arr);
  let result = arr.slice();
  result.forEach(controlComand);
  // console.log(result)
  return result
}

// let test = [1, 2, 3, '--discard-prev', 4, 5];
// let test = [1, 2, 3, '--double-next', 4, 5];
// let test = {}
// let test = [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
// transform(test)

function controlComand(e, i, arr) {
  // console.log(e, arr)
  if (e === '--discard-prev') {discardPrev(i, arr)}
  else if (e === '--discard-next') {discardNext(i, arr)}
  else if (e === '--double-prev') {doublePrev(i, arr)} 
  else if (e === '--double-next') {doubleNext(i, arr)}
}

function discardPrev(i, arr) {
  if (i === 0 || typeof(arr[i - 1]) === 'string') {
    arr.splice(i, 1);
  } else { arr.splice((i - 1), 2) }
}

function discardNext(i, arr) {
  if (i === (arr.length - 1) || typeof(arr[i + 1]) === 'string') {
    arr.splice(i, 1);
  } else if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev' ) {
    arr.splice(i, 3);
  } else { arr.splice(i, 2) }
}

function doublePrev(i, arr) {
  if (i === 0 || typeof(arr[i - 1]) === 'string') {
    arr.splice(i, 1)
  } else { arr.splice(i, 1, arr[i-1]) }
}

function doubleNext(i, arr) {
  if (i === (arr.length - 1) || typeof(arr[i + 1]) === 'string') {
    arr.splice(i, 1)
  } else { arr.splice(i, 1, arr[i + 1]) }
}


module.exports = {
  transform
};
