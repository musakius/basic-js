const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catsCount = 0;
  matrix.forEach((item) => {
    item = item.filter((elem) => elem === "^^");
    catsCount += item.length;
  });
  return catsCount;
};
