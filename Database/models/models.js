const Sequelize = require('sequelize');
const db = require('../config');

/*////////////////////////////////////////////////////////////////////////////////

TABLES
//////////////////////////////////////////////////////////////////////////////////*/
const Hotel = db.define('hotel',{
  hotelName: Sequelize.ARRAY(Sequelize.STRING),
  hotelVoteCount: Sequelize.ARRAY(Sequelize.INTEGER),
}, {
  timestamps: false,
})

const Trip = db.define('trips',{
  title: Sequelize.STRING,
  destination: Sequelize.STRING,
  hotelTrips: Sequelize.ARRAY(Sequelize.STRING),
  activities: Sequelize.ARRAY(Sequelize.STRING),
  startDate: Sequelize.DATEONLY,
  endDate: Sequelize.DATEONLY,
  isCompleted: Sequelize.BOOLEAN,
}, {
  timestamps: false,
})

const User = db.define('users',{
  accessToken: Sequelize.STRING,
  email: Sequelize.STRING,
  proPic: Sequelize.STRING,
  upcomingTrips: Sequelize.ARRAY(Sequelize.STRING),
  resolvedTrips: Sequelize.ARRAY(Sequelize.STRING),
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  friends:Sequelize.ARRAY(Sequelize.STRING),
}, {
  timestamps: false,
})

//JOIN TABLE OF USERS AND TRIPS

const UsersTrips = db.define('usersTrips',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  timestamps: false,
})


/*////////////////////////////////////////////////////////////////////////////////

RELATIONSHIPS
//////////////////////////////////////////////////////////////////////////////////*/


// // Trip to User M:M associations
// // stored in the same-name join table: 'usersTrips'
// // the 'through' property is require in 'belongsToMany Associations

User.belongsToMany(Trip, { through: UsersTrips });
Trip.belongsToMany(User, { through: UsersTrips });



// // Users can have many friend Users
// // I will alias the association

User.belongsTo(User, { as: 'userFriends' });

// // Trip has a 1:M association with Hotels
// // this will put a foreign key for tripId in the Hotel model
// // and give Hotel .setTrip() and .getTrip() instance methods

Trip.hasMany(Hotel);
Hotel.belongsTo(Trip);

// this will give Trip the magic methods for addHotel, etc.
// but we already have a foreign key for tripId in the Hotel model, so it will maintain
// the 1:m relationship

/*////////////////////////////////////////////////////////////////////////////////

SYNC
//////////////////////////////////////////////////////////////////////////////////*/

User.sync()
Trip.sync()
UsersTrips.sync()
Hotel.sync()

module.exports = {
  User,
  Trip,
  UsersTrips,
  Hotel
}