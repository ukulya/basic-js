//const CustomError = require("../extensions/custom-error");

module.exports = function dateSample(/* sampleActivity */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 0.693/5730;
  const dateSample = function (sampleActivity){
    if (isNaN(parseInt(sampleActivity))) return false
    return  parseInt(Math.ceil(Math.log((MODERN_ACTIVITY / sampleActivity)) / HALF_LIFE_PERIOD));
  }
};
