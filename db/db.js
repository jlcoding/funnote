const Sequelize = require('sequelize')
const Config = require('./../core/config')
const Op = Sequelize.Op
class Db {


  constructor() {
    this.sequelize = new Sequelize('funnote', '', '', {
      dialect: 'sqlite',
      operatorsAliases: { $and: Op.and },
      // sqlite 的存储引擎
      // - 默认值 ':memory:'
      storage: Config.dbPath
    })
  }

  test() {
    // console.log('come')

    // this.sequelize.sync();
    const Note = this.sequelize.import('./models/notes.js');

    // Note.create({
    //   name: 'XiaoMing',
    //   password: '1234567890'
    // }).then(function (result) {
    //   console.log('inserted XiaoMing ok');
    // }).catch(function (err) {
    //   console.log('inserted XiaoMing error');
    //   console.log(err.message);
    // });

    const data = Note.findAll().then(function(result) {
      console.log(result[0].dataValues)
    }) 
    

  }

}

module.exports = Db