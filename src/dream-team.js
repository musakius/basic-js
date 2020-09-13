const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameTeam = "";
  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach((item) => {
    if (typeof item === "string") {
      nameTeam += item.trim().slice(0, 1);
    }
  });
  return nameTeam.toUpperCase().split("").sort().join("");
};
