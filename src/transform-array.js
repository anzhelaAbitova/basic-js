const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr && Array.isArray(arr))  {
    let resultArr = [];

    for(let i=0;i<arr.length;i++) {
      if (arr[i] === '--discard-next') {
        if (arr[i+1]) i+=2;
      }
      else if (arr[i] === '--discard-prev') {
        if (arr[i-1]) {resultArr.pop()}
      }
      else if (arr[i] === '--double-next') {
        if (arr[i+1]) resultArr.push(arr[i+1]);
      }
      else if (arr[i] === '--double-prev') {
        if (arr[i-1]) {resultArr.push(arr[i-1])}
      }
      else {
        resultArr.push(arr[i]);
      }
    }
    return resultArr;
  }
  else {
    throw Error("It is not array");
  }
};
