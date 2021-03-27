const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      i++;
    } else if (arr[i] == '--discard-prev') {
      if (arr[i - 2] != '--discard-next') {
        resArray.pop();
      }
    } else if (arr[i] == '--double-next') {
      resArray.push(arr[i + 1]);
    } else if (arr[i] == '--double-prev') {
      if (arr[i - 2] != '--discard-next') {
        resArray.push(arr[i - 1]);
      }
    } else {
      resArray.push(arr[i]);
    }
  }

  return resArray.filter(e => e !== undefined);
};
