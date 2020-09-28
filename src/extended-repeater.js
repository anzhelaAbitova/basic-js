const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  let givenStr = (str) ? String(str) : '';
  let resultStr = '';
  const repeatNum = (options['repeatTimes']) ? Number(options['repeatTimes']) : 1;
  const sep = (options['separator']) ? String(options['separator']) : '+';
  let add = (options['addition']) ? String(options['addition']) : '';
  const repeatAddNum = (options['additionRepeatTimes']) ? Number(options['additionRepeatTimes']) : 1;
  const addSep = (options['additionSeparator'] && options['addition']) ? String(options['additionSeparator']) : '|';
  add += (add !== '') ? addSep : '';
  
  add =  add.repeat(repeatAddNum);
  for (let i=0;i<repeatNum;i++) {
    resultStr += `${givenStr}${add.slice(0, add.length-addSep.length)}${sep}`;
  }
  return resultStr.slice(0, resultStr.length-sep.length);
};