const Sequelize = require('sequelize')
require('dotenv').config();

const db = new Sequelize("postgres://nihauxdn:IrDRLy_6OINH_e87Pn7DD5j5O5tigHtk@stampy.db.elephantsql.com:5432/nihauxdn", {
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
