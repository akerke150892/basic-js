const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD;

  const isValid = sampleActivity 
                  && typeof(sampleActivity) === "string" 
                  && +sampleActivity
                  && sampleActivity > 0
                  && sampleActivity <= 15

  return isValid ? Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity) / k) : false;
};
