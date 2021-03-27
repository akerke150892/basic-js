const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let len = 0;
  for (let arr of matrix) {
    len += arr.filter(elem => elem === "^^").length;
  }
  return len;
};
