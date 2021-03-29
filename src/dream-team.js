const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const account = ['Matt', 'Ann', ' Dmitry ', 'Max','0',1]

  const createUsernames = function (arr) {
    let strArr = arr.filter(item => typeof item === 'string');

    const secretName = strArr.map(function (elem) {
      let _s = elem.toUpperCase()
          .trim()
      return _s[0]
    });

    return secretName.sort().join('')

  };
  createUsernames(account)
};
