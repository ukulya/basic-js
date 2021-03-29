//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const backyard = [
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
  ];
  const countCats = function (arr){
    return arr.flat().filter(e => e === '^^').length
  }
  countCats()
  console.log(countCats(backyard)); // => 3
};




