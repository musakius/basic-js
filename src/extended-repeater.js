const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const string = String(str);
  const string_2 = String(options.addition);
  const times = options.repeatTimes || 0;
  const separator = options.separator || "+";
  const times_2 = options.additionRepeatTimes || 0;
  const separator_2 = options.additionSeparator || "|";

  let result = "";

  if (times === 0) result = string + string_2;

  for (let i = 0; i < times; i++) {
    let res = "";
    if (times_2 > 0) {
      for (let j = 0; j < times_2; j++) {
        res += j === times_2 - 1 ? string_2 : string_2 + separator_2;
      }
    }

    result += i === times - 1 ? string + res : string + res + separator;
  }

  return result;
};
