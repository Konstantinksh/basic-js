const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function isInputValid(input, arr) {
  if (
    !Number.isInteger(input) ||
    input < 1 ||
    input > arr.length
  ) { 
    return 'invalid';
  }
}

const chainMaker = {
  currentChain: [],
  getLength() {
    return this.currentChain.length
  },
  addLink(value) {
    if (value === null) {
      this.currentChain[this.getLength()] = 'null';
      return this;
    } else {
      this.currentChain[this.getLength()] = value;
      return this;
    }
  },
  removeLink(position) {
    if (isInputValid(position, this.currentChain) === 'invalid') {
      this.currentChain = [];
      throw new ValidationError('You can\'t remove incorrect link!')
    };
    this.currentChain.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let result = `( ${this.currentChain.join(' )~~( ')} )`;
    this.currentChain = [];
    return result
  }
};


// let test = [1, 2, 3];
// let input = '2nd'
// chainMaker.addLink(1).addLink(2).addLink( ).addLink(3).addLink(4).removeLink(1).reverseChain()
// console.log(chainMaker.currentChain)
// console.log(chainMaker.addLink(1).addLink(2).addLink( ).addLink(3).addLink(4).removeLink(1).reverseChain().finishChain())
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).addLink(4).removeLink(1).reverseChain().getLength())
// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()) //'( 3rd )~~( function () { } )'
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0)
// console.log(
//   chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain()
// )

module.exports = {
  chainMaker
};
