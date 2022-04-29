const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let startIndex = email.lastIndexOf('@') + 1;
  // console.log(startIndex);
  // console.log(email.slice(startIndex))
  return email.slice(startIndex)
}

let test = 'prettyandsimple@example.com';
getEmailDomain(test)

module.exports = {
  getEmailDomain
};
