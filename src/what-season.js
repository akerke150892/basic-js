const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  const month = date.getUTCMonth();
  if (!Number.isInteger(month)) throw new Error("THROWN");

  switch (true) {
    case month >= 2 && month <= 4: 
      return "spring";
    case month >= 5 && month <= 7:
      return "summer";
    case month >= 8 && month <= 10:
      return "autumn";
    default:
      return "winter";
  }
};
