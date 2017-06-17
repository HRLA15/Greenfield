const Sequelize = require('sequelize')
const db = require('../config')

const Hotel = db.define('hotel',{
  hotelName: Sequelize.ARRAY(Sequelize.STRING),
  hotelVoteCount: Sequelize.ARRAY(Sequelize.INTEGER),
  timestamps: false
})

Hotel.sync()

// Hotel.sync({ force: true })

module.exports = Hotel