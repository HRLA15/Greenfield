const Sequelize = require('sequelize')
const db = require('../config')

const Hotel = db.define('hotel',{
  ID: Sequelize.INTEGER,
  H_NAME: Sequelize.string[],
  H_Count: Sequelize.integer[],
  P_ID: Sequelize.string
})

Hotel.sync()

module.exports = Hotel