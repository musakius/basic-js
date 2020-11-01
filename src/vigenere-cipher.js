const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.reverseType = type === false;
    this.alphabetLength = 26;
    this.index_A = 65;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();

    key = key
      .toUpperCase()
      .split("")
      .map((el) => el.charCodeAt(0) - this.index_A);

    message = message
      .toUpperCase()
      .split("")
      .map((el) => (/[A-Z]/.test(el) ? el.charCodeAt(0) - this.index_A : el));

    const result = [];
    let indexKey = 0;

    message.forEach((el, i) => {
      indexKey = indexKey % key.length;
      if (typeof el === "number") {
        const symCode = el + key[indexKey] + this.index_A;
        if (el + key[indexKey] >= this.alphabetLength) {
          result.push(String.fromCharCode(symCode - this.alphabetLength));
        } else {
          result.push(String.fromCharCode(symCode));
        }
        indexKey++;
      } else {
        result.push(el);
      }
    });

    return this.reverseType ? result.reverse().join("") : result.join("");
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();

    key = key
      .toUpperCase()
      .split("")
      .map((el) => el.charCodeAt(0) - this.index_A);

    message = message
      .toUpperCase()
      .split("")
      .map((el) => (/[A-Z]/.test(el) ? el.charCodeAt(0) - this.index_A : el));

    const result = [];
    let indexKey = 0;

    message.forEach((el, i) => {
      indexKey = indexKey % key.length;
      if (typeof el === "number") {
        const symCode = el - key[indexKey] + this.index_A;
        if (el - key[indexKey] < 0) {
          result.push(String.fromCharCode(symCode + this.alphabetLength));
        } else {
          result.push(String.fromCharCode(symCode));
        }
        indexKey++;
      } else {
        result.push(el);
      }
    });

    return this.reverseType ? result.reverse().join("") : result.join("");
  }
}

module.exports = VigenereCipheringMachine;
