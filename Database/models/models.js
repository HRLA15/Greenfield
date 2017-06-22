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
    allowNull: false,
  }
}, {
  timestamps: false,
})

const HotelVote = db.define('hotelvote', {
  // hotelId: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // hotelName: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
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
    allowNull:false,
  },
  // status: {
  //   type: Sequelize.INTEGER,
  //   allowNull:false,
  // },
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  isCompleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  }
  // hotelTrips: Sequelize.ARRAY(Sequelize.STRING),
  // activities: Sequelize.ARRAY(Sequelize.STRING),
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
  id_Token: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
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

const UserTrip = db.define('userstrip',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
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



/*////////////////////////////////////////////////////////////////////////////////

RELATIONSHIPS
//////////////////////////////////////////////////////////////////////////////////*/

User.belongsToMany(Trip, { through: UserTrip });
Trip.belongsToMany(User, { through: UserTrip });

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


Hotel.hasMany(HotelVote);
HotelVote.belongsTo(Hotel);

// User.hasMany(UserCompletedTrip)
// UserCompletedTrip.belongsTo(User);

// User.hasMany(UserPendingTrip)
// UserPendingTrip.belongsTo(User);

// User.hasMany(UserUpcomingTrip)
// UserUpcomingTrip.belongsTo(User);


// 1:M relationship with User and Friend
// // Users can have many friend Users
// // I will alias the association

// // Trip to User M:M associations
// // stored in the same-name join table: 'usersTrips'
// // the 'through' property is require in 'belongsToMany Associations



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

// User.belongsToMany(User, {
//     as: 'Friends',
//     foreignKey: 'FriendId',
//     through: 'friends'
// })

// // Trip has a 1:M association with Hotels
// // this will put a foreign key for tripId in the Hotel model
// // and give Hotel .setTrip() and .getTrip() instance methods

// this will give Trip the magic methods for addHotel, etc.
// but we already have a foreign key for tripId in the Hotel model, so it will maintain
// the 1:m relationship

// 1:1 Relationship with Friend and ProfilePic
// Friend.hasOne(ProfilePic);
// ProfilePic.belongsTo(Friend);

// // 1:M Relationship between Friend and UserUpcomingTrip

// Friend.hasMany(UserUpcomingTrip);
// UserUpcomingTrip.belongsTo(Friend);

// // 1:M Relationship between Friend and UserCompletedTrip

// Friend.hasMany(UserCompletedTrip);
// UserCompletedTrip.belongsTo(Friend);

// 1:M Relationship between Trip and Activity



/*////////////////////////////////////////////////////////////////////////////////

SYNC
//////////////////////////////////////////////////////////////////////////////////*/

User.sync();
Trip.sync();
UserTrip.sync();
Hotel.sync();
Activity.sync();
HotelVote.sync();
// Friend.sync();
// UserUpcoming.sync();
// UserPending.sync();
// UserCompleted.sync();
// ProfilePic.sync();
// UserCompletedTrip.sync();
// UserUpcomingTrip.sync();
// UserPendingTrip.sync();

// User.sync({force: true});
// Trip.sync({force: true});
// UserTrip.sync({force: true});
// Hotel.sync({force: true});
// Activity.sync({force: true});
// HotelVote.sync({force: true});
// Friend.sync({force: true});
// UserCompletedTrip.sync({force: true});
// UserUpcomingTrip.sync({force: true});
// UserPendingTrip.sync({force: true});
// ProfilePic.sync({force: true});
// UserUpcoming.sync({force: true});
// UserPending.sync({force: true});
// UserCompleted.sync({force: true});

module.exports = {
  User,
  Trip,
  UserTrip,
  Hotel,
  // ProfilePic,
  // UserCompletedTrip,
  // UserUpcomingTrip,
  Activity,
  HotelVote,
  // UserPendingTrip,
  // Friend
}

// module.exports.User = User;
// module.exports.Trip = Trip;
// module.exports.UserTrip = UserTrip;
// module.exports.Hotel = Hotel;
// module.exports.ProfilePic = ProfilePic;
// module.exports.UserCompletedTrip = UserCompletedTrip;
// module.exports.UserUpcomingTrip = UserUpcomingTrip;
// module.exports.Activity = Activity;
// module.exports.HotelVote = HotelVote;
