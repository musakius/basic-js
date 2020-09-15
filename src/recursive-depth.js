const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, countLevel = ["1"]) {
    if (arr.some((elem) => Array.isArray(elem))) {
      arr = arr.flat();
      countLevel.push("+1");
      this.calculateDepth(arr, countLevel);
    }
    return countLevel.length;
  }
};
