const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error();
  let length = arr.length;
  let result = [];
  for (let i = 0;i < length;i++){
    if (arr[i] === '--discard-prev'){
      if (result.length) result.pop()
      break
    }
    if (arr[i] === '--double-prev'){
      if (i < length - 1) result.push(arr[i + 1]);
      break
    }
    if (arr[i] === '--double-next'){
      if (i) result.push(arr[i - 1]);
      break
    }
    if (arr[i] === '--discard-next'){
      i++;
      break
    } else {
      result.push(arr[i])
    }
  }


};
