const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const addition = ("addition" in options) ? options.addition : "";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  
  let addArr = [];
  let strArr = [];

  for (let j = 0; j < additionRepeatTimes; j++) {
    addArr.push(String(addition));
  }
  addArr = addArr.join(options.additionSeparator || "|");

  for (let i = 0; i < repeatTimes; i++) {
    strArr.push(String(str) + addArr);
  }
  return strArr.join(options.separator || "+");
};
