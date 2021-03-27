const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let output = new Object(); 
  output["turns"] = 2**disksNumber - 1;
  output["seconds"] = Math.floor(output.turns * 3600 / turnsSpeed);
  return output;
};
