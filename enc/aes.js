const CryptoJS = require("crypto-js");

class Aes {
    
    constructor(password, serialNo) {
        // 加密模式
        this.mode = CryptoJS.mode.CFB;
        this.padding = CryptoJS.pad.Pkcs7;
        this.key = CryptoJS.enc.Utf8.parse(password);
        this.iv = CryptoJS.enc.Utf8.parse(serialNo);
    }

    /**
     * 加密
     * @param {string} origin 原文本
     */
    encrypt(origin) {
        var encrypted = CryptoJS.AES.encrypt(origin, this.key, {
            iv: this.iv,
            mode: this.mode,
            padding: this.padding
        });
        return encrypted.toString();
    }

    /**
     * 解密
     * @param {string} encrypted 加密文本
     */
    decrypt(encrypted) {
        var decrypted = CryptoJS.AES.decrypt(encrypted, this.key, {
            iv: this.iv,
            mode: this.mode,
            padding: this.padding
        });
        return CryptoJS.enc.Utf8.stringify(decrypted);
    };
}

exports.Aes = Aes;
