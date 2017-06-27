const Sequelize = require('sequelize')
require('dotenv').config();
const db = new Sequelize("postgres://hcpplyat:3O3z-F8Q1hWyrdNTZnVX5JPVOXamGg9l@stampy.db.elephantsql.com:5432/hcpplyat", {
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