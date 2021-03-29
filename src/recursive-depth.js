const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  comDepth = 0;
  locDepth = 0;

  calculateDepth( arr ) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(arr)){
      this.locDepth++;
      //console.log(arr);
      for (let i = 0;i < arr.length;i++){
        if (Array.isArray(arr[i])){
          this.calculateDepth(arr[i])
        }
        if (this.locDepth > this.comDepth){
          this.comDepth = this.locDepth
        }
      }
      this.locDepth = 1
    }
    return this.comDepth
  }
};