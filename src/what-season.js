const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date) {
    try {
      date.getTime();
    }
    catch (err) {
      throw new Error(err);
    }
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    let season = '';
    let month = date.getMonth();
    if (month >= 0 && month < 2 || month === 11) {
        return season = seasons[0];
    }
    else if (month >= 2 && month < 5) {
        return season = seasons[1];
    }
    else if (month >= 5 && month < 8) {
        return season = seasons[2];
    }
    else if (month >= 8 && month < 11) {
        return season = seasons[3];
    }
    else {return date}
  }
  else {
    return 'Unable to determine the time of year!';
  }
};
