const Sequelize = require('sequelize')
// const config = require('../config')


const db = new Sequelize("postgres://hnsciryi:KxVLjMQb9wglCm35-5LybTjwOHhwxCoZ@pellefant.db.elephantsql.com:5432/hnsciryi")
//new Sequelize connect to elephant sql server and then 
db.authenticate()
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch((err) => {
    console.log('Error connecting: ', err)
  })

module.exports = db

const Hotel = require('./models/hotelModel');
const Trip = require('./models/tripModel');
const User = require('./models/userModel');

// Trip to User M:M associations
// stored in the same-name join table: 'usersTrips'
// the 'through' property is require in 'belongsToMany Associations
// aliased differently in each model

User.belongsToMany(Trip, { as: 'trips', through: 'usersTrips' });
Trip.belongsToMany(User, { as: 'users', through: 'usersTrips' });


// Users can have many friend Users
// I will alias the association

User.belongsTo(User, { as: 'userFriends' });

// Trip has a 1:M association with Hotels
// this will put a foreign key for tripId in the Hotel model
// and give Hotel .setTrip() and .getTrip() instance methods
Hotel.belongsTo(Trip);

// this will give Trip the magic methods for addHotel, etc.
// but we already have a foreign key for tripId in the Hotel model, so it will maintain
// the 1:m relationship
Trip.hasMany(Hotel);
