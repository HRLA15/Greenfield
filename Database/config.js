const Sequelize = require('sequelize')
require('dotenv').config();

const db = new Sequelize(process.env.POSTGRES_URL, {
  pool: {
    min: 0,
    max: 3,
    idle: 10000
  }
});

db.authenticate()
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch((err) => {
    console.log('Error connecting: ', err)
  })



module.exports = db;
