const Sequelize = require('sequelize')
const db = require('../config')


const Users = db.define('users',{
  ID: Sequelize.INTEGER,
  USER_NAME: Sequelize.STRING,
  PW: Sequelize.STRING,
  EMAIL: Sequelize.STRING,
  PRO_PIC: Sequelize.STRING,
  UPCOMING_TRIPS: Sequelize.STRING[],
  RESOLVED_TRIPS: Sequelize.STRING[],
  FIRST_NAME: Sequelize.STRING,
  LAST_NAME: Sequelize.STRING,
  FRIENDS:Sequelize.STRING[]
})

Users.sync()

module.exports = Users