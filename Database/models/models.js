const Sequelize = require('sequelize');
const db = require('../config');
/*////////////////////////////////////////////////////////////////////////////////
TABLES
//////////////////////////////////////////////////////////////////////////////////*/
const Hotel = db.define('hotel',{
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: true,
  }
}, {
  timestamps: false,
})
const HotelVote = db.define('hotelvote', {
  vote: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
}, {
  timestamps: false,
})
const Trip = db.define('trip',{
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destination: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  currentDate: {
  type: Sequelize.DATEONLY,
  allowNull: false,
  defaultValue: Sequelize.NOW
  },
}, {
  timestamps: false,
})
const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true,
  }
}, {
  timestamps: false,
}) 
const User = db.define('user',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idToken: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
})

// const UserUpcomingTrip = db.define('userupcomingtrip', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     allowNull: false
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   }
// }, {
//   timestamps: false,
// })
// const UserPendingTrip = db.define('userpendingtrip', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     allowNull: false
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
//     allowNull: false
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
//   id_Token: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
// })


//JOIN TABLE OF USERS AND TRIPS
const UserTrip = db.define('usertrip',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  invited: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,    
    allowNull: false
  },
  userConfirmed: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,    
    allowNull: false
  },
  participantConfirmed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
}, {
  timestamps: false,
})
const UserFriend = db.define('userfriend', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
}, {
  timestamps: false,
})

// const UserUpcoming = db.define('userupcoming', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   }
// }, {
//   timestamps: false,
// })
// const UserCompleted = db.define('usercompleted', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   }
// }, {
//   timestamps: false,
// })
// const UserPending = db.define('userpending', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   }, 
//   attending: {
//     type: Sequelize.BOOLEAN,
//     allowNull: false,
//   },
// }, {
//   timestamps: false,
// })


// //Many to Many relationship with same USER table
// const UserFriend = db.define('userfriend', {
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
// User.hasMany(UserCompletedTrip)
// UserCompletedTrip.belongsTo(User);
// User.hasMany(UserPendingTrip)
// UserPendingTrip.belongsTo(User);
// User.hasMany(UserUpcomingTrip)
// UserUpcomingTrip.belongsTo(User);

// 1:M relationship with User and Friend
// // Users can have many friend Users
// // I will alias the association
// RELATIONSHIPS
// //////////////////////////////////////////////////////////////////////////////////*/
// // // Trip to User M:M associations

UserTrip.belongsTo(Trip, { through: UserTrip, foreignKey: {name: 'tripId', unique: false }});
UserTrip.belongsTo(User, { through: UserTrip, foreignKey: {name: 'userId', unique: false }});


// THERE IS A BUG WITH SEQUELIZE WHEN YOU HAVE TO HAVE MORE THAN 2 FOREIGN KEYS IN A TABLE, 
//it says that the foreign keys have to be unique 
//Link: https://github.com/sequelize/sequelize/issues/3220 ... work around up top
      // THIS IS THE ORIGINAL CODE THAT SHOULD WORK, but when adding participants/friends to the usertrip table it gets and error 
// User.belongsToMany(Trip, { through: UserTrip, foreignKey: {name: 'userId', unique: false });
// Trip.belongsToMany(User, { through: UserTrip, foreignKey: 'tripId', unique: false });



// User.belongsToMany(UserUpcomingTrip, { through: UserUpcoming});
// UserUpcomingTrip.belongsToMany(User, { through: UserUpcoming });
// User.belongsToMany(UserPendingTrip, { through: UserPending});
// UserPendingTrip.belongsToMany(User, { through: UserPending});
// User.belongsToMany(UserCompletedTrip, { through: UserCompleted });
// UserCompletedTrip.belongsToMany(User, { through: UserCompleted});

Trip.hasMany(Hotel);
Hotel.belongsTo(Trip);
Trip.hasMany(Activity);
Activity.belongsTo(Trip);
User.hasOne(HotelVote);
HotelVote.belongsTo(User);

HotelVote.belongsTo(User, {as: 'friendvote', foreignKey: {name: 'friendId', unique: false}})


Hotel.hasMany(HotelVote);
HotelVote.belongsTo(Hotel);

User.belongsToMany(User, {as: 'friend', through: UserFriend, unique: false})

Hotel.hasMany(HotelVote);
HotelVote.belongsTo(Hotel);
User.belongsToMany(User, {as: 'friend', through: UserFriend})

UserTrip.belongsTo(User, {as: 'participant', through: UserTrip, foreignKey: {name: 'participantId', unique: false }});
// User.hasMany(UserCompletedTrip)
// UserCompletedTrip.belongsTo(User);
// User.hasMany(UserPendingTrip)
// UserPendingTrip.belongsTo(User);
// User.hasMany(UserUpcomingTrip)
// UserUpcomingTrip.belongsTo(User);
// 1:M relationship with User and Friend
// // Users can have many friend Users
// // I will alias the association
// // // stored in the same-name join table: 'usersTrips'
// // // the 'through' property is require in 'belongsToMany Associations
// Friend.belongsToMany(Trip, {through: UserTrip });
// Trip.belongsToMany(Friend, {through: UserTrip });
// 1:1 Relationship with User and ProfilePic
// User.hasOne(ProfilePic);
// ProfilePic.belongsTo(User);
// // 1:M Relationship between User and UserUpcomingTrip
// User.hasMany(Friend);
// Friend.belongsTo(User);
// User.hasMany(UserUpcomingTrip);
// UserUpcomingTrip.belongsTo(User);
// // 1:M Relationship between User and UserCompletedTrip
// User.hasMany(UserCompletedTrip);
// UserCompletedTrip.belongsTo(User);
// // 1:M Relationship between User and UserPendingTrip
// User.hasMany(UserPendingTrip);
// UserPendingTrip.belongsTo(User);
// 1:M relationship with User and HotelVote. HotelVote is associated with Hotel thru the hotelId
// User.belongsTo(User, { as: 'userFriends' });
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
// this will give Trip the magic methods for addHotel, etc.
// but we already have a foreign key for tripId in the Hotel model, so it will maintain
// the 1:m relationship
// 1:1 Relationship with Friend and ProfilePic
// Friend.hasOne(ProfilePic);
// ProfilePic.belongsTo(Friend);
// // // 1:M Relationship between Friend and UserUpcomingTrip
// // Friend.hasMany(UserUpcomingTrip);
// // UserUpcomingTrip.belongsTo(Friend);
// // // 1:M Relationship between Friend and UserCompletedTrip
// // Friend.hasMany(UserCompletedTrip);
// // UserCompletedTrip.belongsTo(Friend);
// 1:M Relationship between Trip and Activity
// /*////////////////////////////////////////////////////////////////////////////////
// SYNC
// //////////////////////////////////////////////////////////////////////////////////*/
User.sync();
Trip.sync();
UserTrip.sync();
Hotel.sync();
Activity.sync();
HotelVote.sync();
UserFriend.sync();


// User.sync({force: true});
// Trip.sync({force: true});
// UserTrip.sync({force: true});
// Hotel.sync({force: true});
// Activity.sync({force: true});
// HotelVote.sync({force: true});
// UserFriend.sync({force: true});

module.exports = {
  User,
  Trip,
  UserTrip,
  Hotel,
  UserFriend,
  Activity,
  HotelVote
}
