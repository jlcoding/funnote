let cacheContext = {}

let cacheManager = {

    set: function(key, value) {
        cacheContext[key] = value;
    },

    get: function(key) {
        return cacheContext[key];
    },

    remove: function(key) {
        delete cacheContext[key];
    }
}

module.exports = cacheManager;