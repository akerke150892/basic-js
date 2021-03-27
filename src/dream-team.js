const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Boolean(members) && Array.from(members).length && members.reduce((acc, elem) => {
    if (typeof(elem) === "string") {
      acc.push(elem.replace(/\s/g, "")[0].toUpperCase());
    }
    return acc.sort();
  }, []).join("");
};
