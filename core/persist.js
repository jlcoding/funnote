const fs = require("fs")
const Aes = require("./../enc/aes").Aes;
const config = require("./config")
const path = require("path")

/**
 * 持久化
 */
class Persist {

    saveData(name, data) {
        const aes = new Aes();
        data = aes.encrypt(JSON.stringify(data));
        let path = this.resolvePath(name);
        fs.writeFile(path, data, function(err) {
            console.error(err);
        });
    }

    readData(name) {
        let path = this.resolvePath(name);
        let data = fs.readFileSync(path);
        const aes = new Aes();
        data = aes.decrypt(data.toString());
        return JSON.parse(data);
    }

    list() {
        let files = fs.readdirSync(config.dbPath);
        console.log(files);
        return files;
    }

    resolvePath(name) {
        return path.join(config.dbPath, name);
    }
}

exports.Persist = Persist;