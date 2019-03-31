const path = require("path");
const Config = {
    dbPath: path.join(__dirname, "../db"),
    password: "123",
    key: "abc",
    Cos: {
        AppId: 1251185445,
        Bucket: 'funnote-1251185445',
        Region: 'ap-guangzhou',
        SecretId: 'AKIDhEsHRQrgw0pWigrvCjeKlwrFNN8ejufA',
        SecretKey: 'SfOr55uUr30vb1DAsKPEwQecLp7HJH0S'
    }
}

module.exports = Config