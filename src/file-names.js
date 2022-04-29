const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let memory = {};
  names.forEach((el, i) => {
    if (memory[el]) {
      memory[el].push(i)
    } else {
      memory[el] = [];
      memory[el].push(i)
    }
  })
  for (key in memory) {
    // console.log(memory[key])
    let arrOfAdress = memory[key];
    arrOfAdress.forEach((el, i) => {
      if (i > 0) {
        names[el] += `(${i})`;
      }      
    })
  }
  let doubles = names.filter((el, i) => {
    return names.indexOf(el) !== i;
  })
  if (doubles.length > 0) {
    renameFiles(names);
  }
  return names
}

// let test = ['doc', 'doc', 'image', 'doc(1)', 'doc']
// console.log(renameFiles(test))
// ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']

module.exports = {
  renameFiles
};
