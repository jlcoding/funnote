const Sequelize = require('sequelize')

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("notes", {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      createTime: DataTypes.DATE,
      lastUpdateTime: DataTypes.DATE
    })
  }