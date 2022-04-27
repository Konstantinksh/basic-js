const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = [];
  if (!isInputValid(members)) return false;
  result = members.map((elem) => {
    if (isNameValid(elem)) {
      return elem.trim().toUpperCase().slice(0, 1);
    }
  } )
  return result.sort().join('')
}

function isNameValid(name) {
  return (
    typeof(name) === 'string'    
    )
}

function isInputValid(input) {
  return (
    Array.isArray(input) &&
    input.length !== 0
  ) 
}

// let test = ['Matt', 'Ann', 'Dmitry', 'Max'];
// let test = ['Olivia', 1111, 'Lily', 'Oscar', true, null];
// console.log(createDreamTeam(test))


module.exports = {
  createDreamTeam
};
