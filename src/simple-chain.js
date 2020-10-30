const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      typeof position !== "number" ||
      position >= this.getLength()
    ) {
      this.chain = [];
      throw new Error();
    }

    this.chain = this.chain.filter((x, i) => i != position - 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.map((el) => `( ${el} )`).join("~~");
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
