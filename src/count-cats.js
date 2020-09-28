const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let sumCats = 0;
    arr.forEach(item => {
      item.forEach(i => {
        if (i === '^^') sumCats++;
      })
    });
return sumCats;
};
