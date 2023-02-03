const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
  Post: sequelize.define('post', {
    id: {
      
    }
  })
}