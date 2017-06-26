const Sequelize = require('sequelize')
require('dotenv').config();

const db = new Sequelize("postgres://xpgjkkim:v9zfKQFAxRHvgBtRDRLQpB2qjt0DSm5d@stampy.db.elephantsql.com:5432/xpgjkkim", {
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
