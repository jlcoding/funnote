const Db = require('./db')
const config = require('./../core/config')
const db = new Db(config.dbPath, 'jl', 'jl')
db.test()