const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 calculateDepth(arr) {
     if (Array.isArray(arr)) return 1 + Math.max(...arr.map(item => this.calculateDepth(item)));
     else return 0;
  }
};