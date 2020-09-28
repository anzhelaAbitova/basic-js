const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(message, key) {
    if (message && key) {

    }
    else {
      throw new Error('There is nothing to work on!')
    }
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage && key) {

    }
    else {
      throw new Error('There is nothing to work on!')
    }
  }
}

module.exports = VigenereCipheringMachine;
