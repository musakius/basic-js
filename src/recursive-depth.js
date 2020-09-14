const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depthLevel = ["array"]) {
    if (arr.some((elem) => Array.isArray(elem))) {
      arr = arr.flat(); // remove one level of array depth
      depthLevel.push("depth++"); // depth level + 1
      this.calculateDepth(arr, depthLevel);
    }
    return depthLevel.length;
  }
};
