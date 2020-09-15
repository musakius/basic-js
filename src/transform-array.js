const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  const sequences = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev"
  ];

  let newArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == "--discard-next") {
      i++;
      continue;
    } else if (arr[i] == "--discard-prev" && arr[i - 2] != "--discard-next") {
      newArr.pop();
      continue;
    } else if (arr[i] == "--double-next") {
      newArr.push(arr[i + 1]);
    } else if (arr[i] === "--double-prev" && arr[i - 2] !== "--discard-next") {
      newArr.push(arr[i - 1]);
    }

    if (sequences.every((el) => el != arr[i])) newArr.push(arr[i]);
  }

  return newArr.filter((x) => x != undefined);
};
