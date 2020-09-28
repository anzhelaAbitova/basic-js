const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2 = 0.693;

module.exports = function dateSample(sample) {
  let sampleNum = parseInt(sample);
  if (sample && parseInt(sample) && sample === sample.toString() && sampleNum > 0 && sampleNum < MODERN_ACTIVITY) {
    let result = Math.log(MODERN_ACTIVITY / sampleNum) / (LN2/HALF_LIFE_PERIOD);
    return Math.ceil(result);
  }
  else {
    return false;
  }
};
