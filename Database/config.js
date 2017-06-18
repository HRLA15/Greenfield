const Sequelize = require('sequelize')

const db = new Sequelize("postgres://hnsciryi:KxVLjMQb9wglCm35-5LybTjwOHhwxCoZ@pellefant.db.elephantsql.com:5432/hnsciryi", {
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
