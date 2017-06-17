const Sequelize = require('sequelize')
// const config = require('../config')

const db = new Sequelize("postgres://bapopmql:Pn5QUujsA6QYomJ_bljMEoiHYXW8sm52@pellefant.db.elephantsql.com:5432/bapopmql")
//new Sequelize connect to elephant sql server and then 
db.authenticate()
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch((err) => {
    console.log('Error connecting: ', err)
  })

module.exports = db
