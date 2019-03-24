const fs = require("fs")
const Aes = require("./../enc/aes").Aes;

/**
 * 持久化
 */
class Persist {

    saveData(name, data) {
        const aes = new Aes('1234', 'abcd');
        data = aes.encrypt(data);
        console.log(aes.decrypt(data));
        fs.writeFile(name, data, function(err) {
            if (err) {
                return console.error(err);
            }
        });
    }
}

let data = {
    name: 'liu',
    age: 25,
    hobby: 'watch tv',
    abc: 'efg'
}

let persist = new Persist();
persist.saveData('testing', JSON.stringify(data));