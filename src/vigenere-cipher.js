const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("THROWN");
    message = message.toUpperCase();
    key = key.toUpperCase();

    let enc = "";
    let i = 0;
    for (let char of message) {
      const m = char.charCodeAt(0);
      
      if (m >= 65 && m <= 90) {
        const k = key.charCodeAt(i % key.length);
        const c = (m + k) % 26 + 65;
        char = String.fromCharCode(c);
        i++;
      }
      
      enc += char;
    }
    return this.isDirect ? enc : enc.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("THROWN");
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let dec = "";
    let i = 0;
    for (let char of encryptedMessage) {
      const c = char.charCodeAt(0);
      
      if (c >= 65 && c <= 90) {
        const k = key.charCodeAt(i % key.length);
        const m = (c - k + 26) % 26 + 65;
        char = String.fromCharCode(m);
        i++;
      }
      
      dec += char;
    }
    return this.isDirect ? dec : dec.split("").reverse().join("");
  }
}
module.exports = VigenereCipheringMachine;
