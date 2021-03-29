const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const getSeason = function (date) {
    if ( date instanceof Date){
      let season = '';
      console.log(date.getMonth());
      let dateMonth = date.getMonth();
      let dateDay = date.getDate();
      console.log(dateDay)
      switch(dateMonth) {
        case 12:
        case 1:
        case 2:
          season = 'winter';
          //console.log(season);
          break;
        case 3:
        case 4:
        case 5:
          season = 'spring';
          //console.log(season);
          break;
        case 6:
        case 7:
        case 8:
          season = 'summer';
          //console.log(season);
          break;
        case 9:
        case 10:
        case 11:
          season = 'fall';
          //console.log(season);
          break;
      }
      return season
    } else if (!date){
      return 'Unable to determine the time of year!'
    } else {
      throw new Error('Error');
    }

  };
};
