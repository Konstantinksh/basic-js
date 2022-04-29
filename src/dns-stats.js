const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arrOfDomains = [];
  let result = {};
  domains.forEach((e, i) => {
    domains[i] = e.split('.')
  })
  domains.forEach((arr, i) => {
    let currDomain = ''
    for (let ind = arr.length -1; ind > -1; --ind) {
      currDomain += `.${arr[ind]}`
      arrOfDomains.push(currDomain)
    }
  })
  arrOfDomains.forEach((el, i) => {
    result[el] ? result[el] += 1 : result[el] = 1
  })

  // console.log(arrOfDomains, result)
  // console.log(domains)
  return result
}

// test = [
//     'code.yandex.ru',
//     'music.yandex.ru',
//     'yandex.ru'
//    ]

// getDNSStats(test)

module.exports = {
  getDNSStats
};
