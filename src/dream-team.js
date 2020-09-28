const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (arr && Array.isArray(arr)) {
    let names = [];
    arr.forEach(item => {
      if (item === String(item)) {
        names.push(item.trim().toLowerCase());
      }
      else {
        return false;
      }
    })
    names = names.sort();
    let result = [];
    names.forEach(item => result.push(item.substring(0, 1).toUpperCase()));
    return result.join('');
  }
  else {return false}
};
