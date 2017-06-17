const Sequelize = require('sequelize')
const db = require('../config')


const Users = db.define('users',{
  accessToken: Sequelize.STRING,
  email: Sequelize.STRING,
  proPicC: Sequelize.STRING,
  upcomingTrips: Sequelize.ARRAY(Sequelize.STRING),
  resolvedTrips: Sequelize.ARRAY(Sequelize.STRING),
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  friends:Sequelize.ARRAY(Sequelize.STRING),
  timestamps: false
})

Users.sync()

// Users.sync({ force: true })

module.exports = Users