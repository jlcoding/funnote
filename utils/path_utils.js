
class PathUtils {
    static buildPath(type, id) {
        return type + '-' + id;
    }
}

module.exports = PathUtils;