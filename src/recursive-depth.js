const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const flatArr =  arr.reduce((acc, elem) => {
      if (Array.isArray(elem)) {
        elem.length != 0 ? acc.push(...elem) : acc.push(1);
      }
      return acc;
    }, []);

    if (flatArr.length === 0) return 1;

    return this.calculateDepth(flatArr) + 1;
  }
};