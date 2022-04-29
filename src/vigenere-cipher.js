const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const Alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class VigenereCipheringMachine {

  constructor(dir) {
    this.isLinear = dir;
  }

  encrypt(message, key) {
    isInputValid(message, key)
    const TABULA = getTabula();
    let result = [];
    message = message.toUpperCase().split('');
    let longKey = getLongKey(message, key)
    // console.log(message, longKey);
    result = message.slice();
    result.forEach((e, i) => {
      if (Alph.includes(e)) {
        let keyChar = longKey[i];
        result[i] = TABULA[Alph.indexOf(e)][Alph.indexOf(keyChar)]
      }
    })
    // console.log(result.join(''))
    if (this.isLinear === false) {
      return result.reverse().join('')
    } else {
      return result.join('')
    }
  }
  decrypt(encryptedMessage, key) {
    isInputValid(encryptedMessage, key)
    const TABULA = getTabula();
    let result = [];
    message = encryptedMessage.toUpperCase().split('');
    let longKey = getLongKey(message, key)
    // console.log(message, longKey);
    result = message.slice();
    result.forEach((e, i) => {
      if (Alph.includes(e)) {
        let keyChar = longKey[i];
        let serviceArr = TABULA[Alph.indexOf(keyChar)]
        let indexOfSerch = serviceArr.indexOf(e);
        result[i] = Alph[indexOfSerch]
      }
    })
    // console.log(result.join(''), )    
    if (this.isLinear === false) {
      return result.reverse().join('')
    } else {
      return result.join('')
    }
  }
}

function getLongKey(message, key) {
  let arrKey = key.toUpperCase().split('');
  let longKey = message.slice();
  let count = 0;
  longKey.forEach((e, i) => {
    if (Alph.includes(e)) {
      longKey.splice(i, 1, arrKey[count])
      if (count === (arrKey.length -1)) {
        count = 0;
      } else {++count}
    }
  });
  return longKey
}

function getTabula() {
  // const Alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let TABULA = [];
  for (let i=0; i<26; ++i) {
    TABULA.push(Alph.slice(i).concat((Alph.slice(0, i))));
  }
  return TABULA;
}


function isInputValid(a, b) {
  if ((a === undefined) || (b === undefined)) {
    throw new ValidationError('Incorrect arguments!');
  }
}

// TESTS
let message = 'attack at dawn!'
let key = 'alphonse'
let encMessage = 'AEIHQX SX DLLU!'
let machine = new VigenereCipheringMachine()
console.log(
machine.encrypt(message, key),
machine.decrypt(encMessage, key)
)

module.exports = {
  VigenereCipheringMachine
};
