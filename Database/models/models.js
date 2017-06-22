// const Sequelize = require('sequelize');
// const db = require('../config');

// /*////////////////////////////////////////////////////////////////////////////////

// TABLES
// //////////////////////////////////////////////////////////////////////////////////*/
// const Hotel = db.define('hotel',{
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   address: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   latitude: {
//     type: Sequelize.FLOAT,
//     allowNull: false,
//   },
//   longitude: {
//     type: Sequelize.FLOAT,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
// })

// const HotelVote = db.define('hotelvote', {
//   hotelId: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
// })

// const Trip = db.define('trip',{
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   destination: {
//     type: Sequelize.STRING,
//     allowNull:false,
//   },
//   startDate: {
//     type: Sequelize.DATEONLY,
//     allowNull: false,
//   },
//   endDate: {
//     type: Sequelize.DATEONLY,
//     allowNull: false,
//   },
//   isCompleted: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//   }
//   // hotelTrips: Sequelize.ARRAY(Sequelize.STRING),
//   // activities: Sequelize.ARRAY(Sequelize.STRING),
// }, {
//   timestamps: false,
// })

// const Activity = db.define('activity', {
//   name: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   address: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   latitude: {
//     type: Sequelize.FLOAT,
//     allowNull: false,
//   },
//   longitude: {
//     type: Sequelize.FLOAT,
//     allowNull: false,
//   },
// }) 

// const User = db.define('user',{
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     unique: true,
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   accessToken: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },

//   // friends:Sequelize.ARRAY(Sequelize.STRING),
// }, {
//   timestamps: false,
// })

// const UserUpcomingTrip = db.define('userupcomingtrip', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     unique: true,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   }
// })

// const UserPendingTrip = db.define('userpendingtrip', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     unique: true,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   }
// }, {
//   timestamps: false,
// })

// const UserCompletedTrip = db.define('usercompletedtrip', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     unique: true,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   }
// }, {
//   timestamps: false,
// })

// const ProfilePic = db.define('profilepic', {
//   url: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
// });

// const Friend = db.define('friend', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     unique: true,
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   accessToken: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
// })

// //JOIN TABLE OF USERS AND TRIPS

// const UserTrip = db.define('userstrip',{
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   }
// }, {
//   timestamps: false,
// })

// // //Many to Many relationship with same USER table

// // const UserFriend = db.define('userfriend', {
// //   id: {
// //     type: Sequelize.INTEGER,
// //     primaryKey: true,
// //     autoIncrement: true
// //   }
// // }, {
// //   timestamps: false,
// // })



// /*////////////////////////////////////////////////////////////////////////////////

// RELATIONSHIPS
// //////////////////////////////////////////////////////////////////////////////////*/


// // // Trip to User M:M associations
// // // stored in the same-name join table: 'usersTrips'
// // // the 'through' property is require in 'belongsToMany Associations

// User.belongsToMany(Trip, { through: UserTrip });
// Trip.belongsToMany(User, { through: UserTrip });



// // // Users can have many friend Users
// // // I will alias the association

// // User.belongsTo(User, { as: 'userFriends' });

// // User.belongsToMany(User, {
// //     as: 'Friends',
// //     foreignKey: 'FriendId',
// //     through: 'friends'
// // })

// // // Trip has a 1:M association with Hotels
// // // this will put a foreign key for tripId in the Hotel model
// // // and give Hotel .setTrip() and .getTrip() instance methods

// Trip.hasMany(Hotel);
// Hotel.belongsTo(Trip);

// // this will give Trip the magic methods for addHotel, etc.
// // but we already have a foreign key for tripId in the Hotel model, so it will maintain
// // the 1:m relationship


// // 1:1 Relationship with User and ProfilePic
// User.hasOne(ProfilePic);
// ProfilePic.belongsTo(User);

// // 1:1 Relationship with Friend and ProfilePic
// Friend.hasOne(ProfilePic);
// ProfilePic.belongsTo(Friend);

// // 1:M Relationship between User and UserUpcomingTrip

// User.hasMany(UserUpcomingTrip);
// UserUpcomingTrip.belongsTo(User);

// // 1:M Relationship between User and UserCompletedTrip

// User.hasMany(UserCompletedTrip);
// UserCompletedTrip.belongsTo(User);

// // // 1:M Relationship between Friend and UserUpcomingTrip

// // Friend.hasMany(UserUpcomingTrip);
// // UserUpcomingTrip.belongsTo(Friend);

// // // 1:M Relationship between Friend and UserCompletedTrip

// // Friend.hasMany(UserCompletedTrip);
// // UserCompletedTrip.belongsTo(Friend);

// // 1:M Relationship between User and UserPendingTrip

// User.hasMany(UserPendingTrip);
// UserPendingTrip.belongsTo(User);

// // 1:M Relationship between Trip and Activity

// Trip.hasMany(Activity);
// Activity.belongsTo(Trip);

// // 1:M relationship with User and HotelVote. HotelVote is associated with Hotel thru the hotelId
// User.hasOne(HotelVote);
// HotelVote.belongsTo(User);


// // 1:M relationship with User and Friend
// User.hasMany(Friend);
// Friend.belongsTo(User);

// /*////////////////////////////////////////////////////////////////////////////////

// SYNC
// //////////////////////////////////////////////////////////////////////////////////*/

// User.sync();
// Trip.sync();
// UserTrip.sync();
// Hotel.sync();
// ProfilePic.sync();
// UserCompletedTrip.sync();
// UserUpcomingTrip.sync();
// Activity.sync();
// HotelVote.sync();
// UserPendingTrip.sync();
// Friend.sync();

// module.exports = {
//   User,
//   Trip,
//   UserTrip,
//   Hotel,
//   ProfilePic,
//   UserCompletedTrip,
//   UserUpcomingTrip,
//   Activity,
//   HotelVote,
//   UserPendingTrip,
//   Friend
// }

// // module.exports.User = User;
// // module.exports.Trip = Trip;
// // module.exports.UserTrip = UserTrip;
// // module.exports.Hotel = Hotel;
// // module.exports.ProfilePic = ProfilePic;
// // module.exports.UserCompletedTrip = UserCompletedTrip;
// // module.exports.UserUpcomingTrip = UserUpcomingTrip;
// // module.exports.Activity = Activity;
// // module.exports.HotelVote = HotelVote;